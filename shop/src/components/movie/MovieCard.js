import React from 'react';

const MovieCard = () => {
    return (
        <div className="movie-card rounded-lg  p-3 bg-slate-800  ">
        <img src="https://ocwckgy6c1obj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/n/b/nbn_main-poster_2_1_.jpg" 
        alt=""  className=" anh w-full h-[200px] object-cover rounded-lg mb-5" />
        <h3 className="font-bold text-lg text-white mb-3 "> Nhà Bà Nữ</h3>
        <div className="flex items-center justify-between text-xl text-white opacity-50 mb-10">
          <span>2023</span>
          <span>9.2</span>
        </div>
        <button className="px-3 py-6 rounded-lg bg-pink-600">Watch Now</button>
      </div>  
    );
};

export default MovieCard;
