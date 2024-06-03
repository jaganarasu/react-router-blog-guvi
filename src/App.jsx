import React from 'react';
import NavBar from './Components/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FullStack from './pages/FullStack';
import CyberSecurity from './pages/CyberSecurity';
import DataScience from './pages/DataScience';
import Carrer from './pages/Carrer';
import PageNotfound from './pages/PageNotfound';

const App = () => {
  const data=[
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js.png",
      Title:"Full Stack Development",
      Date:"May 28, 2024",
      Content:"Use ReactJS to Fetch and Display Data from API – 5 Simple Steps "
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs-768x432.png",
      Title:"Full Stack Development",
      Date:"May 27, 2024",
      Content:"How to Render an Array of Objects in React? [in 3 easy steps]  "
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js.png",
      Title:"Full Stack Development",
      Date:"May 28, 2024",
      Content:"Use ReactJS to Fetch and Display Data from API – 5 Simple Steps "
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs-768x432.png",
      Title:"Full Stack Development",
      Date:"May 27, 2024",
      Content:"How to Render an Array of Objects in React? [in 3 easy steps]  "
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js.png",
      Title:"Full Stack Development",
      Date:"May 28, 2024",
      Content:"Use ReactJS to Fetch and Display Data from API – 5 Simple Steps "
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs-768x432.png",
      Title:"Full Stack Development",
      Date:"May 27, 2024",
      Content:"How to Render an Array of Objects in React? [in 3 easy steps]  "
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js.png",
      Title:"Full Stack Development",
      Date:"May 28, 2024",
      Content:"Use ReactJS to Fetch and Display Data from API – 5 Simple Steps "
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs-768x432.png",
      Title:"Full Stack Development",
      Date:"May 27, 2024",
      Content:"How to Render an Array of Objects in React? [in 3 easy steps]  "
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js.png",
      Title:"Full Stack Development",
      Date:"May 28, 2024",
      Content:"Use ReactJS to Fetch and Display Data from API – 5 Simple Steps "
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs-768x432.png",
      Title:"DataScience",
      Date:"May 27, 2024",
      Content:"How to Render an Array of Objects in React? [in 3 easy steps]  "
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js.png",
      Title:"DataScience",
      Date:"May 28, 2024",
      Content:"Use ReactJS to Fetch and Display Data from API – 5 Simple Steps "
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs-768x432.png",
      Title:"CyberSecurity",
      Date:"May 27, 2024",
      Content:"How to Render an Array of Objects in React? [in 3 easy steps]  "
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js.png",
      Title:"CyberSecurity",
      Date:"May 28, 2024",
      Content:"Use ReactJS to Fetch and Display Data from API – 5 Simple Steps "
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs-768x432.png",
      Title:"Carrer",
      Date:"May 27, 2024",
      Content:"How to Render an Array of Objects in React? [in 3 easy steps]  "
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs-768x432.png",
      Title:"Carrer",
      Date:"May 27, 2024",
      Content:"How to Render an Array of Objects in React? [in 3 easy steps]  "
    },
    
     
  ]

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/FullStackDevelopment' element={<FullStack data={data} />} />
        <Route path='/CyberSecurity' element={<CyberSecurity data={data} />} />
        <Route path='/DataScience' element={<DataScience data={data} />} />
        <Route path='/Carrer' element={<Carrer data={data} />} />
        <Route path='*' element={<PageNotfound />} />
      </Routes>
    </div>
  );
};

export default App;