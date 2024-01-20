import { useState } from "react"
import API_URL from "../vite-env.d";
// import { useNavigate } from "react-router-dom";



const RegistrationForm = ()=>{
     const[email, setEmail] = useState('')
     const[password, setPassword] = useState('')
     const[rpassword, setrPassword] = useState('')
   //   const navigate = useNavigate()
     
     const userData = {email,password,rpassword}

     const Register = async (e)=>{
          e.preventDefault();
       const response = await fetch(`${API_URL}/registration`,{
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(userData)
       })
       if(response.ok){
          const json = await response.json()
          // navigate(`home/${id}`)
          console.log('success', json)
       }else{
        console.log('error')
     }
   }
     return(
   <div>
          <form onSubmit={Register}>
          <label htmlFor="textEmail">Email</label>
          <br />
          <input 
          type="Email"
           id="email" 
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           />
          <br />
          <label htmlFor="textPassword">password</label>
          <br />
          <input 
          type="password" 
          id="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <label htmlFor="textPassword">Email</label>
          <br />
          <input 
          type="password" 
          value={rpassword}
          onChange={(e)=>setrPassword(e.target.value)}
          id="repeatPassword" />
     </form>
   </div>
     )
}
export default RegistrationForm