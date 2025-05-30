function Task1(){
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return(
    <div>
    <h1>Task 1</h1>
    <p>List Of Fruits</p>

    <ol style={{textAlign:"center"}}>
      <li>Apple</li>
      <li>Lichi</li>
      <li>Kiwi</li>
      <li>Pineapple</li>
      <li>Strabawary</li>
    </ol>

    <h6>Current Date : {date}</h6>
    <h6>Current Time : {time}</h6>
    </div>
  )
}

export default Task1;