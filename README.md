# 🚀 Smart Resume Builder AI

## 🎯 Overview

**Smart Resume Builder AI** is a comprehensive, AI-powered resume building platform that helps job seekers create professional resumes, optimize them for ATS systems, generate personalized cover letters, and practice with AI-generated interview questions. Built with modern web technologies, Tailwind CSS, and powered by OpenAI's GPT models.

## ✨ Key Features

### 🤖 AI-Powered Tools
- **AI Resume Review** - Get intelligent feedback on your resume content and structure
- **AI Interview Questions** - Generate personalized interview questions based on your resume and target role
- **AI Cover Letter Generator** - Create tailored cover letters for specific job applications
- **ATS Optimization** - Analyze and optimize your resume for Applicant Tracking Systems

### 🎨 Resume Builder
- **Multiple Templates** - Choose from Classic, Modern, and Elegant designs
- **Real-time Preview** - See changes instantly as you build your resume
- **Drag & Drop Interface** - Intuitive section management
- **Voice Editor** - Edit your resume using voice commands and speech-to-text

### 🔧 Advanced Features
- **PDF Export** - Download professional PDF versions
- **Public Resume Sharing** - Share your resume with clean, shareable URLs
- **User Authentication** - Secure login and data management
- **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🛠️ Technology Stack

### Frontend
- **HTML5/CSS3** - Modern web standards
- **JavaScript (ES6+)** - Dynamic functionality
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Professional icons

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web application framework
- **MongoDB** - Database for user data and resumes
- **Mongoose** - MongoDB object modeling

### AI Integration
- **OpenAI API** - GPT models for content generation
- **Speech Recognition API** - Voice editing capabilities

### Security & Authentication
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gyanchandra2910/resume-builder.git
   cd resume-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/smart-resume-builder
   PORT=5000
   JWT_SECRET=your-super-secret-jwt-key
   OPENAI_API_KEY=your-openai-api-key
   NODE_ENV=development
   ```

4. **Build Tailwind CSS**
   ```bash
   # Build CSS (one-time)
   npm run build-css
   
   # Watch for changes during development
   npm run watch-css
   ```

5. **Start the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:5000`

## 🎨 Tailwind CSS Migration Status

This project is currently being migrated from Bootstrap to Tailwind CSS for better performance and maintainability.

### ✅ Completed (Tailwind CSS)
- 🏠 Landing page (index.html)
- 🔐 Login page (login.html)
- 🔧 Build configuration and custom components

### 🔄 In Progress (Bootstrap → Tailwind)
- 📝 Resume builder interface
- 👁️ Preview and template system
- 🔍 ATS checker
- 📊 Review system
- 🎤 Interview questions
- 👤 Registration page

### 📋 Available Scripts

```bash
# Development
npm run dev              # Start server with nodemon
npm run watch-css        # Watch Tailwind CSS for changes

# Production
npm start               # Start server
npm run build-css       # Build Tailwind CSS

# Testing
npm test               # Run tests (placeholder)
```

## 📁 Project Structure

```
resume-builder/
├── client/                     # Frontend files
│   ├── index.html             # Landing page (✅ Tailwind)
│   ├── login.html             # User authentication (✅ Tailwind)
│   ├── register.html          # User registration (🔄 Bootstrap)
│   ├── home.html              # Dashboard (🔄 Bootstrap)
│   ├── resume-builder.html    # Resume builder interface (🔄 Bootstrap)
│   ├── preview.html           # Resume preview and export (🔄 Bootstrap)
│   ├── ats-check.html         # ATS optimization tool (🔄 Bootstrap)
│   ├── review.html            # AI resume review (🔄 Bootstrap)
│   ├── interview-questions.html # AI interview prep (🔄 Bootstrap)
│   ├── dist/                  # Built CSS files
│   │   └── styles.css         # Compiled Tailwind CSS
│   ├── style.css              # Custom styles
│   ├── script.js              # Main JavaScript
│   ├── auth.js                # Authentication logic
│   ├── preview.js             # Preview functionality
│   ├── ats.js                 # ATS checking logic
│   ├── review.js              # Review system
│   ├── voiceEditor.js         # Voice editing features
│   └── dragdrop.js            # Drag and drop functionality
├── server/                    # Backend files
│   ├── index.js               # Main server file
│   ├── controllers/           # Business logic
│   │   ├── authController.js
│   │   ├── resumeController.js
│   │   ├── aiController.js
│   │   ├── atsController.js
│   │   ├── reviewController.js
│   │   └── interviewController.js
│   ├── models/                # Database models
│   │   ├── User.js
│   │   ├── Resume.js
│   │   ├── Review.js
│   │   └── ReviewerXP.js
│   ├── routes/                # API routes
│   │   ├── auth.js
│   │   ├── resume.js
│   │   ├── ai.js
│   │   ├── ats.js
│   │   ├── review.js
│   │   └── interview.js
│   └── utils/                 # Utility functions
│       └── logger.js
├── src/                       # Source files
│   └── input.css              # Tailwind CSS source
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── .env                       # Environment variables
├── .env.example              # Environment template
├── .gitignore                # Git ignore rules
├── package.json              # Dependencies and scripts
├── CONVERSION_EXAMPLE.md     # Bootstrap to Tailwind examples
├── TAILWIND_SETUP.md         # Tailwind setup guide
└── README.md                 # This file
```

