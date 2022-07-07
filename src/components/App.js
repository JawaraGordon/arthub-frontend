import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Accounts from './Accounts';
import Artists from './Artists';
import Buyers from './Buyers';
import Art from './Art';
import AddArt from './AddArt';
import ArtEditForm from './ArtEditForm';

function App() {
  const [art, setArt] = useState([]);
  const [artists, setArtists] = useState([]);
  const [artId, setArtId] = useState(null);
  


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
  

  function onDelete(deletedArtId) {
    const filteredArt = art.filter((project) => project.id !== deletedArtId);

    setArt(filteredArt);
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

      <Switch>
        <Route exact path="/">
          <Accounts />
        </Route>

        <Route path="/artists">
          <Artists key={artists.id} artists={artists} setArtists={setArtists} />
        </Route>

        <Route path="/buyers">
          <Buyers />
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
          <Art key={art.id} art={art} onDelete={onDelete} editMode={editMode}artists={artists}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
