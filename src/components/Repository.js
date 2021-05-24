import React, { useCallback, useState } from "react";

import RepositoryMenu from "./RepositoryMenu";
import RepositoryList from "./RepositoryList";

function Repository({ isMobile, repoNum, setRepoNum }) {

  const [selectLanguage, setSelectLanguage] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [languages, setLanguages] = useState([]);


  const createLanguageList = useCallback((repos) => {
    const newArray = repos.map(repo => repo.language).filter((item, idx, array) => array.indexOf(item) === idx && item !== null);
    const repoNum = repos.length;
    setLanguages(newArray);
    setRepoNum(repoNum);
  }, [setRepoNum]);

  const handleFormClick = (e) => {
    const { value } = e.target
    setSelectLanguage(value);
  };

  const handleSearchChange = (e) =>  {
    const { value } = e.target
    setSearchInput(value.toLowerCase());
  };

  return (
    <>
      {isMobile && <RepositoryMenu repoNum={repoNum}/>}
      <form className="d-flex g-3 align-items-center mb-3">
        <input className="form-control flex-grow-1 me-2" type="search" placeholder="Search" value={searchInput} onChange={handleSearchChange} aria-label="Search" />
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="5,10">
            Language
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="language" id="exampleRadios1" value="All" checked={selectLanguage === "All" ? true : false} onChange={handleFormClick}/>
              <label className="form-check-label" htmlFor="exampleRadios1">
                All
              </label>
            </div>
            {languages.map(language => {
              return (
                <div className="form-check" key={"Language" + language}>
                  <input className="form-check-input" type="radio" name="language" value={language} checked={selectLanguage === language ? true : false} onChange={handleFormClick}/>
                  <label className="form-check-label" htmlFor={language}>
                    {language}
                  </label>
                </div>
              )
            })}
          </div>
        </div>
      </form>
      <RepositoryList createLanguageList={createLanguageList} searchInput={searchInput} selectLanguage={selectLanguage} />
    </>
  )
}

export default Repository;
