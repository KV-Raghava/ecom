import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { Home } from './components/home/home';
import { store, persistor } from "./redux/store"
function App() {
  return (
    <Provider store={store}>
    <Home/>
    </Provider>
  );
}

export default App;
