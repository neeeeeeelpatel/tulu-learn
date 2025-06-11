# Learn Tulu - Interactive Language Learning App

<div align="center">
  <h3>🌟 Master the Beautiful Tulu Language Through Interactive Learning 🌟</h3>
  <p>A comprehensive, Duolingo-inspired web application for learning Tulu language with gamified lessons, progress tracking, and cultural immersion.</p>
</div>

---

## 📖 Overview

Learn Tulu is a modern, interactive language learning platform specifically designed to teach the Tulu language - a beautiful Dravidian language spoken primarily in coastal Karnataka and Kerala, India. The application combines engaging gamification elements with comprehensive vocabulary lessons to provide an immersive learning experience.

### 🎯 Key Highlights

- **130+ Essential Vocabulary Words** across 13 comprehensive categories
- **Interactive Learning System** with multiple question types and instant feedback
- **Gamified Experience** featuring XP points, streaks, and achievement tracking
- **Cultural Integration** including traditional terms and cultural context
- **Responsive Design** optimized for desktop, tablet, and mobile devices
- **Progress Persistence** with local storage to track your learning journey

---

## ✨ Features

### 🎮 Core Learning Features
- **Interactive Lessons**: 13 comprehensive lesson categories covering essential vocabulary
- **Multiple Question Types**: 
  - Tulu to English translation
  - English to Tulu translation  
  - Pronunciation practice with phonetic guides
- **Smart Progress Tracking**: XP system, daily streaks, and detailed learning statistics
- **Gamification Elements**: Achievement system with daily goals and milestone rewards
- **Practice Modes**: 
  - Review incorrect answers
  - Random vocabulary practice sessions
  - Targeted weakness improvement

### 📚 Content Categories
1. **Basic Greetings** - Essential conversational starters
2. **Family & People** - Personal pronouns and relationships  
3. **Numbers & Counting** - Numerical system (1-10)
4. **Colors** - Complete color spectrum vocabulary
5. **Fruits** - Common and regional fruit names
6. **Vegetables** - Essential cooking and market vocabulary
7. **Animals** - Domestic and wild animal names
8. **Body Parts** - Anatomical vocabulary
9. **Daily Activities** - Common verbs and actions
10. **Time Expressions** - Temporal vocabulary and phrases
11. **Food & Drinks** - Culinary and dining vocabulary
12. **Places** - Location and directional terms
13. **Cultural Terms** - Traditional practices and cultural concepts

### 🎨 User Experience
- **Intuitive Interface**: Clean, Duolingo-inspired design with engaging animations
- **Accessibility Features**: Keyboard navigation and focus management
- **Theme Support**: Automatic dark/light mode switching
- **Performance Optimized**: Fast loading with efficient local storage
- **Mobile-First**: Responsive design that works seamlessly across all devices

---

## 🛠️ Technology Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | Vanilla JavaScript, HTML5, CSS3 |
| **Styling** | Custom CSS with CSS Grid & Flexbox |
| **Data Management** | JSON-based vocabulary database |
| **Storage** | Browser Local Storage API |
| **Icons & Graphics** | Unicode emojis and custom CSS styling |
| **Responsive Design** | Mobile-first approach with breakpoints |

---

## 📁 Project Structure

```
learn-tulu/
├── index.html          # Main application HTML structure
├── app.js             # Core application logic and functionality
├── style.css          # Primary stylesheet with design system
├── styles.css         # Additional styling and responsive design
├── vocabulary.json    # Complete Tulu vocabulary database
└── README.md          # Project documentation (this file)
```

### 📄 File Descriptions

- **`index.html`**: Complete application structure with semantic HTML elements
- **`app.js`**: 
  - Vocabulary data management (130+ words)
  - Learning logic and question generation
  - Progress tracking and XP system
  - Local storage management
  - UI interaction handlers
- **`style.css`**: 
  - Comprehensive design system with CSS variables
  - Duolingo-inspired color scheme and components
  - Responsive design with mobile-first approach
  - Dark/light theme support
- **`vocabulary.json`**: Structured JSON database with pronunciation guides

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- No additional dependencies or installations required

### Installation & Setup

1. **Download the Application**
   ```bash
   # Clone the repository (if using Git)
   git clone [your-repository-url]
   cd learn-tulu
   
   # Or download and extract the ZIP file
   ```

