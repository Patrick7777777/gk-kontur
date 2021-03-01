import React from 'react';
import './ArticleShow.css';
// import '../Article/pages/PageHome.css'
import { Switch, Route } from 'react-router-dom';
import PageAbout from '../Article/pages/PageAbout';
import PageHome from '../Article/pages/PageHome';
import PageServices from '../Article/pages/PageServices';
import PageTechnologies from '../Article/pages/PageTechnologies';
import PageSolutions from '../Article/pages/PageSolutions';
import PageObjects from '../Article/pages/PageObjects';

function ArticleShow(props) {
    return (
		<div className="article">
			<Switch>
				<Route exact path={'/'} render={props => <PageHome adaptiveWidth={props.adaptiveWidth}/>}  />
				<Route path={'/main'} component={PageHome} />
				<Route path={'/services'} component={PageServices} />
				<Route path={'/technologies'} component={PageTechnologies} />
				<Route path={'/solutions'} component={PageSolutions} />
				<Route path={'/objects'} component={PageObjects} />
				<Route path={'/contact'} component={PageAbout} />
			</Switch>
		</div>
    );
}

export default ArticleShow;