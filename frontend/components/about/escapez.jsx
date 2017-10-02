import React from 'react';
import ReactDOM from 'react-dom';
import PublicNavigation from '../PublicNavigation';

const EscapeZ = () => (
	<div className="">
		<h4 className='temporal'>Escape From ZombieLand: Refresh this page and use the arrow keys to navigate</h4>
		<div id="scoreboard">
			<p>ScoreBoard</p>
			<div id="score_div">
				Score: <span id="score">0</span>
			</div>
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
				<img src="https://res.cloudinary.com/swy/image/upload/v1499749805/images/firefighter.svg" />
			</div>
			<div id="zombie_1" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888102/zombie1_qciih5.jpg" />
			</div>
			<div id="zombie_2" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888102/zombie2_j3r0uu.jpg" />
			</div>
			<div id="zombie_3" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888102/zombie3_sx7du7.jpg" />
			</div>
			<div id="zombie_4" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888103/zombie4_mjlv2n.jpg" />
			</div>
			<div id="zombie_5" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888102/zombie5_ks5skz.jpg" />
			</div>
			<div id="zombie_6" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888102/zombie6_tqebit.jpg"  />
			</div>
			<div id="zombie_7" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888103/zombie7_tfv78a.jpg" />
			</div>
			<div id="zombie_8" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888103/zombie8_stpdlf.webp" />
			</div>
			<div id="zombie_9" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888103/zombie9_hlucxi.jpg" />
			</div>
			<div id="zombie_10" className="zombie">
				<img src="https://res.cloudinary.com/swy/image/upload/v1506888103/zombie10_yk9xq3.jpg" />
			</div>

			<div id="restart_div">
				<button id="restart">
					[press ENTER to restart]
				</button>
			</div>	
		</div>				
	</div>
);

export default EscapeZ;