import { Link } from "react-router-dom";
import doggo from "../images/windy doggo.webp";

export default function Error404() {
  return (
    <div
      style={{
        padding: "2vh 10vw",
        height: "98vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h1 className="ignore">Error 404</h1>
      <h3>It's so windy in here</h3>
      <img
        style={{ borderRadius: "10px", maxWidth: "70%" }}
        src={doggo}
        alt="doggo"></img>
      <h3>Even though Mr. barks a lot is enjoying it</h3>
      <Link className="button button--primary" to="/">
        Time to go back
      </Link>
    </div>
  );
}
