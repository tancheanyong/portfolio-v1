import {IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoSass, IoLogoReact, IoLogoNodejs } from 'react-icons/io5';
import { FaBootstrap } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

export const projectsEdit = [{
  img: '',
  title: '',
  desc: '',
  frameworks: [],
  github: '',
  live: ''
}, {
  key: 1,
  title: 'My Portfolio',
  img: require("./img/portfolio.jpg"),
  imgMobile: require("./img/portfoliomobile.jpg"),
  desc: 'This portfolio is built using ReactJS on February 2022.',
  frameworks: [<IoLogoJavascript />, <IoLogoSass />, <IoLogoReact />],
  github: 'https://github.com/tancheanyong/portfolio-v1',
  live: 'https://tancheanyong.github.io/portfolio-v1/'
}, {
  key: 2,
  title: 'Weather JS',
  img: require("./img/weatherjs.png"),
  imgMobile: require("./img/weatherjsmobile.jpg"),
  desc: 'A weather app built using vanilla JavaScript, it allows user to search for the weather conditions in over 200,000 cities around the world, it also shows the local time of the city. Data are fetch from Open Weather Map Api.',
  frameworks: [<IoLogoJavascript />,<IoLogoNodejs />],
  github: 'https://github.com/tancheanyong/weatherjs',
  live: 'https://tcy-weatherjs.herokuapp.com'
}, {
  key: 3,
  title: 'Jenmay',
  img: require("./img/jenmay.jpg"),
  imgMobile: require("./img/jenmaymobile.jpg"),
  desc: 'A website of the Jenmay Sdn Bhd company, built using JavaScript and Owl Carousel, it is currently incomplete and awaits further updates.',
  frameworks: [<IoLogoJavascript />, <IoLogoSass />, <IoLogoNodejs />],
  github: 'https://github.com/tancheanyong/jenmay-new',
  live: 'https://jenmay.herokuapp.com/'
  
  
}, {
  key: 4,
  title: 'Meditations',
  img: require("./img/meditations.png"),
  imgMobile: require("./img/meditations-mobile-front.png"),
  desc: 'This is an application inspired by the Roman Emperor Marcus Aurelius, it serves as a diary to record down users\' advices for themselves, along with their emotions, so they may refer to their own wisdom in times of needs.',
  frameworks: [<FaBootstrap />, <IoLogoNodejs />, <SiMysql />],
  github: 'https://github.com/tancheanyong/meditations',
  live: null
}]
