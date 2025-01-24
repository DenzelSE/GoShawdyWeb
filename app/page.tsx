import { NavBar } from "@/components/navBar"
import { HeroSection } from "@/components/heroSection"
import { FeaturesSection } from "@/components/featuresSection"
import { AboutSection } from "@/components/about"
import { ContactSection } from "@/components/contactSection"
import { TestimonialCarousel } from "@/components/carousel"

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <section id="testimonials" className="py-16">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
              <h2 className="text-3xl font-bold">What People Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from our community of campaign creators and supporters about their experiences with GoShawty.
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </section>
        <ContactSection />
      </main>
      <footer className="py-6 border-t border-primary/10">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} GoShawty. All rights reserved.
        </div>
      </footer>
    </>
  )
}

