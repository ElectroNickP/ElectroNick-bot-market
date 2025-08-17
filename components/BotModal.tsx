'use client';

import { Bot } from '@/types/bot';
import { X, Star, Users, Tag, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface BotModalProps {
  bot: Bot;
  isOpen: boolean;
  onClose: () => void;
}

export default function BotModal({ bot, isOpen, onClose }: BotModalProps) {
  if (!isOpen) return null;

  const formatUsersCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <div className="relative h-64 bg-gradient-to-br from-telegram-primary to-telegram-secondary rounded-t-2xl">
            <Image
              src={bot.imageUrl}
              alt={bot.name}
              fill
              className="object-cover rounded-t-2xl"
            />
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriceColor(bot.price)}`}>
                {bot.price?.toUpperCase() || 'FREE'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 left-4 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title and Rating */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {bot.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                @{bot.username}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {bot.rating}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {bot.description}
          </p>

          {/* Stats */}
          <div className="flex items-center space-x-6 mb-6">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Users className="w-5 h-5" />
              <span>{formatUsersCount(bot.usersCount)} users</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Calendar className="w-5 h-5" />
              <span>Created {new Date(bot.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {bot.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm flex items-center"
                >
                  <Tag className="w-4 h-4 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {bot.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={() => window.open(`https://t.me/${bot.username}`, '_blank')}
              className="flex-1 bg-telegram-primary hover:bg-telegram-secondary text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Try Bot</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
