import {useState} from 'react'
import { ApiDelete } from '../utils/apiFetcher'

const DeleteDog = ({dog, refreshData, returnToView}) => {
       
    const deleteADog = (e) => {
        e.preventDefault()
        ApiDelete("dog/", refreshData, dog)
        returnToView()
    }

  return (
    <div>
      {dog && 
        <div>
        <h2>Er du sikker på at slette {dog.name}?</h2>
        <button onClick={deleteADog}>Ja</button>
        </div>
        }
     <button onClick={returnToView}>Tilbage</button>
      </div>
  )
}

export default DeleteDog