import articleListReducer from './../../src/reducers/article-list-reducer';

describe('articleListReducer', ()=> {

  let action;
  const sampleArticleData = {
    headline: 'Weird Tales from Syracuse',
    url: 'www.weirdtales.com',
    points: '44',
    poster: 'Dave Hillbrandt',
    time: 600,
    hide: false,
    id: '1'
  };

  test('Should return state if no action type is recognized', () => {
    expect(articleListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new article data to masterArticleList', () => {
    const { headline, url, points, poster, time, hide, id } = sampleArticleData;
    action = {
      type: 'ADD_ARTICLE',
      headline: headline,
      url: url,
      points: points,
      poster: poster,
      time: time,
      hide: hide,
      id: id
    };
    expect(articleListReducer({}, action)).toEqual({
      [id] : {
        headline: headline,
        url: url,
        points: points,
        poster: poster,
        time: time,
        hide: hide,
        id: id
      }
    });
  });

});
