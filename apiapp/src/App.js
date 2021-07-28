import { Switch, Route, Link } from 'react-router-dom'
import './App.css';

import Characters from './components/Characters'
import Locations from './components/Locations'
import Episodes from './components/Episodes'


const App = () => {
  return (
    <>
      <div className="App-header">
        <h1>Rick and Morty!</h1>
        <Link to='/'>Home</Link>

      </div>
      <div className="App-main">
        <Switch>
          <Route path='/locations'><Locations/></Route>
          <Route path='/episodes'><Episodes/></Route>
          <Route path='/characters'><Characters/></Route>
          <Route path='/'>
            <Link to='/characters'>Characters</Link>
            <Link to='/locations'>Locations</Link>
            <Link to='/episodes'>Episodes</Link>
          </Route>
        </Switch>
      </div>
      
    </>
  );
}

export default App;
