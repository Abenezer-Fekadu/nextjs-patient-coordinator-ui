import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, ClipboardList, Users, Bell } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">CareSync</h1>
              <p className="text-xs text-muted-foreground">AI Patient Coordinator</p>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                Staff Dashboard
              </Button>
            </Link>
            <Link href="/intake">
              <Button size="sm">Book Appointment</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Powered by AI
          </div>
          <h2 className="text-5xl font-bold text-balance leading-tight">Healthcare Coordination Made Simple</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Streamline appointment scheduling, patient intake, and follow-ups with intelligent automation. Focus on what
            matters most—patient care.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="/intake">
              <Button size="lg" className="text-base">
                Schedule Appointment
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                Staff Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Smart Scheduling</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Automated appointment booking with real-time doctor availability and conflict prevention.
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Bell className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">SMS Reminders</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Automatic text reminders 24 hours before appointments to reduce no-shows.
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">AI Intake Summaries</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Patient forms automatically summarized into doctor-friendly insights using AI.
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Follow-up Tracking</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Never miss a follow-up with automated tracking and staff notifications.
            </p>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <p className="text-muted-foreground">Reduction in missed appointments</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3hrs</div>
              <p className="text-muted-foreground">Saved per day on admin tasks</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Patient satisfaction rate</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© 2025 CareSync. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
