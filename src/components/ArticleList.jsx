import React from 'react';
import { connect } from 'react-redux';

function ArticleList(props){
  return (
    <div>
      <h2>Here be the ArticleList</h2>
      {Object.keys(props.articleList).map(fucntion(articletId) {
        var article = props.articleList[articleId];
        return <Article headline={article.headline}
          url={article.url}
          points={article.points}
          poster={article.poster}
          time={article.time}
          hide={article.hide}
          id={article.id}
      })}
    </div>
  );
}

export default connect()(ArticleList);
