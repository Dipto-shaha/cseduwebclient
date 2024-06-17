import { useParams } from "react-router-dom";
import useGetSingleEvents from "./hook/Events/useGetSingleEvents";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "antd";

const EventsDetails = () => {
  const { id } = useParams();
  const [events] = useGetSingleEvents(id);
  return (
    <>
      <div className="px-5 py-2 shadow-lg w-full ">
        <div className="pr-4">
          <img
            src={events?.photo}
            className="rounded-lg w-full max-h-[500px] "
            alt="Events Photo"
          />
        </div>
        <div className="p-2 mx-10">
          <p>{events.date}</p>
          <p className="text-2xl font-semibold">{events.event_title}</p>
          <p>{events.description}</p>
          <p>Time: {events.date_and_time}</p>
          <p className="flex items-center space-x-4 ">
            <FaLocationDot /> {events.venue}
          </p>
          <Button onclick> Register</Button>
        </div>
      </div>
    </>
  );
};

export default EventsDetails;
