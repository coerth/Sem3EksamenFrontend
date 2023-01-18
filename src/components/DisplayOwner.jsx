import { useState, useEffect } from "react";
import { ApiGet } from "../utils/apiFetcher";

const DisplayOwner = ({owners, setOwners}) => {
  const [selectedOwnerId, setSelectedOwnerId ] =useState()
  const [dogsFromOwner, setDogsFromOwner] = useState()
  const [showDogs, setShowDogs] = useState(false)

  useEffect(() => {
   
  }, []);

  const onOwnerChange = (e) => {
    e.preventDefault()
    let value = e.target.value
    setSelectedOwnerId(value)
  }

 const selectOwner = (e) => {
    e.preventDefault()
    let id = selectedOwnerId ? selectedOwnerId : owners[0].id
    ApiGet("dog/owner/"+id, setDogsFromOwner)
    setShowDogs(true)

  }

  return (
    <div>
      <h2>Vælg ejer at se hunde fra:</h2>
      <div>
        <form onSubmit={selectOwner}>
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
                  value={owner.id}
                >
                  {owner.name}
                </option>
              ))}
          </select>
          <button className="button-submit" value="submit" type="submit">
            Vælg Ejer
          </button>
        </form>
      </div>
      <div>
        {showDogs && dogsFromOwner &&
        <table>
        <thead>
        <tr>
          <th>Navn</th>
          <th>Race</th>
          <th>Køn</th>
          <th>Fødselsdag</th>
        </tr>
        </thead>
        {dogsFromOwner.map((dog) => (
        <tbody key={dog.id}>
          <tr>
            <td>{dog.name}</td>
            <td>{dog.breed}</td>
            <td>{dog.gender}</td>
            <td>{dog.birthdate}</td>
          </tr>
        </tbody>
        ))}
        
      </table> 
        }
      </div>
    </div>
  );
};

export default DisplayOwner;
