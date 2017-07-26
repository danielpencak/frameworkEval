/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable arrow-parens */

import './Home.css';
import React, { Component } from 'react';
import FrameworkCard from '../FrameworkCard/FrameworkCard.js';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};

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

  componentDidUpdate() {
    setTimeout(this.fetchReactData, 900000);
    setTimeout(this.fetchAngularData, 900000);
    setTimeout(this.fetchEmberData, 900000);
    setTimeout(this.fetchVueData, 900000);
  }

  fetchReactData() {
    axios.get('https://api.github.com/repos/facebook/react')
      .then(({ data }) => {
        this.setState({ react: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchAngularData() {
    axios.get('https://api.github.com/repos/angular/angular.js')
      .then(({ data }) => {
        this.setState({ angular: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchEmberData() {
    axios.get('https://api.github.com/repos/emberjs/ember.js')
      .then(({ data }) => {
        this.setState({ ember: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchVueData() {
    axios.get('https://api.github.com/repos/vuejs/vue')
      .then(({ data }) => {
        this.setState({ vue: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Home">
        <div>
          <h1 className="title">Framework Evaluator</h1>
        </div>
        <div className="cards">
          <FrameworkCard frameworkData={ this.state.react }/>
          <FrameworkCard frameworkData={ this.state.angular } />
          <FrameworkCard frameworkData={ this.state.ember } />
          <FrameworkCard frameworkData={ this.state.vue } />
        </div>
      </div>
    );
  }
}

export default Home;
