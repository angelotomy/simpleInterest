
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

  const validate = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value);
    if (!!value.match(/^[0-9]*$/)) {
      if (name == 'principle') {
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if (name == 'rate') {
        setRate(value)
        setIsRate(true)
      }
      else {
        setYear(value)
        setIsYear(true)
      }
    }
    else {
      if (name == 'principle') {
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if (name == 'rate') {
        setRate(value)
        setIsRate(false)
      }
      else {
        setYear(value)
        setIsYear(false)
      }
    }
  }

  const handleReset = () => {
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (principle == "" || rate == "" || year == "") {
      alert('Please fill all the containers')
    }
    else {
      setInterest((principle * rate * year) / 100)
    }
  }

  return (
    <>
      <div style={{ backgroundColor: 'black', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
        <div style={{ backgroundColor: 'white', width: '600px' }} className='p-5 rounded mt-5 '>
          <h1 style={{ fontFamily: 'bebas neue', fontSize: '90px' }} className='d-flex justify-content-center'>
            SIMPLE INTEREST
          </h1>
          <p style={{ fontFamily: 'bebas neue', fontSize: '22px' }} className='d-flex justify-content-center'>Calculate your simple interest easily</p>
          <div style={{ height: '150px', backgroundColor: 'orange' }} className='pd-4 mt-5 rounded shadow d-flex justify-content-center align-items-center flex-column'>
            <h1 className='fw-bold'>₹ {interest}</h1>
            <p style={{ fontFamily: 'bebas neue', fontSize: '22px' }}>Total Simple Interest</p>

          </div>
          <form className='mt-4' onSubmit={handleCalculate}>
            <div className="mb-3"> <TextField className='w-100' id="outlined-basic" label="₹ Principle Amount" variant="outlined" value={principle || ""} onChange={(e) => validate(e)} name='principle' />
              {!isPrinciple &&
                <p className='text-danger' style={{ fontFamily: 'bebas neue', fontSize: '15px' }}>*Invalid input</p>
              }
            </div>
            <div className="mb-3"><TextField className='w-100' id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" value={rate || ""} onChange={(e) => validate(e)} name='rate' />
              {!isRate &&
                <p className='text-danger' style={{ fontFamily: 'bebas neue', fontSize: '15px' }}>*Invalid input</p>
              }
            </div>
            <div className="mb-3"><TextField className='w-100' id="outlined-basic" label="Year (Yr)" variant="outlined" value={year || ""} onChange={(e) => validate(e)} name='year' />
              {!isYear &&
                <p className='text-danger' style={{ fontFamily: 'bebas neue', fontSize: '15px' }}>*Invalid input</p>
              }
            </div>
            <div className='d-flex justify-content-center'>
              <Button className='m-3' variant="outlined" style={{ fontFamily: 'bebas neue', fontSize: '22px' }} disabled={isPrinciple && isRate && isYear ? false : true} type='submit' >Calculate</Button>
              <Button className='m-3' variant="contained" style={{ fontFamily: 'bebas neue', fontSize: '22px' }} onClick={handleReset}>Reset</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
