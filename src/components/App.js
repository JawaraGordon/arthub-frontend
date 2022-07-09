import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Accounts from './Accounts';
import Artists from './Artists';
import Buyers from './Buyers';
import Art from './Art';
import AddArt from './AddArt';
import ArtEditForm from './ArtEditForm';
import NavBar from './NavBar';

function App() {
  const [art, setArt] = useState([]);
  const [artists, setArtists] = useState([]);
  const [buyers, setBuyers] = useState([]);
  const [artId, setArtId] = useState(null);
  const [accounts, setAccounts] = useState([]);
 

  useEffect(() => {
    fetch('http://localhost:9292/accounts')
      .then((r) => r.json())
      .then((accountsArr) => {
        setAccounts(accountsArr);
      });
  }, []);


  useEffect(() => {
    fetch('http://localhost:9292/art')
      .then((r) => r.json())
      .then((artArr) => {
        setArt(artArr);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:9292/artists')
      .then((r) => r.json())
      .then((artistsArr) => {
        setArtists(artistsArr);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:9292/buyers')
      .then((r) => r.json())
      .then((buyersArr) => {
        setBuyers(buyersArr);
      });
  }, []);
  

  function onDeleteArt(deletedArtId) {
    const filteredArt = art.filter((art) => art.id !== deletedArtId);

    setArt(filteredArt);
    
  }

  function onDeleteBuyers(deletedBuyerId) {
    const filteredBuyers = buyers.filter((buyers) => buyers.id !== deletedBuyerId);

    setBuyers(filteredBuyers);
  }

  function editMode(id) {
    setArtId(id);
  }


  function onUpdate(updatedArt) {
    const updatedArts = art.map((art) => {
      if (art.id === updatedArt.id) {
        return updatedArt;
      } else {
        return art;
      }
    });
    setArt(updatedArts);
    setArtId(null);}



  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Accounts key={accounts.id} accounts={accounts}/>
        </Route>

        <Route path="/artists">
          <Artists key={artists.id} artists={artists} setArtists={setArtists} />
        </Route>

        <Route path="/buyers">
          <Buyers 
          key={buyers.id}
            buyers={buyers}
            setBuyers={setBuyers}
            onDeleteBuyers={onDeleteBuyers}
            />
        </Route>

        <Route path="/art/new">
          <AddArt
            key={art.id}
            art={art}
            setArt={setArt}
            artists={artists}
            setArtists={setArtists}
          />
        </Route>

        <Route path="/arteditform/">
          <ArtEditForm
            key={art.id}
            art={art}
            setArt={setArt}
            artId={artId}
            setArtId={setArtId}
            editMode={editMode}
            onUpdate={onUpdate}
          />
        </Route>

        <Route path="/art">
          <Art key={art.id} art={art} onDeleteArt={onDeleteArt} editMode={editMode}artists={artists}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
