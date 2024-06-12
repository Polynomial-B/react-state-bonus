import React from "react"

function CombinationLock() {

const [lock1, setLock1] = React.useState(0)
const [lock2, setLock2] = React.useState(0)
const [lock3, setLock3] = React.useState(0)
const [lock4, setLock4] = React.useState(0)


function handleLock(event, lock, setLock) {
    if(event.target.className === "add") {
        if(lock < 9) {
        let updateLock = lock + 1
        setLock(updateLock)
        } else return
    } else if (event.target.className === "remove") {
        if(lock > 0) {
            let updateLock = lock - 1
            setLock(updateLock)
            } else return
    }
}


function LockControl({ lock, setLock }) {
    return <div className="container">
      <h1>{lock}</h1>
      <button className="add" onClick={(event) => handleLock(event, lock, setLock)}>➕</button>
      <button className="remove" onClick={(event) => handleLock(event, lock, setLock)}>➖</button>
    </div>
}

function Unlocked( { lock1, lock2, lock3, lock4 }) {
    const key = [1, 2, 3, 4]
    if(lock1 === key[0] && lock2 === key[1] && lock3 === key[2] && lock4 === key[3]) {
    return <div className="unlocked">
    <h1>Unlocked!</h1>
    </div>
    }
    return null   
    
}
 

return (
<>
    <Unlocked lock1={lock1} lock2={lock2} lock3={lock3} lock4={lock4} />
    <LockControl lock={lock1} setLock={setLock1} />
    <LockControl lock={lock2} setLock={setLock2} />
    <LockControl lock={lock3} setLock={setLock3} />
    <LockControl lock={lock4} setLock={setLock4} />

</>

)
}

export default CombinationLock