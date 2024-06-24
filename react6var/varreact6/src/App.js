// import logo from "./logo.svg";
import "./App.css";
import MarksMemo from "./component/MarksMemo";

function App() {
  return (
    <div className="App">
      <MarksMemo
        name="Praveen"
        telMarks="92"
        hinMarks="98"
        engMarks="89"
        mathMarks="99"
        sciMarks="93"
        socMarks="95"
      />
      <MarksMemo
        name="Poojitha"
        telMarks="98"
        hinMarks="89"
        engMarks="78"
        mathMarks="68"
        sciMarks="99"
        socMarks="85"
      />
      <MarksMemo
        name="Spandana"
        telMarks="96"
        hinMarks="88"
        engMarks="90"
        mathMarks="80"
        sciMarks="83"
        socMarks="87"
      />
      <MarksMemo
        name="Durga"
        telMarks="92"
        hinMarks="34"
        engMarks="66"
        mathMarks="69"
        sciMarks="33"
        socMarks="45"
      />
      <MarksMemo
        name="Nandini"
        telMarks="90"
        hinMarks="96"
        engMarks="89"
        mathMarks="79"
        sciMarks="73"
        socMarks="85"
      />
      <MarksMemo
        name="Lakshmi"
        telMarks="82"
        hinMarks="88"
        engMarks="69"
        mathMarks="99"
        sciMarks="73"
        socMarks="89"
      />
    </div>
  );
}

export default App;
