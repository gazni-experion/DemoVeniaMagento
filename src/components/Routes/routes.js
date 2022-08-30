import React, { Suspense } from 'react';
import { Route, useLocation , BrowserRouter ,Switch} from 'react-router-dom';

import { useScrollTopOnChange } from '@magento/peregrine/lib/hooks/useScrollTopOnChange';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';

import MagentoRoute from '@magento/venia-ui/lib/components/MagentoRoute';
import GreetingPage from '../GreetingPage';
import Layout from "../Layout"
import Categories from "../Categories"
import ContactUs from "../ContactUs"
import CreateCustomer from '../CreateCustomer';
import ProductList from '../Products';

const Routes = () => {
    const { pathname } = useLocation();
    useScrollTopOnChange(pathname);

    return (
      <BrowserRouter>
      <Switch>
                <Route>
                  <Layout/>
                    <Route exact path="/">
                        <GreetingPage/>
                    </Route>
                    <Route  path="/contact">
                        <ContactUs />
                    </Route>
                    <Route path="/categories">
                        <Categories />
                    </Route>
                    <Route path="/customer">
                        <CreateCustomer />
                    </Route>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                </Route>
            </Switch>
    </BrowserRouter>
    );
};

export default Routes;
const availableRoutes = [];
export { availableRoutes };
