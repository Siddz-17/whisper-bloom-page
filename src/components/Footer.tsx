import { MessageCircle, Twitter, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <MessageCircle className="w-5 h-5 text-gray-900" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI Chat</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Experience the future of conversation with AI that understands, engages, and helps you achieve more.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-gray-100 transition-colors">
                <Twitter className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-gray-100 transition-colors">
                <Github className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-gray-100 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">API</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 AI Chat. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};