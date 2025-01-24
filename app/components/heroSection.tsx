import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
      <div className="container flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Launch Your Campaign Today
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Crowdfunding Made <span className="text-primary">Simple</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Start your campaign or support others. Every donation makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="gap-2">
              <Image src="/google-play.svg" alt="Google Play" width={24} height={24} className="dark:invert" />
              Google Play
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-primary/20 hover:bg-primary/10">
              <Image src="/app-store.svg" alt="App Store" width={24} height={24} className="dark:invert" />
              App Store
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <Image
            src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/placeholder.svg?height=600&width=400`}
            alt="App Preview"
            width={400}
            height={600}
            className="rounded-2xl shadow-2xl relative"
          />
        </div>
      </div>
    </section>
  )
}

