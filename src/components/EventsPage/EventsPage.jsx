import EventItem from "./EventItem/EventItem";
import "./event.css";
import img from "../../image/Group 7.png";

export default function EventsPage() {
  return (
    <>
      <div className="events-page-title">
        <img src={img} alt="#" />
      </div>
      <div className="events-page-arrow">
        <div>
          <i class="arrow left"></i>
        </div>
        <div>
          <i class="arrow right"></i>
        </div>
      </div>
      <div className="events-page-content">
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
      </div>
    </>
  );
}
