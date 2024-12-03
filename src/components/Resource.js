import React, { useState } from "react";
import "./Resource.css";

const Resource = () => {
  // Initial State for Resources
  const [resources, setResources] = useState([
    {
      ResourceID: 1,
      Title: "Sample Resource",
      FilePath: "/files/sample.pdf",
      UploadedDate: new Date().toLocaleDateString(),
      UploadedBy: "John Doe",
    },
  ]);

  // State for New Resource Form
  const [newResource, setNewResource] = useState({
    Title: "",
    FilePath: "",
    UploadedBy: "John Doe", // Simulating a FK relationship
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewResource({ ...newResource, [name]: value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const resourceWithID = {
      ...newResource,
      ResourceID: resources.length + 1,
      UploadedDate: new Date().toLocaleDateString(),
    };
    setResources([...resources, resourceWithID]);
    setNewResource({ Title: "", FilePath: "", UploadedBy: "John Doe" });
  };

  return (
    <div className="resource-container">
      <h1>Resource Management</h1>

      {/* Resource Form */}
      <form onSubmit={handleSubmit} className="resource-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="Title"
            value={newResource.Title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>File Path:</label>
          <input
            type="text"
            name="FilePath"
            value={newResource.FilePath}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Resource</button>
      </form>

      {/* Resource Table */}
      <table className="resource-table">
        <thead>
          <tr>
            <th>Resource ID</th>
            <th>Title</th>
            <th>File Path</th>
            <th>Uploaded Date</th>
            <th>Uploaded By</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource) => (
            <tr key={resource.ResourceID}>
              <td>{resource.ResourceID}</td>
              <td>{resource.Title}</td>
              <td>{resource.FilePath}</td>
              <td>{resource.UploadedDate}</td>
              <td>{resource.UploadedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Resource;