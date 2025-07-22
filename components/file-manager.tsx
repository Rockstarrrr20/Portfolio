"use client"

import { useState } from "react"
import { File, Folder, Plus, Edit3, Trash2, Move, Copy, Download, Upload, Search, Filter } from "lucide-react"

export default function FileManager() {
  const [files, setFiles] = useState([
    { id: 1, name: "portfolio.tsx", type: "file", size: "2.4 KB", modified: "2 hours ago" },
    { id: 2, name: "components", type: "folder", items: 5, modified: "1 day ago" },
    { id: 3, name: "styles.css", type: "file", size: "1.8 KB", modified: "3 hours ago" },
    { id: 4, name: "utils", type: "folder", items: 3, modified: "2 days ago" },
  ])

  const [selectedFiles, setSelectedFiles] = useState<number[]>([])

  const handleFileSelect = (id: number) => {
    setSelectedFiles((prev) => (prev.includes(id) ? prev.filter((fileId) => fileId !== id) : [...prev, id]))
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <Folder className="me-2" size={20} />
                  File Manager
                </h5>
                <div className="d-flex gap-2">
                  <button className="btn btn-light btn-sm">
                    <Plus size={16} className="me-1" />
                    New
                  </button>
                  <button className="btn btn-light btn-sm">
                    <Upload size={16} className="me-1" />
                    Upload
                  </button>
                </div>
              </div>
            </div>

            {/* Toolbar */}
            <div className="card-body border-bottom">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-text">
                      <Search size={16} />
                    </span>
                    <input type="text" className="form-control" placeholder="Search files..." />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-secondary btn-sm">
                      <Filter size={16} className="me-1" />
                      Filter
                    </button>
                    {selectedFiles.length > 0 && (
                      <>
                        <button className="btn btn-outline-primary btn-sm">
                          <Edit3 size={16} className="me-1" />
                          Edit
                        </button>
                        <button className="btn btn-outline-success btn-sm">
                          <Move size={16} className="me-1" />
                          Move
                        </button>
                        <button className="btn btn-outline-info btn-sm">
                          <Copy size={16} className="me-1" />
                          Copy
                        </button>
                        <button className="btn btn-outline-danger btn-sm">
                          <Trash2 size={16} className="me-1" />
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* File List */}
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th width="40">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedFiles(files.map((f) => f.id))
                            } else {
                              setSelectedFiles([])
                            }
                          }}
                        />
                      </th>
                      <th>Name</th>
                      <th>Size</th>
                      <th>Modified</th>
                      <th width="120">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {files.map((file) => (
                      <tr key={file.id} className={selectedFiles.includes(file.id) ? "table-active" : ""}>
                        <td>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={selectedFiles.includes(file.id)}
                            onChange={() => handleFileSelect(file.id)}
                          />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            {file.type === "folder" ? (
                              <Folder className="text-warning me-2" size={18} />
                            ) : (
                              <File className="text-primary me-2" size={18} />
                            )}
                            <span className="fw-medium">{file.name}</span>
                          </div>
                        </td>
                        <td className="text-muted">{file.type === "folder" ? `${file.items} items` : file.size}</td>
                        <td className="text-muted">{file.modified}</td>
                        <td>
                          <div className="btn-group btn-group-sm">
                            <button className="btn btn-outline-primary" title="Edit">
                              <Edit3 size={14} />
                            </button>
                            <button className="btn btn-outline-success" title="Download">
                              <Download size={14} />
                            </button>
                            <button className="btn btn-outline-danger" title="Delete">
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Status Bar */}
            <div className="card-footer bg-light">
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  {files.length} items • {selectedFiles.length} selected
                </small>
                <small className="text-muted">Total: 4.2 KB</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
