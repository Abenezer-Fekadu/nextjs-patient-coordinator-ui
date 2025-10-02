"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, ArrowLeft, CheckCircle2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function IntakePage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setLoading(false)
    setSubmitted(true)

    toast({
      title: "Appointment Requested",
      description: "We'll send you a confirmation SMS shortly.",
    })
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8 text-success" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Appointment Requested</h2>
            <p className="text-muted-foreground leading-relaxed">
              Thank you for submitting your information. Our AI coordinator is processing your request and will send you
              a confirmation SMS within the next few minutes.
            </p>
          </div>
          <div className="pt-4 space-y-3">
            <div className="p-4 rounded-lg bg-muted/50 text-sm text-left space-y-1">
              <p className="font-medium">What happens next?</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• SMS confirmation with appointment details</li>
                <li>• Reminder 24 hours before your visit</li>
                <li>• Easy reschedule or cancel options</li>
              </ul>
            </div>
            <Link href="/" className="block">
              <Button variant="outline" className="w-full bg-transparent">
                Return to Home
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">CareSync</h1>
              <p className="text-xs text-muted-foreground">AI Patient Coordinator</p>
            </div>
          </div>
        </div>
      </header>

      {/* Form Section */}
      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="space-y-6 mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Step 1 of 1
          </div>
          <h2 className="text-4xl font-bold text-balance">Patient Intake Form</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Please provide your information below. Our AI will summarize your symptoms and match you with the right
            healthcare provider.
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                <div className="h-1 w-16 bg-primary rounded-full mb-6" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth *</Label>
                  <Input id="dob" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Medical Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Medical Information</h3>
                <div className="h-1 w-16 bg-primary rounded-full mb-6" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="symptoms">Current Symptoms *</Label>
                <Textarea
                  id="symptoms"
                  placeholder="Please describe your symptoms in detail (e.g., headaches, nausea, blurred vision for 3 days)"
                  className="min-h-32 resize-none"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Our AI will analyze your symptoms to provide the best care recommendations.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="allergies">Known Allergies</Label>
                <Input id="allergies" placeholder="e.g., Penicillin, Peanuts, Latex" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="medications">Current Medications</Label>
                <Textarea
                  id="medications"
                  placeholder="List any medications you're currently taking"
                  className="min-h-24 resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="history">Medical History</Label>
                <Textarea
                  id="history"
                  placeholder="Any relevant medical conditions or past surgeries"
                  className="min-h-24 resize-none"
                />
              </div>
            </div>

            {/* Appointment Preferences */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Appointment Preferences</h3>
                <div className="h-1 w-16 bg-primary rounded-full mb-6" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date *</Label>
                  <Input id="preferredDate" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <Select>
                    <SelectTrigger id="preferredTime">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                      <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="doctor">Preferred Doctor (Optional)</Label>
                <Select>
                  <SelectTrigger id="doctor">
                    <SelectValue placeholder="Any available doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any available doctor</SelectItem>
                    <SelectItem value="smith">Dr. Sarah Smith</SelectItem>
                    <SelectItem value="johnson">Dr. Michael Johnson</SelectItem>
                    <SelectItem value="williams">Dr. Emily Williams</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Any other information we should know?"
                  className="min-h-24 resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 space-y-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-sm space-y-2">
                <p className="font-medium text-primary">AI-Powered Processing</p>
                <p className="text-muted-foreground leading-relaxed">
                  Your information will be automatically summarized and matched with the best available appointment
                  slot. You'll receive an SMS confirmation within minutes.
                </p>
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? "Processing..." : "Submit Intake Form"}
              </Button>
            </div>
          </form>
        </Card>
      </section>
    </div>
  )
}
