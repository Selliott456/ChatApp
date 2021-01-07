import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../components/styles/join.css'
import axios from 'axios'

const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [data, updateData] = useState([])
  const [cityData, updateCityData] = useState([])


  //gets cities from API to map in menu
  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(resp => {
        updateData(resp.data)
        updateCityData(data)
  }, [])
})


  return (
  <div className="joinOuterContainer">
    <div className="joinInnerContainer">
      <h1 className="heading">Join</h1>
      <div>
        <input placeholder="name" className="joinInput" type="text" onChange={
          (event) => setName(event.target.value)} />
      </div>
      <div className="dropdown">
          <label>
            Chose City
          <input className="joinInput" room="location" onChange={(event) => setRoom(event.target.value)}></input>
          </label>
        </div>
      {/* url stops you having to pass props */}
      {/* does nothing if no name or no room selected */}
      <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
        <button className="button" type="submit">Sign In</button>

      </Link>
    </div>
  </div>
  )
}

export default Join