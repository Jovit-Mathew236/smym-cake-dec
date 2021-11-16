import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './Pages/Home'
import AdminPage from './Pages/AdminPage';
import Deliver from './store/DeliverContexts';
import Deliverdata from './components/Deliverypage/Deliverdata';

function App() {
  return (
    <div>
      <Deliver childern={<Router >
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/admin'>
          <AdminPage />
        </Route>
        <Route path="/delivery">
          <Deliverdata />
        </Route>
      </Router>} />
      
    </div>
  );
}

export default App;
