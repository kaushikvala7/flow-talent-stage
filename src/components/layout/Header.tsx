import { Users, Briefcase, ClipboardList, BarChart3, Menu, Settings, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/", icon: BarChart3 },
  { name: "Jobs", href: "/jobs", icon: Briefcase },
  { name: "Candidates", href: "/candidates", icon: Users },
  { name: "Assessments", href: "/assessments", icon: ClipboardList },
];

const NavigationItems = ({ onItemClick }: { onItemClick?: () => void }) => {
  const location = useLocation();
  
  return (
    <>
      {navigation.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Button
            key={item.name}
            variant={isActive ? "default" : "ghost"}
            size="sm"
            asChild
            className={cn(
              "h-9 px-3 w-full justify-start md:w-auto md:justify-center",
              isActive && "bg-primary text-primary-foreground shadow-sm"
            )}
            onClick={onItemClick}
          >
            <Link to={item.href} className="flex items-center space-x-2">
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          </Button>
        );
      })}
    </>
  );
};

export const Header = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="mr-4 md:mr-8 flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-hover">
            <span className="text-lg font-bold text-white">T</span>
          </div>
          <span className="text-xl font-bold text-foreground hidden sm:block">TalentFlow</span>
          <span className="text-lg font-bold text-foreground sm:hidden">TF</span>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-1">
            <NavigationItems />
          </nav>
        )}

        {/* Right Side Actions */}
        <div className="ml-auto flex items-center space-x-2">
          {/* Settings Button */}
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Settings className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Settings</span>
          </Button>
          <Button variant="outline" size="sm" className="sm:hidden">
            <Settings className="h-4 w-4" />
          </Button>

          {/* Profile Avatar */}
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary-hover" />

          {/* Mobile Menu */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-hover">
                      <span className="text-lg font-bold text-white">T</span>
                    </div>
                    <span className="text-xl font-bold text-foreground">TalentFlow</span>
                  </div>
                </div>
                <nav className="flex flex-col space-y-2">
                  <NavigationItems onItemClick={() => setIsOpen(false)} />
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};