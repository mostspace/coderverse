import React from 'react'
import { stats } from '../constants'
import styles from '../style'
import { icArrow } from '../assets'

// @mui
import {
    FormControl, Button, Typography, IconButton, InputAdornment, Stepper, Step, StepLabel, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Autocomplete,
} from '@mui/material';

const Skills = () => {
  return (
    <section className={`${styles.flexCenter} sm:mb-20 mb-16`}>
        
        <div className='w-full flex flex-col gap-16'>
            <Typography variant='' className='text-white text-[32px] w-full leading-[70px] uppercase'>/ Skills</Typography>
            <div className='w-full flex flex-col gap-5'>
                <div className='flex gap-10 items-center feature-card rounded-[5px]'>
                    <img src={icArrow} className='' />
                    <div className='border-b border-[##7099C7] w-full'>
                        <Typography variant='' className='text-white text-[32px] w-full leading-[70px]'>Back-end</Typography>
                    </div>
                </div>
                <div className='flex gap-10 items-center hover:bg-gradient feature-card rounded-[5px]'>
                    <img src={icArrow} className='' />
                    <div className='border-b border-[##7099C7] w-full'>
                        <Typography variant='' className='text-white text-[32px] w-full leading-[70px]'>Front-end:</Typography>
                    </div>
                </div>
                <div className='flex gap-10 items-center feature-card rounded-[5px]'>
                    <img src={icArrow} className='' />
                    <div className='border-b border-[##7099C7] w-full'>
                        <Typography variant='' className='text-white text-[32px] w-full leading-[70px]'>Blockchain:</Typography>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Skills
