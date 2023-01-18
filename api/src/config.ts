import { config as dotenv } from 'dotenv-flow';

dotenv({ default_node_env: 'development', path: `${__dirname}/../` });

export const config = {
  server: {
    port: process.env.SERVER_PORT || '4000',
  },

  api: {
    repo: process.env.GITHUB_REPO_API || 'http://localhost:4000',
  },
};
