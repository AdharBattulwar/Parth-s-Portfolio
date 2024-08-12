import React from 'react'
import SkillUpVideo from '../Videos/SkillUp.mp4'
import '../Stylesheet/SkillUp.css'

const SkillUp = () => {
  return (
    <>
    <main className='SkillUpWrapper'>
        <div className='SkillUpMain'>
            <div className='SkillUpVideo'>
                <video loop muted autoPlay className='SkillUpBottomVideo'>
                    <source src={SkillUpVideo} type='video/mp4'></source>
                </video>
            </div>
        </div>
        <footer className='SkillUpFooter'>
            <h1>
                Skill Up
            </h1>
            <h3>
            Mobile App UI
            </h3>
        </footer>
    </main>
    </>
  )
}

export default SkillUp
