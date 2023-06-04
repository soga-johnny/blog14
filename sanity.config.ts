import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
// import project from './sanity/schemas/project-schema';
import schemas from './sanity/schemas';


const config = defineConfig({

    projectId: 'iw2j50mq',
    dataset: 'production',
    title: 'tomato-goose',
    apiVersion: '2023-06-02',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }

})

export default config;