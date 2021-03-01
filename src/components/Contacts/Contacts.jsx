import React from 'react';
import HeadShake from 'react-reveal/HeadShake';

function Contacts(props) {
	return (
		<div>
			<HeadShake>
			<div className={`${props.adaptiveWidth}_contacts`}>
				<li className={`${props.adaptiveWidth}_phones`}>
					<span>тел.: +7(495)775-27-37, +7(495)775-27-47</span>
				</li>
				<li className="email">
					<span>e-mail: info@gk-pro.ru</span>
				</li>
				<li className="www">
					<span>www.gk-kontur.pro</span>
				</li>
			</div>
			</HeadShake>

		</div>
	);
}

export default Contacts;
