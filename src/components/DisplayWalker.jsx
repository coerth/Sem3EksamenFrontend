import {useState, useEffect} from 'react'
import {ApiGet} from '../utils/apiFetcher'

const DisplayWalker = ({walkers, setWalkers}) => {


    useEffect( () => {
    }, [])

  return (
    <div>
      {walkers &&
    <table>
          <thead>
          <tr>
            <th>Navn</th>
            <th>Adresse</th>
            <th>Mobil</th>
            <th>Antal Hunde</th>
          </tr>
          </thead>
          {walkers.map((walker) => (
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
  )
}

export default DisplayWalker