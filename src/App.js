
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Lay from './components/routelayout'
import Men from './components/men/men'
import Women from './components/women/women'
import Kids from './components/kids/kids'
import Login from './components/login/login'
import Register from './components/register/register'
import Home from './home/home'
import Tshirt from './components/tshirts/tshirt'
import T1 from './components/t1/t1'
import Shirt from './components/shirts/shirt'
import S1 from './components/s1/s1'
import Wt from './components/wt/wt'
import V1 from './components/v1/v1'
import Kt from './components/kt/kt'
import Ky from './components/ky/ky'
function App() {
  const a=createBrowserRouter([
    {
      path:"/",
      element:<Lay/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
      {
        path:"/Login",
        element:<Login/>

      },
      {
        path:"/Register",
        element:<Register/>
      },
      {
        path:"/Men",
        element:<Men/>,
        
      },{
        path:'/Kids/tshirts/t1',
        element:<Ky/>

      },
      {
        path:'/Women/Ethnicwear',
        element:<Wt/>
      },
      {
        path:'/women/Ethnicwear/v1',
        element:<V1/>
      },
      {
        path:"/Women",
        element:<Women/>
      },{
        path:'/Men/shirts/s1',
        element:<S1/>
      }
      ,
      {
        path:'/Kids/tshirts',
        element:<Kt/>
      },
      {
        path:'/Men/tshirts',
        element:<Tshirt/>
      },
      {
        path:'/Men/tshirts/t1',
        element:<T1/>
      },
      {
        path:'/Men/shirts',
        element:<Shirt/>

      },
      {
        path:"/kids",
        element:<Kids/>
      }]
    }
  ]);
  return (
    <div >
      <RouterProvider router={a}/>
    </div>
  );
}

export default App;
