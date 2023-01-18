import {useState, useEffect} from 'react'
import { Form } from 'react-router-dom'
import { ApiGet, ApiPost } from '../utils/apiFetcher'
import { initialDog } from '../utils/initialState'

const CreateDog = ({owners, refreshData, returnToView}) => {
    const[newDog, setNewDog] = useState(initialDog)
    

    useEffect(() => {
        
    }, [])

    const onOwnerChange = (e) => {
        e.preventDefault()
        let value = e.target.value
        let dog = newDog
        let owner = {
            id: owners[value].id,
            name: owners[value].name,
            address: owners[value].address,
            phone: owners[value].phone,
        } 
        dog.owner = owner
        setNewDog(dog)
      }

    const onChange = (e) => {
        e.preventDefault()
        const value = e.target.value
        const propertyName = e.target.name

        setNewDog({...newDog, [propertyName]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let birthdate = "2020-12-12"
        newDog.birthdate = birthdate
        newDog.gender = newDog.gender ? newDog.gender : "Male"
        newDog.owner = newDog.owner ? newDog.owner : owners[0]

        ApiPost("dog", refreshData, newDog)
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
        <button type="submit" value="submit"  >Lav hund</button>
    </form>
    <button onClick={returnToView}>Tilbage</button>
    </div>
  )
}

export default CreateDog