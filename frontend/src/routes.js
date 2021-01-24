import { Switch, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Lojas from './Pages/Lojas'
import PageProdutos from './Pages/Produtos'
import Depoimentos from './Pages/Depoimentos'

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/produtos" component={ PageProdutos } />
            <Route exact path="/lojas" component={ Lojas } />
            <Route exact path="/depoimentos" component={ Depoimentos } />
        </Switch>
    )
}

export default Routes