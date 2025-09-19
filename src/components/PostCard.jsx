import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, AlertTriangle, Info, DollarSign } from 'lucide-react';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const getTypeIcon = () => {
    switch (post.type) {
      case 'alert':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'scheme':
        return <DollarSign className="w-5 h-5 text-green-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-4">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <h3 className="font-semibold text-gray-900">{post.author}</h3>
            <p className="text-sm text-gray-500">{post.location} • {new Date(post.timestamp).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="flex items-center">
          {getTypeIcon()}
          <span className="ml-2 text-sm text-gray-500 capitalize">{post.animalType}</span>
        </div>
      </div>
      
      <p className="text-gray-800 mb-4">{post.content}</p>
      
      <div className="flex items-center justify-between pt-4 border-t">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-2 ${liked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500`}
        >
          <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
          <span>{likes}</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
          <MessageCircle className="w-5 h-5" />
          <span>{post.comments}</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500">
          <Share2 className="w-5 h-5" />
          <span>{post.shares}</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;