import React from "react";
import ChangeProfile from "../data/changeProfile";
import { Appcontext } from './index'
import { useContext } from "react";
function Profile() {
  const {username}=useContext(Appcontext)
  return (
    <div>
      Profile username is  {username}
      <ChangeProfile  />
    </div>
  );
}
// function Profile({ username, setusername}) {
//   return (
//     <div>
//       Profile username is  {username}
//       <ChangeProfile username={username} setusername={setusername} />
//     </div>
//   );
// }

export default Profile;
