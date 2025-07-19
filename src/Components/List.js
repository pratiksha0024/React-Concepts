import React from 'react'
import Person from './Person'

function List(){
    
    const Names=['Bruce','Clark','Diana','Clark']
    const nameList=Names.map((Name,index) => <h2 key ={index}> {index} {Name}</h2>)
    return(
    <div>
        {nameList}
    </div> )
}
//     const personList=[{
//         id:1,
//         name:'Pratiksha',
//         age:21,
//         skill:'React'
//     },
//     {
//          id:2,
//         name:'Diana',
//         age:20,
//         skill:'HTML'
//     },
//     {
//          id:3,
//         name:'Clark',
//         age:19,
//         skill:'CSS'
//     }
// ]
    
//     const personsList=personList.map(person => <Person person = {person}/>

//     )
//     return(

//         <div>
//             {personsList}     
//         </div>
        // <div> 
        //     <h1>{names [0]}</h1>
        //     <h1>{names [1]}</h1>
        //     <h1>{names [2]}</h1>
        // </div>
    

export default List