import { IoClose, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoSass, IoLogoReact, IoLogoNodejs, IoLogoGithub, IoCaretForwardCircleOutline } from 'react-icons/io5';

export const projectsEdit = [{
  img: '',
  title: '',
  desc: '',
  frameworks: [],
  github: '',
  live: ''
}, {
  key: 1,
  title: 'Weather JS',
  img: require("./img/weatherjs.png"),
  imgMobile: require("./img/weatherjsmobile.jpg"),
  desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, amet. Repellendus modi voluptatem quia hic accusamus alias corporis ab inventore dolor ex, saepe, qui officia illo laboriosam soluta voluptates, distinctio placeat quasi aspernatur. Aliquid iure atque tenetur minima expedita! At inventore animi a eveniet minus perferendis iste nostrum temporibus sequi?',
  frameworks: [<IoLogoJavascript />],
  github: 'https://github.com',
  live: 'https://tcy-weatherjs.herokuapp.com'
}, {
  key: 2,
  title: 'Jenmay',
  img: require("./img/jenmay.jpg"),
  imgMobile: require("./img/jenmaymobile.jpg"),
  desc: 'Lntore animi a eveniet minus perferendis iste nostrum temporibus sequi?',
  frameworks: [<IoLogoJavascript />, <IoLogoSass />],
  github: 'https://github.com',
  live: 'https://tcy-weatherjs.herokuapp.com'
}, {
  key: 3,
  title: 'My Portfolio',
  img: require("./img/portfolio.jpg"),
  imgMobile: require("./img/portfoliomobile.jpg"),
  desc: 'Lntore animi a eveniet minus perferendis iste nostrum temporibus sequi?',
  frameworks: [<IoLogoJavascript />, <IoLogoSass />, <IoLogoReact />],
  github: 'https://github.com',
  live: 'https://tcy-weatherjs.herokuapp.com'
}]
