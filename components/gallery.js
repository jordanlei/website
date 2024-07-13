import Img from "./lightbox-components/Modal";
import style from "../styles/gallery.module.css";

export default function Gallery({ images }) {
  var objects = [];

  images.map((row) => {
    var denom = row.reduce((a, b) => a + b.width / b.height, 0);
    var totalWidth = 0
    var rowobjects = []
    row.forEach((i) => {
      if (!i.large_file) {
        i.large_file = i.file;
      }
      var width = (i.width / i.height / denom) * 100
      rowobjects.push(
            <Img className={style.image}
            small={i.file}
            large={i.large_file}
            alt={
              <span className={style.info}>
                <h3>{i.caption}</h3>
                <h4>{i.subcaption}</h4>
              </span>
            }
            width={"" + width + "%"}
            height={"" + width/i.width * i.height + "vw"}
            />   
      );
      totalWidth = totalWidth + width
    });

    objects.push(
    <div>
        {rowobjects}
    </div>
    )

  });

  var mobileobjects = [];

  images.map((row) => {
    row.forEach((i) => {
      if (!i.large_file) {
        i.large_file = i.file;
      }
      mobileobjects.push(
        <Img
          className={style.image}
          small={i.file}
          large={i.large_file}
          alt={
            <span className={style.info}>
              <h3>{i.caption}</h3>
              <h4>{i.subcaption}</h4>
            </span>
          }
          width={"100%"}
        />
      );
    });
  });

  return <div className={style.gallery}>
    {objects}
  </div>;
}
