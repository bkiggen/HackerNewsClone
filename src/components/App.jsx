import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import Header from './Header';
import Submit from './Submit';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };

  }



  render(){
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' render={()=><ArticleList articleList={this.props.basicHardCodedArticles} />} />
          <Route path='/submit' render={()=><Submit />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    basicHardCodedArticles: state
  };
};


export default withRouter(connect(mapStateToProps)(App));
