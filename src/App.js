import React from 'react';
import {connect, useDispatch, useSelector} from 'react-redux'
// import Card from './Components/Card';
// import Spinner from './Components/Spinner';
// import { useEffect,useState } from 'react';
import './App.css'
import { fetchData } from './redux/action';
//Class component Redux

class App extends React.Component{
  
  render(){
    console.log(this.props.data)
    return (
      <div>
        <button onClick={this.props.fetchData}>ONCLICK</button>
      </div>
    )
  }
}

function mapStateToProps(state){
   return {
    rootReucer : state.root.rootReucer,
    data : state.root.data
   }
}

function mapDispatchToProps(dispatch){
  return{
    fetchData : () => dispatch(fetchData())
  }
}

// Functional Component Redux


// function App(props){
  
//   const data = useSelector(state => state.root.data)
//   console.log('fd', data)
  

//   const dispatch = useDispatch()


  

//   return(
//     <>
     
//        <button onClick= {() => dispatch(fetchData())}>onClick</button>
//     </>
//   )
// }





export default connect (mapStateToProps, mapDispatchToProps) (App)
