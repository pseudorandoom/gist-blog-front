import React, { useRef, useState } from 'react';
import NavBar from './NavBar';
import Avatar from './Avatar';
import './Search.css';

const months = [
  "January",
  "February",
  "March", "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Search() {
  const githubUsername = useRef('lombareload');
  const [ posts, setPosts ] = useState([]);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const handler = async () => {
    const response = await fetch(`https://api.github.com/users/${githubUsername.current}/gists`);
    if (response.ok) {
      const gists = await response.json();
      setPosts(gists);
      console.log('JSON =', gists);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1 className="App-Title">Blog msco.</h1>
        <p>
          Explore the unknown. Uncover what matters. Protype, test, repeat. Combine
          intuition with evidence. Design with intent and build it right.
        </p>
      </header>
      <main className="search-posts">
        <div className="search-container">
          <input onChange={e => githubUsername.current = e.target.value} className="search" type="text" placeholder="Keyword..." />
        </div>
        <button onClick={handler} className="search-btn">Search</button>
        {posts?.[0]?.owner.avatar_url && <Avatar {...posts[0].owner} />}
        {posts?.map(gist => {
          const date = new Date(gist.updated_at);
          const month = date.getMonth();
          const year = date.getFullYear();
          const nMonths = 12 * (currentYear - year) + currentMonth - month;
          return (
            <div className="response-item" key={gist.url}>
              <span>{`${months[month]} ${date.getDate()}/${date.getFullYear()} • `}</span>
              <span>{nMonths} months ago</span>
              <p>{gist.description}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Search;
