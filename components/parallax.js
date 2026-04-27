import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Parallax({ items }) {
  const { name, background, backgrounddepth, layers } = items;
  const offsetTopRef = useRef(0);

  useEffect(() => {
    const el = document.getElementById(name);
    if (el) {
      offsetTopRef.current = el.offsetTop;
    }

    function handleScroll() {
      const topDistance = window.scrollY;
      const elementDistance = topDistance - offsetTopRef.current;
      const parallaxLayers = document.querySelectorAll(
        `[data-type='parallax-${name}']`
      );
      for (const layer of parallaxLayers) {
        const ydepth = layer.getAttribute("ydepth");
        const xdepth = layer.getAttribute("xdepth");
        const ymovement = -1 * (topDistance + elementDistance * ydepth);
        const xmovement = elementDistance * xdepth;
        layer.style.transform = `translate3d(${xmovement}px, ${ymovement}px, 0)`;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [name]);

  return (
    <div
      className="hero"
      style={{ position: "absolute", width: "100%", pointerEvents: "none" }}
    >
      <div id={name} style={{ position: "absolute", width: "100%", top: 0 }}>
        <div
          className="layer layer-bg"
          ydepth={backgrounddepth}
          data-type={`parallax-${name}`}
          style={{ background, zIndex: "-1" }}
        />
        {layers.map((layer, index) => (
          <div
            key={layer.image}
            className={`layer ${layer.name}`}
            xdepth={layer.xdepth}
            ydepth={layer.ydepth}
            data-type={`parallax-${name}`}
            style={{ zIndex: "-1" }}
          >
            <Image
              src={layer.image}
              alt=""
              fill
              style={{ objectFit: "cover", pointerEvents: "none" }}
              priority={index < 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
