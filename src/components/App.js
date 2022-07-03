import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Accounts from './Accounts';
import Artists from './Artists';
import Buyers from './Buyers';
import Art from './Art';
// import ArtistsContainer from './ArtistsContainer';

function App() {
  

  // function handleUpdateLike(updatedLike) {
  //   const updatedCourt = courts.map((court) =>
  //     court.id === updatedLike.id ? updatedLike : court
  //   );
  //   setCourts(updatedCourt);
  // }
  return (
    <div className="home">
      <Header />

      <Switch>
        <Route exact path="/accounts">
          <Accounts
          />
        </Route>

        <Route path="/artists">
          <Artists/>
        </Route>

        <Route path="/buyers">
          <Buyers />
        </Route>

        <Route path="/art">
          <Art />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
