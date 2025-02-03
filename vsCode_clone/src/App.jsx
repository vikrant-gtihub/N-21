import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [newFileName, setNewFileName] = React.useState("");
  const [files, setfiles] = useState([]);
  const [currfile, setcurrfile] = useState("");
  const [currfiledata, setcurrfiledata] = useState("");

  function allfiles() {
    axios.get("http://localhost:3000/get-all").then(function (response) {
      setfiles(response.data);
    });
  }

  useEffect(function () {
    allfiles();
  }, []);

  function createNewFile() {
    setIsModalOpen(true);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/create", {
      filename: newFileName,
      filedata: "dummy data that can be sued for creation",
    });
    setNewFileName("");
    allfiles();
    setIsModalOpen(false);
  }

  function updatefile(filename, filedata) {
    axios.patch("http://localhost:3000/update/" + filename, { filedata });
  }

  function deleteFile(filename) {
    axios.delete(`http://localhost:3000/delete/` + filename).then(function () {
      allfiles();
    });
  }

  return (
    <div className="flex h-screen w-screen">
      <aside className="bg-gray-100 min-w-80 text-black p-4 flex flex-col">
        <div className="mb-4 text-xl flex justify-between items-center">
          <h3 className="font-semibold">Explorer</h3>
          <i
            onClick={createNewFile}
            className="ri-add-line bg-blue-500 text-white p-0 px-1 rounded cursor-pointer"
          ></i>
        </div>
        <ul>
          {files.map(function (file, idx) {
            return (
              <div className="flex justify-between px-2">
                <li
                  key={idx}
                  className="mb-2 cursor-pointer"
                  onClick={function () {
                    setcurrfile(file);
                    axios
                      .get("http://localhost:3000/read/" + file)
                      .then(function (response) {
                        setcurrfiledata(response.data);
                      });
                  }}
                >
                  <i className="ri-file-line mr-2"></i> {file}
                </li>

                <span
                  className="text-sm text-rose-500 cursor-pointer"
                  onClick={function () {
                    deleteFile(file);
                  }}
                >
                  X
                </span>
              </div>
            );
          })}
        </ul>
      </aside>
      <main className="flex-1 bg-zinc-200 text-black">
        <textarea
          className="w-full h-full border-none p-2 outline-none "
          placeholder="Edit your file here..."
          value={currfiledata}
          onChange={function (event) {
            setcurrfiledata(event.target.value);
            updatefile(currfile, event.target.value);
          }}
        ></textarea>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50">
          <div className="p-4 rounded shadow-lg bg-gray-500">
            <h2 className="text-xl mb-4">Create New File</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                className="border p-2 mb-4 w-full rounded-md outline-none"
                placeholder="Enter file name"
                required
              />
              <button
                type="submit"
                className="bg-red-100 text-white w-fit cursor-pointer p-2 rounded"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
