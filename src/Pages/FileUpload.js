import React from "react";

function FileUpload({ onUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const fileUrl = URL.createObjectURL(file);
      onUpload(fileUrl, file.name);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <label className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
      ↗ Upload
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="hidden"
      />
    </label>
  );
}

export default FileUpload;
