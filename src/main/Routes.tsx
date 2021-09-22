import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Search } from '../pages/Search'
import { ActivityDetails } from '../pages/ActivityDetails'

export const Routes: React.FC = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Search />
                </Route>
                <Route path="/:id">
                    <ActivityDetails />
                </Route>
            </Switch>
        </Router>
    )
}