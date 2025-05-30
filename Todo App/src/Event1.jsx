import React from 'react';

const Event1 = () => {

  const doubleclickHandler = () => {
    alert("Double Clicked");
  }
  return (
    <div>
      <button onDoubleClick={doubleclickHandler}>Double Click Here</button>
    </div>
  );
}

export default Event1;
