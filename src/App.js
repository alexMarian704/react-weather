import './css/index.css'
import Main from './components/Main';
import { Route , BrowserRouter , Switch} from 'react-router-dom'
import Nav from './components/Nav';

function App() {

  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
