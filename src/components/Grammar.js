import React, { useEffect, useState, useRef } from 'react';
import "./grammar.css";
import { useNotes } from '../context/noteContext';




export default function Grammar() {

    const { file, fileupload, setFileupload } = useNotes();

    const [text, setText] = useState('');
    const [data, setData] = useState([]);
    const [response, setResponse] = useState([]);
    const [correctdata, setCorrectData] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        if (file) {
            setText(file);
        }
    }, [file])

    function handleClick() {
        if (data && response.length > 0) {
            response.forEach((x) => {
                if (data.includes(x.bad)) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i] === x.bad) {
                            data[i] = x.better[0]
                        }
                    }
                    const finaldata = data.join(' ');
                    setCorrectData(finaldata);
                }
            })
        }
    }

    function handleChange(e) {
        setText(e.target.value);
    }

    useEffect(() => {
        if (text !== '') {
            if (fileupload) {
                inputRef.current.value = file;
                setFileupload(false);
            }
            check();
            setData(text.split(' '))
            
        }
        // eslint-disable-next-line
    }, [text, fileupload])

    const check = async () => {
        try {
            const response = await fetch(`https://api.textgears.com/spelling?text=${text}&language=en-GB&whitelist=&dictionary_id=&key=UVgdh8Eniw0UaJQY`)
            const data = await response.json();
            const responsearray = await data.response.errors;
            setResponse(responsearray);
        }
        catch (e) {
            console.log(e);
        }
    }

    function trailingDebounce(func, delay) {

        let timeoutId
        let context = this
        return function (...args) {
            if (timeoutId) clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                func.apply(context, args)
            }, delay)
        }
    }

    const betterhandle = trailingDebounce(handleChange, 1000);

    return (
        <div id='container'>
            <div id='textdiv' className='textclass'>
                <textarea name="gtext" id="textbox1" onChange={betterhandle} ref={inputRef} placeholder='Enter Text' maxLength={150}></textarea>
                <button className='btn btn-primary' id='btn1' onClick={handleClick}>Spell check Your content</button>

                <div id='textbox2' className='output'>
                    Spell checked/ Grammar checked text : <br/> <br/>
                    {correctdata}
                </div>
            </div>

        </div>
    )
}
