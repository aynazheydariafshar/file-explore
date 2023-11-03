import React, { useState } from "react";
import FileIcon from "./fileIcon";
import FolderIcon from "./folderIcon";

const FileExplorer = () => {
  const [input, setInput] = useState("");
  const [files, setFiles] = useState([{ name: "Root", type: "folder" }]);

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() =>
          setFiles((prev) => [...prev, { name: input, type: "folder" }])
        }
      >
        add
      </button>
      {files.map((file, index) => (
        <div key={index} className="file-item">
          {file.type === "folder" ? (
            <h1>{file.name}</h1>
          ) : (
            <FileIcon title={file.name} />
          )}
        </div>
      ))}
    </div>
  );
};

export default FileExplorer;
