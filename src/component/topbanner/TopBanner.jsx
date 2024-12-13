import React from 'react';
import './TopBanner.css';

export default function TopBanner({ loggedinUserInfo, handleLogout }) {
  console.log(loggedinUserInfo);
  return (
    <div className="page-header">
      <h1> Welcome to Anil Thapa Consultant </h1>
      {loggedinUserInfo && (
        <div>
          <div className="user-name"> {loggedinUserInfo.name}</div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}
