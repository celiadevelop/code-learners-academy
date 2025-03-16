
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-tight py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-6">
              <span className="font-display text-xl font-bold tracking-tight text-foreground">
                Tech<span className="text-tech">English</span>
              </span>
            </a>
            
            <p className="text-muted-foreground mb-6">
              Specialized English language training for tech professionals, 
              focusing on technical communication skills for global teams.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Courses
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Technical Communication</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Code Review English</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Presentation Skills</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation Writing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Remote Team Communication</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest course updates and tech English tips.
            </p>
            
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="flex-grow" />
              <Button size="icon">
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} TechEnglish Academy. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
