import React from 'react';

function AccountsCard({ accounts }) {
  console.log(accounts);

  const { name, account_number, location, account_type } = accounts;

  return (
    <div>
      <div className="card">
        <div className="title">
          <h2>{name}</h2>
        </div>
        <h3>Account #: {account_number}</h3>
        <br></br>
        <h4>Location: {location}</h4>
        <h4>Account Type: {account_type}</h4>
      </div>
    </div>
  );
}

export default AccountsCard;
