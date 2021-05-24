import React, { useEffect, useState } from "react";

import RepositoryCard from "./RepositoryCard";

function RepositoryList({ createLanguageList, searchInput, selectLanguage }) {

  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/a8m/repos")
      .then(res => {
        if (res.status !== 200) {
          res.json().then(error => {
            setError(error);
          })
        } else {
          return res.json();
        }
      })
      .then(result => {
          setLoading(false);
          setRepos(result);
          createLanguageList(result);
      })
      .catch(err => setError(err))
  }, [createLanguageList]);

  if (error) return <div>Error: {error.message}</div>;
  if (loading) return <div>Loading...</div>;

  let reposFilteredByLanguage = repos;
  if (selectLanguage !== "All") {
    reposFilteredByLanguage = repos.filter(repo => repo.language === selectLanguage);
  }

  let reposFiltered = reposFilteredByLanguage.filter(repo => repo.name.toLowerCase().includes(searchInput.toLowerCase()) || (repo.description !== null && repo.description.toLowerCase().includes(searchInput.toLowerCase()) ))

  return (
    <div className="repositoryList">
      {(searchInput !== "" || selectLanguage !== "All") && (<div className="card">
        <div className="card-body">
          <p className="card-text">
            <span className="fw-bold">{reposFiltered.length}</span> result for repositories
            {searchInput !== "" && <span> matching <span className="fw-bold">{searchInput}</span></span> }
            {selectLanguage !== "All" && <span> written in <span className="fw-bold">{selectLanguage}</span></span>}
          </p>
        </div>
      </div>)}
      {reposFiltered.map(item => <RepositoryCard key={item.id} item={item} />)}
    </div>
  )
}

export default RepositoryList;
