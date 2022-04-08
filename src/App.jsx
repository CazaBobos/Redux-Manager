import { Provider } from "react-redux";
import store from "./store";
import ChosenTeam from "./Components/ChosenTeam";
import Players from "./Components/Players";
import './Styles/styles.scss'

const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1 className="title">Redux Manager</h1>
        <Players />
        <ChosenTeam />
      </main>
    </Provider>
  );
}

export default App;
