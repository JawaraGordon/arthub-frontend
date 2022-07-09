import React from 'react';
import AccountsCard from './AccountsCard';


function Accounts({accounts}) {
  

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


