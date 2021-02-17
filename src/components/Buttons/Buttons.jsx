import React from 'react';
import { NavLink } from 'react-router-dom';

function Buttons(props) {
	return (
		<div>
			<NavLink to="/main">
				<div className={props.BtMainState} />
			</NavLink>
			<NavLink to="/services">
				<div className={props.BtServicesState} />
			</NavLink>
			<NavLink to="/solutions">
				<div className={props.BtnSolutionsState} />
			</NavLink>
			<NavLink to="/technologies">
				<div className={props.BtnTechnologiesState} />
			</NavLink>
			<NavLink to="/objects">
				<div className={props.BtnObjectsState} />
			</NavLink>
			<NavLink to="/contact">
				<div className={props.BtnContactsState} />
			</NavLink>
		</div>
	);
}

export default Buttons;
