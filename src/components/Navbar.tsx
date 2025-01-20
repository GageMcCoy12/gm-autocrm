import React from "react";
import { Link } from "react-router-dom";
import { Bell, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              AI CRM
            </Link>
            <div className="ml-10 flex space-x-4">
              <Link
                to="/customer"
                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Customer View
              </Link>
              <Link
                to="/worker"
                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Worker View
              </Link>
              <Link
                to="/admin"
                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Admin View
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>No new notifications</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;