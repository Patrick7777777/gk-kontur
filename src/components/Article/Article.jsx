import React from 'react';
import './Article.css';
import { Switch, Route } from 'react-router-dom';
import PageAbout from './pages/PageAbout';
import PageHome from './pages/PageHome';
import PageServices from './pages/PageServices';
import PageTechnologies from './pages/PageTechnologies';
import PageSolutions from './pages/PageSolutions';
import PageObjects from './pages/PageObjects';

function Article(props) {
	return (
		<div className="article">
			<Switch>
				<Route exact path={'/'} component={PageHome}/>
				<Route path={'/main'} component={PageHome}/>
				<Route path={'/services'} component={PageServices} />
				<Route path={'/technologies'} component={PageTechnologies} />
				<Route path={'/solutions'} component={PageSolutions} />
				<Route path={'/objects'} component={PageObjects} />
				<Route path={'/contact'} component={PageAbout} />
			</Switch>
		</div>
	);
}

export default Article;
