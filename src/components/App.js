import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';

import NewCourtForm from './NewCourtForm';
import Artist from './Art';
import Login from './SignUp';

function App() {
  const [courts, setCourts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:9292/artists')
      .then((r) => r.json())
      .then((courtArr) => {
        setCourts(courtArr);
      });
  }, []);

  function handleUpdateLike(updatedLike) {
    const updatedCourt = courts.map((court) =>
      court.id === updatedLike.id ? updatedLike : court
    );
    setCourts(updatedCourt);
  }

  const displayedCourts = courts.filter((court) => {
    return court.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="home">
      <Header />

      <Switch>
        <Route exact path="/">
          <Hero
            key={courts.id}
            courts={displayedCourts}
            handleUpdateLike={handleUpdateLike}
          />
        </Route>

        <Route path="/artist">
          <Artist searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/courts/new">
          <NewCourtForm setCourts={setCourts} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
