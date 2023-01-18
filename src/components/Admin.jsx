import React from 'react'
import { useState, useEffect } from 'react'
import CreateDog from './CreateDog'
import DeleteDog from './DeleteDog'
import UpdateDog from './UpdateDog'

const Admin = ({owners, dogs, walkers, refreshData}) => {
    const[showCreateDog, setShowCreateDog] = useState(false)
    const[showUpdateDog, setShowUpdateDog] = useState(false)
    const[showDeleteDog, setShowDeleteDog] = useState(false)
    const[selectedIndex, setSelectedIndex] = useState()


 const showDogCreate = () => {
        setShowCreateDog(true)
 }

 const returnToView = () => {
    setShowCreateDog(false)
    setShowUpdateDog(false)
    setShowDeleteDog(false)
 }

 const showDogUpdate = (e) => {
    setShowUpdateDog(true)
    setSelectedIndex(e.target.value)
}



const showDogDelete = (e) => {
    setShowDeleteDog(true)
    setSelectedIndex(e.target.value)
}
   
  return (
    <div>
       <div>
        {dogs &&
        <table>
        <thead>
        <tr>
          <th>Navn</th>
          <th>Race</th>
          <th>Køn</th>
          <th>Fødselsdag</th>
        </tr>
        </thead>
        {dogs.map((dog) => (
        <tbody key={dog.id}>
          <tr>
            <td>{dog.name}</td>
            <td>{dog.breed}</td>
            <td>{dog.gender}</td>
            <td>{dog.birthdate}</td>
            <td><button onClick={showDogDelete} value={dogs.findIndex(x => x.id === dog.id)}>Slet</button></td>
            <td><button onClick={showDogUpdate} value={dogs.findIndex(x => x.id === dog.id)}>Opdater</button></td>
          </tr>
        </tbody>
        ))}
        
      </table> 
        }
      </div>
        {!showCreateDog && !showUpdateDog && !showDeleteDog &&
        <div>
        <div>
        <button onClick={showDogCreate}>Klik for at oprette en hund</button>
        </div>
        </div>
        
         }
         {showCreateDog &&
         <div>
            <CreateDog  owners={owners} refreshData={refreshData} returnToView={returnToView}/>
         </div>
         }
         
         {showUpdateDog &&
         <div>
            <UpdateDog dog={dogs[selectedIndex]} refreshData={refreshData} owners={owners} walkers={walkers} returnToView={returnToView}/>
         </div>
         }

        {showDeleteDog &&
         <div>
            <DeleteDog dog={dogs[selectedIndex]} refreshData={refreshData} returnToView={returnToView}/>
         </div>
         }

         
    </div>
  )
}

export default Admin