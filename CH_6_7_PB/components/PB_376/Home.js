import React from 'react'
function Home(props) {
  return (
    <div>
      <h1>LJ University</h1>
      <img src={props.source} height={100} width={150}></img>
    </div>
  )
}

export default Home
