# TaskBoard - Modern Task Management Dashboard

A clean, intuitive task management application built with React and Tailwind CSS. TaskFlow helps users organize their work with priority-based task tracking, filtering, and a modern, responsive interface.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://taskflow-board.netlify.app)
[![Built with React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Styled with Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8)](https://tailwindcss.com/)

## 🚀 Live Demo

**[View Live Application](https://taskflow-board.netlify.app)**

## ✨ Features

- **Task Creation & Management** - Add, edit, and delete tasks with an intuitive interface
- **Priority System** - Organize tasks by priority level (High, Medium, Low)
- **Status Tracking** - Mark tasks as To Do, In Progress, or Completed
- **Smart Filtering** - Filter tasks by status, priority, or view all at once
- **Search Functionality** - Quickly find tasks with real-time search
- **Local Storage** - Tasks persist between sessions using browser storage
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional interface with smooth animations

## 🛠️ Tech Stack

- **React 18** - Component-based UI framework
- **Vite** - Next-generation frontend tooling for fast development
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **JavaScript (ES6+)** - Modern JavaScript features
- **Local Storage API** - Client-side data persistence

## 📸 Screenshots

### Dashboard View
![TaskFlow Dashboard](screenshots/dashboard.png)
*Main dashboard showing active tasks with filtering options*

### Task Creation
![Add Task Modal](screenshots/add-task.png)
*Clean modal interface for creating new tasks*

### Mobile Responsive
![Mobile View](screenshots/mobile.png)
*Fully responsive design for mobile devices*

## 🎯 Key Technical Highlights

- **Component Architecture** - Modular, reusable React components
- **State Management** - Efficient use of React hooks (useState, useEffect)
- **Data Persistence** - Local storage implementation for data retention
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints
- **Clean Code** - Well-organized, readable, and maintainable codebase
- **Performance** - Optimized rendering and efficient state updates

## 💻 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/0xDarkwaveSiren/TaskFlow.git
cd TaskFlow
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
Navigate to http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🔧 Project Structure

```
TaskFlow/
├── src/
│   ├── components/
│   │   ├── TaskCard.jsx       # Individual task component
│   │   ├── TaskForm.jsx       # Task creation form
│   │   ├── TaskList.jsx       # List of tasks
│   │   └── FilterBar.jsx      # Filtering interface
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── public/                    # Static assets
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
└── tailwind.config.js         # Tailwind configuration
```

## 📝 Usage

1. **Add a Task** - Click "Add Task" button and fill in task details
2. **Set Priority** - Choose High, Medium, or Low priority
3. **Update Status** - Change status as you work (To Do → In Progress → Completed)
4. **Filter Tasks** - Use filter buttons to view specific task categories
5. **Search** - Type in search bar to find specific tasks
6. **Edit/Delete** - Use action buttons on each task card

## 🎓 What I Learned

Building TaskBoard strengthened my skills in:
- React component design and state management
- Implementing local storage for data persistence
- Creating responsive layouts with Tailwind CSS
- Building intuitive user interfaces
- Managing application state efficiently
- Deploying React applications to production

## 🚀 Future Enhancements

- [ ] User authentication and cloud sync
- [ ] Task categories and tags
- [ ] Due dates and reminders
- [ ] Drag-and-drop task reordering
- [ ] Dark mode toggle
- [ ] Task statistics and analytics
- [ ] Export tasks to CSV/JSON
- [ ] Collaboration features (shared tasks)

## 👤 Author

**Andrea (0xDarkwaveSiren)**

- GitHub: [@0xDarkwaveSiren](https://github.com/0xDarkwaveSiren)
- Portfolio: [Your Portfolio Link]

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- Netlify for seamless deployment

---

**Built with ❤️ using React and Tailwind CSS**

*If you found this project helpful, please consider giving it a ⭐*
