# Wanderly - Tourism Website

![Wanderly Logo](https://img.shields.io/badge/Wanderly-Tourism%20Platform-blue?style=for-the-badge)

## 🌍 Overview

**Wanderly** is a comprehensive React-based tourism website that helps users discover destinations, plan trips, and explore the world with ease. Built with modern web technologies and featuring a stunning UI/UX, Wanderly provides an interactive and intuitive platform for travelers.

### ✨ Key Features

- 🗺️ **12+ Destinations** - Explore popular destinations across India and the world
- 📅 **Smart Trip Planner** - Generate personalized day-wise itineraries with budget estimation
- 🔍 **Advanced Search & Filter** - Find destinations by name, category, or type
- ❤️ **Favorites System** - Save and manage your favorite destinations
- 🌙 **Dark Mode** - Comfortable viewing experience day or night
- 🌐 **Multi-language** - Support for English and Hindi
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop

---

## 🎯 Problem Statement

Tourists often face:
- Too much scattered information
- Poorly designed travel websites
- Difficulty planning trips quickly
- Confusion about what to visit first

**Wanderly solves this** by presenting well-structured, visual, and simple travel information in one place.

---

## 🛠️ Tech Stack

### Frontend Only (No Backend Required)
- **React.js** - Component-based UI
- **React Router** - Client-side routing
- **SCSS** - Advanced styling
- **Context API** - Global state management
- **LocalStorage** - Data persistence

### Libraries
- React Router DOM
- Font Awesome Icons
- Google Fonts (Inter, Poppins)

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd react-travel-website-master
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Open in browser**
```
http://localhost:3000
```

---

## 🎨 Features in Detail

### 1. Hero Section
- Eye-catching tagline: "Explore the world, one place at a time"
- Call-to-action buttons with smooth scroll
- Video background

### 2. Destination Explorer
- Grid layout with 12+ destinations
- Interactive cards with hover effects
- Quick favorite toggle
- Type badges (Beach, Heritage, Hill Station, etc.)

### 3. Search & Filter
- Real-time search by destination name, city, or country
- Category filters: All, Beach, Hill Station, Heritage, Adventure, Nature
- Results count display
- Clear filters option

### 4. Trip Planner ⭐ (Most Impressive)
- Select destination from dropdown
- Choose trip duration (1-14 days)
- Select interests: Adventure, Relaxation, Food, Culture
- Auto-generate day-wise itinerary
- Budget estimation (Budget, Recommended, Luxury)
- Print-friendly layout

### 5. Destination Detail Pages
- Large banner images
- Comprehensive information:
  - About the destination
  - Best time to visit
  - Famous attractions (4+ per destination)
  - Local food recommendations
  - Culture and history
  - Budget estimates
- Save to favorites
- Plan trip CTA

### 6. Featured Experiences
- 4 curated experience categories:
  - 🏄 Adventure Sports
  - 🏛️ Heritage Walks
  - 🍜 Food Trails
  - 🌄 Nature Escapes
- Hover overlays with detailed information

### 7. Testimonials
- Auto-rotating carousel
- 5-star ratings
- User avatars and locations
- Real traveler experiences

### 8. Favorites Page
- View all saved destinations
- Quick access to favorite places
- Empty state with CTA
- Persistent across sessions

### 9. Dark Mode
- Toggle between light and dark themes
- Smooth transitions
- Persists user preference

### 10. Language Toggle
- Switch between English and Hindi
- Comprehensive translations
- Persists user preference

---

## 📁 Project Structure

```
src/
├── components/
│   ├── DestinationCard.jsx
│   ├── DestinationList.jsx
│   ├── SearchFilter.jsx
│   ├── TripPlanner.jsx
│   ├── FeaturedExperiences.jsx
│   ├── Testimonials.jsx
│   ├── HeroSection.js
│   ├── Navbar.js
│   ├── Footer.js
│   └── pages/
│       ├── Home.js
│       ├── DestinationDetail.jsx
│       └── Favorites.jsx
├── context/
│   ├── ThemeContext.js
│   ├── FavoritesContext.js
│   └── LanguageContext.js
├── data/
│   ├── destinations-data.js (12 destinations)
│   ├── trip-plans-data.js
│   ├── testimonials-data.js
│   └── experiences-data.js
├── App.js
├── App.scss
└── index.js
```

---

## 🎓 React Concepts Demonstrated

1. **Functional Components** - Modern React with hooks
2. **React Hooks** - useState, useEffect, useContext
3. **Context API** - Global state management (Theme, Favorites, Language)
4. **React Router** - Dynamic routing with URL parameters
5. **Props & State** - Component communication
6. **Conditional Rendering** - Dynamic UI based on state
7. **Array Methods** - .map(), .filter(), .find()
8. **Event Handling** - User interactions
9. **LocalStorage** - Client-side data persistence
10. **Component Composition** - Reusable component architecture

---

## 🌟 Highlights

### UI/UX Excellence
- ✅ Modern gradient designs
- ✅ Smooth animations and transitions
- ✅ Glassmorphism effects
- ✅ Responsive layouts
- ✅ Intuitive navigation
- ✅ Accessible design

### Code Quality
- ✅ Clean, organized code structure
- ✅ Reusable components
- ✅ Proper separation of concerns
- ✅ Consistent naming conventions
- ✅ Well-commented code

---

## 📱 Responsive Design

Wanderly is fully responsive and optimized for:
- 📱 **Mobile** - 375px and up
- 📱 **Tablet** - 768px and up
- 💻 **Desktop** - 1200px and up

---

## 🚀 Future Enhancements

Potential features for future versions:
- [ ] Backend integration with database
- [ ] User authentication and profiles
- [ ] Booking functionality
- [ ] Real-time weather integration
- [ ] Google Maps integration
- [ ] User reviews and ratings
- [ ] Social sharing
- [ ] Email notifications
- [ ] Payment gateway integration

---

## 📝 Data Structure

### Destinations
Each destination includes:
- Name, country, state, type
- Descriptions (short and full)
- Images (banner and thumbnail)
- Best time to visit
- Attractions array (4+ items)
- Local food array (5+ items)
- Culture and history
- Budget estimates (low, medium, high)
- GPS coordinates

### Trip Plans
- Organized by destination and interest
- Multiple duration options (3, 5, 7 days)
- Day-wise activities (morning, afternoon, evening)

---

## 🎯 Use Cases

1. **Travel Planning** - Plan your next vacation with detailed itineraries
2. **Destination Research** - Learn about places before visiting
3. **Budget Estimation** - Get cost estimates for your trip
4. **Inspiration** - Discover new destinations and experiences
5. **Quick Reference** - Save favorites for future trips

---

## 👨‍💻 Development

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

---

## 📄 License

This project is created for educational purposes.

---

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Font Awesome for icons
- Google Fonts for typography
- Unsplash for placeholder images

---

## 📧 Contact

For questions or feedback about this project, please reach out through GitHub issues.

---

## ⭐ Show Your Support

If you found this project helpful, please give it a star! ⭐

---

**Built with ❤️ using React.js**
