import Image from "next/image"
import { Button } from "./components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Us</div>
            <h2 className="text-3xl font-bold">About GoShawty</h2>
            <p className="text-muted-foreground">
              GoShawty is a modern crowdfunding platform that connects people with causes they care about. We believe in
              the power of community and collective action to make real change happen.
            </p>
            <p className="text-muted-foreground">
              Our platform makes it easy to start campaigns, donate to causes, and track the impact of your
              contributions. With transparent operations and secure payment processing, you can focus on what matters
              most - making a difference.
            </p>
            <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
              Learn More
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/placeholder.svg?height=400&width=600`}
                alt="About GoShawty"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

