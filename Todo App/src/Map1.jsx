function Map1(){
  const arr=[1, 2, 3, 4, 5];
  return(
    <div>
    
    <h1>Example Of Mapping</h1>
    {
      arr.map((value)=>{
        return <h2>Array Element={value}</h2>
      })
    }
      <h1>Multiplication of numbers are as under: </h1> 
        {  
            arr.map((value)=> 
            { 
                return <h2>{value} * 5 = {value * 5}</h2> 
            }) 
            }
    </div>

  )
}

export default Map1;