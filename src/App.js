import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState();
  const [loading, setLoading] = useState(false);

  function Relod() {
    window.location.reload();
  }

  useEffect(function () {
    async function Quote() {
      setLoading(true);
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = res.json();
      data.then((result) => {
        setAdvice(result.slip.advice);
        setLoading(false);
      });
    }
    Quote();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <h2>Quote of the day</h2>
        <h1>{loading ? "loading..." : advice}</h1>
        <button className="button-30" onClick={Relod}>
          next
        </button>
      </div>
    </div>
  );
}

export default App;
