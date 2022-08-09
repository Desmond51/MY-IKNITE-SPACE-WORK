import { useState } from "react";

const Home =()=>{

const [name, setName]= useState("Desmond");
const [age, setAge] = useState("23");


}
const handleClick =()=>{
setName("Tekum");
setAge("24")



return(
<div className="Home">

<h1> Homepage</h1>
<p> {name} is 24 years old </p>
<button onClick={handleChange}> Click me abeg</button>



</div>


);
    }
    export default Home;