import { useState } from "react";
import ModuleItem from "./ModuleItem";
import PdfItem from "./PdfItem";
import LinkItem from "./LinkItem";
import { FiMoreVertical } from "react-icons/fi";
import AddModule from "./AddModule";
import EditModuleModal from "./EditModuleModal";
import FileUpload from "./FileUpload";
import RenamePdfModal from "./RenamePdfModal";
import AddLinkModal from "./AddLinkModal";

function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modules, setModules] = useState([]);
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [menuOpenType, setMenuOpenType] = useState(null);
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
                <ModuleItem
                  key={module.id}
                  module={module}
                  onEdit={handleEditModule}
                  onDelete={deleteModule}
                  onToggleMenu={toggleMenu}
                  menuOpen={
                    menuOpenId === module.id && menuOpenType === "module"
                  }
                />
              ))}
              {links.map((link) => (
                <LinkItem
                  key={link.id}
                  link={link}
                  onEdit={handleEditLink}
                  onDelete={deleteLink}
                  onToggleMenu={toggleMenu}
                  menuOpen={menuOpenId === link.id && menuOpenType === "link"}
                />
              ))}
              {pdfs.map((pdf) => (
                <PdfItem
                  key={pdf.id}
                  pdf={pdf}
                  onRename={handleRenamePdf}
                  onDelete={deletePdf}
                  onToggleMenu={toggleMenu}
                  menuOpen={menuOpenId === pdf.id && menuOpenType === "pdf"}
                />
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
