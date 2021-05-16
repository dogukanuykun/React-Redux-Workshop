import React from 'react'
import { Switch } from 'react-router';
import { Container } from 'reactstrap'
import {Navi} from '../navi/Navi'
import Dashboard from './Dashboard'
import {Route,Switch} from 'react-router-dom'
import CartDetail from '../cart/CartDetail';
import AddorUpdateProduct from '../products/AddorUpdateProduct';
import NotFound from '../common/NotFound';

function App() {
  return (
    <div >
      <Container>
        <Navi />
        <Switch>
          <Route path='/' exact component={Dashboard}/>
          <Route path='/product' component={Dashboard}/>
          <Route path='/cart' component={CartDetail}/>
          <Route path='/saveproduct/:productId' component={AddorUpdateProduct}/>
          <Route path='/saveproduct' component={AddorUpdateProduct}/>
          <Route component={NotFound}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
