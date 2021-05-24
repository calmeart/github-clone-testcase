import React, { useEffect, useState } from "react";

function UserTag() {

  const [userInfo, setUserInfo] = useState([]);
  const [fetchedInfo, setFetchedInfo] = useState({
    starNumbers: "",
    orgArray: []
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/a8m")
      .then(res => {
        if (res.status !== 200) {
          res.json().then(error => {
            setError(error);
          })
        } else {
          return res.json();
        }
      })
      .then(async result => {
          setLoading(false);
          setUserInfo(result);
          const starred = await fetch(result.starred_url.split("{")[0]);
          const starredJson = await starred.json();
          const starNumbers = starredJson.length;
          const org = await fetch(result.organizations_url);
          const orgArray = await org.json();
          setFetchedInfo({ starNumbers, orgArray });
      })
      .catch(err => setError(err))
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div id="profileTag">

      <div className="userInfo mb-3">
        <img className="img-fluid mx-auto mb-3" src={userInfo.avatar_url} alt="Profile Info"></img>
        <h5>{userInfo.name}</h5>
        <p>{userInfo.login}</p>
        <div className="d-grid gap-2">
          <button type="button" className="btn btn-secondary">Follow</button>
        </div>
      </div>
      <hr className="dropdown-divider" />
      <div className="socialInfo d-flex justify-content-start flex-wrap mb-3">
        <a className="link-secondary text-decoration-none no-wrap" href={userInfo.html_url + "?tab=followers"} target="_blank" rel="noreferrer" >
        <i className="bi bi-people"></i>
        <span className="px-1">{userInfo.followers}</span>
         Followers
         <span className="px-1">·</span>
        </a>
        <a className="link-secondary text-decoration-none no-wrap" href={userInfo.html_url + "?tab=following"} target="_blank" rel="noreferrer" >
        <span className="px-1">{userInfo.following}</span>
         Following
         <span className="px-1">·</span>
        </a>
        <a className="link-secondary text-decoration-none no-wrap" href={userInfo.html_url + "?tab=stars"} target="_blank" rel="noreferrer" >
        <i className="bi bi-star"></i>
        <span className="px-1">{fetchedInfo.starNumbers}</span>
        </a>
      </div>
      <hr className="dropdown-divider" />
      <div className="userDetails mb-3">
        <p className="mb-1"><i className="bi bi-building"></i> {userInfo.company}</p>
        <p className="mb-1"><i className="bi bi-geo-alt"></i> {userInfo.location}</p>
        <p className="mb-1"><i className="bi bi-link-45deg"></i> {userInfo.blog}</p>
        <p className="mb-1"><i className="bi bi-twitter"></i> {userInfo.twitter_username}</p>
      </div>
      <hr className="dropdown-divider" />
      <div className="userOrganizations">
        <h5>Achievements</h5>
        <div className="d-flex flex-wrap">
          {fetchedInfo.orgArray.map(ach => <img key={ach.id} className="m-2" src={ach.avatar_url} alt={ach.login + " achievement"} width="32" height="32"></img>)}
        </div>
      </div>
      <hr className="dropdown-divider" />
    </div>
  )
};

export default UserTag;
