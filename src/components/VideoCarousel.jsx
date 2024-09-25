
import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function VideoCarousel({ videos }) {
  return (
    <Carousel className="w-10/12 mx-auto my-4">
      <CarouselContent>
        {videos.map((v, index) => (
          <CarouselItem key={index}>
            <video className="" src={v} controls autoPlay muted loop />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="shrink-0" />
      <CarouselNext className="shrink-0" />
    </Carousel>
  )
}