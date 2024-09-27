const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://conradbyrne.github.io',
  title: 'Conrad Byrne',
}

const about = {
  role: 'Aspiring Software Engineer and Project Manager',
  description1:
    'Hello! Thanks for checking out my portfolio. I am a student at the University of Virginia, majoring in Computer Science and minoring in Entrepreneurship and Business Innovation. I am an aspiring software engineer and product manager passionate about leveraging technology and strategic thinking to drive innovation and solve complex, interdisciplinary problems.',
  description2: 
    'This portfolio highlights some of my projects. Feel free to contact me via my email, conradbyrne44@gmail.com, or see my attached resume and LinkedIn for more information!',
  resume: '/cleanfolio/Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/conrad-byrne-869353233/',
    github: 'https://github.com/conradbyrne',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Personal Portfolio',
    description:
      'A personal portfolio site highlighting my projects and skills with a brief personal introduction.',
    stack: ['React', 'HTML', 'CSS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up

  •	Python, Java, JavaScript, C, C++, R, MATLAB
•	HTML, CSS, SQL, Git, Unix, RDMA

  'Python',
  'Java',
  'C',
  'C++',
  'JavaScript',
  'HTML',
  'CSS',
  'SQL',
  'React',
  'Material UI',
  'Git',
  'Unix',
  'RDMA',
  'ArcGIS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'conradbyrne44@gmail.com',
}

export { header, about, projects, skills, contact }
