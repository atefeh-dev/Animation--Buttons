/** @format */
import "../style/App.css";
import Button from "./Button";
const Home = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Animation Buttons</h1>
        <p>Hover us and enjoy the satisfying neumorphic animation designs!</p>
      </div>
      <div className="frame">
        <Button kind="btn-1" />
        <Button kind="btn-2" />
        <Button kind="btn-3" />
        <Button />
      </div>
    </div>
  );
};
export default Home;
