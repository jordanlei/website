import Img from "./lightbox-components/Modal";
import style from "../styles/gallery.module.css";

export default function Gallery({ images }) {
  const padding = 20;

  const objects = images.map((row, rowIndex) => {
    const denom = row.reduce((a, b) => a + b.width / b.height, 0);

    const rowItems = row.map((i, imgIndex) => {
      const src = i.large_file ?? i.file;
      const width = (i.width / i.height / denom) * (98 - padding);

      return (
        <Img
          key={imgIndex}
          className={style.image}
          small={i.file}
          large={src}
          alt={
            <span className={style.info}>
              <h3>{i.caption}</h3>
              <h4>{i.subcaption}</h4>
            </span>
          }
          width={`${width}vw`}
          height={`${(width / i.width) * i.height}vw`}
        />
      );
    });

    return <div key={rowIndex}>{rowItems}</div>;
  });

  return (
    <div
      className={style.gallery}
      style={{
        paddingLeft: `${padding / 2}vw`,
        paddingRight: `${padding / 2}vw`,
      }}
    >
      {objects}
    </div>
  );
}
