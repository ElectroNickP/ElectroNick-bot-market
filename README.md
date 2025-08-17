# ElectroNick Bot Market

Beautiful Telegram Web App for showcasing and discovering Telegram bots. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Beautiful UI**: Modern, responsive design optimized for Telegram Web App
- 🔍 **Advanced Search**: Search bots by name, description, or tags
- 📂 **Category Filtering**: Filter bots by category (Productivity, Games, Education, etc.)
- 📊 **Smart Sorting**: Sort by newest, rating, popularity, or name
- 📱 **Mobile Optimized**: Perfect experience on mobile devices
- 🌙 **Dark Mode**: Automatic dark mode support
- ⚡ **Fast Performance**: Built with Next.js for optimal performance

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Telegram Integration**: Telegram Web App SDK

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ElectroNick-bot-market
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── BotCard.tsx        # Bot card component
│   ├── BotModal.tsx       # Bot detail modal
│   ├── CategoryFilter.tsx # Category filter
│   ├── SearchBar.tsx      # Search component
│   └── SortDropdown.tsx   # Sort dropdown
├── data/                  # Static data
│   └── bots.ts           # Bot catalog data
├── types/                 # TypeScript types
│   └── bot.ts            # Bot interface definitions
└── public/               # Static assets
```

## Customization

### Adding New Bots

Edit `data/bots.ts` to add your bots:

```typescript
{
  id: 'unique-id',
  name: 'Bot Name',
  username: 'bot_username',
  description: 'Detailed description...',
  shortDescription: 'Short description...',
  category: 'productivity',
  tags: ['tag1', 'tag2'],
  imageUrl: 'https://example.com/image.jpg',
  rating: 4.8,
  usersCount: 10000,
  isActive: true,
  features: ['Feature 1', 'Feature 2'],
  price: 'free', // 'free', 'premium', or 'freemium'
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01'
}
```

### Styling

The app uses Tailwind CSS with custom Telegram-themed colors. Modify `tailwind.config.js` to customize the design.

### Telegram Web App Integration

The app is ready for Telegram Web App integration. The Telegram Web App SDK is already included in the layout.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` directory to Netlify

### Other Platforms

The app can be deployed to any platform that supports Next.js applications.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For support or questions, please open an issue on GitHub.
