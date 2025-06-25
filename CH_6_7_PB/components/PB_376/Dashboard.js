import React from 'react'

function Dashboard(props) {
  return (
    <div>
      <h1>{props.project.name}</h1>
      <h1>{props.project.backend}</h1>
      <h1>{props.project.frontend}</h1>
      <h1>{props.project.database}</h1>
    </div>
  )
}

export default Dashboard
