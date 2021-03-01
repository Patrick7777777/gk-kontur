import React from 'react';
import './PageObjects.css';
import p1 from '../../../images/objects/_1.png';
import p2 from '../../../images/objects/_2.png';
import p3 from '../../../images/objects/_3.png';
import p4 from '../../../images/objects/_4.png';
import p5 from '../../../images/objects/_5.png';
import p6 from '../../../images/objects/_6.png';
import p7 from '../../../images/objects/_7.png';
import p8 from '../../../images/objects/_8.png';
import p9 from '../../../images/objects/_9.png';
import Zoom from 'react-reveal/Zoom';

function PageObjects(props) {
	return (
		<Zoom>
			<div className="PageObjects">
				<h3>Наши работы</h3>
				<br />
				<img src={p1} alt="" />
				<br />
				<br />
				Гостиничный комплекс “Измайлово - Бета” (5 конференц-залов), г. Москва
				<br />
				<br />
				<br />
				<br />
				<img src={p2} alt="" />
				<br />
				<br />
				VIP зал аэропорта “Внуково”, г. Москва
				<br />
				<br />
				<br />
				<br />
				<img src={p3} alt="" />
				<br />
				<br />
				Сеть магазинов “Холдинг Центр” (24 магазина), г. Москва
				<br />
				<br />
				<br />
				<br />
				<img src={p4} alt="" />
				<br />
				<br />
				Торговый центр “XL” г. Мытищи
				<br />
				<br />
				<br />
				<br />
				<img src={p5} alt="" />
				<br />
				<br />
				Торговый центр “XL” г. Мытищи
				<br />
				<br />
				<br />
				<br />
				<img src={p6} alt="" />
				<br />
				<br />
				ТК «Времена года» (система контроля доступа) г. Москва, Поклонная гора
				<br />
				<br />
				<br />
				<br />
				<img src={p7} alt="" />
				<br />
				<br />
				Спортивно-гостинничный комплекс «Красная Поляна», (приемный телевизионный комплекс), Краснодарский край
				<br />
				<br />
				<br />
				<br />
				<img src={p8} alt="" />
				<br />
				<br />
				Администрация г.Анадырь, (приемный телевизионный комплекс)
				<br />
				<br />
				<br />
				<br />
				<img src={p9} alt="" />
				<br />
				<br />
				ОАО НГК «СЛАВНЕФТЬ» г. Москва (аудио видео оборудование центрального офиса компании)
			</div>
		</Zoom>
	);
}

export default PageObjects;
