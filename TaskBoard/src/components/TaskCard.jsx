import { Draggable } from '@hello-pangea/dnd'
import { FiEdit2, FiTrash2, FiMove } from 'react-icons/fi'

function TaskCard({ task, index, onEdit, onDelete }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="mb-3"
          style={{
            ...provided.draggableProps.style,
          }}
        >
          {/* Inner wrapper for visual effects - keeps transforms separate from drag positioning */}
          <div
            className={`glass-card p-4 rounded-xl group cursor-grab active:cursor-grabbing
              transition-all duration-200
              ${snapshot.isDragging
                ? 'shadow-[0_0_30px_rgba(99,102,241,0.4)] ring-2 ring-violet-400/50 bg-white/15'
                : 'hover:bg-white/12 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]'
              }`}
          >
            <div className="flex justify-between items-start gap-3">
              <div className="flex-1">
                <h3 className="font-medium text-white/90 leading-snug">{task.title}</h3>
                {task.description && (
                  <p className="text-sm text-white/50 mt-2 line-clamp-2 leading-relaxed">{task.description}</p>
                )}
              </div>
              <div className={`flex flex-col gap-1 transition-all duration-300 ${snapshot.isDragging ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
                <button
                  onClick={(e) => { e.stopPropagation(); onEdit(task); }}
                  className="p-1.5 text-white/40 hover:text-blue-400 hover:bg-blue-500/20 rounded-lg transition-all duration-200"
                  aria-label="Edit task"
                >
                  <FiEdit2 size={14} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onDelete(task.id); }}
                  className="p-1.5 text-white/40 hover:text-red-400 hover:bg-red-500/20 rounded-lg transition-all duration-200"
                  aria-label="Delete task"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>
            </div>

            {/* Drag indicator */}
            <div className={`flex items-center justify-center mt-3 pt-3 border-t border-white/5 transition-opacity ${snapshot.isDragging ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
              <FiMove className={`${snapshot.isDragging ? 'text-violet-400' : 'text-white/20'}`} size={12} />
              <span className={`text-[10px] ml-1.5 tracking-wider uppercase ${snapshot.isDragging ? 'text-violet-400' : 'text-white/20'}`}>
                {snapshot.isDragging ? 'Drop to place' : 'Drag to move'}
              </span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default TaskCard
