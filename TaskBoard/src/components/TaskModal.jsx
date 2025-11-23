import { useState, useEffect } from 'react'
import { FiX, FiPlus, FiCheck } from 'react-icons/fi'

function TaskModal({ isOpen, onClose, onSave, task, columnId }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (task) {
      setTitle(task.title)
      setDescription(task.description || '')
    } else {
      setTitle('')
      setDescription('')
    }
  }, [task, isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return

    onSave({
      id: task?.id || `task-${Date.now()}`,
      title: title.trim(),
      description: description.trim(),
      columnId: task?.columnId || columnId,
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="glass-modal rounded-2xl shadow-2xl w-full max-w-md transform transition-all animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${task ? 'bg-blue-500/20' : 'bg-violet-500/20'}`}>
              {task ? <FiCheck className="text-blue-400" size={18} /> : <FiPlus className="text-violet-400" size={18} />}
            </div>
            <h2 className="text-lg font-semibold text-white">
              {task ? 'Edit Task' : 'Create Task'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5">
          <div className="mb-5">
            <label htmlFor="title" className="block text-sm font-medium text-white/70 mb-2">
              Task Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What needs to be done?"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30
                focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 focus:bg-white/10
                transition-all duration-200"
              autoFocus
            />
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-white/70 mb-2">
              Description <span className="text-white/30">(optional)</span>
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add more details..."
              rows={3}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30
                focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 focus:bg-white/10
                transition-all duration-200 resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!title.trim()}
              className="px-5 py-2.5 bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-xl
                hover:from-violet-600 hover:to-blue-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]
                disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-none
                transition-all duration-300 font-medium"
            >
              {task ? 'Save Changes' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskModal
