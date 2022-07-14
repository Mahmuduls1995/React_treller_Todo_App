import { XIcon, PlusIcon } from '@heroicons/react/solid';


export default function AddListInputBTN({listas,setListas,index,input,inputRef,handleChange,addList}){
    
    return(
        <>
            <input
                placeholder='Enter List Title'
                onChange={handleChange}
                ref={inputRef}
                type="text" 
                className='p-1 h-10 rounded-md'
            />
            <div className='flex  gap-1'>
                <button onClick={()=>{if (!input) return; addList(index)}} 
                    className='bg-zinc-300 rounded-md p-2'>Add list Title</button> 
                <button onClick={()=>
                    setListas((draft)=>{draft[index].addanotherlist = !draft[index].addanotherlist})}>
                    <XIcon className='w-5 h-5 my-auto'/></button>
            </div>
        </>
    
)}