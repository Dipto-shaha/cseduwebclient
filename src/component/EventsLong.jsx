import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";

const EventsLong = ({ events }) => {
  return (
    <div key={events.id} className="px-5 py-2 shadow-lg flex">
      <div className="w-1/3">
        <img
          src={events.photo}
          className="w-full h-[300px] rounded-lg"
          alt="Event Photo"
        />
      </div>
      <div className="w-2/3 px-4 py-2">
        <p>{events.date}</p>
        <p className="text-2xl font-semibold">{events.event_title}</p>
        <p>{events.description}</p>
        <p>Time: {events.date_and_time}</p>
        <p className="flex items-center space-x-4 ">
          <FaLocationDot /> {events.venue}
        </p>
        <button className="text-right">Register</button>
      </div>
    </div>
  );
};

EventsLong.propTypes = {
  events: PropTypes.shape({
    id: PropTypes.string.isRequired,
    event_title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
    date_and_time: PropTypes.string.isRequired,
    photo: PropTypes.string,
  }).isRequired,
};

export default EventsLong;
