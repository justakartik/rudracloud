"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Home,
  Info,
  Rss,
  Package,
  LogIn,
  CreditCard,
  LayoutDashboard,
  HelpCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-opacity-60 bg-gray-900 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          RudraCloud
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-6">
            <NavigationMenuItem>
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" className="flex items-center gap-2">
                <Info className="w-4 h-4" />
                About Us
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="https://status.rudracloud.com/"
                className="flex items-center gap-2"
              >
                <Rss className="w-4 h-4" />
                Status
              </Link>
            </NavigationMenuItem>
            {/* Modified Services Link */}
            <NavigationMenuItem>
              <Link href="#services" className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                Services
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-gray-900 bg-opacity-90 backdrop-blur-md rounded shadow-lg"
          >
            <DropdownMenuItem
              onClick={() =>
                window.location.href = "https://billing.rudracloud.com/"
              }
            >
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() =>
                window.location.href = "https://panel.rudracloud.com/"
              }>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Panel</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() =>
                window.location.href = "https://billing.rudracloud.com/"
              }>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
