import React, { useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#0fcaa8').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className='section-form'>
        <h1>Color Generator</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='Your Hex Value'
            className={`${error ? 'error' : null}`} />

          <button type='submit' className='generate-btn' title='Generate'>Generate</button>
        </form>
      </section>

      <section className='colors-section'>
        {list.map((color, index) => {
          return (
            <SingleColor key={index} {...color}
              index={index} hexColor={color.hex} />
          )
        })}
      </section>
    </>
  );
}

export default App;
