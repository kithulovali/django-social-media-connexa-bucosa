import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { Avatar } from './ui/avatar';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface PostCardProps {
  post: {
    id: number;
    content: string;
    image?: string;
    likes: number;
    comments: number;
    shares: number;
    timestamp: string;
    isLiked: boolean;
  };
  onLike: (id: number) => void;
  onComment: (id: number) => void;
  onShare: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  onLike,
  onComment,
  onShare,
  onEdit,
  onDelete
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Card className="bg-[#272932] rounded-xl border-none mb-4">
      <CardContent className="p-4 sm:p-6">
        {/* Post Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
              <img
                className="object-cover w-full h-full"
                alt="User profile"
                src="/rectangle-6472.png"
              />
            </Avatar>
            <div>
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-white text-sm sm:text-base">
                Joel Graphiste
              </h3>
              <p className="font-['Montserrat',Helvetica] font-normal text-[#ffffff99] text-xs sm:text-sm">
                {post.timestamp}
              </p>
            </div>
          </div>
          
          <div className="relative">
            <Button
              onClick={() => setShowMenu(!showMenu)}
              className="w-8 h-8 rounded-full bg-transparent hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-orange-500/20 p-0"
            >
              <MoreHorizontal className="w-4 h-4 text-white" />
            </Button>
            
            {showMenu && (
              <div className="absolute right-0 top-10 bg-[#1a1c26] rounded-lg shadow-lg border border-[#3a3d47] z-10 min-w-[120px]">
                <button
                  onClick={() => {
                    onEdit(post.id);
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-white text-sm hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-orange-500/20 transition-all duration-200"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button
                  onClick={() => {
                    onDelete(post.id);
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-red-400 text-sm hover:bg-red-500/20 transition-all duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Post Content */}
        <div className="mb-4">
          <p className="font-['Montserrat',Helvetica] font-normal text-white text-sm sm:text-base leading-relaxed mb-3">
            {post.content}
          </p>
          
          {post.image && (
            <img
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg"
              alt="Post content"
              src={post.image}
            />
          )}
        </div>

        {/* Post Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-[#3a3d47]">
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => onLike(post.id)}
              className={`flex items-center gap-2 transition-all duration-200 ${
                post.isLiked 
                  ? 'text-red-500' 
                  : 'text-[#ffffff99] hover:text-red-400'
              }`}
            >
              <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
              <span className="font-['Montserrat',Helvetica] font-medium text-sm">
                {post.likes}
              </span>
            </button>
            
            <button
              onClick={() => onComment(post.id)}
              className="flex items-center gap-2 text-[#ffffff99] hover:text-blue-400 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-['Montserrat',Helvetica] font-medium text-sm">
                {post.comments}
              </span>
            </button>
            
            <button
              onClick={() => onShare(post.id)}
              className="flex items-center gap-2 text-[#ffffff99] hover:text-orange-400 transition-all duration-200"
            >
              <Share2 className="w-5 h-5" />
              <span className="font-['Montserrat',Helvetica] font-medium text-sm">
                {post.shares}
              </span>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};