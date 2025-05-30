function Arraymap(){
  const arr = ["a","b", "c", "d", "e"];
  return(
    <div>
      <h1>Map Function</h1>
      {
        arr.map((value)=>{
          return <p>Array Values : {value.toUpperCase()}</p>
        })
      }
    </div>
  )
}

export default Arraymap;