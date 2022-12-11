import { useState, createContext } from "react";
import styles from "../styles/Home.module.css";
import Profile from "./profile";
export const Appcontext = createContext();
export default function Home() {
  const [username, setusername] = useState("abhishek");
  return (
    <div className={styles.container}>
      <Appcontext.Provider value={{ username, setusername }}>
        <Profile />
      </Appcontext.Provider>
    </div>
  );
}
