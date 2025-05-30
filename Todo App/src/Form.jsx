function Form(){

  function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted!");
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Name Here" />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;