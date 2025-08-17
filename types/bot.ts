export interface Bot {
  id: string;
  name: string;
  username: string;
  description: string;
  shortDescription: string;
  category: BotCategory;
  tags: string[];
  imageUrl: string;
  rating: number;
  usersCount: number;
  isActive: boolean;
  features: string[];
  price?: 'free' | 'premium' | 'freemium';
  createdAt: string;
  updatedAt: string;
}

export type BotCategory = 
  | 'productivity'
  | 'entertainment'
  | 'education'
  | 'utilities'
  | 'social'
  | 'business'
  | 'games'
  | 'news'
  | 'other';

export interface BotFilter {
  category?: BotCategory;
  price?: 'free' | 'premium' | 'freemium';
  search?: string;
  sortBy?: 'name' | 'rating' | 'users' | 'newest';
}
