import react,{useState,useEffect,useLayoutEffect} from 'react'

function App() {
 
  const [user,setUser] = useState({name:"Ashutosh",Age:30});
  const [name,setName] = useState("Baghel................................")

  useEffect(()=>{
    console.log("useEffect")
      })


  useLayoutEffect(()=>{ 
    console.log("useEffectLayout");
  })


    const userChange = () =>{
      setUser({Age:"Kaushal",...user})
    }
  console.log("render")
  return (
    <>
	<h1>Hello</h1>
    {name}
      {/*{user.name}
    <button onClick={()=>userChange()}>Click me</button> */}
    </>
  );

  
}




export default App;
