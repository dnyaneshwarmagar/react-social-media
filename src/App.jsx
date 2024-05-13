import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
