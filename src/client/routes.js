import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { RouteWithLayout } from './components'
import { Main as Mainlayout } from './layouts'

import {
    Dashboard as DashboardView
} from './views'

const Routes = () => {
    return (
        <Switch>
            <Redirect
                exact
                from ="/"
                to="/dashborad"
            />
            <RouteWithLayout 
                component={DashboardView}
                layout={Mainlayout}
                path="/dashboard"
            />
        </Switch>
    )
}

export default Routes;