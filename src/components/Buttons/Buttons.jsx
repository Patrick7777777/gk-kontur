import React from 'react';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function Buttons(props) {
	return (
		<div>
			<NavLink to="/main">
				<Fade left>
					<div className={props.BtMainState} />
				</Fade>
			</NavLink>
			<NavLink to="/services">
				<Fade left>
					<div className={props.BtServicesState} />
				</Fade>
			</NavLink>
			<NavLink to="/solutions">
			<Fade left>
				<div className={props.BtnSolutionsState} />
				</Fade>
			</NavLink>
			<NavLink to="/technologies">
			<Fade left>
				<div className={props.BtnTechnologiesState} />
				</Fade>
			</NavLink>
			<NavLink to="/objects">
			<Fade left>
				<div className={props.BtnObjectsState} />
				</Fade>
			</NavLink>
			<NavLink to="/contact">
			<Fade left>
				<div className={props.BtnContactsState} />
				</Fade>
			</NavLink>
		</div>
	);
}

export default Buttons;
