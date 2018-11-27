import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };

  }

  render(){
    return (
      <div>
        <h2>Here be the App</h2>
        <Switch>
            <Route exact path='/' render={()=><ArticleList articleList={this.props.masterArticleList} />} />
        </Switch>
      </div>
    );
  }
}


export default withRouter(connect()(App));
