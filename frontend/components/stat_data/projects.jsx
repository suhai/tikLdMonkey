export const myProjects = [
	{
		id: "easthalo",
		tags: 'react redux ruby rails html css sql javascript',
		image: 'https://res.cloudinary.com/swy/image/upload/v1506539090/homepage_s5uxoq.png',
		image_alt: 'easthalo homepage',
		header: 'EastHalo University',
		desc: "This is a single page web application modeled after a university website. It is made up of two main layers; the Landing Page and the LoggedHome Page. Users (mostly students) can sign up for or drop a course. They can add other users as their friends, can buy books or meals, and can access their class schedule, grades / transcripts if professors have awarded them grades. Users can also create posts and comment on any available post in the system. Professors can create courses to teach and create grades for students in their courses.",
		live_url: 'https://easthalo.herokuapp.com/',
		git_url: 'https://github.com/suhai/EastHalo',
		video: '#'
	},

	{
		id: 'tikldmonkey',
		tags: 'react redux ruby rails javascript sql',
		image: 'https://res.cloudinary.com/swy/image/upload/v1507852964/tikldmonkey_mc2lgi_ztoqk0.png',
		image_alt: 'tikldmonkey homepage',
		header: 'tikLdMonkey',
		desc: "This is the app you are currrenly accessing. It is a single page Content Management System web application designed to host and manage my personal portfolio. It was initially built to allow multiple user access but I have since limited usage to just myself and a few other people because I now store other personal data/files in the database. It is made up of Trivia section, Job Appications sections, and Personal Data sections, and it is my plan to continously improve its data integrity as I continue learning.",
		live_url: 'https://www.tikldmonkey.com/#/',
		git_url: 'https://github.com/suhai/tikLdMonkey',
		video: 'https://player.vimeo.com/video/228470177'
	},

	{
		id: "murmuralley",
		tags: 'ruby rails html javascript css',
		image: 'https://res.cloudinary.com/swy/image/upload/v1507852964/murmur1_i6zdm2_dyqxrk.png',
		image_alt: 'murmuralley homepage',
		header: 'MurmurAlley',
		desc:"This is a simple clone of the frontpage of the NYT. The application was made as a practice for page organization and formatting and styling. It is basically a Ruby / Rails project with a bunch of partial pages that are reused within bigger pages as necessary. By splitting the pages into partials I was able to write fewer code, making use of rendering the partials inside bigger pages. There is currently no activity between the frontend and the database but I may turn it into a fullstack application in the future.",
		live_url: 'https://murmuralley.herokuapp.com/',
		git_url: 'https://github.com/suhai/murmuralley',
		video: 'https://player.vimeo.com/video/228469665' 
	},

	{
		id: "cheekchubby",
		tags: 'css ruby rails sql',
		image: 'https://res.cloudinary.com/swy/image/upload/v1507852963/cheek5_x393hf_ijggwm.png',
		image_alt: 'cheekchubby homepage',
		header: 'cheekChubby',
		desc: "This is a Ruby on Rails application that was designed for users to access posts by categories. In addition there is a section for Photos where users can scroll through photos by category. Users can search for keywords to narrow down the list of displayed posts or photos in alphabetical order. Users have the option to just read the articles, browse through images, or create their own posts and or upload images for other users to access. There is currently no permanent storage for images uploaded on the site so any images uploaded will be erased anytime my heroku dyno is restarted.",
		live_url: 'https://cheekchubby.herokuapp.com/',
		git_url: 'https://github.com/suhai/cheekchubby',
		video: 'https://player.vimeo.com/video/228469649'
	},

	{
		id: "xcape_from_zombieland",
		tags: 'jquery html css',
		image: 'https://res.cloudinary.com/swy/image/upload/v1506888103/zombie9_hlucxi.jpg',
		image_alt: 'exacpe_from_zombieland homepage',
		header: 'Xcape From Zombieland',
		desc: "This is a jQuery + HTML + CSS single player game that simulates a zombie apocalypse. The player is a human trapped in an abandoned city overtaken by zombies. The player has to navigate their way through a sea of slow moving zombies who gradually gain speed with time. There are two sets of zombies; those that kill the human on contact (collison in this game) and those that only shove him/her aside (point subtraction in this game). In addition to having to avoid the zombies, there are snipers shooting at the zombies and the player has to avoid getting hit by stray bullets. In this game zombies move only from north to south while bullets are fired from east-west and from west-east. Being hit by a blue bullet deducts 1 point from the player's score, being shoved by a zombie deducts 5 points, being hit by a red bulet deducts 10 points, while being captured by a zombie or having a score below -100 points means game over. The player uses the arrow keys to move the human left, right, up, and down. The speed of the bullets and zombies gradully increases until game over. You can play this game right here on the homepage button 'Zombie Game'",
		live_url: '#',
		git_url: 'https://github.com/suhai/xcape_from_zombieland',
		video: '#'
	},

	{
		id: "playground",
		tags: 'jquery html css javascript',
		image: 'https://res.cloudinary.com/swy/image/upload/v1507852963/mavis-6-1580_suw4ek.jpg',
		image_alt: 'playground homepage',
		header: 'Play Ground',
		desc: "This is a dummy project that I use as a launching pad for new projects. It is constantly changing based on what my plans are at any given time.",
		live_url: '#',
		git_url: 'https://github.com/suhai/playGround',
		video: '#'
	}
]