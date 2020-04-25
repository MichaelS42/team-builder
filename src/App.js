import React, { useState } from 'react';
// import Form from "./Form"
import MemberCard from "./memberCard"

import './App.css';

function App() {
  //form component
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  })
 //form component
  //app
  const [teamMembers, setTeamMembers] = useState( 
    [
      {
        name: "Michael",
        email: "michael@email.com",
        role: "student"
      },
      {
        name: "Michael",
        email: "michael@email.com",
        role: "student"
      }
    ]
  )
   //app

//form component
    const handleInput = event => {
      setFormData({ 
        ...formData,
        [event.target.name]: event.target.value
      }) 
      console.log(formData)
  
    }

    const handleSubmit = event => {
      event.preventDefault()
      setTeamMembers([
        ...teamMembers,
        formData,

      ])
      console.log(teamMembers)
    }
//form component

  return (
    <div className="App">
      {/* form component*/}
      <form className="Form" onSubmit={handleSubmit}>
        <label>
          name: <input name="name" onChange={handleInput} />
        </label>
        <label>
          email: <input name="email" onChange={handleInput} />
        </label>
        <label>
          role: <input name="role" onChange={handleInput} />
        </label>
        <button type="submit">submit</button>
      </form>
      {/* form component */}
      {teamMembers.map(person => <MemberCard memberData={person}/>) }
    </div>
  );
}

export default App;
