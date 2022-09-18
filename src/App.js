import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const CartPage = React.lazy(() => import('./pages/Cart'));
const WhishlistPage = React.lazy(() => import('./pages/Whishlist'));

function App() {
  return (
    <Suspense
      fallback={<div className='text-center font-bold'>Loading...</div>}
    >
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' exact>
          <HomePage />
        </Route>
        <Route path='/cart' exact>
          <CartPage />
        </Route>
        <Route path='/whishlist' exact>
          <WhishlistPage />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
