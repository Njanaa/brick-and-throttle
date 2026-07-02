export const BRICK_SIZE = { x: 0.4, y: 0.24, z: 0.4 };
export const GAP = 0.03;

export const BrickColor = {
  WHITE: '#f0f0f0',
  RED: '#e2231a',
  BLACK: '#1a1a1a',
  DARK_GREY: '#4a4a4a',
  TRANSPARENT: '#88ccee',
  PINK: '#ff33aa',
  GOLD: '#ffd700',
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
  6: BrickColor.PINK,
  7: BrickColor.GOLD,
};

export function generatePorsche911Bricks(): BrickData[] {
  const shapeMap: number[][] = [
    [0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0],
    [0,2,2,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,2,2,0],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,5,5,5,5,5,5,5,5,5,5,5,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,3,3,3,3,3,3,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,0,0],
  ];

  return createBricksFromMap(shapeMap, 34);
}

export function generateLamborghiniBricks(): BrickData[] {
  // A wedge shape profile for a Lamborghini (low front, high rear, open cabin, rear spoiler)
  const shapeMap: number[][] = [
    // Row 1 (wheels - gold hubs)
    [0,0,0,0,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,0,0,0,0,0],
    // Row 2 (wheel arches / gold rims)
    [0,6,6,3,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,7,7,0,0,0,6,6,0],
    // Row 3 (lower chassis - black)
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    // Row 4 (low wedge hood - pink panels)
    [0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,0],
    // Row 5 (low profile - rising slightly)
    [0,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,0,0,0],
    // Row 6 (cockpit line)
    [0,0,0,0,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0],
    // Row 7 (windshield slant)
    [0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0],
    // Row 8 (roof line / rear slope)
    [0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,6,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // Row 9 (rear deck)
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // Row 10 (rear spoiler struts)
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0],
    // Row 11 (rear spoiler top - black)
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,0,0,0],
  ];

  return createBricksFromMap(shapeMap, 500); // Shift seed for different velocity vectors
}

function createBricksFromMap(shapeMap: number[][], seedOffset: number): BrickData[] {
  const numCols = 40;
  const numRows = shapeMap.length;

  const getDepth = (col: number): number => (col >= 28 ? 10 : 8);

  const stepX = BRICK_SIZE.x + GAP;
  const stepY = BRICK_SIZE.y + GAP;
  const stepZ = BRICK_SIZE.z + GAP;

  const offsetX = (numCols * stepX) / 2;
  const offsetY = (numRows * stepY) / 2;
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

        const isEdgeZ = z === 0 || z === depth - 1;
        const isEmissive = isFirstInRow || isLastInRow || isEdgeZ;

        const px = col * stepX - offsetX;
        const py = row * stepY - offsetY;
        const pz = z * stepZ - offsetZ;

        const seed = id + seedOffset;
        const r1 = seededRandom(seed);
        const r2 = seededRandom(seed + 1);
        const r3 = seededRandom(seed + 2);
        const r5 = seededRandom(seed + 4);
        const r6 = seededRandom(seed + 5);
        const r7 = seededRandom(seed + 6);

        const magnitude = 8 + r1 * 7;
        const theta = r2 * Math.PI * 2;
        const phi = r3 * Math.PI;
        const vx = magnitude * Math.sin(phi) * Math.cos(theta);
        const vy = magnitude * Math.cos(phi) + 2;
        const vz = magnitude * Math.sin(phi) * Math.sin(theta);

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
