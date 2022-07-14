import { XIcon, CheckIcon } from '@heroicons/react/solid';
//import AddListInputBTN from './AddListInputBTN';
import { useState } from 'react';

export default function ListTitleComponent(props){
    const[clickedTitle, setClickedTitle]=useState(false);
    
    return(
        <div className='flex justify-between h-10 gap-1 '>
            {clickedTitle?
                <>
                    <CheckIcon key={props.index} onClick={()=>{
                        if(!props.input) return setClickedTitle(!clickedTitle);
                        props.setListas((draft)=>{draft[props.index].title = props.input});
                        props.setInput(''); 
                        setClickedTitle(!clickedTitle);}}
                        className="h-10 w-10 text-stone-500 rounded-md my-auto
                        hover:shadow-md hover:text-stone-600 hover:bg-zinc-200"
                    />
                    <input
                        placeholder={props.title ||'Enter List Title'}
                        onChange={props.handleChange}
                        ref={props.inputRef}
                        type="text" 
                        className='p-1 my-auto rounded-md'
                    />
                    
                </>
                :
                <>
                    <h2 onClick={()=>setClickedTitle(!clickedTitle)}
                        className='font-semibold w-full text-xl pt-1 px-2 h-10 my-auto'>{props.title}</h2>
                    <XIcon key={props.index}  onClick={()=>props.deleteLista(props.index)}  
                    className="h-5 w-5 text-stone-500 rounded-md my-auto
                    hover:shadow-md hover:text-stone-600 hover:bg-zinc-200"
                    />    
                </>
            }
            
        </div>
    
)}


