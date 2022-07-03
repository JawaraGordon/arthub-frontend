import React, { useState, useEffect } from 'react';
import AccountsCard from './AccountsCard';


function Accounts() {
  const [accounts, setAccounts] = useState([]);
 

  useEffect(() => {
    fetch('http://localhost:9292/accounts')
      .then((r) => r.json())
      .then((accountsArr) => {
        setAccounts(accountsArr);
        console.log(accountsArr);
      });
  }, []);

  function displayedAccounts() {
    return accounts.map((account) => (
      <AccountsCard
        key={accounts.id}
        accounts={account}
      />
    ));
  }

  return <div className="list">{displayedAccounts()}</div>;
}

export default Accounts;
