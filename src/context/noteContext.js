import { createContext, useContext, useState } from "react";


const NoteContext = createContext();

export const NoteProvider = ({children}) => {

    const [file,setFile] = useState('');
    const [fileupload,setFileupload] = useState(false);



    return <NoteContext.Provider value={{file,setFile,fileupload,setFileupload}}>{children}</NoteContext.Provider>


}


export const useNotes = () =>  useContext(NoteContext);
