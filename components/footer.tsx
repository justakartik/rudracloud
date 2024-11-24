import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DiscIcon as Discord, Twitter, Github, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black glass-effect">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Description */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-white">RudraCloud</h2>
            <p className="text-gray-400 mt-4">
              We are a hosting company that offers a variety of products. We prioritize your time and budget. Our mission is to provide affordable hosting for your specific needs.
            </p>
            <p className="text-gray-500 mt-2">
              Our website texts are crafted to be both professional and humorous. Please don&apos;t take everything too seriously.
            </p>
          </div>
          {/* Links Section */}
          <div>
            <h3 className="font-bold mb-4 text-white">LINKS</h3>
            <ul className="space-y-2">
              <li><Link href="https://status.rudracloud.com/" className="text-gray-400 hover:text-white">Service status</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">SUPPORT</h3>
            <ul className="space-y-2">
              <li><Link href="https://billing.rudracloud.com/tickets" className="text-gray-400 hover:text-white">Tickets</Link></li>
              <li><Link href="mailto:support@rudracloud.com" className="text-gray-400 hover:text-white">Email us</Link></li>
            </ul>
          </div>
          {/* Social Media Section */}
          <div>
            <h3 className="font-bold mb-4 text-white">Social Media</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://discord.gg/rudracloud">
                  <Discord className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com/rudrcloud">
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/rudracloud">
                  <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/rudracloud/">
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://youtube.com/@rudracloud">
                  <Youtube className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © 2022 - 2024 RudraCloud. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
