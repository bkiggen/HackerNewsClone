import React from 'react';
import { connect } from 'react-redux';
import Article from './Article';

function ArticleList(props){


  const newTest = Object.keys(props.articleList.basicHardCodedArticles).map(function(key){
    var ret = parseInt(props.articleList.basicHardCodedArticles[key].points);
    console.log(ret)
    return ret;
  });

  const newTestSorted = newTest.sort(function (a, b){
    return a - b;
  });



  return (
    <div>
      {newTestSorted.map(function(articleId) {
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
