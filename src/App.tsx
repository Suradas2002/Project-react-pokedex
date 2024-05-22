import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './page/home';
import DetailPage from './page/detail';
function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detail/:name",
    element: <DetailPage />,
  },
]);
return (
  <div className="bg-[url('/images/list_bg.jpg')] min-h-[100vh]">
        <RouterProvider router={router} />
  </div>
)

}

export default App
