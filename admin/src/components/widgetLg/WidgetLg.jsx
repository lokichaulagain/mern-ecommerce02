import "./widgetLg.css";
import { useState,useEffect} from "react";
import axios from "axios";




export default function WidgetLg() {



  //Fetching latest orders
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get("/orders/get", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTEzZjI3ZGVhZGYxYzYzY2RiYjcwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTM3MjQ5MSwiZXhwIjoxNjUxOTc3MjkxfQ.exFnXehZ-C9g43u45GEUUETfdm_0zM_fNTP90nsu1kU"
          }
        });
        console.log(res.data)
        // setOrders(res.data);

      } catch (error) {
        console.log(error);
      }
    }
    getOrders();
  }, []);







  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>


        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="/assets/10.jpeg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved" /></td>
        </tr>





      </table>
    </div>
  );
}
