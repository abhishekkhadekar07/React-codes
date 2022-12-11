import React, { useContext, useState } from "react";
import { Appcontext } from "../pages/index";

function ChangeProfile() {
  const [newusername, setNewUserName] = useState("");
  const { setusername } = useContext(Appcontext);
  return (
    <div>
      <input onChange={(event) => setNewUserName(event.target.value)} />
      <button onClick={() => setusername(newusername)}>1</button>
    </div>
  );
}

export default ChangeProfile;
