import React from 'react'
import './App.css'

import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'

import { useImmerReducer } from 'use-immer'
import reducer from './reducers/app.reducer'
import { initialState, AppProvider } from './provider/app.provider'
// import { LandingPage } from './pages/landing.page'
// import { LottoRegisPage } from './pages/lotto.regis.page'
import { AppLayout } from './components/app.layout'

// import { ProtectedRoute } from './routes/protected.route'
// import { NotFoundPage } from './pages/404.page'
// import { AppLayout } from './components/app.layout'

function App() {
  const [state, dispatch] = useImmerReducer(reducer, initialState)
  return (
    <AppProvider dispatch={dispatch} state={state}>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={LandingPage} /> */}
            <Route exact path="/app" component={AppLayout} />
            {/* <ProtectedRoute exact path='/admin' component={AppLayout} />
            <Route component={NotFoundPage} /> */}
          </Switch>
        </Router>
    </AppProvider>
  )
}

export default App
