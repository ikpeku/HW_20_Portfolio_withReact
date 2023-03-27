import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'IKPE',
}

const about = {
  photo: aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'DANIEL IKPE',
  role: 'Frontend web and mobile developer',
  description:
    'Self motivated and  highly interested in cutting edge technology, sure as mobile develop and web development.',
  resume: 'https://docs.google.com/document/d/1ZxTUqM66oRLljU7ZhF4tcQZf2Iyqo0h7D58aGD-Tp_w/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/daniel-ikpe-aaa519220/',
    github: 'https://github.com/ikpeku',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Favourite Cryto price tracker',
    description:
      'As users, after authentification user can view the latest price of coins, search for favorite tokens. You are also presented with options to invest in the token of your choice.',
    stack: ['Asyncstorage', 'firebase cloud storage', 'coinegecko crypto API', 'React-Native'],
    sourceCode: 'https://github.com/ikpeku/coinbasepro',
    livePreview: 'https://expo.dev/accounts/aloremmanuel/projects/coinbasepro/builds/fe1ea9ef-63c8-4ea4-8c3e-99cada5136d2',
  },
  {
    name: 'Event Planner',
    description:
      'Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.',
    stack: ['swiper.js', 'html, css, javascript'],
    sourceCode: 'https://github.com/ikpeku/crystal-event',
    livePreview: 'https://ikpeku.github.io/crystal-event/',
  },
  {
    name: 'Investment Platform',
    description:
      'Trading app, user are able to manage their resources by inesting in trading ,time and budget in one company in order to help user to manage their crypto asset.',
    stack: ['html-css-javascript', 'firebase', 'React'],
    sourceCode: 'https://github.com/ikpeku/royal-stock',
    livePreview: 'https://royal-stock.vercel.app/',
  },
  {
    name: 'Ecommerce',
    description:
      'A simple ecommmerce site where user can order favourite product from',
    stack: ['html-css-javascript', 'firebase', 'React'],
    sourceCode: 'https://github.com/ikpeku/cassy-marketplace',
    livePreview: 'https://cassy-decor.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Tailwind',
  'Material UI',
  'Git',
  'Firebase',
  'AWS Amplify'

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ikpedaniel07@gmail.com',
}

export { header, about, projects, skills, contact }
