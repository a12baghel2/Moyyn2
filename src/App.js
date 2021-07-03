import React,{ useState, useEffect } from 'react';
import {
   BrowserRouter as Router,
   Route,
   Redirect,
   Switch,
} from "react-router-dom";
import Form from './components/Form';
import './static/App.css'
import './static/header.css'
import {sendRequest} from './util/helpers/helper-methods';
import Header from './components/Header'

const App = () => {
  const [loggedin, setloggedin] = useState(JSON.parse(localStorage.getItem("loggedin")) !== undefined ? JSON.parse(localStorage.getItem("loggedin")) : false);
   const [email, setEmail] = useState(JSON.parse(localStorage.getItem("email")));
   const [id, setid] = useState(JSON.parse(localStorage.getItem("id")));
    console.log(`${loggedin}, ${email},${id}`); 
   useEffect(() => { 
      sendRequest("/getcandidatestatus", "POST", { 
         id: "60c9bd1f4a67ceb9057788b4" 
      }).then(data => { 
         if (data.success) {
            // console.log(data);
            if (data.message === false) window.location = "https://moyyn.com/scheduled-maintenance"; 
         } 
      }) 
   }, [])
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/application' />
          </Route>
          <Route path='/application'>
            {loggedin ? (
              <Redirect to='/dashboard' />
            ) : (
              <>
                <Header />
                <Form
                  setEmail={setEmail}
                  setid={setid}
                  setloggedin={setloggedin}
                />
              </>
            )}
          </Route>
        </Switch>
      </Router>

      {/* <Divider/> */}
    </React.Fragment>
  );
}

export default App



