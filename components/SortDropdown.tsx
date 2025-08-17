'use client';

import { ChevronDown, SortAsc } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface SortOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface SortDropdownProps {
  onSortChange: (sortBy: string) => void;
  currentSort: string;
}

const sortOptions: SortOption[] = [
  { value: 'newest', label: 'Newest First', icon: '🆕' },
  { value: 'name', label: 'Name A-Z', icon: '📝' },
  { value: 'rating', label: 'Highest Rated', icon: '⭐' },
  { value: 'users', label: 'Most Popular', icon: '👥' },
];

export default function SortDropdown({ onSortChange, currentSort }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentOption = sortOptions.find(option => option.value === currentSort) || sortOptions[0];

  return (
    <div className="relative mb-6" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl text-left text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center space-x-2">
          <SortAsc className="w-4 h-4 text-gray-500" />
          <span className="font-medium">Sort by:</span>
          <span className="text-gray-600 dark:text-gray-400">
            {currentOption.icon} {currentOption.label}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg z-10">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onSortChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2 ${
                option.value === currentSort
                  ? 'bg-telegram-primary text-white'
                  : 'text-gray-900 dark:text-white'
              } ${option.value === sortOptions[0].value ? 'rounded-t-xl' : ''} ${
                option.value === sortOptions[sortOptions.length - 1].value ? 'rounded-b-xl' : ''
              }`}
            >
              <span>{option.icon}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
