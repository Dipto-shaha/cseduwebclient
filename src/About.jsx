import { useState } from "react";
import History from "./component/History";
import Mission from "./component/Mission";
import Banner from "./component/Banner";

const About = () => {
  const [option, setOption] = useState(0);

  return (
    <>
      <Banner
        title="History of the Department"
        activePage="About"
      />
      <div className="flex mx-10 space-y-5">
        <div className="w-4/5">{!option ? <History /> : <Mission />}</div>
        <div className="w-1/5 mx-10 flex flex-col items-start space-y-2">
          <p className="font-bold">About</p>
          <button
            onClick={() => setOption(0)}
            // className={`py-2 px-4 rounded-lg ${
            //    option === 0 ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
            // }`}
          >
            History
          </button>
          <button
            onClick={() => setOption(1)}
            // className={`py-2 px-4 rounded-lg ${
            //   option === 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
            // }`}
          >
            Mission & Vision
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
