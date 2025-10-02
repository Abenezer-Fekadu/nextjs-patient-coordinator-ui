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
import { Calendar, ArrowLeft, CheckCircle2, Clock, User } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function NewAppointmentPage() {
  const [loading, setLoading] = useState(false)
  const [created, setCreated] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setLoading(false)
    setCreated(true)

    toast({
      title: "Appointment Created",
      description: "SMS reminder has been scheduled automatically.",
    })
  }

  if (created) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8 text-success" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Appointment Created</h2>
            <p className="text-muted-foreground leading-relaxed">
              The appointment has been successfully scheduled. An SMS reminder will be sent 24 hours before the
              appointment.
            </p>
          </div>
          <div className="pt-4 space-y-3">
            <Link href="/dashboard" className="block">
              <Button className="w-full">Return to Dashboard</Button>
            </Link>
            <Button variant="outline" onClick={() => setCreated(false)} className="w-full bg-transparent">
              Create Another
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Dashboard</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">CareSync</h1>
                <p className="text-xs text-muted-foreground">New Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Form Section */}
      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="space-y-6 mb-8">
          <h2 className="text-4xl font-bold text-balance">Schedule New Appointment</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Create a new appointment for a patient. The system will automatically send SMS reminders and update the
            calendar.
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Patient Selection */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Patient Information
                </h3>
                <div className="h-1 w-16 bg-primary rounded-full mb-6" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="patientSearch">Search Patient *</Label>
                <Input id="patientSearch" placeholder="Search by name, email, or phone..." required />
                <p className="text-xs text-muted-foreground">
                  Start typing to search existing patients or create a new patient record.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="patientName">Patient Name *</Label>
                  <Input id="patientName" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patientPhone">Phone Number *</Label>
                  <Input id="patientPhone" type="tel" placeholder="(555) 123-4567" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="patientEmail">Email Address</Label>
                <Input id="patientEmail" type="email" placeholder="john.doe@example.com" />
              </div>
            </div>

            {/* Appointment Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Appointment Details
                </h3>
                <div className="h-1 w-16 bg-primary rounded-full mb-6" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="appointmentDate">Date *</Label>
                  <Input id="appointmentDate" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="appointmentTime">Time *</Label>
                  <Input id="appointmentTime" type="time" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="doctor">Assigned Doctor *</Label>
                <Select required>
                  <SelectTrigger id="doctor">
                    <SelectValue placeholder="Select doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smith">Dr. Sarah Smith - General Practice</SelectItem>
                    <SelectItem value="johnson">Dr. Michael Johnson - Internal Medicine</SelectItem>
                    <SelectItem value="williams">Dr. Emily Williams - Pediatrics</SelectItem>
                    <SelectItem value="brown">Dr. James Brown - Cardiology</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="appointmentType">Appointment Type *</Label>
                <Select required>
                  <SelectTrigger id="appointmentType">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="checkup">General Checkup</SelectItem>
                    <SelectItem value="followup">Follow-up Visit</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="newpatient">New Patient</SelectItem>
                    <SelectItem value="emergency">Emergency</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Select defaultValue="30">
                  <SelectTrigger id="duration">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="45">45 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Additional Information
                </h3>
                <div className="h-1 w-16 bg-primary rounded-full mb-6" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Visit *</Label>
                <Textarea
                  id="reason"
                  placeholder="Brief description of the reason for this appointment..."
                  className="min-h-24 resize-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Internal Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Any additional notes for staff (not visible to patient)..."
                  className="min-h-24 resize-none"
                />
              </div>

              <div className="flex items-center gap-2 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <input type="checkbox" id="sendReminder" defaultChecked className="rounded" />
                <Label htmlFor="sendReminder" className="text-sm cursor-pointer">
                  Send SMS reminder 24 hours before appointment
                </Label>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 space-y-4">
              <div className="p-4 rounded-lg bg-accent/50 border border-accent text-sm space-y-2">
                <p className="font-medium text-accent-foreground">Automated Actions</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Appointment added to Google Calendar</li>
                  <li>• SMS reminder scheduled automatically</li>
                  <li>• Patient notified via SMS and email</li>
                  <li>• Follow-up tracking initiated</li>
                </ul>
              </div>
              <div className="flex gap-3">
                <Link href="/dashboard" className="flex-1">
                  <Button type="button" variant="outline" size="lg" className="w-full bg-transparent">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" size="lg" className="flex-1" disabled={loading}>
                  {loading ? "Creating..." : "Create Appointment"}
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </section>
    </div>
  )
}
