import { useState, useEffect } from "react";
// import Button from "./Button";
// import styles from "./App.module.css";

function Deps() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    // if (keyword !== "" && keyword.length > 5) {
    console.log("I run when 'keyword' changes.");
    // }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes.");
  }, [keyword, counter]);

  return (
    <div>
      {/* <h1 className={styles.title}>Welcome back!!!</h1> */}
      {/* <Button text={"Continue"} /> */}
      <input
        type="text"
        placeholder="Search here..."
        value={keyword}
        onChange={onChange}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default Deps;
