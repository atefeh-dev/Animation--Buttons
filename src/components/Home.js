/** @format */
import "../style/App.css";
import Button from "./Button";
import { useState } from "react";
const Home = () => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const handleClick = () => {
    setIsButtonLoading(true);
    setTimeout(() => {
      setIsButtonLoading(false);
    }, 1000);
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
          isLoading={isButtonLoading}>
          Read more
        </Button>
        <Button kind="btn-2" onClick={handleClick2}>
          Read more
        </Button>
        <Button kind="btn-3">Read more</Button>
        <Button kind="btn-4">Read more</Button>
        <Button kind="btn-5">Read more</Button>
        <Button kind="btn-6">Read more</Button>
        <Button kind="btn-7">Read more</Button>
        <Button kind="btn-8">Read more</Button>
        <Button kind="btn-9">Read more</Button>
        <Button kind="btn-10">Read more</Button>
        <Button kind="btn-11">Read more</Button>
        <Button kind="btn-13">Read more</Button>
        <Button kind="btn-14">Read more</Button>
        <Button kind="btn-15">Read more</Button>
        <Button kind="btn-16">Read more</Button>
      </div>
    </div>
  );
};
export default Home;
