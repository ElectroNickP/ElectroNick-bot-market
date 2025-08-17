'use client';

import { Bot } from '@/types/bot';
import { Star, Users, Tag, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface BotCardProps {
  bot: Bot;
  onClick?: () => void;
}

export default function BotCard({ bot, onClick }: BotCardProps) {
  const getPriceColor = (price?: string) => {
    switch (price) {
      case 'free':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'premium':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'freemium':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const formatUsersCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105"
      onClick={onClick}
    >
      {/* Bot Image */}
      <div className="relative h-48 bg-gradient-to-br from-telegram-primary to-telegram-secondary">
        <Image
          src={bot.imageUrl}
          alt={bot.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriceColor(bot.price)}`}>
            {bot.price?.toUpperCase() || 'FREE'}
          </span>
        </div>
      </div>

      {/* Bot Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {bot.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {bot.rating}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {bot.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {bot.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full flex items-center"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
          {bot.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
              +{bot.tags.length - 3}
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
            <Users className="w-4 h-4" />
            <span className="text-sm">{formatUsersCount(bot.usersCount)}</span>
          </div>
          
          <button 
            className="flex items-center space-x-1 text-telegram-primary hover:text-telegram-secondary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              window.open(`https://t.me/${bot.username}`, '_blank');
            }}
          >
            <span className="text-sm font-medium">Try Bot</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
