import img from "../../../image/Rectangle 19.png";
import "./BlogItem.css";

export default function BlogItem() {
  return (
    <div className="item">
      <div className="item-img">
        <img src={img} alt="#" />
        <div className="item-img-date">Dec 20, 1999</div>
      </div>
      <div className="item-text">
        <div className="item-text-title">
          Lorem Ipsum is simply dummy text of the printing
        </div>
        <div className="item-text-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
    </div>
  );
}
