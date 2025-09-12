import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Filter, MoreHorizontal, Mail, Phone, MapPin } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const candidates = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    stage: "tech",
    job: "Senior Frontend Developer",
    applied: "2024-01-18",
    experience: "5 years",
    skills: ["React", "TypeScript", "Node.js"],
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    phone: "+1 (555) 234-5678",
    location: "Seattle, WA",
    stage: "screen",
    job: "Product Manager",
    applied: "2024-01-16",
    experience: "7 years",
    skills: ["Product Strategy", "Analytics", "Leadership"],
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "+1 (555) 345-6789",
    location: "New York, NY",
    stage: "offer",
    job: "UX Designer",
    applied: "2024-01-14",
    experience: "4 years",
    skills: ["Figma", "User Research", "Prototyping"],
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david.wilson@example.com",
    phone: "+1 (555) 456-7890",
    location: "Austin, TX",
    stage: "applied",
    job: "Backend Engineer",
    applied: "2024-01-12",
    experience: "6 years",
    skills: ["Python", "PostgreSQL", "AWS"],
  },
  {
    id: 5,
    name: "Jessica Brown",
    email: "jessica.brown@example.com",
    phone: "+1 (555) 567-8901",
    location: "Chicago, IL",
    stage: "hired",
    job: "DevOps Engineer",
    applied: "2024-01-10",
    experience: "5 years",
    skills: ["Docker", "Kubernetes", "Terraform"],
  },
  {
    id: 6,
    name: "Alex Rodriguez",
    email: "alex.rodriguez@example.com",
    phone: "+1 (555) 678-9012",
    location: "Denver, CO",
    stage: "rejected",
    job: "Senior Frontend Developer",
    applied: "2024-01-08",
    experience: "3 years",
    skills: ["Vue.js", "JavaScript", "CSS"],
  },
];

const stageColors = {
  applied: "status-applied",
  screen: "status-screen",
  tech: "bg-warning/10 text-warning border-warning/30",
  offer: "bg-accent/10 text-accent border-accent/30",
  hired: "status-active",
  rejected: "bg-destructive/10 text-destructive border-destructive/30",
};

export default function Candidates() {
  const [searchTerm, setSearchTerm] = useState("");
  const [stageFilter, setStageFilter] = useState("all");

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.job.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = stageFilter === "all" || candidate.stage === stageFilter;
    return matchesSearch && matchesStage;
  });

  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("").toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Candidates</h1>
          <p className="text-muted-foreground">Manage applications and track candidate progress</p>
        </div>
        <Button className="btn-primary">
          Import Candidates
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search candidates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Select value={stageFilter} onValueChange={setStageFilter}>
                <SelectTrigger className="w-36">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stages</SelectItem>
                  <SelectItem value="applied">Applied</SelectItem>
                  <SelectItem value="screen">Screening</SelectItem>
                  <SelectItem value="tech">Technical</SelectItem>
                  <SelectItem value="offer">Offer</SelectItem>
                  <SelectItem value="hired">Hired</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Candidates List */}
      <div className="space-y-4">
        {filteredCandidates.map((candidate) => (
          <Card key={candidate.id} className="card-hover">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary-hover text-white font-semibold">
                      {getInitials(candidate.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{candidate.name}</h3>
                    <p className="text-muted-foreground">{candidate.job}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {candidate.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {candidate.location}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <Badge className={stageColors[candidate.stage as keyof typeof stageColors]}>
                      {candidate.stage}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">
                      Applied {new Date(candidate.applied).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Schedule Interview</DropdownMenuItem>
                      <DropdownMenuItem>Move to Next Stage</DropdownMenuItem>
                      <DropdownMenuItem>Add Notes</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Reject Candidate
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {candidate.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}