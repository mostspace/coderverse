import React from 'react'
import { stats } from '../constants'
import styles from '../style'
import FullWidthTab from './FullWidthTab';

const MainTab = () => {
  return (
    <section className={`${styles.flexCenter} sm:mb-20 mb-6`}>
        <div className=''>
            <FullWidthTab />
        </div>
      
    </section>
  )
}

export default MainTab
