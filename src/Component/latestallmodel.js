import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FiMoreVertical } from "react-icons/fi";
import AddModule from "./AddModule";
import EditModuleModal from "./EditModuleModal"; // Import the EditModuleModal
import FileUpload from "./FileUpload";
import RenamePdfModal from "./RenamePdfModal";
import AddLinkModal from "./AddLinkModal";
import { RiDownloadLine } from "react-icons/ri";

function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modules, setModules] = useState([]);
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [menuOpenType, setMenuOpenType] = useState(null); // New state for item type
  const [editModuleData, setEditModuleData] = useState(null);
  const [pdfs, setPdfs] = useState([]);
  const [links, setLinks] = useState([]);
  const [renamePdfData, setRenamePdfData] = useState(null);
  const [renameModalOpen, setRenameModalOpen] = useState(false);
  const [linkModalOpen, setLinkModalOpen] = useState(false);
  const [editLinkData, setEditLinkData] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const openModal = () => {
    setModalOpen(true);
    setDropdownOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditModuleData(null);
  };

  const closeRenameModal = () => {
    setRenameModalOpen(false);
    setRenamePdfData(null);
  };

  const closeLinkModal = () => {
    setLinkModalOpen(false);
    setEditLinkData(null);
  };

  const openLinkModal = () => {
    setLinkModalOpen(true);
    setDropdownOpen(false);
  };

  const addModule = (moduleName) => {
    setModules([...modules, { name: moduleName, id: modules.length }]);
    closeModal();
  };

  const deleteModule = (id) => {
    setModules(modules.filter((module) => module.id !== id));
  };

  const toggleMenu = (id, type) => {
    if (menuOpenId === id && menuOpenType === type) {
      setMenuOpenId(null);
      setMenuOpenType(null);
    } else {
      setMenuOpenId(id);
      setMenuOpenType(type);
    }
  };

  const handleFileUpload = (fileUrl, fileName) => {
    setPdfs([...pdfs, { url: fileUrl, name: fileName, id: pdfs.length }]);
  };

  const editModule = (id, newName) => {
    setModules(
      modules.map((module) => {
        if (module.id === id) {
          return { ...module, name: newName };
        }
        return module;
      })
    );
  };

  const handleEditModule = (module) => {
    setEditModuleData(module);
    setModalOpen(true);
    setDropdownOpen(false);
  };

  const deletePdf = (id) => {
    setPdfs(pdfs.filter((pdf) => pdf.id !== id));
  };

  const handleRenamePdf = (pdf) => {
    setRenamePdfData(pdf);
    setRenameModalOpen(true);
  };

  const renamePdf = (id, newName) => {
    setPdfs(
      pdfs.map((pdf) => {
        if (pdf.id === id) {
          return { ...pdf, name: newName };
        }
        return pdf;
      })
    );
    closeRenameModal();
  };

  const addLink = (link) => {
    if (editLinkData) {
      setLinks(
        links.map((l) => (l.id === editLinkData.id ? { ...l, ...link } : l))
      );
      setEditLinkData(null);
    } else {
      setLinks([...links, { ...link, id: links.length }]);
    }
    closeLinkModal();
  };

  const deleteLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const handleEditLink = (link) => {
    setEditLinkData(link);
    setLinkModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="absolute top-4 left-4 sm:left-16">
          <span className="text-xl sm:text-2xl font-bold text-gray-700">
            Course Builder
          </span>
        </div>
        <div className="absolute top-4 right-4 sm:right-16">
          <button
            onClick={toggleDropdown}
            className="relative bg-red-500 text-white py-2 px-4 rounded"
          >
            + Add ^
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
              <a
                href="#"
                onClick={openModal}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                🧾Create module
              </a>
              <a
                href="#"
                onClick={openLinkModal}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                🔗Add a link
              </a>
              <FileUpload onUpload={handleFileUpload} />
            </div>
          )}
        </div>
        <div className="w-full max-w-4xl mx-auto mt-4">
          {modules.length === 0 && pdfs.length === 0 && links.length === 0 ? (
            <div className="text-center">
              <img
                src="images/box_image.jpg"
                alt="box image"
                className="mx-auto mb-4 w-64 h-48 sm:w-[272px] sm:h-[192px]"
              />
              <p className="text-xl sm:text-2xl font-bold text-gray-700">
                Nothing added here yet.
              </p>
              <p className="text-base sm:text-lg">
                Click on the [+] Add button to add items to this course
              </p>
            </div>
          ) : (
            <>
              {modules.map((module) => (
                <div
                  key={module.id}
                  className="flex items-center justify-between bg-gray-50 rounded-md p-4 mb-4 shadow-sm mx-auto"
                  style={{ maxWidth: "calc(100% - 32px)" }}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-medium">{module.name}</span>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => toggleMenu(module.id, "module")}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <FiMoreVertical className="h-5 w-5" />
                    </button>
                    {menuOpenId === module.id && menuOpenType === "module" && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                        <a
                          href="#"
                          onClick={() => handleEditModule(module)}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                        >
                          <CiEdit className="mr-2" />
                          <span>Edit module name</span>
                        </a>
                        <a
                          href="#"
                          onClick={() => deleteModule(module.id)}
                          className="block px-4 py-2 text-gray-800 hover:bg-red-100 text-red-500 delete-link"
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
              ))}
              {links.map((link) => (
                <div
                  key={link.id}
                  className="flex items-center justify-between bg-gray-50 rounded-md p-4 mb-4 shadow-sm mx-auto"
                  style={{ maxWidth: "calc(100% - 32px)" }}
                >
                  <div className="flex items-center ">
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
                      onClick={() => toggleMenu(link.id, "link")}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <FiMoreVertical className="h-5 w-5" />
                    </button>
                    {menuOpenId === link.id && menuOpenType === "link" && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                        <a
                          href="#"
                          onClick={() => handleEditLink(link)}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 inline-flex items-center"
                        >
                          <CiEdit className="mx-1" />
                          <span className="px-6">Edit link</span>
                        </a>
                        <a
                          href="#"
                          onClick={() => deleteLink(link.id)}
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
              ))}
              {pdfs.map((pdf) => (
                <div
                  key={pdf.id}
                  className="flex items-center justify-between bg-gray-50 rounded-md p-4 mb-4 shadow-sm mx-auto"
                  style={{ maxWidth: "calc(100% - 32px)" }}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/pdf-icon.svg"
                      alt="PDF Icon"
                      className="w-6 h-6"
                    />
                    <span className="text-lg font-medium">{pdf.name}</span>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => toggleMenu(pdf.id, "pdf")}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <FiMoreVertical className="h-5 w-5" />
                    </button>
                    {menuOpenId === pdf.id && menuOpenType === "pdf" && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                        <a
                          href="#"
                          onClick={() => handleRenamePdf(pdf)}
                          className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          <CiEdit className="mr-2" />
                          <span>Rename</span>
                        </a>
                        <a
                          href={pdf.url}
                          download={pdf.name}
                          className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          <RiDownloadLine className="mr-2" />
                          <span>Download</span>
                        </a>
                        <a
                          href="#"
                          onClick={() => deletePdf(pdf.id)}
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
              ))}
            </>
          )}
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">
              {editModuleData ? "Edit Module" : "Add Module"}
            </h2>
            <AddModule
              isOpen={modalOpen}
              onClose={closeModal}
              addModule={addModule}
            />
            {editModuleData && (
              <EditModuleModal
                isOpen={modalOpen}
                onClose={closeModal}
                editModule={editModule}
                moduleToEdit={editModuleData}
              />
            )}
          </div>
        </div>
      )}
      <RenamePdfModal
        isOpen={renameModalOpen}
        onClose={closeRenameModal}
        renamePdf={renamePdf}
        pdfToRename={renamePdfData}
      />
      <AddLinkModal
        isOpen={linkModalOpen}
        onClose={closeLinkModal}
        addLink={addLink}
        editLinkData={editLinkData}
      />
    </>
  );
}

export default Home;
