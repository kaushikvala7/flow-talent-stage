import { Users, Briefcase, ClipboardList, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: BarChart3 },
  { name: "Jobs", href: "/jobs", icon: Briefcase },
  { name: "Candidates", href: "/candidates", icon: Users },
  { name: "Assessments", href: "/assessments", icon: ClipboardList },
];

export const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8 flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-hover">
            <span className="text-lg font-bold text-white">T</span>
          </div>
          <span className="text-xl font-bold text-foreground">TalentFlow</span>
        </div>

        <nav className="flex items-center space-x-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Button
                key={item.name}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                asChild
                className={cn(
                  "h-9 px-3",
                  isActive && "bg-primary text-primary-foreground shadow-sm"
                )}
              >
                <Link to={item.href} className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              </Button>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Settings
          </Button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary-hover" />
        </div>
      </div>
    </header>
  );
};