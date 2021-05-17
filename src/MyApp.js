

function MyApp(){

    const message="Hi from MyApp Component!!!"
    const person={
        name:"John Doe",
        city:"Pune",
        mobile:"+919876543210"
    }
    return(
        <div>
            <h1>MyApp Component</h1>
            <NewComponent message={person}/>
        </div>
    )
}

function NewComponent(props){
    console.log(props.message);  
    return(
        <div>
            <h1>New Component</h1>
            <p>Name : {props.message.name}</p>
            <p>City : {props.message.city}</p>
            <p>MobileNo : {props.message.mobile}</p>
        </div>
    )
}

export default MyApp