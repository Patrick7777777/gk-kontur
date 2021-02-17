import React from 'react';
import './PageAbout.css';

function PageAbout(props) {
	return (
		<div className="PageAbout">
						<br />
			<h3>Контакты</h3>
			<br />
			<div>
				<li>
					<span>тел.: +7(495)775-27-37, +7(495)775-27-47</span>
				</li>
				<li>
					<span>e-mail: info@gk-pro.ru</span>
				</li>
				<li>
					<span>www.gk-kontur.pro</span>
				</li>
			</div>
			<br />
			<h3>Адрес</h3>
			<br />
			<div>
				г. Москва, ул. Генерала Белова, д.26
			</div>
			<br />
			<h3>Время работы</h3>
			<br />
			<div>
				Понедельник - Пятница: 10:00 до 19:00
				<br />
				Суббота - Воскресенье - Выходной
			</div>
			<br />
		</div>
	);
}

export default PageAbout;
