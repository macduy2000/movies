//import logo from './logo.svg';
//import './App.css';
import './index.scss';
import MovieList from './components/movie/MovieList';
//import MovieCard from './components/movie/MovieCard';
//import {ChartData} from 'chart.js';
//import {SwiperSlide,Swiper} from "swiper/react";
import "swiper/scss";
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
function App() {
return(
  <Fragment>

<header className="header flex justify-center items-center gap-x-5 text-white py-10 mb-10">
<span className="ten text-pink-600 text-xl">Home</span>

<span className="ten text-pink-600  text-xl">Phim mới</span>
<span className="ten text-pink-600  text-xl">Phim lẻ</span> 
<span className="ten text-pink-600  text-xl">Phim bộ</span>
<span className="ten text-pink-600  text-xl">Phim chiếu rạp</span>
<span className="ten text-pink-600  text-xl">Thể loại</span>
<span className="ten text-pink-600  text-xl">Trailer</span>
</header>
<section className="banner h-[500px] page-container">
<div className="w-full h-full rounded-lg relative">
  <img src="https://vcdn1-giaitri.vnecdn.net/2022/12/13/topavatar-1670899954-3990-1670900145.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=QGwDMhFvIKlkqfkzCfLbrA" alt="" 
  className="w-full h-full object-cover rounded-lg" />
  <div className=" absolute w-full left-5 bottom-10">
    <h2 className="font-bold text-white text-4xl mb-3">Avatar : The Way of Water </h2>
  
  <div className="flex items-center gap-x-3 mb-3">
    <span className="px-6 py-2 border font-medium border-white rounded-md  text-white "> Adventure</span>
    <span className="px-6 py-2 border font-medium border-white rounded-md  text-white "> Adventure</span>
    <span className="px-6 py-2 border font-medium border-white rounded-md  text-white "> Adventure</span>
  
  </div>
  <button className= "px-3 py-6 bg-pink-700 rounded-lg text-white font-semibold">Watch Now
  <FontAwesomeIcon icon="fas fa-play-circle" />
  </button>

  </div>
  </div>
  </section>

  <section className="movie-layout h-[200px] page-container pb-10">

  
<h2 className="font-bold text-2xl text-white mb-5 mt-7">Now Playing</h2>
 

  {/* <div className="movie-list grid grid-cols-4 gap-10"> */}
  {/* <div className="movie-list"> */}
 
{/* <MovieCard></MovieCard>  */}
<MovieList></MovieList>


<div className="mb-5 mt-7">
    <h2 className="font-bold text-2xl text-white">Top Rate</h2>
  </div>

  <div className="movie-list grid grid-cols-4 gap-10">
<div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
  <img src="https://ocwckgy6c1obj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/n/b/nbn_main-poster_2_1_.jpg" 
  alt=""  className="anh w-full h-[200px] object-cover rounded-lg mb-5" />
  <h3 className="font-bold text-lg text-white mb-3 "> Nhà Bà Nữ</h3>
  <div className="flex items-center justify-between text-xl text-white opacity-50 mb-10">
    <span>2023</span>
    <span>9.2</span>
  </div>
  <button className="px-3 py-6 rounded-lg bg-pink-600">Watch Now</button>
</div>  
</div>

<menu >
  <nav className="ml-[-180px] mt-[-1620px] w-[180px] bg-slate-900">
    <ul className="justify-center text-center  text-white text-xl  ">
      <li className="men h-[50px]  ">Trang chủ</li>
      <li className="men h-[50px]  ">Trang chủ</li>
      <li className="men h-[50px] ">Trang chủ</li>
      <li className="men h-[50px] ">Trang chủ</li>
      <li className="men h-[50px] ">Trang chủ</li>
      <li className="men h-[50px] ">Trang chủ</li>
      <li className="men h-[50px] ">Trang chủ</li>
      <li className="men h-[50px] ">Trang chủ</li>
      <li className="men h-[50px] ">Trang chủ</li>
      <li className="men h-[50px] ">Trang chủ</li>
    </ul>
  </nav>
</menu>

</section>


  </Fragment>
);
  /* // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>

  //       <menu className="App-menu">
  //         <nav>

  //         </nav>
  //       </menu>
  //       <a */
  /* //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a> */
  /* //     </header> */
  //</div>

}

// const cfg = {
//   type: 'bar',
//   data: {
//     datasets: [{
//       data: [20, 10],
//     }],
//     labels: ['a', 'b']
//   }
// }

export default App;
