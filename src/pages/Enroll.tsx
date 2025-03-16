
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const Enroll = () => {
  const { toast } = useToast();
  const [formStep, setFormStep] = useState(1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep(2);
    toast({
      title: "Enrollment submitted!",
      description: "We've received your application and will contact you soon.",
    });
  };

  const plans = [
    {
      name: "Basic Plan",
      price: "$49/month",
      features: [
        "Access to 1 course of your choice",
        "Basic forum support",
        "Weekly group practice sessions",
        "Course completion certificate"
      ]
    },
    {
      name: "Professional Plan",
      price: "$89/month",
      features: [
        "Access to all courses",
        "Priority support via chat",
        "Weekly 1-on-1 coaching sessions",
        "Tech industry vocabulary packs",
        "Job-specific language training"
      ],
      popular: true
    },
    {
      name: "Team Plan",
      price: "$199/month",
      features: [
        "Access for up to 5 team members",
        "Dedicated team coach",
        "Custom learning paths",
        "Progress reports for managers",
        "Team-specific vocabulary training",
        "Private team practice sessions"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="section-padding">
          <div className="container-tight">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-tech-light text-tech text-sm font-medium mb-4">
                Join TechEnglish
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
                Enroll Today
              </h1>
              <p className="text-lg text-muted-foreground">
                Take the first step toward enhanced technical communication skills 
                and advance your career in the global tech industry.
              </p>
            </motion.div>
            
            {formStep === 1 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {plans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-card rounded-xl p-8 border shadow-sm ${plan.popular ? 'border-tech shadow-tech/10 ring-1 ring-tech' : 'border-border'}`}
                  >
                    {plan.popular && (
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-tech-light text-tech text-xs font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-2xl font-bold text-tech mb-6">{plan.price}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <CheckCircle2 className="h-5 w-5 text-tech mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={plan.popular ? "default" : "outline"} 
                      className="w-full group"
                    >
                      Select Plan
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto text-center py-16"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Enrollment Successful!</h2>
                <p className="text-muted-foreground mb-8">
                  Thank you for enrolling in TechEnglish. We've sent confirmation details to your email.
                  Your journey to better technical communication starts now.
                </p>
                <Button asChild>
                  <a href="/">Return to Homepage</a>
                </Button>
              </motion.div>
            )}
            
            {formStep === 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-2xl mx-auto bg-card rounded-xl p-8 border border-border shadow-sm"
              >
                <h2 className="text-2xl font-bold mb-6 text-center">Personal Information</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="profession">Current Role</Label>
                    <Input id="profession" placeholder="e.g. Frontend Developer, DevOps Engineer" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>English Proficiency</Label>
                    <RadioGroup defaultValue="intermediate">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="beginner" id="beginner" />
                        <Label htmlFor="beginner">Beginner</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="intermediate" id="intermediate" />
                        <Label htmlFor="intermediate">Intermediate</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="advanced" id="advanced" />
                        <Label htmlFor="advanced">Advanced</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="pt-4">
                    <Button type="submit" className="w-full group">
                      Complete Enrollment
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Enroll;
