import React from 'react';
import './App.css';
import {connect } from 'react-redux';
function App(props) {
  console.log(props)
  return (
    <div>
   hello world {props.myname}

    <button onClick={()=>props.changeName("rafay")} className="btn btn-primary"> on change</button>
  </div>);
}
const mapStateToProps=(state)=>{
  return{
    myname:state.name
  }

}
const mapDispatchToProps =(dispatch)=>{
  return{
    changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name})}

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
