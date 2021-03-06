import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'; 

import App from './App';

import Links from './components/Links';
import LinksNew from './components/LinksNew';
import LinksEdit from './components/LinksEdit';

import Tags from './components/Tags';
import TagsNew from './components/TagsNew';
import TagsEdit from './components/TagsEdit';

import Categories from './components/Categories';
import CategoriesNew from './components/CategoriesNew';
import CategoriesEdit from './components/CategoriesEdit';

ReactDOM.render(
	<Router history={hashHistory}>
    <Route component={App} path="/">
      <IndexRoute component={Links} />
      <Route path="tags" component={Tags}/>
      <Route path="links" component={Links}/>
      <Route path="links/new" component={LinksNew}/>
      <Route path="links/edit" component={LinksEdit}/>
      <Route path="tags/new" component={TagsNew}/>
      <Route path="tags/edit" component={TagsEdit}/>
      <Route path="categories" component={Categories} />
      <Route path="categories/new" component={CategoriesNew} />
      <Route path="categories/edit" component={CategoriesEdit} />
    </Route>
  </Router>,
  document.getElementById('root')
);