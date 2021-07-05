import React,{ useState } from 'react';
import {
   BrowserRouter as Router,
   Route,
   Redirect,
   Switch,
} from "react-router-dom";
import Form from './components/Form';
import './static/App.css'
import './static/header.css'
import Header from './components/Header'

const App = () => {
  const [email, setEmail] = useState(JSON.parse(localStorage.getItem("email")));
  const [id, setid] = useState(JSON.parse(localStorage.getItem("id")));
  console.log(`${email},${id}`); 
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/application' />
          </Route>
          <Route path='/application'>
              <>
                <Header />
                <Form
                  setEmail={setEmail}
                  setid={setid}
                  setloggedin={false}
                />
              </>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App



