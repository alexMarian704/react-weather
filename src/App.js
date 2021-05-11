import './css/index.css'
import Main from './components/Main';
import { Route , BrowserRouter , Switch} from 'react-router-dom'
import Nav from './components/Nav';
import Daily from './components/Daily';
import Currect from './components/Currect';
import Footer from './components/Footer';
import Page404 from './components/Page404';

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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
