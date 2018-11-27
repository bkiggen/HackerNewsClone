import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';

function Submit(props) {
  let _headline = null;
  let _url = null;
  let _poster = null;

  function handleNewLink(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type:'ADD_ARTICLE',
      id: v4(),
      headline: _headline.value,
      url: _url.value,
      poster: _poster.value,
      time: '3pm',
      points: 0,
      hide: false
    };
    dispatch(action);
    _headline.value = '';
    _url.value = '';
    _poster.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewLink}>
        <input
          type='text'
          placeholder='Headline'
          id='headline'
          ref={(input) => {_headline = input;}}/>
        <input
          type='text'
          placeholder='URL'
          id='url'
          ref={(input) => {_url = input;}}/>
        <input
          type='text'
          placeholder='Poster'
          id='poster'
          ref={(input) => {_poster = input;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}


export default connect()(Submit);
