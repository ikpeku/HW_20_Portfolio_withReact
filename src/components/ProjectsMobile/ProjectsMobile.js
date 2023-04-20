import uniqid from 'uniqid'
import { projectsMobile } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import '../Projects/Projects.css'

const ProjectsMobile = () => {
  if (!projectsMobile.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects - Mobile App</h2>

      <div className='projects__grid'>
        {projectsMobile.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsMobile
