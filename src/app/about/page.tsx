import React from 'react'
import { CarouselDemo } from '@/components/Corousal/Corousal'
import { aboutString } from '@/constant/about';
import parse from 'html-react-parser';

function page() {
  return (
    <div>
        <CarouselDemo/>
        <div>
            {parse(aboutString)}
        </div>

    </div>
  )
}

export default page