import { Switch, Route } from 'react-router-dom';
import '../Buttons/Buttons.css';
import './Menu.css';
import Buttons from '../Buttons/Buttons.jsx';

function Menu(props) {
	return (
		<div>
			<Switch>
				<Route
					exact
					path={'/'}
					render={({ match }) => {
						return (
							<Buttons
								BtMainState="mb_active"
								BtServicesState="yb_no_active"
								BtnSolutionsState="sb_no_active"
								BtnTechnologiesState="tb_no_active"
								BtnObjectsState="ob_no_active"
								BtnContactsState="cb_no_active"
								adaptiveWidth={props.adaptiveWidth}							
							/>
						);
					}}
				/>
				<Route
					path={'/main'}
					render={({ match }) => {
						return (
							<Buttons
								BtMainState="mb_active"
								BtServicesState="yb_no_active"
								BtnSolutionsState="sb_no_active"
								BtnTechnologiesState="tb_no_active"
								BtnObjectsState="ob_no_active"
								BtnContactsState="cb_no_active"
								adaptiveWidth={props.adaptiveWidth}
							/>
						);
					}}
				/>
				<Route
					path={'/services'}
					render={({ match }) => {
						return (
							<Buttons
								BtMainState="mb_no_active"
								BtServicesState="yb_active"
								BtnSolutionsState="sb_no_active"
								BtnTechnologiesState="tb_no_active"
								BtnObjectsState="ob_no_active"
								BtnContactsState="cb_no_active"
								adaptiveWidth={props.adaptiveWidth}
							/>
						);
					}}
				/>
				<Route
					path={'/solutions'}
					render={({ match }) => {
						return (
							<Buttons
								BtMainState="mb_no_active"
								BtServicesState="yb_no_active"
								BtnSolutionsState="sb_active"
								BtnTechnologiesState="tb_no_active"
								BtnObjectsState="ob_no_active"
								BtnContactsState="cb_no_active"
								adaptiveWidth={props.adaptiveWidth}
							/>
						);
					}}
				/>
				<Route
					path={'/technologies'}
					render={({ match }) => {
						return (
							<Buttons
								BtMainState="mb_no_active"
								BtServicesState="yb_no_active"
								BtnSolutionsState="sb_no_active"
								BtnTechnologiesState="tb_active"
								BtnObjectsState="ob_no_active"
								BtnContactsState="cb_no_active"
								adaptiveWidth={props.adaptiveWidth}
							/>
						);
					}}
				/>
				<Route
					path={'/objects'}
					render={({ match }) => {
						return (
							<Buttons
								BtMainState="mb_no_active"
								BtServicesState="yb_no_active"
								BtnSolutionsState="sb_no_active"
								BtnTechnologiesState="tb_no_active"
								BtnObjectsState="ob_active"
								BtnContactsState="cb_no_active"
								adaptiveWidth={props.adaptiveWidth}
							/>
						);
					}}
				/>
				<Route
					path={'/contact'}
					render={({ match }) => {
						return (
							<Buttons
								BtMainState="mb_no_active"
								BtServicesState="yb_no_active"
								BtnSolutionsState="sb_no_active"
								BtnTechnologiesState="tb_no_active"
								BtnObjectsState="ob_no_active"
								BtnContactsState="cb_active"
								adaptiveWidth={props.adaptiveWidth}n
							/>
						);
					}}
				/>
			</Switch>
		</div>
	);
}

export default Menu;