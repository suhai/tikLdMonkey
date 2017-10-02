import React from 'react';
import ReactDOM from 'react-dom';
import PublicNavigation from '../PublicNavigation';

const EscapeZ = () => (
	<div className="swy-page-body">
		<header className='home-header'>
			<PublicNavigation />
		</header>
		<h3 className='temporal'>Game Time</h3>
		<div id="instruction">
			<p>PlaceHolder</p>
		</div>
		
		<div id="container">
		<div id="bullet_1" className="bullet"></div>
			<div id="bullet_2" className="bullet"></div>
			<div id="bullet_3" className="bullet"></div>
			<div id="bullet_4" className="bullet"></div>
			<div id="bullet_5" className="bullet"></div>
			<div id="bullet_6" className="bullet"></div>
			<div id="bullet_7" className="bullet"></div>
			<div id="bullet_8" className="bullet"></div>
			<div id="bullet_9" className="bullet"></div>
			<div id="bullet_10" className="bullet"></div>
			<div id="human" className="human">
				<img src="https://res.cloudinary.com/swy/image/upload/v1499749805/images/firefighter.svg" alt="" />
			</div>
			<div id="zombie_1" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888103/zombie9_hlucxi.jpg" alt="" />
			</div>
			<div id="zombie_2" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888103/zombie8_stpdlf.webp" alt="" />
			</div>
			<div id="zombie_3" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888103/zombie7_tfv78a.jpg" alt="" />
			</div>
			<div id="zombie_4" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888103/zombie9_hlucxi.jpg" alt="" />
			</div>
			<div id="zombie_5" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888103/zombie8_stpdlf.webp" alt="" />
			</div>
			<div id="zombie_6" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888103/zombie7_tfv78a.jpg" alt="" />
			</div>
			<div id="zombie_7" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888103/zombie9_hlucxi.jpg" alt="" />
			</div>
			<div id="zombie_8" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888103/zombie8_stpdlf.webp" alt="" />
			</div>
			<div id="zombie_9" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888103/zombie7_tfv78a.jpg" alt="" />
			</div>
			<div id="zombie_10" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888103/zombie7_tfv78a.jpg" alt="" />
			</div>

			<div id="restart_div">
				<button id="restart">Restart
					<small className="small_text">(press Enter)</small>
				</button>
			</div>
		
			<div id="scoreboard">
				<p>ScoreBoard</p>
				<div id="score_div">
					Score: <span id="score">0</span>
				</div>
			</div>
		</div>				
	</div>
);

export default EscapeZ;