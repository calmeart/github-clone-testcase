function RepositoryCard({ item }) {

  const date = new Date(item.updated_at)
  const dateString = `${date.toLocaleDateString("en-US", { month: "short"})} ${date.getDate()}, ${date.getFullYear()}`

  return (
    <div className="card">
      <div className="card-body">
        <a className="text-decoration-none fs-4" href={item.url}>{item.name}</a>
        <p className="mt-4 card-text">{item.description}</p>

        <div className="d-flex flex-wrap">
          <p className="repoText mx-2 mb-1"><i className="bi bi-circle-fill"></i> {item.language}</p>
          <a className="repoText mx-2 text-decoration-none mb-1" href={item.html_url + "/stargazers"}><i className="bi bi-star"></i> {item.stargazers_count}</a>
          <a className="repoText mx-2 text-decoration-none mb-1" href={item.html_url + "/network/members"}><i className="fas fa-code-branch"></i> {item.forks}</a>
          {item.license && <p className="repoText mx-2 mb-1"><i className="fas fa-balance-scale"></i> {item.license.name}</p>}
          <p className="repoText mx-2 mb-1">{item.open_issues} issue(s) need help</p>
          <p className="repoText mx-2 mb-1">Updated on {dateString}</p>

        </div>
      </div>
    </div>
  )
};

export default RepositoryCard;
