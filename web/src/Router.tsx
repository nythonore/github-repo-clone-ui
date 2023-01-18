import { createBrowserRouter } from 'react-router-dom';
import { RepositoryListPage, RepositoryViewPage } from './pages';

export const router = createBrowserRouter([
  {
    path: '',
    element: <RepositoryListPage />,
  },
  {
    path: 'repo',
    element: <RepositoryViewPage />,
  },
]);
