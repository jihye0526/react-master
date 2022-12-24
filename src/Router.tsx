import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Coins from './routes/Coins';
import Coin from './routes/Coin';

interface IRouterProps {

}

function Router({} : IRouterProps){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin></Coin>
                </Route>
                <Route path="/">
                    <Coins></Coins>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;