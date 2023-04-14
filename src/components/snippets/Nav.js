import { useState } from 'react'

const CollapsibleMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleMenu}
      >
        {isOpen ? 'Hide menu' : 'Show menu'}
      </button>
      {isOpen && (
        <ul className="bg-gray-200">
          <li className="p-2">Menu item 1</li>
          <li className="p-2">Menu item 2</li>
          <li className="p-2">Menu item 3</li>
        </ul>
      )}
    </div>
  )
}

export default CollapsibleMenu
