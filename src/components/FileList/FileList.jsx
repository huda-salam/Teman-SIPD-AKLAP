import axios from "../../service/axios";
import React from 'react'
import FileItem from './../FileItem/FileItem'

const FileList = ({ files, removeFile }) => {
    const deleteFileHandler = (_name) => {
        axios.delete(`saldo_awal/upload?name=${_name}`)
            .then((res) => removeFile(_name))
            .catch((err) => console.error(err));
    }
    return (
        <ul className="file-list">
            {
                files &&
                files.map(f => (<FileItem
                    key={f.name}
                    file={f}
                    deleteFile={deleteFileHandler} />))
            }
        </ul>
    )
}

export default FileList
