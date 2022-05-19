import './App.css'
import { useState } from 'react'


function App() {

  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')

  let today = new Date()
  let days = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
  ]
  let day = days[today.getUTCDay()]
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day}🌝</h2>
      </div>
        <div className="input">
          <input value={toDo} onChange={(e) => { 
            setToDo(e.target.value)
            console.log(e.target.value)
            }} type="text" placeholder="🖊️ Add item..." />
            
          <i onClick={
            () => {
             setToDos([...toDos, {id : Date.now(),text:toDo , status:false}]) 
             }
            }
            className="fas fa-plus"></i>
        </div>
      
      <div className="todos">
       {
          toDos.map((value,index)=>{
            return(
              <div className="todo">
                <div className="left">
                  <input onChange={(e)=>{
                    console.log(e.target.checked);
                    setToDos(toDos.filter(obj2=>{
                      if (obj2.id === value.id) {
                        obj2.status = e.target.checked
                      }
                      if(obj2.status){
                        alert("Congratulations🎉🎉")
                      }
                      return obj2
                    }))
                  }} value={value.status} type="checkbox" name="" id="" />
                  <p>{value.text}</p>
                </div>
                <div className="right">
                  <i onClick={(e)=>{
                    console.log(value.id)
                    console.log(index)
                    // if(index > 0){
                    //   setToDos(toDos.splice(index,1))
                    // }else if(index === 0){
                    //   setToDos(toDos.splice(index+1,1))
                    // }
                    const remainingTasks = toDos.filter(task => value.id !== task.id);
                    setToDos(remainingTasks);
                  }} className="fas fa-times"></i>
                </div>
              </div>
            )
          })
        }
        
      </div>
    </div>
  );
}

export default App;



// const apps = [
//   {id:1, name:'Jon'}, 
//   {id:2, name:'Dave'},
//   {id:3, name:'Joe'}
// ]

// //remove item with id=2
// const itemToBeRemoved = {id:2, name:'Dave'}

// apps.splice(apps.findIndex(a => a.id === itemToBeRemoved.id) , 1)

// //print result
// console.log(apps)