## 🎯 Usage Guide

### Creating Your First Resume

1. **Sign Up/Login** - Create an account or log in to an existing one
2. **Build Resume** - Use the resume builder to add your information:
   - Personal Information
   - Career Objective
   - Work Experience
   - Education
   - Skills
   - Projects
   - Certifications
3. **Choose Template** - Select from available design templates
4. **Preview & Export** - Review your resume and download as PDF

### AI Features

#### AI Resume Review
- Navigate to the Review section
- Upload or use your built resume
- Get AI-powered feedback on content, structure, and improvements

#### AI Interview Questions
- Go to the Interview Questions section
- Enter the job title you're applying for
- Generate personalized questions based on your resume
- Practice and prepare for your interviews

#### ATS Optimization
- Use the ATS Check tool
- Analyze your resume for ATS compatibility
- Get suggestions for improvement

### Voice Editor
- Enable microphone permissions
- Use voice commands to edit resume sections
- Speech-to-text functionality for hands-free editing

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `MONGODB_URI` | MongoDB connection string | Yes | - |
| `PORT` | Server port | No | 5000 |
| `JWT_SECRET` | Secret key for JWT tokens | Yes | - |
| `OPENAI_API_KEY` | OpenAI API key for AI features | Yes | - |
| `NODE_ENV` | Environment mode | No | development |

### OpenAI API Setup

1. Sign up at [OpenAI](https://openai.com/)
2. Generate an API key
3. Add the key to your `.env` file
4. Ensure you have sufficient API credits

## 🎨 Tailwind CSS Development

### Building Styles

```bash
# One-time build
npm run build-css

# Watch for changes (recommended for development)
npm run watch-css
```

### Custom Components

The project includes custom Tailwind components in `src/input.css`:

```css
@layer components {
  .btn-primary {
    @apply inline-flex items-center px-4 py-2 rounded-lg font-medium shadow-sm bg-primary-600 hover:bg-primary-700 text-white transition-colors duration-200;
  }
  
  .form-input {
    @apply block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 px-3 py-2;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-md border border-gray-200;
  }
}
```

### Color Palette

The project uses a custom primary color palette:

```javascript
// tailwind.config.js
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    900: '#1e3a8a',
  }
}
```

## 🚀 Deployment

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set up Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Build CSS**
   ```bash
   npm run build-css
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

### Production Deployment

1. **Environment Setup**
   ```bash
   NODE_ENV=production
   ```

2. **Database Setup**
   - Use MongoDB Atlas or a production MongoDB instance
   - Update `MONGODB_URI` in your environment

3. **Build Assets**
   ```bash
   npm run build-css
   ```

4. **Server Deployment**
   - Deploy to platforms like Heroku, Vercel, or AWS
   - Ensure environment variables are set
   - Use process managers like PM2 for Node.js

5. **Static Files**
   - Serve static files through a CDN if needed
   - Configure proper CORS settings

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow JavaScript ES6+ standards
- Use Tailwind CSS for styling (avoid custom CSS when possible)
- Use meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

### Bootstrap to Tailwind Conversion

If you want to help with the ongoing Bootstrap to Tailwind conversion:

1. Pick an unconverted page from the project structure
2. Follow the patterns established in `index.html` and `login.html`
3. Use the examples in `CONVERSION_EXAMPLE.md`
4. Test responsiveness and functionality
5. Update the project structure documentation

## 🐛 Troubleshooting

### Common Issues

**Server won't start**
- Check if MongoDB is running
- Verify environment variables are set correctly
- Ensure port 5000 is not in use

**AI features not working**
- Verify OpenAI API key is valid
- Check API credit balance
- Ensure internet connectivity

**Tailwind CSS not applying**
- Run `npm run build-css` to compile styles
- Check if `client/dist/styles.css` exists
- Verify HTML files are linking to the correct CSS file

**File upload issues**
- Check file size limits
- Verify file format is supported
- Clear browser cache

## 📚 Documentation

- [Tailwind Setup Guide](TAILWIND_SETUP.md) - Complete Tailwind CSS setup instructions
- [Conversion Examples](CONVERSION_EXAMPLE.md) - Bootstrap to Tailwind conversion examples
- [Deployment Guide](DEPLOYMENT.md) - Production deployment instructions

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for providing powerful AI capabilities
- Tailwind CSS team for the amazing utility-first framework
- MongoDB team for the database solution
- All contributors and users of this project

## 📞 Support

For support, create an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ for job seekers worldwide**

*Making job searching smarter, one resume at a time.*
