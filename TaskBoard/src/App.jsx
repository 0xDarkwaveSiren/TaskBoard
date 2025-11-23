import { useState, useEffect } from 'react'
import { DragDropContext } from '@hello-pangea/dnd'
import Column from './components/Column'
import TaskModal from './components/TaskModal'
import { FiLayout } from 'react-icons/fi'

const STORAGE_KEY = 'taskboard-data'

const initialColumns = {
  todo: { id: 'todo', title: 'To Do' },
  inProgress: { id: 'inProgress', title: 'In Progress' },
  done: { id: 'done', title: 'Done' },
}

const initialTasks = []

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch {
        return initialTasks
      }
    }
    return initialTasks
  })

  const [modalOpen, setModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [targetColumnId, setTargetColumnId] = useState(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result

    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const task = tasks.find((t) => t.id === draggableId)
    if (!task) return

    const newTasks = tasks.filter((t) => t.id !== draggableId)
    const updatedTask = { ...task, columnId: destination.droppableId }

    const tasksInDestColumn = newTasks.filter((t) => t.columnId === destination.droppableId)
    const tasksNotInDestColumn = newTasks.filter((t) => t.columnId !== destination.droppableId)

    tasksInDestColumn.splice(destination.index, 0, updatedTask)
    setTasks([...tasksNotInDestColumn, ...tasksInDestColumn])
  }

  const handleAddTask = (columnId) => {
    setEditingTask(null)
    setTargetColumnId(columnId)
    setModalOpen(true)
  }

  const handleEditTask = (task) => {
    setEditingTask(task)
    setTargetColumnId(task.columnId)
    setModalOpen(true)
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId))
  }

  const handleSaveTask = (taskData) => {
    if (editingTask) {
      setTasks(tasks.map((t) => (t.id === taskData.id ? taskData : t)))
    } else {
      setTasks([...tasks, taskData])
    }
  }

  const getTasksForColumn = (columnId) => {
    return tasks.filter((t) => t.columnId === columnId)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-violet-900/20 via-slate-900 to-blue-900/20 animate-gradient" />

      {/* Floating orbs for depth */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-float" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="fixed inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="glass border-b border-white/5 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-violet-500 to-blue-500 rounded-2xl shadow-lg shadow-violet-500/25">
                  <FiLayout className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    TaskBoard
                  </h1>
                  <p className="text-sm text-white/40 hidden sm:block">Drag tasks to change status</p>
                </div>
              </div>

              {/* Task count */}
              <div className="hidden sm:flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-400" />
                  <span className="text-white/40">{getTasksForColumn('todo').length} to do</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-white/40">{getTasksForColumn('inProgress').length} in progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-white/40">{getTasksForColumn('done').length} done</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {Object.values(initialColumns).map((column) => (
                <Column
                  key={column.id}
                  column={column}
                  tasks={getTasksForColumn(column.id)}
                  onAddTask={handleAddTask}
                  onEditTask={handleEditTask}
                  onDeleteTask={handleDeleteTask}
                />
              ))}
            </div>
          </DragDropContext>
        </main>
      </div>

      <TaskModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveTask}
        task={editingTask}
        columnId={targetColumnId}
      />
    </div>
  )
}

export default App