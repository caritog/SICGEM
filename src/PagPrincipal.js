import React from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


/*class PagPrincipal extends Component {
    render() {
        return(
            <Header/>,
            <Navbar/>,
            <Footer/>
        );
    }
}

export default PagPrincipal;

*/



function PagPrincipal() {
    return (
      <BrowserRouter basename='/index/'>
  
        <Switch>
          <Route exact path="/home" component={Header}>
          </Route>
          </Switch>
  
          <Switch>
            <Route
              exact path="/home" component={Navbar}>
            </Route >
  
            <Route
              exact path="/home" component={Footer}>
            </Route>
          </Switch>
        
  
      </BrowserRouter>
  
    )
  }
  
  export default PagPrincipal;