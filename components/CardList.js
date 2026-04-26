import Image from "next/image";

const cardImageStyle = {
  display: "block",
  width: "100px",
  height: "auto",
  paddingBottom: "10px",
};

/**
 * Shared card list used by Education and Experience sections.
 * Each item: { image: string, alt: string, caption: ReactNode }
 */
export default function CardList({ items }) {
  return (
    <div className="flex-row" style={{ gap: "20px" }}>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex-row frostedCard"
          style={{ width: "100%", marginBottom: "15px", alignItems: "flex-start" }}
        >
          <div style={{ flex: "0 0 130px", marginTop: "5px" }}>
            <Image
              src={item.image}
              width={120}
              height={120}
              style={cardImageStyle}
              alt={item.alt ?? ""}
            />
          </div>
          <div style={{ flex: "1", paddingLeft: "20px" }}>{item.caption}</div>
        </div>
      ))}
    </div>
  );
}
