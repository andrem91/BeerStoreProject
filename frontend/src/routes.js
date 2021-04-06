import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Lojas from './pages/Lojas'
import PageProdutos from './pages/Produtos'
import Depoimentos from './pages/Depoimentos';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/produtos" component={PageProdutos} />
            <Route exact path="/lojas" component={Lojas} />
            <Route exact path="/depoimentos" component={Depoimentos} />
        </Switch>
    )
}

export default Routes