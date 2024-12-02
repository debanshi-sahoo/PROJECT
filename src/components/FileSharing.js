import React, { useState } from "react";
import "./FileSharing.css";

const FileSharing = () => {
  const [files, setFiles] = useState([]);

  // Handle file upload
  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  // Handle file download
  const handleFileDownload = (file) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    a.click();
  };

  // Handle file deletion
  const handleFileDelete = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="file-sharing-container">
      <h2>File Sharing</h2>
      <div className="upload-section">
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          id="file-upload"
          className="file-input"
        />
        <label htmlFor="file-upload" className="upload-btn">
          Upload Files
        </label>
      </div>
      <div className="file-list">
        {files.length > 0 ? (
          files.map((file, index) => (
            <div key={index} className="file-item">
              <p>{file.name}</p>
              <div className="file-actions">
                <button
                  onClick={() => handleFileDownload(file)}
                  className="download-btn"
                >
                  Download
                </button>
                <button
                  onClick={() => handleFileDelete(index)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No files uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default FileSharing;