2. **Launch the Application**
   ```bash
   # Option 1: Direct file opening
   # Simply open index.html in your web browser
   
   # Option 2: Local server (recommended for development)
   python -m http.server 8000
   # Then visit: http://localhost:8000
   
   # Option 3: Using Node.js
   npx serve .
   # Then visit the provided local URL
   ```

3. **Start Learning!**
   - Open your browser and navigate to the application
   - Begin with "Basic Greetings" lesson
   - Track your progress as you advance through categories

---

## 🎯 How to Use

### Getting Started with Lessons

1. **Home Dashboard**
   - View your daily progress and XP earned
   - Check your current streak and achievements
   - Quick access to continue your last lesson

2. **Selecting Lessons**
   - Choose from 13 available categories
   - Lessons unlock progressively as you complete previous ones
   - Each lesson contains 10 vocabulary words

3. **Learning Process**
   - Each lesson presents words in multiple question formats
   - Receive immediate feedback on your answers
   - Earn XP points for correct responses
   - Review mistakes at the end of each lesson

4. **Practice Modes**
   - **Review Mistakes**: Focus on words you previously got wrong
   - **Random Practice**: Test yourself with vocabulary from all completed lessons

### Progress Tracking

- **XP System**: Earn points for correct answers and lesson completion
- **Streak Counter**: Maintain daily learning habits
- **Completion Status**: Track which lessons you've finished
- **Accuracy Statistics**: Monitor your learning effectiveness

---

## 🌟 Learning Philosophy

This application follows proven language learning methodologies:

- **Spaced Repetition**: Words you struggle with appear more frequently
- **Active Recall**: Multiple question types reinforce memory retention
- **Cultural Context**: Learn not just words, but cultural significance
- **Immediate Feedback**: Instant correction helps reinforce correct learning
- **Gamification**: Points and achievements maintain motivation

---

## 🎨 Design Features

### Visual Design
- **Color Scheme**: Inspired by Duolingo's engaging green and blue palette
- **Typography**: Clean, readable fonts optimized for learning
- **Animations**: Subtle hover effects and transitions enhance user experience
- **Icons**: Carefully selected emojis represent each lesson category

### Responsive Behavior
- **Desktop** (1024px+): Full-featured layout with multi-column grids
- **Tablet** (768px-1023px): Optimized two-column layouts
- **Mobile** (767px and below): Single-column, touch-optimized interface

---

## 🔧 Development Information

### Browser Compatibility
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Performance Considerations
- Vanilla JavaScript for optimal performance
- CSS Grid and Flexbox for efficient layouts
- Local Storage for instant data persistence
- Optimized for 60fps animations

### Customization Options
- Easy vocabulary expansion via JSON modification
- CSS custom properties for theme customization
- Modular JavaScript architecture for feature additions

---

## 📈 Future Enhancements

### Planned Features
- [ ] Audio pronunciation playback
- [ ] Advanced grammar lessons
- [ ] Conversation practice scenarios
- [ ] Offline mode capability
- [ ] Social learning features
- [ ] Achievement badges system
- [ ] Export progress functionality

### Community Contributions
- [ ] Additional vocabulary categories
- [ ] Regional dialect variations
- [ ] Cultural context expansions
- [ ] Translation improvements

---

## 🤝 Contributing

We welcome contributions to improve Learn Tulu! Here's how you can help:

### Adding Vocabulary
1. Edit `vocabulary.json` with new words
2. Follow the existing structure: `{"tulu": "", "english": "", "pronunciation": ""}`
3. Ensure pronunciation guides are accurate

### Improving Translations
1. Review existing translations for accuracy
2. Suggest regional variations or alternatives
3. Provide cultural context where helpful

### Bug Reports & Feature Requests
1. Check existing issues before creating new ones
2. Provide detailed reproduction steps for bugs
3. Explain the educational value of proposed features

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Tulu Language Community**: For preserving and sharing this beautiful language
- **Language Learning Research**: Inspired by proven pedagogical methods
- **Open Source Community**: For tools and libraries that made this possible
- **Cultural Consultants**: For ensuring authentic representation of Tulu culture

---

## 📞 Support & Contact

- **Issues**: Report bugs or request features via GitHub Issues
- **Questions**: Community discussions and Q&A
- **Cultural Accuracy**: We welcome feedback from native Tulu speakers

---

<div align="center">
  <h3>🌟 Start Your Tulu Learning Journey Today! 🌟</h3>
  <p><em>Namaskāra! Welcome to the wonderful world of Tulu language.</em></p>
</div>