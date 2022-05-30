/** @format */
import "../style/App.css";
import Button from "./Button";
const Home = () => {
  const handleClick = () => {
    console.log("how you don?");
  };
  const handleClick2 = () => {
    console.log("what's matter");
  };
  return (
    <div className="container">
      <div className="title">
        <h1>Animation Buttons</h1>
        <p>Hover us and enjoy the satisfying neumorphic animation designs!</p>
      </div>
      <div className="frame">
        <Button kind="btn-1" handleClick={handleClick} />
        <Button kind="btn-2" handleClick={handleClick2} />
        <Button kind="btn-3" />
        <Button kind="btn-4" />
        <Button kind="btn-5" />
        <Button kind="btn-6" />
        <Button kind="btn-7" />
        <Button kind="btn-8" />
        <Button kind="btn-9" />
        <Button kind="btn-10" />
        <Button kind="btn-11" />
        <Button kind="btn-13" />
        <Button kind="btn-14" />
        <Button kind="btn-15" />
        <Button kind="btn-16" />
      </div>
    </div>
  );
};
export default Home;
