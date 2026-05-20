"use client";

import Image from "next/image";

const RATIO = 400 / 344;

export function LogoMark({ size = 60 }: { size?: number }) {
  const w = Math.round(size * RATIO);
  const h = size;

  return (
    <Image
      src="/images/logo-shield.png"
      alt="Sapphire Juris"
      width={w}
      height={h}
      style={{ flexShrink: 0, display: "block", objectFit: "contain" }}
      priority
    />
  );
}

export default LogoMark;
