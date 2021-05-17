import React,{useState} from 'react'
function EventCheck(){
  
     const[count,setCount]=useState(0)
    //  const[firstName,setFirstName]=React.useState('')
    //  const[lastName,setLastName]=React.useState('')

    const personObj={
        firstName:'',
        lastName:''
    }
     const [person,setPerson]=useState(personObj)
    //  const[newName,setNewName]=React.useState('')

    const handleClick=()=>{
        console.log("You clicked the button...");       
    }

     const handleCount=()=>{
         setCount(count+1)
     }

     const onChange=event=>{
         setPerson({...person,[event.target.name]:event.target.value})
     }

//     const showFirstName=(event)=>{
//           console.log(event.target);        
//           setFirstName(event.target.value)    
//      }

//      const showLastName=(event)=>{
//         console.log(event.target);        
//         setLastName(event.target.value)    
//    }
     
    // const displayName=()=>{
    //     setNewName(firstName)
    // }

    return(
        <div>
            <p>Count : {count}</p>
            <label>Enter FirstName : </label>
            <input type="text" name="firstName" onChange={onChange}/>
            <label>Enter LastName : </label>
            <input type="text" name="lastName" onChange={onChange}/>

            <p> FirstName : {person.firstName}</p>
            <p> LastName  : {person.lastName}</p>

            <button type="button" onClick={handleCount}>Click</button>
           

        </div>
    )
}

export default EventCheck

// <button type="button" onClick={()=>{
//     setCount(count+1)
// }}>Change Count</button>

// <button type="button" onClick={showName}>Display Name</button>
