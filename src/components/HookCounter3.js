import React ,{useState} from 'react'

function HookCounter3() {
    const [name, setname] = useState({firstName:'',lastName:''})
    return (
        <div>
            <form>
                <input type="text"
                 value={name.firstName} 
                 onChange={e=>setname({...name,firstName:e.target.value})}
                />
                <input type="text"
                 value={name.lastName} 
                 onChange={e=>setname({...name,lastName:e.target.value})}
                />
                <h2>Youtr full name is {name.firstName} {name.lastName}</h2>
            </form>
        </div>
    )
}

export default HookCounter3
