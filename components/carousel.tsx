"use client"

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

export function TestimonialCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Campaign Creator",
      text: "GoShawty made it incredibly easy to start my fundraising campaign. The support from the community was overwhelming!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael R.",
      role: "Regular Donor",
      text: "I love how transparent and easy-to-use the platform is. I can track exactly where my donations are going.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emily K.",
      role: "Nonprofit Leader",
      text: "The best crowdfunding platform we've used. The features and support are unmatched.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <p className="text-muted-foreground italic">{testimonial.text}</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

