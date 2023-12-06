import { RouterProvider } from 'react-router-dom';
import router from './routes/web';

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
