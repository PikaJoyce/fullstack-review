import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios'
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import promise from 'promise'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.search = this.search.bind(this)
    this.onPageLoad = this.onPageLoad.bind(this)
  }

  componentWillMount() {
    this.onPageLoad();
  }

  search(username) {
    axios.post(`/repos`, { username })
      .then(() => console.log("Sent Post Request to Server"))
      .catch((err) => console.log(err))
  }

  onPageLoad() {
    axios.get('/repos')
      .then((response) => {
        console.log("get request response", response.data)
      })
      .catch((err) => (console.log("An error: ", err)))
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));