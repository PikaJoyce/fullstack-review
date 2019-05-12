import React from 'react';
import Repo from './Repo.jsx'

const RepoList = (props) => (
  <div>
    {props.repos.map((repo, key) => {
      return <Repo repo={repo} key={key} />
    })}
  </div>
)

export default RepoList;

{/* <h4> Repo List Component </h4>
There are { props.repos.length } repos. */}