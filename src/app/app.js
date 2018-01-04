import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import {Router, Route, Switch} from 'react-router-dom'
import {createMemoryHistory} from 'history'

import Home from './components/Home/Home'
import ActivateContract from './components/ActivateContract/ActivateContract'
import SendTx from './components/SendTx/SendTx'
import Receive from './components/Receive/Receive'

import states from './states'

const history = createMemoryHistory({
    initialEntries: ['/'],
    initialIndex: 0
})


ReactDOM.render(
    <Provider history={history} {...states}>
        <Router history={history}>
            <Switch>
                <Route exact path="/activate-contract" component={ActivateContract} />
                <Route exact path="/receive" component={Receive} />
                <Route exact path="/send-tx" component={SendTx} />
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('app')
)
