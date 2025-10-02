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
  ArrowLeft,
  Search,
  Clock,
  CheckCircle2,
  AlertCircle,
  XCircle,
  MoreVertical,
  Filter,
  Phone,
  Mail,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data
const followUps = [
  {
    id: 1,
    patient: "John Doe",
    lastVisit: "2025-09-15",
    nextDue: "2025-10-15",
    status: "overdue",
    reason: "Diabetes management checkup",
    doctor: "Dr. Sarah Smith",
    priority: "high",
    phone: "(555) 123-4567",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    patient: "Emma Wilson",
    lastVisit: "2025-09-20",
    nextDue: "2025-10-05",
    status: "due",
    reason: "Blood pressure monitoring",
    doctor: "Dr. Michael Johnson",
    priority: "medium",
    phone: "(555) 234-5678",
    email: "emma.wilson@example.com",
  },
  {
    id: 3,
    patient: "Michael Brown",
    lastVisit: "2025-09-25",
    nextDue: "2025-11-25",
    status: "scheduled",
    reason: "Post-surgery checkup",
    doctor: "Dr. Emily Williams",
    priority: "high",
    phone: "(555) 345-6789",
    email: "michael.brown@example.com",
  },
  {
    id: 4,
    patient: "Sarah Johnson",
    lastVisit: "2025-09-10",
    nextDue: "2025-10-02",
    status: "overdue",
    reason: "Chronic pain management",
    doctor: "Dr. Sarah Smith",
    priority: "high",
    phone: "(555) 456-7890",
    email: "sarah.johnson@example.com",
  },
  {
    id: 5,
    patient: "David Lee",
    lastVisit: "2025-09-28",
    nextDue: "2025-10-28",
    status: "upcoming",
    reason: "Allergy treatment follow-up",
    doctor: "Dr. Michael Johnson",
    priority: "low",
    phone: "(555) 567-8901",
    email: "david.lee@example.com",
  },
]

