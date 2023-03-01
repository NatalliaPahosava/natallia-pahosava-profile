import pr1 from './../img/projects/project1.png'
import pr2 from './../img/projects/project2.png'
import pr3 from './../img/projects/project3.png'
import pr4 from  "./../img/projects/project4.png"
import pr5 from './../img/projects/project5.png'

const projects = [
  {
    title: 'NextLife',
    skills:
      'MERN stack (Mongo, Express, React, NodeJS, HTML, CSS, Javascript); Backend deployed in AWS EC2 instance and Frontend in AWS S3 bucket with CI/CD script',
    img: pr1,
    gitHubLink: 'https://github.com/NatalliaPahosava/nextlife-frontend',
    link: 'http://nextlife-np.s3-website-us-east-1.amazonaws.com/',
  },
  {
    title: 'My JS Calculator parseFloat()',
    skills: ' NodeJS, HTML, CSS, Javascript; Deployed in Firebase',
    img: pr2,
    gitHubLink:
      'https://github.com/NatalliaPahosava/calculator-with-parseFloat',
    link: 'https://natalia-pogosova-calcula-deed3.firebaseapp.com/',
  },
  {
    title: 'My JS Calculator mathString()',
    skills: ' NodeJS, HTML, CSS, Javascript; Deployed in Firebase',
    img: pr3,
    gitHubLink: 'https://github.com/NatalliaPahosava/calculator2',
    link: 'https://calculator2-a3d17.firebaseapp.com/',
  },
  {
    title: 'Boca Trivia',
    skills: ' NodeJS, HTML, CSS, Javascript; Deployed in Firebase',
    img: pr4,
    gitHubLink: 'https://github.com/NatalliaPahosava/Boca-trivia',
    link: 'https://boca-trivia.firebaseapp.com/',
  },
  {
    title: 'Height Converter',
    skills: ' NodeJS, HTML, CSS, Javascript; Deployed in Firebase',
    img: pr5,
    gitHubLink: 'https://github.com/NatalliaPahosava/HeightConverter',
    link: 'https://height-converter.web.app/',
  }

]

export default projects