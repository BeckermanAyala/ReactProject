import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './Project/redux/reducers/Store';
import NavbarRoute from './Project/NavbarRoute';


function App() {
  return (
    <div className="App">
      <header className="App-header">

<Provider store={store}>
<NavbarRoute></NavbarRoute>

</Provider> 
        
      </header>
    </div>
  );
}

export default App;
