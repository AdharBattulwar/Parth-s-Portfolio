import React from 'react'
import SmartIndVideo from '../Videos/SmartInductionDish.mp4'
import '../Stylesheet/SmartInd.css'

const SmartInduction = () => {
  return (
    <>
    <main className='SmartIndWrapper'>
        <div className='SmartIndMain'>
            <div className='SmartIndVideo'>
                <video loop muted autoPlay className='SmartIndBottomVideo'>
                    <source src={SmartIndVideo} type='video/mp4'></source>
                </video>
            </div>
        </div>
        <footer className='SmartIndFooter'>
            <h1>
                Smart Induction
            </h1>
            <h3>
            UI Design
            </h3>
        </footer>
    </main>
    </>
  )
}

export default SmartInduction
