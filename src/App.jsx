// import './App.css'
// import React from 'react'

// const NumButton = ({ value, setDisplay }) => {

//   const handleClick = () => {
//     setDisplay((prevDisplay) => {
//       if (prevDisplay === '0') {
//         return value
//       } else {
//         return prevDisplay + value
//       }
//     })
//   }

//   return (
//     <button className="btn" onClick={handleClick}>{value}</button>
//   )
// }

// function App() {
//   const [display, setDisplay] = React.useState('0')
//   const [memory, setMemory] = React.useState('0')
//   const [operator, setOperator] = React.useState(null)

//   const handleEqual = () => {
//     const displayNum = parseFloat(display)
//     const memoryNum = parseFloat(memory)

//     if (operator === '+') {
//       const calc = memoryNum + displayNum
//       setDisplay(calc.toString())
//     } else if (operator === '-') {
//       const calc = memoryNum - displayNum
//       setDisplay(calc.toString())
//     } else if (operator === 'x') {
//       const calc = memoryNum * displayNum
//       setDisplay(calc.toString())
//     } else if (operator === '/') {
//       const calc = memoryNum / displayNum
//       setDisplay(calc.toString())
//     } else if (operator === null) {
//       return
//     }
//     setMemory('0')
//     setOperator(null)
//   }

//     const operatorPressed = (op) => {
//       const displayNum = parseFloat(display)
//       const memoryNum = parseFloat(memory)
//       if (operator===null){} 
//     }
//   }

//   return (
//     <>
//       <div className="calculator">
//         <div className="display">
//           <span>{display}</span>
//         </div>

//         <div className="numpad">
//           <NumButton value='7' setDisplay={setDisplay}/>
//           <NumButton value='8' setDisplay={setDisplay}/>
//           <NumButton value='9' setDisplay={setDisplay}/>

//           <button className='btn arithmetic-button'>x</button>

//           <NumButton value='4' setDisplay={setDisplay}/>
//           <NumButton value='5' setDisplay={setDisplay}/>
//           <NumButton value='6' setDisplay={setDisplay}/>

//           <button className='btn arithmetic-button'>+</button>

//           <NumButton value='1' setDisplay={setDisplay}/>
//           <NumButton value='2' setDisplay={setDisplay}/>
//           <NumButton value='3' setDisplay={setDisplay}/>

//           <button className='btn arithmetic-button'>-</button>

//           <button className='btn zero-button' onClick={() => {
//             setDisplay((prevDisplay) => {
//               if (prevDisplay === '0') {
//                 return '0'
//               } else {
//                 return prevDisplay + '0'
//               }
//             })
//           }}>0</button>

//           <button className='btn' onClick={() => {
//             setDisplay((prevDisplay) => {
//               if (prevDisplay.indexOf('.') === -1) {
//                 return prevDisplay + '.'
//               } else {
//                 return prevDisplay
//               }
//             })
//           }}>.</button>

// <button className='btn arithmetic-button' onClick=[handleEqual]>=</button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App


import './App.css'
import React from 'react'

const NumButton = ({ value, setDisplay }) => {
  const handleClick = () => {
    setDisplay((prevDisplay) => {
      if (prevDisplay === '0') {
        return value
      } else {
        return prevDisplay + value
      }
    })
  }

  return (
    <button className="btn" onClick={handleClick}>{value}</button>
  )
}

function App() {
  const [display, setDisplay] = React.useState('0');
  const [memory, setMemory] = React.useState('0');
  const [operator, setOperator] = React.useState(null);

  const handleEqual = () => {
    const displayNum = parseFloat(display)
    const memoryNum = parseFloat(memory)

    if (operator === '+') {
      const calc = memoryNum + displayNum
      setDisplay(calc.toString())
    } else if (operator === '-') {
      const calc = memoryNum - displayNum
      setDisplay(calc.toString())
    } else if (operator === 'x') {
      const calc = memoryNum * displayNum
      setDisplay(calc.toString())
    } else if (operator === '/') {
      const calc = memoryNum / displayNum
      setDisplay(calc.toString())
    } else if (operator === null) {
      return ;
    }

    setMemory('0')
    setOperator(null)
  }

  const operatorPressed = (op) => {
    const displayNum = parseFloat(display)
    const memoryNum = parseFloat(memory)
    if(operator === null) {
      setMemory(display)
      setOperator(op)
      setDisplay('0')
      return ;
    } else if (operator === '+') {
      const calc = memoryNum + displayNum
      setMemory(calc.toString())
    } else if (operator === '-') {
      const calc = memoryNum - displayNum
      setMemory(calc.toString())
    } else if (operator === 'x') {
      const calc = memoryNum * displayNum
      setMemory(calc.toString())
    } else if (operator === '/') {
      const calc = memoryNum / displayNum
      setMemory(calc.toString())
    }
    setOperator(op)
    setDisplay('0')
  }

  return (
    <>
      <div className="calculator">
        <div className="display">
          <span>{display}</span>
        </div>
        <div className="numpad">
          <button className="btn" onClick={() => {
            if(display !== '0') {
              setDisplay('0')
            } else {
              setDisplay('0')
              setMemory('0')
              setOperator(null)
            }
          }}>{display !== '0' ? 'C' : 'AC'}</button>
          <button className="btn" onClick={() => {
            setDisplay((prevDisplay) => {
              const value = parseFloat(prevDisplay)
              return (value * -1).toString()
            })
          }}>+/-</button>
          <button className="btn" onClick={() => {
            setDisplay((prevDisplay) => {
              const value = parseFloat(prevDisplay)
              return (value / 100).toString()
            })
          }}>%</button>

          <button className="btn arithmetic-button" onClick={() => operatorPressed('/')}>{'/'}</button>

          <NumButton value="7" setDisplay={setDisplay} />
          <NumButton value="8" setDisplay={setDisplay} />
          <NumButton value="9" setDisplay={setDisplay} />

          <button className='btn arithmetic-button' onClick={() => operatorPressed('x')}>x</button>

          <NumButton value="4" setDisplay={setDisplay} />
          <NumButton value="5" setDisplay={setDisplay} />
          <NumButton value="6" setDisplay={setDisplay} />

          <button className='btn arithmetic-button' onClick={() => operatorPressed('+')}>+</button>

          <NumButton value="1" setDisplay={setDisplay} />
          <NumButton value="2" setDisplay={setDisplay} />
          <NumButton value="3" setDisplay={setDisplay} />

          <button className='btn arithmetic-button' onClick={() => operatorPressed('-')}>-</button>

          <button className='btn zero-button' onClick={() => {
            setDisplay((prevDisplay) => {
              if (prevDisplay === '0') {
                return '0'
              } else {
                return prevDisplay + '0'
              }
            })
          }}>0</button>
          <button className='btn' onClick={() => {
            setDisplay((prevDisplay) => {
              if(prevDisplay.indexOf('.') === -1) {
                return prevDisplay + '.'
              } else {
                return prevDisplay
              }
            })
          }}>.</button>


          <button className='btn arithmetic-button' onClick={handleEqual}>=</button>
        </div>
      </div>
    </>
  )
}

export default App
