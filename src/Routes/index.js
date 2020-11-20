import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/Home'
import About from '../screens/About'
import AboutHisani from '../screens/AboutHisani'
import Work from '../screens/Work'
import Contact from '../screens/Contact'


const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/aboutus' component={About}/>
            <Route exact path='/ourwork' component={Work}/>
            <Route exact path='/abouthisani' component={AboutHisani}/>
            <Route exact path='/contactus' component={Contact}/>
        </Switch>
    )
}

export default Routes;
