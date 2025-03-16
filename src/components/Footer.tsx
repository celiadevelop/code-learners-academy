
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-tight py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <span className="font-display text-xl font-bold tracking-tight text-foreground">
                Tech<span className="text-tech">English</span>
              </span>
            </Link>
            
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
              <li><Link to="/courses/technical-communication" className="text-muted-foreground hover:text-foreground transition-colors">Technical Communication</Link></li>
              <li><Link to="/courses/code-review-english" className="text-muted-foreground hover:text-foreground transition-colors">Code Review English</Link></li>
              <li><Link to="/courses/tech-presentation" className="text-muted-foreground hover:text-foreground transition-colors">Presentation Skills</Link></li>
              <li><Link to="/courses/documentation-writing" className="text-muted-foreground hover:text-foreground transition-colors">Documentation Writing</Link></li>
              <li><Link to="/courses/remote-team-communication" className="text-muted-foreground hover:text-foreground transition-colors">Remote Team Communication</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link to="/method" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/enroll" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="/courses" className="text-muted-foreground hover:text-foreground transition-colors">Courses</Link></li>
              <li><Link to="/enroll" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/enroll" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest course updates and tech English tips.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" size="icon">
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
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
            <Link to="/enroll" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/enroll" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link to="/enroll" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
