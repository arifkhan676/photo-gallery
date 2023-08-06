import './App.css';
import MainComp from './MainComp';
import Store from './Components/Redux/Store';
import { Provider } from 'react-redux';

function App() {
  console.log("my store", Store.getState());
  return (
    <div className="App">
      <Provider store={Store} >
        <MainComp />
      </Provider>

    </div>
  );
}

export default App;
