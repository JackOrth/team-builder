import React, {useState} from 'react'
//import logo from './logo.svg';
import './App.css';


const membersList = [
  {name: 'Jack', email:'jack@email.com', role: 'Full Stack Engineer'},
  {name: 'Justin', email:'justin@email.com', role: 'Full Stack Engineer'},
  {name: 'Ben', email:'ben@email.com', role: 'Coding Newbie'}
]

const initialFormValues ={
  name: '',
  email: '',
  role: '',
}
  

function App() {
  const [members, setMembers] = useState(membersList)
  const [formValues, setFormValues] = useState(initialFormValues)

  const change = evt => {
    const { name, value } = evt.target
    setFormValues({...formValues, [name]: value})
  }

  const submit = evt => {
    evt.preventDefault()
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    setMembers([...members, newMember])
    setFormValues(initialFormValues)
  }
  return (
  <div className ='container'>
    <h1 className="header">Team Members</h1>
    <div>
    {
      members.map((member, idx) => {
        return <div className='content' key={idx}>{member.name} is a {member.role} and you can reach them at {member.email}</div>
      })
    }
    </div>
    <form onSubmit={submit}>
            <div className='form'>
             <label>Name
                <input 
                type='text'
                name='name'
                onChange={change}
                value={formValues.name}
                />
                
             </label>
             <label>Email 
                <input 
                type='email'
                name='email'
                onChange={change}
                value={formValues.email}
                />
             </label>
             <label>Role 
                <select
                name='role'
                onChange={change}
                value={formValues.role}>
                    <option value="">-- select role --</option>
                    <option value="backend engineer">Backend Engineer</option>
                    <option value="frontend engineer">Frontend Engineer</option>
                    <option value="full stack engineer">Full Stack Engineer</option>
                    <option value="coding newbie">Coding Newbie</option>
                    
                </select>
             </label>
            </div>
            <div className='submit'>
                 <button>Submit</button>
             </div>
        </form>
  </div>
  )
}

export default App;
