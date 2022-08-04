import img from "../../../image/Rectangle 19.png";
import "./EventItem.css";

export default function EventItem() {
  return (
    <div className="event-item">
      <div className="event-item-img">
        <img src={img} alt="#" />
        <div className="event-item-img-date">Dec 20, 1999</div>
      </div>
      <div className="event-item-text">
        <div className="event-item-text-title">
          Lorem Ipsum is simply dummy text of the printing
        </div>
        <div className="event-item-text-content">
          <div><i className="fa-solid fa-clock"></i>23:28 PM GMT +7</div>
          <div><i className="fa-solid fa-location-dot"></i>120 Sương Nguyệt Anh</div>
          <div><i className="fa fa-ticket" aria-hidden="true"></i>100.000đ</div> 
        </div>
      </div>
    </div>
  );
}
