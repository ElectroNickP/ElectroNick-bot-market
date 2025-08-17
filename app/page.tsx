'use client';

import { useState, useEffect } from 'react';
import { Bot, BotCategory, BotFilter } from '@/types/bot';
import { bots } from '@/data/bots';
import BotCard from '@/components/BotCard';
import CategoryFilter from '@/components/CategoryFilter';
import SearchBar from '@/components/SearchBar';
import SortDropdown from '@/components/SortDropdown';
import BotModal from '@/components/BotModal';
import { Bot as BotIcon, Sparkles } from 'lucide-react';

export default function Home() {
  const [filteredBots, setFilteredBots] = useState<Bot[]>(bots);
  const [selectedBot, setSelectedBot] = useState<Bot | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState<BotFilter>({
    sortBy: 'newest'
  });

  // Filter and sort bots
  useEffect(() => {
    let result = [...bots];

    // Apply category filter
    if (filters.category) {
      result = result.filter(bot => bot.category === filters.category);
    }

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(bot => 
        bot.name.toLowerCase().includes(searchLower) ||
        bot.description.toLowerCase().includes(searchLower) ||
        bot.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Apply price filter
    if (filters.price) {
      result = result.filter(bot => bot.price === filters.price);
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'users':
        result.sort((a, b) => b.usersCount - a.usersCount);
        break;
      case 'newest':
      default:
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
    }

    setFilteredBots(result);
  }, [filters]);

  const handleCategoryChange = (category?: BotCategory) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const handleSearch = (search: string) => {
    setFilters(prev => ({ ...prev, search }));
  };

  const handleSortChange = (sortBy: string) => {
    setFilters(prev => ({ ...prev, sortBy: sortBy as any }));
  };

  const handleBotClick = (bot: Bot) => {
    setSelectedBot(bot);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBot(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-telegram-light to-gray-100 dark:from-telegram-dark dark:to-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-telegram-primary to-telegram-secondary rounded-xl flex items-center justify-center">
                <BotIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  ElectroNick Bot Market
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Discover amazing Telegram bots
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-telegram-primary" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {filteredBots.length} bots available
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Section */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <CategoryFilter 
                selectedCategory={filters.category} 
                onCategoryChange={handleCategoryChange} 
              />
            </div>
            <div className="lg:col-span-1">
              <SortDropdown 
                currentSort={filters.sortBy || 'newest'} 
                onSortChange={handleSortChange} 
              />
            </div>
          </div>
        </div>

        {/* Bots Grid */}
        {filteredBots.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBots.map((bot) => (
              <BotCard
                key={bot.id}
                bot={bot}
                onClick={() => handleBotClick(bot)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BotIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No bots found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </main>

      {/* Bot Modal */}
      {selectedBot && (
        <BotModal
          bot={selectedBot}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
