import { Row, Col } from "reactstrap";
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
    <Row>
      {items.map((item, index) => (
        <Row
          key={index}
          className="frostedCard"
          style={{ marginLeft: "5px", zIndex: "-1" }}
        >
          <Col md={3}>
            <Image
              src={item.image}
              width={100}
              height={100}
              style={cardImageStyle}
              alt={item.alt ?? ""}
            />
          </Col>
          <Col md={9}>{item.caption}</Col>
        </Row>
      ))}
    </Row>
  );
}
