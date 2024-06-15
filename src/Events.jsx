import EventsLong from "./component/EventsLong";
import useGetAllEvents from "./hook/Events/useGetAllEvents";

const Events = () => {
  const [events,] = useGetAllEvents();

  return (
    <div className="grid grid-cols-3 gap-10">
      {events.map((item) => {
        return <EventsLong news={item} key={item.id}></EventsLong>;
      })}
    </div>
  );
};

export default Events;
