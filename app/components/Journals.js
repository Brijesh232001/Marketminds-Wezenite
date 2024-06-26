"use client";
import React from 'react'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

const Journals = () => {
  
  return (
    <>
    
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[ 'MobileDateTimePicker']}
      >
        <DemoItem label="Mobile variant">
          <MobileDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
    </DemoContainer>
    </LocalizationProvider>
    </>
  )
}

export default Journals
