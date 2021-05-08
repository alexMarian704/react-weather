import './css/index.css'
import Main from './components/Main';
import { Route , BrowserRouter , Switch} from 'react-router-dom'
import Nav from './components/Nav';
import Daily from './components/Daily';
import Currect from './components/Currect';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/week/:lon/:lat/:city">
            <Daily />
          </Route>
          <Route path="/:city">
            <Currect />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
