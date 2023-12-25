
"use client"
import React from 'react'
import parse from 'html-react-parser';
import { htmlIntro } from '@/constant/content';


function IntronSection() {
  return (
    <div className="">
      {parse(htmlIntro)}
    </div>
  );
}

export default IntronSection