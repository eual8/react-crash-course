import React from 'react'

const App = () => {
  const name = 'John';
  const x = 10;
  const y = 20;
  const names = ['John', 'Jane', 'Bob', 'Alice', 'Tom'];

  return (
    <div className='text-2xl'>
      <h1 className='text-3xl font-bold'>Hello {name}!</h1>
      <p>The sum of {x} and {y} is {x + y}</p>
      <ul className='list-disc'>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App