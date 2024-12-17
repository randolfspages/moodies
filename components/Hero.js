import {Anton} from "next/font/google";
import React from 'react'
import Button from './Button';
import Calendar from './Calendar';
import Link from "next/link";
import CallToAction from './CallToAction';

const anton = Anton({ subsets: ["latin"],
  weight: ['400']
});

export default function Hero() {

  
  return (
    <div className="py-4 md:py-8 flex flex-col gap-8 sm:gap-10">
        <h1 className={'text-4xl sm:text-5xl md:text-6xl text-center ' + anton.className}>
          <span className="textGradient">Moodis</span> helps you to track monitor your <span className="textGradient">daily</span> mood.</h1>

          <p className="w-ful mx-auto max-w-[600px] text-lg sm:text-xl md:text-2xl text-center">
            Create your mood record to know how you feel 
            <span className="font-semibold"> everyday over a period of time</span>
          </p>

          {/* <div className="grid grid-col-2 gap-4 w-fit mx-auto">
                
                <Link href={'/dashboard'}>
                  <Button text='Sign up' />
                </Link>
                
                <Link href={'/dashboard'}>
                  <Button text='Login' dark />
                </Link> 
          </div> */}

          <CallToAction />
          <Calendar demo />
    </div>
  )
}


