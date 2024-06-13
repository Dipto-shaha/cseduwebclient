import { FaLocationDot } from "react-icons/fa6";

const EventCard = () => {
  return (
    <div className="px-5 py-2 shadow-lg">
      <img
        src="/Img/codesamurai.jpg"
        className="w-full h-[300px] rounded-lg"
      ></img>
      <p>29 Jul 2024</p>
      <p className="text-2xl font-semibold">
      Inter-University Hackathon 2024 in DU
      </p>
      <p>
        The body of the late US Rep. John Lewis on Sunday will make the final
        journey across the famous bridge in Selma, Alabama, where he helped lead
        a march for voting rights in 1965.
      </p>
      <p>Date: 23 Jul 2024</p>
      <p className="flex items-center space-x-4 "><FaLocationDot /> CSEDU, Auditorium
      </p>
      <button className="text-right">Register</button>
    </div>
  );
};

export default EventCard;
