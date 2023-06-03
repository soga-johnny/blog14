// import styles from './page.module.scss'
import { getProjects } from '../../sanity/sanity-utils'
// import { Project } from '../../types/project';
import Image from "next/image"
import Link from 'next/link';
// import project from '../../sanity/schemas/project-schema';

export default async function Home() {

  const projects = await getProjects();

  return (
  <div>
    <h1>Welcome to blog14</h1>
    <div>
    {projects.map((project) => (
      <Link href={`/projects/${project.slug}`} key={project._id}>
      <div>
        <div>
        {project.name}
        </div>
      {project.image && (
        
        <Image 
        src={project.image}
        alt={project.name}
        width={250}
        height={200}
        />
      )}
      </div>
      </Link>
    ))}
     </div>
  </div>
  );
}

