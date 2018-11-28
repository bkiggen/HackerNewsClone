import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Article(props){

  function handleAddingUpvotePoint(event){
    const { dispatch } = props;
    event.preventDefault();
    const action = { type:'UPVOTE', id: props.id};
    dispatch(action);
  }
  function handleAddingDownvotePoint(event){
    const { dispatch } = props;
    event.preventDefault();
    const action = { type:'DOWNVOTE', id: props.id};
    dispatch(action);
  }



  return (
    <div className="article-list-container-styles">
      <div className="headline-styles">
        <h3 className="indiv-lines-styles">{props.id}</h3>
        <h3 className="indiv-lines-styles">{props.headline}</h3>
        <p className="indiv-lines-styles">( {props.url} )</p>
      </div>
      <div className="headline-styles">
        <div>
          <button onClick={handleAddingUpvotePoint}>^</button>
          <button onClick={handleAddingDownvotePoint}>v</button>
        </div>
        <p className="indiv-lines-styles">{props.points} points </p>
        <p className="indiv-lines-styles">by {props.poster}</p>
        <p className="indiv-lines-styles"> minutes ago{props.time}</p>
        <p className="indiv-lines-styles">|</p>
        <p className="indiv-lines-styles">HIDE</p>
      </div>
      <style jsx>{`
        .article-list-container-styles {
          width: 800px;
          background-color: yellow;
          margin-right: auto;
          margin-left: auto;
          padding-left: 30px;
        }
        .headline-styles {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 0px 20px;
          padding: 15px 0px;
        }
        .indiv-lines-styles {
          margin: -5px 15px;

        }

        `}</style>
    </div>
  );
}

Article.propTypes = {
  headline: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  hide: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired

};

export default connect()(Article);
