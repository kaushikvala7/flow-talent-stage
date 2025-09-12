import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, ClipboardCheck, TrendingUp, Plus, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    title: "Total Jobs",
    value: "24",
    change: "+2 this week",
    icon: Briefcase,
    trend: "up",
  },
  {
    title: "Active Candidates",
    value: "847",
    change: "+12% this month",
    icon: Users,
    trend: "up",
  },
  {
    title: "Assessments",
    value: "8",
    change: "3 in review",
    icon: ClipboardCheck,
    trend: "neutral",
  },
  {
    title: "Hiring Rate",
    value: "18%",
    change: "+3% from last month",
    icon: TrendingUp,
    trend: "up",
  },
];

const recentJobs = [
  { id: 1, title: "Senior Frontend Developer", status: "active", candidates: 23, created: "2 days ago" },
  { id: 2, title: "Product Manager", status: "active", candidates: 45, created: "5 days ago" },
  { id: 3, title: "UX Designer", status: "active", candidates: 18, created: "1 week ago" },
  { id: 4, title: "Backend Engineer", status: "archived", candidates: 67, created: "2 weeks ago" },
];

const recentCandidates = [
  { id: 1, name: "Sarah Johnson", email: "sarah@example.com", stage: "tech", job: "Senior Frontend Developer" },
  { id: 2, name: "Michael Chen", email: "michael@example.com", stage: "screen", job: "Product Manager" },
  { id: 3, name: "Emily Davis", email: "emily@example.com", stage: "offer", job: "UX Designer" },
  { id: 4, name: "David Wilson", email: "david@example.com", stage: "applied", job: "Backend Engineer" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-hover to-accent p-8 text-white">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome to TalentFlow</h1>
          <p className="text-lg opacity-90 mb-6">Streamline your hiring process with powerful tools and insights</p>
          <div className="flex gap-3">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/jobs" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create Job
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
              View Analytics
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Jobs */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Jobs
              <Button variant="outline" size="sm" asChild>
                <Link to="/jobs" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  View All
                </Link>
              </Button>
            </CardTitle>
            <CardDescription>Latest job postings and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentJobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-3 rounded-lg border bg-muted/30">
                  <div className="space-y-1">
                    <p className="font-medium">{job.title}</p>
                    <p className="text-sm text-muted-foreground">{job.candidates} candidates • {job.created}</p>
                  </div>
                  <Badge 
                    variant={job.status === "active" ? "default" : "secondary"}
                    className={job.status === "active" ? "status-active" : "status-archived"}
                  >
                    {job.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Candidates */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Candidates
              <Button variant="outline" size="sm" asChild>
                <Link to="/candidates" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  View All
                </Link>
              </Button>
            </CardTitle>
            <CardDescription>Latest candidate applications and their progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCandidates.map((candidate) => (
                <div key={candidate.id} className="flex items-center justify-between p-3 rounded-lg border bg-muted/30">
                  <div className="space-y-1">
                    <p className="font-medium">{candidate.name}</p>
                    <p className="text-sm text-muted-foreground">{candidate.job}</p>
                  </div>
                  <Badge 
                    className={`status-${candidate.stage}`}
                  >
                    {candidate.stage}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}