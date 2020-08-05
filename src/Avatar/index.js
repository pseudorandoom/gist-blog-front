import React from 'react';
import './Avatar.css';

function Avatar({ avatar_url, login }) {
  return (
    <div className="avatar">
      <img className="avatar-img" src={avatar_url} alt="User Avatar" />
      <div>
        <div className="username">{login}</div>
        <div className="posts">Posts</div>
      </div>
    </div>
  );
}

export default Avatar;
