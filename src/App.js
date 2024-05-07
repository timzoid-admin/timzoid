import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import routes from "./Routes/router";

function App() {
  return (
    <Router>{routes}</Router>
    // <div>
    //   <p>Hello World</p>
    // </div>
  );
}

export default App;
