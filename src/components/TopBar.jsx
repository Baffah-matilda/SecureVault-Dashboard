/* eslint-disable no-unused-vars */
import React from 'react'
import avatarImg from '../assets/avatar.svg'

function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="brand">SecureVault</div>
      </div>

      <div className="topbar-center">
        <label className="search" aria-hidden>
          <span className="search-icon">🔍</span>
          <input aria-label="Search secure files" placeholder="Search secure files..." />
        </label>
      </div>

      <div className="topbar-right">
        <button type="button" aria-label="Notifications" className="icon-btn">🔔</button>
        <button type="button" aria-label="Settings" className="icon-btn">⚙️</button>
        <img src={avatarImg} alt="John Doe avatar" className="avatar" />
      </div>
    </header>
  );
}

export default TopBar;