
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <>
    <h3>Home</h3>
    <Navbar/>
      <Outlet/>
    </>
    </Provider>
  );
}

export default App;
