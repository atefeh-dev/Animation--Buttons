/** @format */
import "../style/App.css";
import Button from "./Button";
import { useState } from "react";
const Home = () => {
  const [isButtonLoading, setIsButtonLoading] = useState("");

  const fetchData = async (btnKey) => {
    setIsButtonLoading(btnKey);
    console.log(isButtonLoading);
    const res = await fetch("google.com");
    if (res.ok) {
      console.log(res);
    }
    setTimeout(() => {
      setIsButtonLoading("");
    }, 1000);
  };

  const btnLoadingHandler = (btnKey) => {
    setIsButtonLoading(btnKey);
    setTimeout(() => {
      setIsButtonLoading("");
    }, 1000);
    console.log("how you don?");
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
          onClick={(e) => {
            fetchData("btn-1");
          }}
          width="100%"
          isLoading={isButtonLoading === "btn-1"}>
          Read more
        </Button>
        <Button
          kind="btn-2"
          onClick={(e) => {
            fetchData("btn-2");
          }}
          isLoading={isButtonLoading === "btn-2"}>
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
