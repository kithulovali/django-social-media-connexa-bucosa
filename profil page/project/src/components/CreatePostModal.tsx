import React, { useState } from 'react';
import { X, Image, Smile, MapPin } from 'lucide-react';
import { Avatar } from './ui/avatar';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Input } from './ui/input';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreatePost: (content: string, image?: string) => void;
}

export const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  onClose,
  onCreatePost
}) => {
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState<string>('');

  const handleSubmit = () => {
    if (content.trim()) {
      onCreatePost(content, selectedImage);
      setContent('');
      setSelectedImage('');
      onClose();
    }
  };

  const handleImageSelect = () => {
    // Simulate image selection - in real app, this would open file picker
    const sampleImages = [
      '/csgo-1.svg',
      '/rectangle-6397.png',
      '/received-961764751107787-modified-1.png'
    ];
    const randomImage = sampleImages[Math.floor(Math.random() * sampleImages.length)];
    setSelectedImage(randomImage);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="bg-[#272932] rounded-xl border-none w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <CardHeader className="px-4 sm:px-6 py-4 border-b border-[#3a3d47]">
          <div className="flex items-center justify-between">
            <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-lg">
              Create Post
            </h2>
            <Button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-transparent hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-orange-500/20 p-0"
            >
              <X className="w-5 h-5 text-white" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="px-4 sm:px-6 py-4">
          {/* User Info */}
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="w-10 h-10">
              <img
                className="object-cover w-full h-full"
                alt="User profile"
                src="/rectangle-6472.png"
              />
            </Avatar>
            <div>
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-white text-sm">
                Joel Graphiste
              </h3>
              <p className="font-['Montserrat',Helvetica] font-normal text-[#ffffff99] text-xs">
                Public
              </p>
            </div>
          </div>

          {/* Post Content */}
          <div className="mb-4">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full h-32 bg-transparent border-none resize-none text-white placeholder-[#ffffff99] font-['Montserrat',Helvetica] text-sm focus:outline-none"
            />
            
            {selectedImage && (
              <div className="relative mt-3">
                <img
                  className="w-full h-48 object-cover rounded-lg"
                  alt="Selected content"
                  src={selectedImage}
                />
                <Button
                  onClick={() => setSelectedImage('')}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 p-0"
                >
                  <X className="w-4 h-4 text-white" />
                </Button>
              </div>
            )}
          </div>

          {/* Post Options */}
          <div className="flex items-center justify-between mb-6 p-3 bg-[#1a1c26] rounded-lg">
            <span className="font-['Montserrat',Helvetica] font-medium text-white text-sm">
              Add to your post
            </span>
            <div className="flex items-center gap-2">
              <Button
                onClick={handleImageSelect}
                className="w-8 h-8 rounded-full bg-transparent hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-orange-500/20 p-0"
              >
                <Image className="w-5 h-5 text-green-400" />
              </Button>
              <Button className="w-8 h-8 rounded-full bg-transparent hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-orange-500/20 p-0">
                <Smile className="w-5 h-5 text-yellow-400" />
              </Button>
              <Button className="w-8 h-8 rounded-full bg-transparent hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-orange-500/20 p-0">
                <MapPin className="w-5 h-5 text-red-400" />
              </Button>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={!content.trim()}
            className="w-full h-10 rounded-lg bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold font-['Montserrat',Helvetica] transition-all duration-200"
          >
            Post
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};