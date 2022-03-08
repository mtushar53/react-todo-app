import './App.css';
import TodoContainer from './components/TodoContainer';
import { Provider } from "react-redux";
import store from './redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoContainer/>
      </Provider>
    </div>
  );
}

export default App;
