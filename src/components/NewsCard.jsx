import React from 'react';
import { FaBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const NewsCard = (props ={}) => {
    const { news } = props || {};
  const {
    title,
    author,
    details,
    rating,
    total_view,
    thumbnail_url,
    others_info: { is_trending },
  } = news;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-gray-900 font-semibold">{author.name}</p>
            <p className="text-gray-500 text-sm">{author.published_date.split(' ')[0]}</p>
          </div>
        </div>
        <div className="flex space-x-3 text-gray-500">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>

      <h2 className="px-4 py-2 text-xl font-bold text-gray-900">
        {title}
      </h2>

      <img src={thumbnail_url} alt="News Thumbnail" className="w-full h-48 object-cover" />

      <div className="p-4 text-gray-600 text-sm">
        <p>
          {details.length > 120 ? `${details.substring(0, 120)}...` : details}
          <span className="text-red-500 font-semibold cursor-pointer"> Read More</span>
        </p>
      </div>

      <div className="p-4 flex items-center justify-between border-t">
        <div className="flex items-center space-x-2 text-yellow-500">
          <FaStar />
          <span className="font-semibold text-gray-900">{rating.number}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>

      {is_trending && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-md text-xs">
          Trending
        </div>
      )}
    </div>
  );
};

export default NewsCard;
