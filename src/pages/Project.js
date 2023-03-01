import { useParams } from 'react-router-dom'
import BtnGitHub from '../components/btnGitHub/BtnGitHub'

import projects from './../helpers/projectsList'

const Project = () => {
  const { id } = useParams()
  const project = projects[id]

  return (
    <main className='section'>
      <div className='container'>
        <h1 className='title-1'>{project.title}</h1>
        <div className='project-details'>

          <img src={project.img} alt='' className='project-details__cover' />

          <div className='project-details__desc'>
            <a href={project.link} style={{ color: 'red' }}>
              Demo
            </a>
            <p>
              Skills:{project.skills}
            </p>
          </div>

          {project.gitHubLink &&(
            <BtnGitHub link={project.gitHubLink} />)}  
        </div>
      </div>
    </main>
  )
}

export default Project
