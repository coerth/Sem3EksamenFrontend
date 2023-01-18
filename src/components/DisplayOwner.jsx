import { useState, useEffect } from "react";
import { ApiGet } from "../utils/apiFetcher";

const DisplayOwner = () => {
  const [owners, setOwners] = useState();
  const [selectedOwnerId, setSelectedOwnerId ] =useState()
  const [dogsFromOwner, setDogsFromOwner] = useState()
  const [showDogs, setShowDogs] = useState(false)

  useEffect(() => {
    ApiGet("owner/", setOwners);
  }, []);

  const onownerChange = (e) => {
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
            onChange={onownerChange}
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
            Vælg Havn
          </button>
        </form>
      </div>
      <div>
        {showDogs && dogsFromOwner &&
        <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Gender</th>
          <th>Birthdate</th>
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
