
import { useCallback, useState } from "react";
import {useDropzone}  from "react-dropzone";


const DropzoneComponent: React.FC = () => {
    const [droppedFiles, setDroppedFiles] = useState<File[]>([]);
  
    const onDrop = useCallback((acceptedFiles:File[]) => {
      // Update the state with the dropped files
      
      const files = acceptedFiles.map((file:File) => Object.assign(file , {
        preview: URL.createObjectURL(file)
      }))
  
      setDroppedFiles([...droppedFiles , ...files])
      
    },[droppedFiles]);
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      multiple : true,
    });
  
    return (
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''} w-full bg-gray-100 h-[400px] p-2 flex items-center justify-center`}>
        <input {...getInputProps()} />
  
        {(droppedFiles.length == 0)?
        (isDragActive) ? (
          <p>Drop the files here...</p>
        ) : (
          <p className="whitespace-normal text-center text-gray-400">Drag 'n' drop some files here, or click to select files</p>
        ):
        <></>
        }
  
        {/* Display the dropped files with previews */}
        {droppedFiles.length > 0 && (
          <div className="w-full h-full overflow-y-scroll scroll whitespace-nowrap">
            <ul className="grid grid-cols-5">
              {droppedFiles.map((file) => (
                <li className="flex" key={file.name}>
                  {file.type.startsWith('image/') ? (
                    <img src={file.preview} alt={file.name} className="object-cover" />
                  ) : (
                    <></>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  export default DropzoneComponent;
  
  