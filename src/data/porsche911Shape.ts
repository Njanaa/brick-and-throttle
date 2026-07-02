export const BRICK_SIZE = { x: 0.4, y: 0.24, z: 0.4 };
export const GAP = 0.03;

export const BrickColor = {
  WHITE: '#f0f0f0',
  RED: '#e2231a',
  BLACK: '#1a1a1a',
  DARK_GREY: '#4a4a4a',
  TRANSPARENT: '#88ccee',
} as const;

export interface BrickData {
  id: number;
  position: [number, number, number];
  color: string;
  isEmissive: boolean;
  velocity: [number, number, number];
  rotationSpeed: [number, number, number];
}

const seededRandom = (seed: number): number => {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
};

const COLOR_MAP: Record<number, string> = {
  1: BrickColor.WHITE,
  2: BrickColor.RED,
  3: BrickColor.BLACK,
  4: BrickColor.DARK_GREY,
  5: BrickColor.TRANSPARENT,
};

export function generatePorsche911Bricks(): BrickData[] {
  // Row 1 is bottom, Row 12 is top. Each number: 0=empty, 1=white, 2=red, 3=black, 4=dark_grey, 5=transparent
  const shapeMap: number[][] = [
    // Row 1 (bottom - wheels/ground)
    [0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0],
    // Row 2 (wheel arches)
    [0,2,2,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,2,2,0],
    // Row 3 (lower body - black chassis)
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    // Row 4 (accent stripe - red)
    [0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0],
    // Row 5 (main body lower)
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    // Row 6 (main body)
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
    // Row 7 (upper body / hood slope)
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
    // Row 8 (windshield lower)
    [0,0,0,0,0,0,0,0,0,0,1,1,5,5,5,5,5,5,5,5,5,5,5,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
    // Row 9 (windshield upper)
    [0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // Row 10 (roof)
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // Row 11 (rear wing)
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,3,3,3,3,3,3,0,0],
    // Row 12 (rear wing top)
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,0,0],
  ];

  const numCols = 40;
  const numRows = shapeMap.length; // 12

  // Determine extrusion depth per column: rear section (col >= 28) is wider
  const getDepth = (col: number): number => (col >= 28 ? 10 : 8);

  const stepX = BRICK_SIZE.x + GAP;
  const stepY = BRICK_SIZE.y + GAP;
  const stepZ = BRICK_SIZE.z + GAP;

  // Calculate centering offsets
  const offsetX = (numCols * stepX) / 2;
  const offsetY = (numRows * stepY) / 2;
  // Max depth is 10 for centering
  const maxDepth = 10;
  const offsetZ = (maxDepth * stepZ) / 2;

  const bricks: BrickData[] = [];
  let id = 0;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const cellValue = shapeMap[row][col];
      if (cellValue === 0) continue;

      const color = COLOR_MAP[cellValue] ?? BrickColor.WHITE;
      const depth = getDepth(col);

      for (let z = 0; z < depth; z++) {
        // Determine if this is an edge brick (first/last filled in row for this z-layer)
        // Edge in X: check if it's the first or last filled column in this row
        let isFirstInRow = true;
        for (let c = 0; c < col; c++) {
          if (shapeMap[row][c] !== 0) {
            isFirstInRow = false;
            break;
          }
        }
        let isLastInRow = true;
        for (let c = col + 1; c < numCols; c++) {
          if (shapeMap[row][c] !== 0) {
            isLastInRow = false;
            break;
          }
        }

        // Edge in Z: first or last z-layer
        const isEdgeZ = z === 0 || z === depth - 1;

        const isEmissive = isFirstInRow || isLastInRow || isEdgeZ;

        const px = col * stepX - offsetX;
        const py = row * stepY - offsetY;
        const pz = z * stepZ - offsetZ;

        // Deterministic random velocity
        const seed = id;
        const r1 = seededRandom(seed);
        const r2 = seededRandom(seed + 1);
        const r3 = seededRandom(seed + 2);
        const r4 = seededRandom(seed + 3);
        const r5 = seededRandom(seed + 4);
        const r6 = seededRandom(seed + 5);
        const r7 = seededRandom(seed + 6);
        const r8 = seededRandom(seed + 7);

        // Velocity: magnitude 8-15 in random direction, biased slightly upward
        const magnitude = 8 + r1 * 7;
        const theta = r2 * Math.PI * 2;
        const phi = r3 * Math.PI;
        const vx = magnitude * Math.sin(phi) * Math.cos(theta);
        const vy = magnitude * Math.cos(phi) + 2; // +2 upward bias
        const vz = magnitude * Math.sin(phi) * Math.sin(theta);

        // Rotation speed: random between -PI and PI on each axis
        const rx = (r5 - 0.5) * 2 * Math.PI;
        const ry = (r6 - 0.5) * 2 * Math.PI;
        const rz = (r7 - 0.5) * 2 * Math.PI;

        bricks.push({
          id,
          position: [px, py, pz],
          color,
          isEmissive,
          velocity: [vx, vy, vz],
          rotationSpeed: [rx, ry, rz],
        });

        id++;
      }
    }
  }

  return bricks;
}
