import React, { Component } from 'react';
import './FrameworkCard.css';
import reactLogo from './Assets/react.png';
import vueLogo from './Assets/vue.png';
import angularLogo from './Assets/angular.png';
import emberLogo from './Assets/ember.png';


class FrameworkCard extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <div className="FrameworkCard">
        {
          this.props.frameworkData ?
          <div className="imageWrapper">
            {
              this.props.frameworkData.name === 'vue' ?
              <div className="vue">
                <img className="vueLogo" src={vueLogo} alt={"Vue"} />
              </div>
              :null
            }
            {
              this.props.frameworkData.name === 'ember.js' ?
              <div className="ember">
                <img className="emberLogo" src={emberLogo} alt={"Ember"} />
              </div>
              :null
            }
            {
              this.props.frameworkData.name === 'react' ?
              <div className="react">
                <img className="reactLogo" src={reactLogo} alt={"React"} />
              </div>
              :null
            }
            {
              this.props.frameworkData.name === 'angular.js' ?
              <div className="angular">
                <img className="angularLogo" src={angularLogo} alt={"Angular"} />
              </div>
              :null
            }
          </div>
          :null
        }
        {
          this.props.frameworkData ?
          <div className="cardInfo">
            <div>
              <p>
                Forks
              </p>
              <p>
                {this.props.frameworkData.forks_count}
              </p>
            </div>
            <div>
              <p>
                Stargazers
              </p>
              <p>
                {this.props.frameworkData.stargazers_count}
              </p>
            </div>
            <div>
              Open Issues
              <p>
                {this.props.frameworkData.open_issues_count}
              </p>
            </div>
          </div>
          :null
        }
      </div>
    );
  }
}

export default FrameworkCard;
