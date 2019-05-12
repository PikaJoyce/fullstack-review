import React from 'react'

const Repo = (props) => (
  <div>
    <ul> ID : {props.repo.id}
      <li><a href={props.repo.html_url}>
        {props.repo.userName}
      </a>
      </li>
      <li>Title : {props.repo.repoName}</li>
    </ul>
  </div>
)

export default Repo;

// <label>
//   {this.props.repo.userName}
// </label>
// { this.props.repo.repoName } : { this.props.repo.URL }

// id: 176785818
// repoName: "c3"
// repoURL: "https://api.github.com/users/PikaJoyce/repos"
// userName: "PikaJoyce"

{/* <a href="#" onClick={handleClick}>
  Click me
    </a> */}