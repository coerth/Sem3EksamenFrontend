import {useState, useEffect} from 'react'
import { ApiDelete, ApiGet } from '../utils/apiFetcher'
import CreateDog from './CreateDog'

const DisplayDog = ({dogs, setDogs, refreshData}) => {
    
    const[selectedId, setSelectedId] = useState()
    const[walkersFromDog, setWalkersFromDog] = useState()
    const[showWalkers, setShowWalkers] = useState(false)
   

useEffect(() => {
   
}, [])

const onDogChange = (e) => {
    e.preventDefault()
    let value = e.target.value
    setSelectedId(value)
}

const selectDog = (e) => {
    e.preventDefault()
    let id = selectedId ? selectedId : dogs[0].id
    ApiGet("walker/dog/"+id, setWalkersFromDog)
    setShowWalkers(true)
}


  return (
    <div>
    <div>
    <h2>Vælg hund at se hundeluftere fra:</h2>
        <form onSubmit={selectDog}>
          <select
            className="dog"
            name="dog"
            id="dog"
            onChange={onDogChange}
          >
            {dogs &&
              dogs.map((dog) => (
                <option
                  key={dog.id}
                  value={dog.id}
                >
                  {dog.name}
                </option>
              ))}
          </select>
          <button className="button-submit" value="submit" type="submit">
            Vælg Hund
          </button>
        </form>
      </div>
      <div>
        {showWalkers && walkersFromDog &&
        <table>
        <thead>
        <tr>
          <th>Navn</th>
          <th>Adresse</th>
          <th>Mobil</th>
          <th>Antal hunde</th>
        </tr>
        </thead>
        {walkersFromDog.map((walker) => (
        <tbody key={walker.id}>
          <tr>
            <td>{walker.name}</td>
            <td>{walker.address}</td>
            <td>{walker.phone}</td>
            <td>{walker.dogs.length}</td>
          </tr>
        </tbody>
        ))}
        
      </table> 
        }
      </div>
      
      </div>
  )
}

export default DisplayDog