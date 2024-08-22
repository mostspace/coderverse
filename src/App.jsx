import React from 'react'
import { 
  Skills,
  Video,
  Portfolio,
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  MainTab,
} from './components'
import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <MainTab/>
          <Stats/>
          <Skills/>
          <Video />
          <Portfolio/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App