export default function FollowUpsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPatient, setSelectedPatient] = useState<(typeof followUps)[0] | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "overdue":
        return "bg-destructive/10 text-destructive border-destructive/20"
      case "due":
        return "bg-warning/10 text-warning border-warning/20"
      case "scheduled":
        return "bg-success/10 text-success border-success/20"
      case "upcoming":
        return "bg-primary/10 text-primary border-primary/20"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive border-destructive/20"
      case "medium":
        return "bg-warning/10 text-warning border-warning/20"
      case "low":
        return "bg-success/10 text-success border-success/20"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "overdue":
        return <XCircle className="w-4 h-4" />
      case "due":
        return <AlertCircle className="w-4 h-4" />
      case "scheduled":
        return <CheckCircle2 className="w-4 h-4" />
      case "upcoming":
        return <Clock className="w-4 h-4" />
      default:
        return null
    }
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
                <p className="text-xs text-muted-foreground">Follow-up Tracking</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <Badge variant="secondary" className="bg-destructive/10 text-destructive border-destructive/20">
                Urgent
              </Badge>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{followUps.filter((f) => f.status === "overdue").length}</p>
              <p className="text-sm text-muted-foreground">Overdue Follow-ups</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-warning" />
              </div>
              <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">
                Action needed
              </Badge>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{followUps.filter((f) => f.status === "due").length}</p>
              <p className="text-sm text-muted-foreground">Due This Week</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                On track
              </Badge>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{followUps.filter((f) => f.status === "scheduled").length}</p>
              <p className="text-sm text-muted-foreground">Scheduled</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Upcoming
              </Badge>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{followUps.filter((f) => f.status === "upcoming").length}</p>
              <p className="text-sm text-muted-foreground">Next 30 Days</p>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Follow-up Management</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
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
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All ({followUps.length})</TabsTrigger>
              <TabsTrigger value="overdue">
                Overdue ({followUps.filter((f) => f.status === "overdue").length})
              </TabsTrigger>
              <TabsTrigger value="due">Due ({followUps.filter((f) => f.status === "due").length})</TabsTrigger>
              <TabsTrigger value="scheduled">
                Scheduled ({followUps.filter((f) => f.status === "scheduled").length})
              </TabsTrigger>
              <TabsTrigger value="upcoming">
                Upcoming ({followUps.filter((f) => f.status === "upcoming").length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-3">
              {followUps.map((followUp) => (
                <Card key={followUp.id} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-primary">
                          {followUp.patient
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-semibold">{followUp.patient}</p>
                          <Badge variant="secondary" className={getStatusColor(followUp.status)}>
                            {getStatusIcon(followUp.status)}
                            <span className="ml-1 capitalize">{followUp.status}</span>
                          </Badge>
                          <Badge variant="secondary" className={getPriorityColor(followUp.priority)}>
                            {followUp.priority} priority
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{followUp.reason}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            Last visit: {new Date(followUp.lastVisit).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Due: {new Date(followUp.nextDue).toLocaleDateString()}
                          </span>
                          <span>{followUp.doctor}</span>
                        </div>
                        <div className="flex items-center gap-3 pt-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                size="sm"
                                variant="outline"
                                className="bg-transparent"
                                onClick={() => setSelectedPatient(followUp)}
                              >
                                <Phone className="w-3 h-3 mr-1" />
                                Contact
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Contact {followUp.patient}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4 pt-4">
                                <div className="space-y-2">
                                  <Label>Phone</Label>
                                  <div className="flex items-center gap-2">
                                    <Input value={followUp.phone} readOnly />
                                    <Button size="sm">
                                      <Phone className="w-4 h-4" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label>Email</Label>
                                  <div className="flex items-center gap-2">
                                    <Input value={followUp.email} readOnly />
                                    <Button size="sm">
                                      <Mail className="w-4 h-4" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label>Send SMS Reminder</Label>
                                  <Textarea placeholder="Type your message..." className="min-h-24 resize-none" />
                                  <Button className="w-full">Send SMS</Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm">
                                <Calendar className="w-3 h-3 mr-1" />
                                Schedule
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Schedule Follow-up for {followUp.patient}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4 pt-4">
                                <div className="space-y-2">
                                  <Label htmlFor="scheduleDate">Date</Label>
                                  <Input id="scheduleDate" type="date" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="scheduleTime">Time</Label>
                                  <Input id="scheduleTime" type="time" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="scheduleDoctor">Doctor</Label>
                                  <Select defaultValue={followUp.doctor}>
                                    <SelectTrigger id="scheduleDoctor">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Dr. Sarah Smith">Dr. Sarah Smith</SelectItem>
                                      <SelectItem value="Dr. Michael Johnson">Dr. Michael Johnson</SelectItem>
                                      <SelectItem value="Dr. Emily Williams">Dr. Emily Williams</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="scheduleNotes">Notes</Label>
                                  <Textarea
                                    id="scheduleNotes"
                                    placeholder="Additional notes..."
                                    className="min-h-24 resize-none"
                                  />
                                </div>
                                <Button className="w-full">Confirm Appointment</Button>
                              </div>
                            </DialogContent>
                          </Dialog>
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
                        <DropdownMenuItem>View Patient History</DropdownMenuItem>
                        <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
                        <DropdownMenuItem>Reschedule</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Cancel Follow-up</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </Card>
              ))}
            </TabsContent>

            {["overdue", "due", "scheduled", "upcoming"].map((status) => (
              <TabsContent key={status} value={status} className="space-y-3">
                {followUps
                  .filter((f) => f.status === status)
                  .map((followUp) => (
                    <Card key={followUp.id} className="p-4">
                      <p className="font-semibold">{followUp.patient}</p>
                      <p className="text-sm text-muted-foreground">{followUp.reason}</p>
                    </Card>
                  ))}
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
