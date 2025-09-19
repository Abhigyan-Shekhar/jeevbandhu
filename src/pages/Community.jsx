import React, { useState } from 'react';
import { forumPosts } from '../data/mockData';
import { MessageSquare, ThumbsUp, Search, Plus } from 'lucide-react';

const Community = () => {
  const [filter, setFilter] = useState('all');
  const [showNewPost, setShowNewPost] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Farmer Community Forum</h2>
          <button
            onClick={() => setShowNewPost(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Post
          </button>
        </div>
        
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
          <div className="flex space-x-2">
            {['all', 'disease', 'feed', 'breeding'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg capitalize ${
                  filter === cat ? 'bg-green-600 text-white' : 'bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Forum Posts */}
      {forumPosts
        .filter(post => filter === 'all' || post.category === filter)
        .map(post => (
          <ForumPost key={post.id} post={post} />
        ))}

            {/* New Post Modal */}
      {showNewPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h3 className="text-xl font-semibold mb-4">Create New Post</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Post title..."
                className="w-full p-3 border rounded-lg"
              />
              <select className="w-full p-3 border rounded-lg">
                <option value="">Select category...</option>
                <option value="disease">Disease</option>
                <option value="feed">Feed</option>
                <option value="breeding">Breeding</option>
                <option value="general">General</option>
              </select>
              <textarea
                placeholder="Describe your question or share your experience..."
                className="w-full p-3 border rounded-lg h-32"
              />
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowNewPost(false)}
                  className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const ForumPost = ({ post }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [upvoted, setUpvoted] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.content}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.timestamp).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span className="bg-gray-100 px-2 py-1 rounded capitalize">{post.category}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-4 pt-4 border-t space-x-4">
        <button
          onClick={() => {
            setUpvoted(!upvoted);
          }}
          className={`flex items-center space-x-2 ${upvoted ? 'text-green-600' : 'text-gray-600'}`}
        >
          <ThumbsUp className={`w-5 h-5 ${upvoted ? 'fill-current' : ''}`} />
          <span>{post.upvotes + (upvoted ? 1 : 0)}</span>
        </button>
        <button
          onClick={() => setShowReplies(!showReplies)}
          className="flex items-center space-x-2 text-gray-600"
        >
          <MessageSquare className="w-5 h-5" />
          <span>{post.replies.length} replies</span>
        </button>
      </div>

      {showReplies && (
        <div className="mt-4 space-y-3">
          {post.replies.map((reply, idx) => (
            <div key={idx} className="bg-gray-50 p-3 rounded-lg ml-8">
              <p className="text-sm font-semibold">{reply.author}</p>
              <p className="text-sm text-gray-600 mt-1">{reply.content}</p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(reply.timestamp).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Community;