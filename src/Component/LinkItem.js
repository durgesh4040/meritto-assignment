import { FiMoreVertical } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";

function LinkItem({ link, onEdit, onDelete, onToggleMenu, menuOpen }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-md p-4 mb-4 shadow-sm mx-auto">
      <div className="flex items-center">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-700">
            {link.displayName}
          </span>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className=" font-medium text-gray-500 hover:underline"
          >
            Link
          </a>
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => onToggleMenu(link.id, "link")}
          className="text-gray-600 hover:text-gray-900"
        >
          <FiMoreVertical className="h-5 w-5" />
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
            <a
              href="#"
              onClick={() => onEdit(link)}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
            >
              <CiEdit className="mr-2" />
              <span>Edit link</span>
            </a>
            <a
              href="#"
              onClick={() => onDelete(link.id)}
              className="block px-4 py-2 text-gray-800 hover:bg-red-100 text-red-500"
            >
              <img
                src="/images/icons8-trash.svg"
                alt="Trash Icon"
                width="20"
                height="20"
                className="inline-block mr-2"
              />
              <span>Delete</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default LinkItem;
