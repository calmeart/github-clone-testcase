import React, { useState } from "react";

import Repository from "./Repository";
import RepositoryMenu from "./RepositoryMenu";
import UserTag from "./UserTag";

function Profile() {

  const [repoNum, setRepoNum] = useState("0");

  const { innerWidth } = window;
  const [isMobile] = useState( (innerWidth < 768) ? true : false );

  return (
    <div>
      {!isMobile && <div className="sticky-top repoMenu w-100 mt-4 mb-4">
        <div className="row container-lg mx-auto">
          <div className="col-12 col-md-3">
          </div>
          <div className="col-12 col-md-9">
            <RepositoryMenu repoNum={repoNum}/>
          </div>
        </div>
      </div>}
      <div className="container-lg">
        <div className="row">
          <div className="col-12 col-md-3">
            <UserTag />
          </div>
          <div className="col-12 col-md-9">
            <Repository isMobile={isMobile} repoNum={repoNum} setRepoNum={setRepoNum}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
