import {useState, useEffect} from 'react'
import {ApiGet} from '../utils/apiFetcher'

const DisplayWalker = () => {
    const[walkers, setWalkers] = useState()


    useEffect( () => {
        ApiGet("walker/", setWalkers)
    }, [])

  return (
    <div>
      {walkers &&
    <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Amount of dogs</th>
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