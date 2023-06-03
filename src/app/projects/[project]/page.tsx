import Image from "next/image";
import { getProject } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

type Props = {
    params: {project: string};
};

export default async function Project ({ params }: Props ) {
    const slug  = params.project;
    const project = await getProject(slug);

    return (
        <div>
            <h2>{project.name}</h2>
            <div>
                <PortableText value = {project.content} />
                </div>
            <a
            href={project.url}
            title="Pinterest"
            target="_blank"
            rel="noopner noreferrer"
            >
                Go to Pinterest
            </a>
            <Image 
            src={project.image}
            alt={project.name}
            width={500}
            height={500}
            />
            <p>hellohello</p>
            <Link href="/" >Home</Link>
        </div>
    )
}