"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Search,
  Bell,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  MoreVertical,
  Filter,
  Download,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock data
const upcomingAppointments = [
  {
    id: 1,
    patient: "John Doe",
    time: "10:00 AM",
    date: "Today",
    doctor: "Dr. Sarah Smith",
    type: "General Checkup",
    status: "confirmed",
    summary:
      "Patient reports frequent headaches with nausea and blurred vision for 3 days. Possible neurological issue.",
  },
  {
    id: 2,
    patient: "Emma Wilson",
    time: "11:30 AM",
    date: "Today",
    doctor: "Dr. Michael Johnson",
    type: "Follow-up",
    status: "confirmed",
    summary: "Follow-up for diabetes management. Patient reports improved blood sugar levels.",
  },
  {
    id: 3,
    patient: "Michael Brown",
    time: "2:00 PM",
    date: "Today",
    doctor: "Dr. Emily Williams",
    type: "New Patient",
    status: "pending",
    summary: "New patient with chronic back pain for 6 months. No previous treatment.",
  },
  {
    id: 4,
    patient: "Sarah Johnson",
    time: "3:30 PM",
    date: "Today",
    doctor: "Dr. Sarah Smith",
    type: "Consultation",
    status: "confirmed",
    summary: "Consultation for persistent cough and fever. Symptoms started 5 days ago.",
  },
]

const recentActivity = [
  { id: 1, action: "SMS reminder sent", patient: "John Doe", time: "2 hours ago", type: "reminder" },
  { id: 2, action: "Appointment confirmed", patient: "Emma Wilson", time: "3 hours ago", type: "confirmed" },
  { id: 3, action: "New intake submitted", patient: "Michael Brown", time: "4 hours ago", type: "new" },
  { id: 4, action: "Follow-up scheduled", patient: "Sarah Johnson", time: "5 hours ago", type: "scheduled" },
]

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">CareSync</h1>
                  <p className="text-xs text-muted-foreground">Staff Dashboard</p>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Export Data</DropdownMenuItem>
                  <DropdownMenuItem>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                +12%
              </Badge>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">24</p>
              <p className="text-sm text-muted-foreground">Today's Appointments</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                +8%
              </Badge>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">156</p>
              <p className="text-sm text-muted-foreground">Active Patients</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-warning" />
              </div>
              <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">
                3 pending
              </Badge>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">8</p>
              <p className="text-sm text-muted-foreground">Pending Confirmations</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                98%
              </Badge>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">92%</p>
              <p className="text-sm text-muted-foreground">Attendance Rate</p>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Appointments List */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Today's Appointments</h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search patients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Tabs defaultValue="all" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All (24)</TabsTrigger>
                  <TabsTrigger value="confirmed">Confirmed (21)</TabsTrigger>
                  <TabsTrigger value="pending">Pending (3)</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-3">
                  {upcomingAppointments.map((appointment) => (
                    <Card key={appointment.id} className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-semibold text-primary">
                              {appointment.patient
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <p className="font-semibold">{appointment.patient}</p>
                              <Badge
                                variant="secondary"
                                className={
                                  appointment.status === "confirmed"
                                    ? "bg-success/10 text-success border-success/20"
                                    : "bg-warning/10 text-warning border-warning/20"
                                }
                              >
                                {appointment.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {appointment.time}
                              </span>
                              <span>{appointment.doctor}</span>
                              <span className="text-xs px-2 py-0.5 rounded-full bg-muted">{appointment.type}</span>
                            </div>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Reschedule</DropdownMenuItem>
                            <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Cancel</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="ml-13 p-3 rounded-lg bg-accent/50 border border-accent">
                        <p className="text-xs font-medium text-accent-foreground mb-1">AI Summary</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{appointment.summary}</p>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="confirmed" className="space-y-3">
                  {upcomingAppointments
                    .filter((a) => a.status === "confirmed")
                    .map((appointment) => (
                      <Card key={appointment.id} className="p-4">
                        <p className="font-semibold">{appointment.patient}</p>
                        <p className="text-sm text-muted-foreground">{appointment.time}</p>
                      </Card>
                    ))}
                </TabsContent>

                <TabsContent value="pending" className="space-y-3">
                  {upcomingAppointments
                    .filter((a) => a.status === "pending")
                    .map((appointment) => (
                      <Card key={appointment.id} className="p-4">
                        <p className="font-semibold">{appointment.patient}</p>
                        <p className="text-sm text-muted-foreground">{appointment.time}</p>
                      </Card>
                    ))}
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Link href="/dashboard/appointments/new">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    New Appointment
                  </Button>
                </Link>
                <Link href="/dashboard/follow-ups">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Clock className="w-4 h-4 mr-2" />
                    Follow-ups
                  </Button>
                </Link>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Bell className="w-4 h-4 mr-2" />
                  Send Reminders
                </Button>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activity.type === "reminder"
                          ? "bg-primary/10"
                          : activity.type === "confirmed"
                            ? "bg-success/10"
                            : activity.type === "new"
                              ? "bg-warning/10"
                              : "bg-accent/50"
                      }`}
                    >
                      {activity.type === "reminder" && <Bell className="w-4 h-4 text-primary" />}
                      {activity.type === "confirmed" && <CheckCircle2 className="w-4 h-4 text-success" />}
                      {activity.type === "new" && <AlertCircle className="w-4 h-4 text-warning" />}
                      {activity.type === "scheduled" && <Calendar className="w-4 h-4 text-accent-foreground" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground truncate">{activity.patient}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* System Status */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">SMS Service</span>
                  <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">AI Processing</span>
                  <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Calendar Sync</span>
                  <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                    Active
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
