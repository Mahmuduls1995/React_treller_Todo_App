import { XIcon, PlusIcon } from '@heroicons/react/solid';


export default function AddCardInputBTN({listas,setListas,index,input,inputRef,handleChange,addTodo}){
    return(
        <>
            <input
                placeholder='Enter Title For This Card'
                onChange={handleChange}
                type="text" 
                ref={inputRef}
                className='p-1 h-10 rounded-md'
                />
            <div className='flex  gap-1'>
                <button 
                    onClick={()=>(addTodo(listas[index].todos,input,index))}
                    className='bg-zinc-300 rounded-md p-2'>Add card</button> 
                <button onClick={()=>
                    setListas((draft)=>{draft[index].submittedcardtitle = !draft[index].submittedcardtitle})}> 
                <XIcon className='w-5 h-5 my-auto'/></button>
            </div>
        </>
    
)}