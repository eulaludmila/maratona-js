import React from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Menu from './components/Menu'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Links from './pages/Manage/Links';
import Create from './pages/Manage/Create';

const Routes = () => (

    <BrowserRouter>
        <Menu/>
        <Switch>
            <Route path="/sign-in" component={SignIn}/>
            <Route path="/sign-up"  component={SignUp}/>
            <Route path="/manage/links/create" component={Create}/>
            <Route path="/manage/links/edit"/>
            <Route path="/manage/links" component={Links}/>
            <Route exact path="/"/>
        </Switch>

    </BrowserRouter>
)

export default Routes;