export const config = {
  BASE_API: process.env.REACT_APP_BASE_API || 'http://localhost:4000',
  GITHUB_API: process.env.REACT_APP_GITHUB_API || 'https://api.github.com',
  GITHUB_USER_CONTENT:
    process.env.REACT_APP_GITHUB_USER_CONTENT ??
    'https://raw.githubusercontent.com',
};
