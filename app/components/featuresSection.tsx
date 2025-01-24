import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Target, Users, Zap, TrendingUp } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-primary/5">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Why Choose GoShawty?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform makes it easy to create and manage fundraising campaigns while ensuring transparency and trust.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <Heart className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Direct Impact</CardTitle>
            </CardHeader>
            <CardContent>
              Your donations go directly to those who need it, with minimal platform fees and maximum transparency.
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <Shield className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Secure & Trusted</CardTitle>
            </CardHeader>
            <CardContent>
              Bank-level security and verification processes ensure your donations are safe and reach the right people.
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <Target className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Track Progress</CardTitle>
            </CardHeader>
            <CardContent>
              Real-time updates and progress tracking keep you informed about the impact of your contributions.
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <Users className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Community Driven</CardTitle>
            </CardHeader>
            <CardContent>
              Join a vibrant community of changemakers and supporters working together to make a difference.
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <Zap className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Quick Setup</CardTitle>
            </CardHeader>
            <CardContent>
              Launch your campaign in minutes with our intuitive platform and helpful guidance every step of the way.
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              Get detailed insights into your campaign's performance with our comprehensive analytics dashboard.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

