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
        <Button
          kind="btn-1"
          onClick={handleClick}
          width="100%"
          text="Read more"
        />
        <Button kind="btn-2" handleClick={handleClick2} text="Read more" />
        <Button kind="btn-3" text="Read more" />
        <Button kind="btn-4" text="Read more" />
        <Button kind="btn-5" text="Read more" />
        <Button kind="btn-6" text="Read more" />
        <Button kind="btn-7" text="Read more" />
        <Button kind="btn-8" text="Read more" />
        <Button kind="btn-9" text="Read more" />
        <Button kind="btn-10" text="Read more" />
        <Button kind="btn-11" text="Read more" />
        <Button kind="btn-13" text="Read more" />
        <Button kind="btn-14" text="Read more" />
        <Button kind="btn-15" text="Read more" />
        <Button kind="btn-16" text="Read more" />
      </div>
    </div>
  );
};
export default Home;
