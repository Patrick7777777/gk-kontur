import './App.css';
import './components/Menu/Menu.css';
import './components/Contacts/Contacts.css';
import './components/Article/Article.css';
import './components/Logo/Logo.css';
import './components/Slogan/Slogan.css';
import './components/Header/Header.css';
import './components/Fon/Fon.css';
import './components/Footer/Footer.css';
import './components/Button/Button.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Article from './components/Article/Article';
import Menu from './components/Menu/Menu';
import Contacts from './components/Contacts/Contacts';
import MenuShow from './components/MenuShow/MenuShow';
import ArticleShow from './components/ArticleShow/ArticleShow';
import Slogan from './components/Slogan/Slogan';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

function App() {
	const [ visiblePopup, setVisiblePopup ] = useState(false);
	const toggleVisiblePopup = () => {
		setVisiblePopup(!visiblePopup);
	};

	const resetVisiblePopup = () => setVisiblePopup(false);

	const [ windowWidth, setWindowWidth ] = useState(0);
	const resizeWindow = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(
		() => {
			resizeWindow();
			window.addEventListener('resize', resizeWindow);
			return () => window.removeEventListener('resize', resizeWindow);
		},
		[ windowWidth ]
	);

	let adaptiveWidth = '';
	if (windowWidth > 1024) {
		adaptiveWidth = 'big';
	} else if (windowWidth <= 1024) {
		adaptiveWidth = 'small';
	}

	return (
		<BrowserRouter>
			<div className={`${adaptiveWidth}_Content`}>
				<div className={`${adaptiveWidth}_Fon`} />
				<div className={`${adaptiveWidth}_Header`} />

				<Bounce>
					<div className={`${adaptiveWidth}_Logo`} />
				</Bounce>

				{!(adaptiveWidth === 'small') ? (
					<div className={`${adaptiveWidth}_Slogan`}>
						<Zoom right>
							<Slogan adaptiveWidth={adaptiveWidth} />
						</Zoom>
					</div>
				) : null}

				<div className={`${adaptiveWidth}_Contacts`}>
					<Contacts adaptiveWidth={adaptiveWidth} />
				</div>

				{adaptiveWidth === 'small' ? (
					<div className="Button">
						<button onClick={toggleVisiblePopup}>
							<div />
							<div />
							<div />
						</button>
					</div>
				) : null}

				{!(adaptiveWidth === 'small') ? (
					<Fade left>
						<div className={`${adaptiveWidth}_Menu`}>
							<Menu adaptiveWidth={adaptiveWidth} />
						</div>
					</Fade>
				) : null}

				{!(adaptiveWidth === 'small') ? (
					<Fade right>
						<div className={`${adaptiveWidth}_Article`}>
							<Article
								adaptiveWidth={adaptiveWidth}
								toggleVisiblePopup={toggleVisiblePopup}
								visiblePopup={visiblePopup}
							/>
						</div>
					</Fade>
				) : null}

				{adaptiveWidth === 'small' && visiblePopup ? (
					<Fade left>
						<div className="MenuShow">
							<MenuShow resetVisiblePopup={resetVisiblePopup} />
						</div>
					</Fade>
				) : null}

				{adaptiveWidth === 'small' && !visiblePopup ? (
					<Fade right>
						<div className="ArticleShow">
							<ArticleShow adaptiveWidth={adaptiveWidth} />
						</div>
					</Fade>
				) : null}

				<div className={`${adaptiveWidth}_Footer`} />
			</div>
		</BrowserRouter>
	);
}

export default App;