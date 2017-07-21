import React, { Component } from 'react';
import axios from 'axios';
import FrameworkCard from '../FrameworkCard/FrameworkCard.js';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    this.fetchReactData = this.fetchReactData.bind(this);
    this.fetchAngularData = this.fetchAngularData.bind(this);
    this.fetchEmberData = this.fetchEmberData.bind(this);
    this.fetchVueData = this.fetchVueData.bind(this);
  }

  componentDidMount() {
    this.fetchReactData();
    this.fetchAngularData();
    this.fetchEmberData();
    this.fetchVueData();
  }

  fetchReactData() {
    axios.get('https://api.github.com/repos/facebook/react')
      .then(({ data }) => {
        this.setState({ react: data })
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchAngularData() {
    axios.get('https://api.github.com/repos/angular/angular.js')
      .then(({ data }) => {
        this.setState({ angular: data })
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchEmberData() {
    axios.get('https://api.github.com/repos/emberjs/ember.js')
      .then(({ data }) => {
        this.setState({ ember: data })
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchVueData() {
    axios.get('https://api.github.com/repos/vuejs/vue')
      .then(({ data }) => {
        this.setState({ vue: data })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Home">
        <FrameworkCard react={ this.state.react }/>
        <FrameworkCard angular={ this.state.angular } />
        <FrameworkCard ember={ this.state.ember } />
        <FrameworkCard vue={ this.state.vue } />
      </div>
    );
  }
}

export default Home;
