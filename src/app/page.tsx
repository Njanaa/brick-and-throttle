"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroOverlay from "@/components/HeroOverlay";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import { useWindowScroll } from "@/hooks/useWindowScroll";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
  loading: () => (
    <div className="loading-screen">
      <p className="loading-text">LOADING...</p>
    </div>
  ),
});

export default function Home() {
  const scrollOffset = useWindowScroll();

  return (
    <>
      <Header />

      {/* 3D Scene - fixed behind everything */}
      <Scene scrollOffset={scrollOffset} />

      {/* Scrollable content layered on top of the 3D canvas */}
      <div style={{ position: "relative", zIndex: 1, pointerEvents: "none" }}>
        {/* Hero section - transparent so 3D scene shows through */}
        <HeroOverlay />

        {/* Products section - with solid background */}
        <div
          style={{
            pointerEvents: "auto",
            background: "#0a0a0f",
            position: "relative",
          }}
        >
          <FeaturedProducts />
          <Footer />
        </div>
      </div>
    </>
  );
}
