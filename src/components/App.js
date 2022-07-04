import React, {useState, useEffect}from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Accounts from './Accounts';
import Artists from './Artists';
import Buyers from './Buyers';
import Art from './Art';
import ArtEditPage from './ArtEditPage';
// import ArtistsContainer from './ArtistsContainer';

function App() {
  

  const [art, setArt] = useState([]);


  useEffect(() => {
    fetch('http://localhost:9292/art')
      .then((r) => r.json())
      .then((artArr) => {
        setArt(artArr);
      });
  }, []);

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
          <Art key={art.id}
        art={art}/>
        </Route>

        <Route path="/arteditpage">
          <ArtEditPage key={art.id}
        art={art}
        setArt={setArt}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
