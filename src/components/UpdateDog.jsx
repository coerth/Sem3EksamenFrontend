import {useState, useEffect} from 'react'
import { ApiPut } from '../utils/apiFetcher'

const UpdateDog = ({dog, owners, walkers, returnToView, refreshData}) => {
  const[updatedDog, setUpdatedDog] = useState(dog)

  const onOwnerChange = (e) => {
    e.preventDefault()
    let value = e.target.value
    let dog = updatedDog
    let owner = {
        id: owners[value].id,
        name: owners[value].name,
        address: owners[value].address,
        phone: owners[value].phone,
    } 
    dog.owner = owner
    setUpdatedDog(dog)
  }

  const onWalkerChange = (e) => {
    e.preventDefault()
    let value = e.target.value
    let dog = updatedDog
    let walker = {
        id: walkers[value].id,
        name: walkers[value].name,
        address: walkers[value].address,
        phone: walkers[value].phone,
    }
    dog.walkers = [] 
    dog.walkers.push(walker)
    setUpdatedDog(dog)
  }

  const onChange = (e) => {
    e.preventDefault()
    const value = e.target.value
    const propertyName = e.target.name

    setUpdatedDog({...updatedDog, [propertyName]: value})
}

  const onSubmit = (e) => {
    ApiPut("dog/"+dog.id, refreshData, updatedDog)
    returnToView()
  }
  return (
    <div>
    <form onSubmit={onSubmit}>
        <label for="name">Navn:</label>
        <input type={"text"} id="name" name='name' onChange={onChange} />
        <label for="breed">Race:</label>
        <input type={"text"} id="breed" name='breed' onChange={onChange}/>
        <label for="gender">Køn:</label>
        <select name="gender" id="gender" onChange={onChange}>
        <option value="Male">Han</option>
        <option value="Female">Hun</option>
        </select> 

        <label for="owner">Ejer:</label>
        <select
            className="owner"
            name="owner"
            id="owner"
            onChange={onOwnerChange}
          >
            {owners &&
              owners.map((owner) => (
                <option
                  key={owner.id}
                  value={owners.findIndex(x => x.id === owner.id)}
                >
                  {owner.name}
                </option>
              ))}
          </select>

          <label for="owner">Hundelufter:</label>
        <select
            className="walker"
            name="walker"
            id="walker"
            onChange={onWalkerChange}
          >
            {walkers &&
              walkers.map((walker) => (
                <option
                  key={walker.id}
                  value={walkers.findIndex(x => x.id === walker.id)}
                >
                  {walker.name}
                </option>
              ))}
          </select>
        <button type="submit" value="submit"  >Opdater hund</button>
    </form>
    <button onClick={returnToView}>Tilbage</button>
    </div>
  )
}

export default UpdateDog