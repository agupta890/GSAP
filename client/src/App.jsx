import { useRef, useState } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import './App.css'

function App() {
  const cirleRef = useRef()
  useGSAP(()=>{
    gsap.to(cirleRef.current,{
      x:40,
      delay:1,
      duration:1,
      backgroundColor:"blue"
    })
  })


  return (
    <>
      <main>
        <div className="container">
          <div className='circle' ref={cirleRef}></div>
          <div className='box'></div>
        </div>

        <div className="container2">
          <div className='circle'></div>
          <div className='box'></div>
        </div>
      </main>
    </>
  )
}

export default App
