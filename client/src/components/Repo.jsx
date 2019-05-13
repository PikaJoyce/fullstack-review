import React from 'react'

const Repo = (props) => (
  <div>
    <ul>
      <a href={props.repo.html_url} target="_blank">
        <img src={props.repo.avatar_url} />
      </a>
      <li>ID : {props.repo.id}</li>
      <li> Username: {props.repo.userName}</li>
      <li>Title : {props.repo.repoName}</li>
    </ul>
  </div>
)

export default Repo;