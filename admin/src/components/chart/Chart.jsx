import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";






export default function Chart({ title, data, dataKey, grid }) {

  //NO of user per months
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ], [])


  useEffect(() => {
    const getStats = async () => {

      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTEzZjI3ZGVhZGYxYzYzY2RiYjcwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTM3MjQ5MSwiZXhwIjoxNjUxOTc3MjkxfQ.exFnXehZ-C9g43u45GEUUETfdm_0zM_fNTP90nsu1kU"
          }
        });
        // console.log(res.data);
        res.data.map((item) => 
          setUserStats(prev => [
            ...prev,
            { name: MONTHS[item._id - 1]," New Users":item.total}
          ])
        )
      }
      catch (error) {
        console.log(error);
      }
    }
    getStats();
  }, [MONTHS])

  console.log(userStats)












  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={userStats}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
