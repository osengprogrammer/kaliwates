import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { TeamImage } from "@/constant/imagesCaraousel";
import Image from "next/image";

export function CarouselDemo() {
  return (
    <div className="flex items-center justify-center">
      <Carousel className="w-full max-w-3xl">
        <CarouselContent>
          {TeamImage.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="h-96 relative aspect-w-16 aspect-h-9">
                  {/* Use 'relative' on the CardContent for aspect ratio */}
                  <Image
                    src={image.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt={""}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
