import './App.css';

// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

// fontAwesome
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Landing from './components/Layout/Landing/Landing';
import About from './components/Layout/Pages/About/About';
import Portfolio from './components/layout/Pages/Portfolio/Portfolio';
import Contact from './components/layout/Pages/Contact/Contact';
import Notfound from './components/Shared/NotFound/Notfound';

function App() {
  const routes = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Landing /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <Notfound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
