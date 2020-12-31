import React,{useState,useEffect} from 'react'

function EffectCounter1() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('');
    useEffect(()=>{
        console.log("Effect updating the document title")
        document.title = `Clicked ${count} times`
    },[count]);
    
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>click {count} times</button>
            <input 
                    type="text" 
                    value={name} 
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                    />
        </div>
    )
}

export default EffectCounter1
