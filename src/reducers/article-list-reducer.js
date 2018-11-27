const basicHardCodedArticles = {
  1: {
    headLine: 'Weird Tales from Syracuse',
    url: 'www.weirdtales.com',
    points: '44',
    poster: 'Dave Hillbrandt',
    time: 600,
    hide: false,
    id: '1'
  },
  2: {
    headLine: 'Fluffing your Pillow in Hell',
    url: 'www.comfyhelltimes.com',
    points: '2',
    poster: 'Lucifer Morningstar',
    time: 300,
    hide: false,
    id: '2'
  },
  3: {
    headLine: 'Is Water Wet?',
    url: 'www.h2oh.com',
    points: '46',
    poster: 'Mary Smiles',
    time: 200,
    hide: false,
    id: '3'
  },
  4: {
    headLine: 'Bagpipes Suck',
    url: 'www.squeeks.com',
    points: '2',
    poster: 'Milo Rumples',
    time: 600,
    hide: false,
    id: '4'
  }
}


export default (state = {basicHardCodedArticles}, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      const { headLine, url, points, poster, time, hide, id } = action;

      let newState = Object.assign({}, state, {
        [id]: {
          headLine: headLine,
          url: url,
          points: points,
          poster: poster,
          time: time,
          hide: hide,
          id: id
        }
      });
      return newState;
    default:
      return state;
  }
};
