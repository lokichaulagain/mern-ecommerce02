//NEW JOIN MEMBER COMPONENT========>
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethod";
import axios from "axios";






export default function WidgetSm() {

  //Fetching new users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("users/?new=true", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTEzZjI3ZGVhZGYxYzYzY2RiYjcwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTM3MjQ5MSwiZXhwIjoxNjUxOTc3MjkxfQ.exFnXehZ-C9g43u45GEUUETfdm_0zM_fNTP90nsu1kU"
          }
        });
        console.log(res.data)
        setUsers(res.data);

      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);







  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">


        {users.map((user, key) => (
          <li key={key} className="widgetSmListItem">
            <img src={user.profilePic || "/assets/10.jpeg"} alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle">{user.profession || "Developer"}</span>
            </div>
            <button className="widgetSmButton"> <Visibility className="widgetSmIcon" /> Display</button>
          </li>
        ))}



      </ul>
    </div>
  );
}
