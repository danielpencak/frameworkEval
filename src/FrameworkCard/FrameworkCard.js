/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */

import './FrameworkCard.css';
import React from 'react';
import angularLogo from './Assets/angular.png';
import emberLogo from './Assets/ember.png';
import reactLogo from './Assets/react.png';
import vueLogo from './Assets/vue.png';

export default function FrameworkCard(props) {
  return (
    <div className="FrameworkCard">
      {
        props.frameworkData ?
        <div className="imageWrapper">
          {
            props.frameworkData.name === 'vue' ?
            <div className="vue">
              <img className="vueLogo" src={ vueLogo } alt={ 'Vue' } />
            </div>
            : null
          }
          {
            props.frameworkData.name === 'ember.js' ?
            <div className="ember">
              <img className="emberLogo" src={ emberLogo } alt={ 'Ember' } />
            </div>
            : null
          }
          {
            props.frameworkData.name === 'react' ?
            <div className="react">
              <img className="reactLogo" src={ reactLogo } alt={ 'React' } />
            </div>
            : null
          }
          {
            props.frameworkData.name === 'angular.js' ?
            <div className="angular">
              <img className="angularLogo" src={ angularLogo } alt={ 'Angular' } />
            </div>
            : null
          }
        </div>
        : null
      }
      {
        props.frameworkData ?
        <div className="cardInfo">
          <div>
            <p className="label">
              Forks
            </p>
            <p className="data">
              { props.frameworkData.forks_count }
            </p>
          </div>
          <div>
            <p className="label">
              Stargazers
            </p>
            <p className="data">
              { props.frameworkData.stargazers_count }
            </p>
          </div>
          <div>
            <p className="label">
              Open Issues
            </p>
            <p className="data">
              { props.frameworkData.open_issues_count }
            </p>
          </div>
        </div>
        : null
      }
    </div>
  );
}
