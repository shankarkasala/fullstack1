import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
 class App1 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              fullname:"",
              username:"",
              email:"",
              password:""
         }
     }
     changefullname=(e)=>{
         this.setState({
             fullname:e.target.value
         })
     }
     changeusername=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    changeemail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    changepassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault()
        const registered={
            fullname:this.state.fullname,
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://localhost:4000/app/signup',registered)
        .then(response => console.log(response.data))
        this.setState({
            fullname:'',
            username:'',
            email:'',
            password:''
        })
    }
    render() {
        return (
            <div>
               <div className='container'>
                   <div className='form-div'>

                       <form onSubmit={this.onSubmit}>
                           <input type='text'
                           placeholder='full name'
                           onChange={this.changefullname}
                           value={this.state.fullname}
                           className='form-control form-group'
                           />
                            <input type='text'
                           placeholder='user name'
                           onChange={this.changeusername}
                           value={this.state.username}
                           className='form-control form-group'
                           />
                            <input type='text'
                           placeholder='email'
                           onChange={this.changeemail}
                           value={this.state.email}
                           className='form-control form-group'
                           />
                            <input type='password'
                           placeholder='password'
                           onChange={this.changepassword}
                           value={this.state.password}
                           className='form-control form-group'
                           />
                           <input type='submit' className='btn btn-danger btn-block'
                           value='submit'/>
                       </form>
                   </div>
                   </div> 
            </div>
        )
    }
}

export default App1
