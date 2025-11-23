import { Droppable } from '@hello-pangea/dnd'
import TaskCard from './TaskCard'
import { FiPlus } from 'react-icons/fi'

const columnConfig = {
  todo: {
    icon: '○',
    gradient: 'from-slate-500/20 to-slate-600/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(148,163,184,0.15)]',
    accent: 'bg-slate-400',
    badge: 'bg-slate-500/30 text-slate-300 border border-slate-400/30'
  },
  inProgress: {
    icon: '◐',
    gradient: 'from-blue-500/20 to-violet-500/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]',
    accent: 'bg-gradient-to-r from-blue-400 to-violet-400',
    badge: 'bg-blue-500/30 text-blue-300 border border-blue-400/30'
  },
  done: {
    icon: '●',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
    accent: 'bg-gradient-to-r from-emerald-400 to-teal-400',
    badge: 'bg-emerald-500/30 text-emerald-300 border border-emerald-400/30'
  },
}

function Column({ column, tasks, onAddTask, onEditTask, onDeleteTask }) {
  const config = columnConfig[column.id] || columnConfig.todo

  return (
    <div className={`group glass rounded-2xl flex flex-col min-h-[500px] w-full transition-all duration-500 ${config.glow}`}>
      {/* Header */}
      <div className={`p-5 rounded-t-2xl bg-gradient-to-r ${config.gradient}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg opacity-60">{config.icon}</span>
            <h2 className="font-semibold text-white/90 tracking-wide">{column.title}</h2>
            <span className={`${config.badge} text-xs px-2.5 py-1 rounded-full font-medium`}>
              {tasks.length}
            </span>
          </div>
          <button
            onClick={() => onAddTask(column.id)}
            className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-110"
            aria-label={`Add task to ${column.title}`}
          >
            <FiPlus size={18} />
          </button>
        </div>
      </div>

      {/* Accent line */}
      <div className={`h-[2px] ${config.accent} opacity-50`} />

      {/* Droppable area */}
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`flex-1 p-4 overflow-y-auto transition-all duration-300 rounded-b-2xl
              ${snapshot.isDraggingOver ? 'bg-white/8 ring-2 ring-inset ring-violet-400/30' : ''}`}
          >
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                onEdit={onEditTask}
                onDelete={onDeleteTask}
              />
            ))}
            {provided.placeholder}
            {tasks.length === 0 && !snapshot.isDraggingOver && (
              <div className="flex flex-col items-center justify-center py-12 text-white/30">
                <div className="text-4xl mb-3 opacity-50">+</div>
                <p className="text-sm">Drop tasks here</p>
              </div>
            )}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column
