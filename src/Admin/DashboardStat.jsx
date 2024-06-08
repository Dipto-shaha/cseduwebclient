import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "./Hook/useAxiosSecure";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { AuthContest } from "./Context";
const COLORS = ["#FF6384", "#36A2EB", "#35c034"];
const DashboardStat = () => {
  const [countInfo, setCountInfo] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [charData, setChartData] = useState([]);
  const [landFillData, setlandFill] = useState([]);

  const { user } = useContext(AuthContest);
  const fetchInfo = async () => {
    try {
      const response = await axiosSecure.get("/admin/stat");
      setCountInfo(response.data.info);
      const res = await axiosSecure.get("/admin/roll/count");
      const data = res?.data?.userRoles;
      setChartData(
        Object.entries(data).map(([role, count], index) => ({
          name: role,
          value: count,
          color: COLORS[index % COLORS.length], // Assign a color from COLORS array based on index
        }))
      );
      console.log();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchDumInfo = async () => {
    try {
      const res = await axiosSecure.get(`/land/info/stat/${user._id}`);
      setlandFill(res.data);
      console.log();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (user.role == "System Admin") fetchInfo();
    else if (user.role == "Landfill Manager") fetchDumInfo();
  }, []);
  return (
    <>
      {user.role == "System Admin" && (
        <>
          <div className="mx-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 items-center">
              {countInfo.map((info) => (
                <div
                  key={info.name}
                  className="w-32 h-24 bg-[#98f297] flex flex-col justify-center items-center rounded-xl"
                >
                  <p className="text-2xl">{info.name}</p>
                  <p className="text-3xl font-bold">{info.value}</p>
                </div>
              ))}
            </div>

            {/* <div className="flex justify-center">
          <BarChart width={400} height={400} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
          </div> */}
          </div>
          <div className="lg:w-1/2 mt-10 border-2">
            <div className="flex justify-center">
              <PieChart width={300} height={400}>
                <Pie
                  data={charData}
                  cx={200}
                  cy={150}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {Object.entries(charData).map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                {"kdnfjkan"}
                {Object.entries(charData).map((entry,index) => (
                    <p key={index} className="">{entry.name}</p>
                  ))}
              </PieChart>
            </div>
          </div>
        </>
      )}
      {user.role == "Landfill Manager" && (
        <>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={landFillData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="volume" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <p className="font-bold text-3xl text-center mt-5">Per day Waste Colection</p>
        </>
      )}
    </>
  );
};

export default DashboardStat;
