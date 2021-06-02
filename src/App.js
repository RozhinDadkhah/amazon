import React, { useEffect } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login'
import Checkout from './Components/Checkout'
import { auth } from './Firebase'
import { loadStripe } from '@stripe/stripe-js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useStateValue } from './Components/StateProvider'
import Payment from './Components/Payment'
import { Elements } from '@stripe/react-stripe-js'


const promise = loadStripe(
  'pk_test_51Ilaw6Fjtd6PFjtptJS57YXyzcBbuYlFjcD14wfrDuqABUqKsoIhM1gxy0IxeCS2LN2vZYJBmjH2XtYkasfPzRNY00F4lOI8RK'
)

function App() {
  const [{ }, dispatch] = useStateValue()


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>>>', authUser);
      if (authUser) {
        //the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
