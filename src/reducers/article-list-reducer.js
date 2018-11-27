const basicHardCodedArticles = {
  1: {
    headline: 'Weird Tales from Syracuse',
    url: 'www.weirdtales.com',
    points: '44',
    poster: 'Dave Hillbrandt',
    time: 600,
    hide: false,
    id: '1'
  },
  2: {
    headline: 'Fluffing your Pillow in Hell',
    url: 'www.comfyhelltimes.com',
    points: '2',
    poster: 'Lucifer Morningstar',
    time: 300,
    hide: false,
    id: '2'
  },
  3: {
    headline: 'Is Water Wet?',
    url: 'www.h2oh.com',
    points: '46',
    poster: 'Mary Smiles',
    time: 200,
    hide: false,
    id: '3'
  },
  4: {
    headline: 'Bagpipes Suck',
    url: 'www.squeeks.com',
    points: '2',
    poster: 'Milo Rumples',
    time: 600,
    hide: false,
    id: '4'
  }
};


export default (state = {basicHardCodedArticles}, action) => {
  switch (action.type) {
  case 'ADD_ARTICLE':
    const { headline, url, points, poster, time, hide, id } = action;

    let newBasic = Object.assign({}, state.basicHardCodedArticles, {
        [id]: {
          headline: headline,
          url: url,
          points: points,
          poster: poster,
          time: time,
          hide: hide,
          id: id
        }
    });
    let newState = Object.assign({}, state, {
      basicHardCodedArticles: newBasic
    })
    return newState;
  default:
    return state;
  }
};
