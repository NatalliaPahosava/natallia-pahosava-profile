import { useParams } from 'react-router-dom'
import BtnGitHub from '../components/btnGitHub/BtnGitHub'
import img from './../img/projects/project1.png'
import projects from './../helpers/projectsList'

const Project = () => {
  const { id } = useParams()
  const project = projects[id]

  return (
    <main className='section'>
      <div className='container'>
        <div className='project-details'>
          <h1 className='title-1'>{project.title}</h1>
          <img src={img} alt='' className='project-details__cover' />

          <div className='project-details__desc'>
            <a href={project.link} style={{ color: 'red' }}>
              Demo
            </a>
            <p>
              Skills
              <br />
              {project.skills}
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
