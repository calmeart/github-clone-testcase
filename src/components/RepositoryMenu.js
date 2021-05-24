
function RepositoryMenu({ repoNum }) {
  return (
    <nav className="nav nav-pills">
      <a className="nav-link link-secondary menuLink" href="/"><i className="bi bi-book"></i> Overview</a>
      <a className="nav-link link-secondary menuLink act" href="/"><i className="bi bi-journal-bookmark-fill"></i> Repositories <span className="badge rounded-pill bg-secondary">{repoNum}</span></a>
      <a className="nav-link link-secondary menuLink" href="/"><i className="bi bi-file-bar-graph"></i> Projects</a>
      <a className="nav-link link-secondary menuLink" href="/"><i className="bi bi-box"></i> Packages</a>
    </nav>
  )
}

export default RepositoryMenu;
