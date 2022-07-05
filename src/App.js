import "./App.css";
import Router from "./Router";
import { Provider } from "react-redux";
import store from './store/index'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
