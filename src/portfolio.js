
import cryptoCart from "./components/Access/cryptoCart.png"
import eventPlanning from "./components/Access/eventPlanning.png"
import store from "./components/Access/store.png"
import invest from "./components/Access/invest.png"


const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'IKPE',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'DANIEL IKPE',
  role: 'Frontend web and mobile developer',
  description:
    'Self motivated and  highly interested in cutting edge technology, such as mobile/web development.',
  resume: 'http://bit.ly/3FSBeww',
  social: {
    linkedin: 'https://www.linkedin.com/in/daniel-ikpe-aaa519220/',
    github: 'https://github.com/ikpeku',
  },
}


const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up

  {
    name: 'Event Planner',
    photo: eventPlanning,
    description:
      'Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.',
    stack: ['swiper.js', 'html, css, javascript'],
    sourceCode: 'https://github.com/ikpeku/crystal-event',
    livePreview: 'https://ikpeku.github.io/crystal-event/',
  },
  {
    name: 'Investment Platform',
    photo: invest,
    description:
      'Trading app, user are able to manage their resources by inesting in trading ,time and budget in one company in order to help user to manage their crypto asset.',
    stack: ['html-css-javascript', 'firebase', 'React'],
    sourceCode: 'https://github.com/ikpeku/royal-stock',
    livePreview: 'https://royal-stock.vercel.app/',
  },
  {
    name: 'Ecommerce',
    photo: store,
    description:
      'A simple ecommmerce site where user can order favourite product from',
    stack: ['html-css-javascript', 'firebase', 'React'],
    sourceCode: 'https://github.com/ikpeku/cassy-marketplace',
    livePreview: 'https://cassy-decor.netlify.app/',
  },
]

const projectsMobile = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Favourite Cryto price tracker',
    app: 'Mobile App',
    photo: cryptoCart,
    description:
      'As users, after authentification user can view the latest price of coins, search for favorite tokens. You are also presented with options to invest in the token of your choice.',
    stack: ['Asyncstorage', 'firebase cloud storage', 'coinegecko crypto API', 'React-Native'],
    sourceCode: 'https://github.com/ikpeku/coinbasepro',
    livePreview: 'https://expo.dev/accounts/aloremmanuel/projects/coinbasepro/builds/fe1ea9ef-63c8-4ea4-8c3e-99cada5136d2',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'TypeScript',
  'React Native',
  'React JS',
  'JavaScript',
  'Redux',
  'Git',
  'Firebase',
  'Material UI',
  'AWS Amplify',
  'Tailwind',
  'SASS',
  'CSS',
  'HTML',

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ikpedaniel07@gmail.com',
}

export { header, about, projects, projectsMobile, skills, contact }
