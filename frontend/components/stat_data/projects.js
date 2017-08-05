export const CheekChubby = [
  {
    id: "1",
    body: "This is a Ruby on Rails application that was designed for users to access posts or Articles on various topics of their interests. In addition there is a section for Photos where users can scroll through photos by category. Users have the option to just read the articles, browse through images, or create their own posts and or upload images for other users to access. To post an article or create a post or upload an image to the photos section, a user would have to sign up and login. Currently, a a logged in user only has Create and Read privilges, with the option to be upgraded to administrator position if they have more content to share and desires to be designated as admin. A wysiwyg editor is made available to help the user format their text in addition to having the ability to uplaod images or videos with the editor. For the posts section, the paperclip gem was used for image uploads while the carrierwave gem was used for image uploads for the photos section. I experimented with persisting uploaded images to AWS database but opted to just rely on heroku's file system to temporarily store images. I am currently working on the comments section. Once that is completed, users should be able to comment on articles / posts and or photos, with references to their credentials stored with their comments in the database. I also plan to configure AWS S3 buckets to store image files uploaded by users from the app, or even probably migrate the entire app from Heroku to AWS.",
    url: 'https://cheekchubby.herokuapp.com/',
    image: '',
    video: 'https://player.vimeo.com/video/228469649'
  }
];
  

export const Kokoveli =[
  {
    id: "2",
    body: "This is not yet in development, but you can ...",
    url: 'https://kokoveli.herokuapp.com/',
    image: '',
    video: ''
  }
];
 

export const MurmurAlley = [
  {
    id: "3",
    body:"This is a simple clone of the NYT except that murmurAlley is a fake city with fake news. The application was made as a practice for page organization and formatting. It is basically a Ruby / Rails project with a bunch of partial pages that are reused and within bigger pages. By splitting the pages into partials I was able to write fewer code, making use of rendering the partials inside bigger pages. There is currently no feature beyond just reading static content. I did however throw in a call to weather API and a simple live clock on the header section. Those two are the only dynamic content but I plan to build the site up further with features for a user to have a paid subscription. I also plan to migrate the entire app to a React/Redux framework in the future.",
    url: 'httpss://murmuralley.herokuapp.com/',
    image: '',
    video: 'https://player.vimeo.com/video/228469665' 
  }
];



export const TikldMonkey = [
  {
    id: "4",
    body: "This is the app you are currrenly accessing. It is a single page Content Management System web application designed to host and manage my personal portfolio and interests, with the hope of extending the features to allow multiple users to manage and track their own individual tasks or interests. It is built on a Rails backend with PostgreSQL database and React/Redux frontend. It is made up of two main layers; an inner area requiring user authentication / sign up and/or sign, and an outer area that is publicly available to all visitors of the site. Currently any logged in user can access any content within the allowed routes to the database except desctructive actions. Users not signed in can only access limited content accessible through the homepage navigation. Sample information from the database is made publicly available to any visitor to read or watch, with more exclusive access reserved for users who sign in to the 'inner' zone. However, a user will not be able to access other users' pages or information. For demonstrational purposes only, a user is granted Create, Read, Update, and Delete privileges for the Categories section of the database. There are six models altogther; User, Trivia, Game, Project, JobApplication, and Category (with a has_many relationship with the Trivia model). I plan to make the user page more fluid to individual user preferences with a user being offered multiple options in choosing the theme of their page, and the ability to enable or disable optional features (yet to be decided on). I plan to add a chat service to the homepage where a visitor can see if I am currently available online to chat or answer questions they may have regarding the website or any genral topic of mutual interest. And possibly extend this feature to all users to chat with each other.",
    url: 'https://tikldmonkey.com/#/',
    image: '',
    video: 'https://player.vimeo.com/video/228469649'
  }
];