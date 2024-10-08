'use client'

import { FC, useState, ChangeEvent } from 'react'
import { cafeType } from '@/types'

interface Props {
  cafe: cafeType
  changeCafeName: (id: string, name: string) => void
  deleteCafeItem: (id: string) => void
}

const Cafe: FC<Props> = ({
  cafe,
  changeCafeName,
  deleteCafeItem
}) => {

  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(cafe.name)

  // Event handler for text input change
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  // Event handler for initiating the edit mode
  const handleEdit = () => {
    setEditing(true)
  }
  // Event handler for saving the edited text
  const handleSave = async () => {
    changeCafeName(cafe.id!, name)
    setEditing(false)
  }
  // Event handler for canceling the edit mode
  const handleCancel = () => {
    setEditing(false)
    setName(cafe.name)
  }
  // Event handler for deleting a todo item
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteCafeItem(cafe.id!)
    }
  }

  return (
    <div className="card bg-white image-full w-full shadow-xl">
      <div className="card-body bg-white dark:bg-base-200">
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">{cafe.createdAt}</span>
              <span className="label-text-alt"></span>
            </div>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              readOnly={!editing}
              className="input input-bordered w-full max-w-xs text-black dark:text-white mb-4" />
          </label>
        </div>
        <div className="card-actions justify-end">
          {editing ? (
            <button
              onClick={handleSave}
              className="btn btn-primary"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="btn"
            >
              Edit
            </button>
          )}
          {editing ? (
            <button
              onClick={handleCancel}
              className="btn"
            >
              Close
            </button>
          ) : (
            <button
              onClick={handleDelete}
              className="btn btn-error"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cafe