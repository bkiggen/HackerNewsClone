import React from 'react';
import { connect } from 'react-redux';
import Article from './Article';

function ArticleList(props){
  return (
    <div>
      {Object.keys(props.articleList.basicHardCodedArticles).map(function(articleId) {
        var article = props.articleList.basicHardCodedArticles[articleId];
        return <Article headline={article.headline}
          url={article.url}
          points={article.points}
          poster={article.poster}
          time={article.time}
          hide={article.hide}
          id={article.id}/>;
      })}
    </div>
  );
}

export default connect()(ArticleList);
