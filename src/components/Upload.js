import React, {useRef, useState} from 'react';
import './upload.css';
import { useNotes } from '../context/noteContext';



export default function Upload() {

    const [filename,setFileName] = useState('No file choosen, yet')

    const {setFile,setFileupload} = useNotes();
    const showFile = (e) => {
        e.preventDefault();
        console.log(e.target.files[0].name);
        setFileName(e.target.files[0].name);
        const reader = new FileReader();
        reader.onload = (e) => {
          const filetext = e.target.result;
          setFile(filetext);

          setFileupload(true);

        };
        reader.readAsText(e.target.files[0]);
      };

    function handleClick(e){
        myRefname.current.click();
       
    }

    const myRefname= useRef(null);


  return (
    <div id='container'>

    <h5 className='uploadhead'>Upload a File</h5>
    <div id='upload_div'>
        <input type="file" id='real-file' name="" onChange={showFile} ref={myRefname} hidden="hidden" />
        <button className='btn btn-primary' id='uploadbtn' onClick={handleClick}>Choose a file</button>
        <span id='uploadtext'>{filename}</span>
    </div>


    </div>
  )
}
