import { useEffect, useRef } from "react";

export default function Parallax({ items, children }) {
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

      parallaxLayers.forEach((layer) => {
        const ydepth = layer.getAttribute("ydepth");
        const xdepth = layer.getAttribute("xdepth");
        const ymovement = -1 * (topDistance + elementDistance * ydepth);
        const xmovement = elementDistance * xdepth;
        layer.style.transform = `translate3d(${xmovement}px, ${ymovement}px, 0)`;
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [name]);

  return (
    <div className="hero">
      <div id={name} style={{ minHeight: "100vh" }}>
        <div
          className="layer layer-bg"
          ydepth={backgrounddepth}
          data-type={`parallax-${name}`}
          style={{ backgroundImage: background, zIndex: "-1" }}
        />
        {layers.map((layer, index) => (
          <div
            key={index}
            className={`layer ${layer.name}`}
            xdepth={layer.xdepth}
            ydepth={layer.ydepth}
            data-type={`parallax-${name}`}
            style={{ backgroundImage: `url(${layer.image})` }}
          />
        ))}
        {children}
      </div>
    </div>
  );
}
