
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-tech-light/30">
      <div className="container-tight">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-tech-light text-tech text-sm font-medium mb-4">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Ready to elevate your technical English?
          </h2>
          <p className="text-lg text-muted-foreground">
            Take the first step toward more effective technical communication. 
            Our team will get back to you within 24 hours.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-tech-light/50 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <p className="text-muted-foreground mb-8">
                    Have questions? Reach out directly or fill out the form.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-tech mr-3" />
                      <span>contact@techenglish.academy</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-5 w-5 text-tech mr-3" />
                      <span>Schedule a consultation call</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 lg:mt-0">
                  <p className="text-sm font-medium">Current Response Time</p>
                  <p className="text-sm text-muted-foreground">Within 24 hours</p>
                </div>
              </div>
              
              <div className="lg:col-span-3 p-8">
                <h3 className="text-xl font-bold mb-6">Request Information</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="you@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium">
                      I'm interested in
                    </label>
                    <Select>
                      <SelectTrigger id="interest">
                        <SelectValue placeholder="Select a course type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual Training</SelectItem>
                        <SelectItem value="team">Team Training</SelectItem>
                        <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your English learning goals"
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
