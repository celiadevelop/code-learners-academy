
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, BookOpen, Users, Clock, BarChart, Lightbulb, Code } from 'lucide-react';

const OurMethod = () => {
  const methodSteps = [
    {
      icon: <BookOpen className="h-6 w-6 text-tech" />,
      title: "Needs Assessment",
      description: "We begin by understanding your specific technical communication needs through a detailed assessment."
    },
    {
      icon: <Users className="h-6 w-6 text-tech" />,
      title: "Tech-Specific Content",
      description: "Our curriculum is built around real-world tech scenarios you'll encounter in development environments."
    },
    {
      icon: <Clock className="h-6 w-6 text-tech" />,
      title: "Flexible Learning",
      description: "Learn at your own pace with a combination of self-guided modules and live practice sessions."
    },
    {
      icon: <BarChart className="h-6 w-6 text-tech" />,
      title: "Progress Tracking",
      description: "AI-powered tools measure your improvement in technical vocabulary and communication patterns."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-tech" />,
      title: "Applied Practice",
      description: "Role-play scenarios and group projects simulate actual tech workplace communication."
    },
    {
      icon: <Code className="h-6 w-6 text-tech" />,
      title: "Tech Integration",
      description: "Practice using English with the tools you already use: Git, Jira, Slack, and collaborative coding."
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
                Our Methodology
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
                The TechEnglish Approach
              </h1>
              <p className="text-lg text-muted-foreground">
                Our unique methodology combines language learning with technical context, 
                creating an immersive experience that directly translates to your professional environment.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {methodSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border shadow-sm"
                >
                  <div className="mb-4 p-3 bg-tech-light/20 rounded-lg inline-block">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Research-Backed Approach</h2>
                  <p className="text-muted-foreground mb-6">
                    Our methodology is grounded in research on how tech professionals learn most effectively. 
                    We focus on the specific language patterns, vocabulary, and communication styles that 
                    drive success in technical environments.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-tech" />
                      </div>
                      <p className="ml-3 text-sm">Based on analysis of 1000+ tech team interactions</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-tech" />
                      </div>
                      <p className="ml-3 text-sm">Developed with input from engineering leaders at top tech companies</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-tech" />
                      </div>
                      <p className="ml-3 text-sm">Continuously improved based on student outcomes and feedback</p>
                    </div>
                  </div>
                  
                  <Button className="group" asChild>
                    <Link to="/courses">
                      View Course Catalog
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative aspect-square bg-gradient-to-br from-tech-light to-blue-100 rounded-xl overflow-hidden border border-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                        alt="Students collaborating" 
                        className="rounded-lg shadow-lg w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to transform your technical communication?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of tech professionals who have accelerated their careers 
                through improved technical English skills.
              </p>
              <Button size="lg" className="group" asChild>
                <Link to="/enroll">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OurMethod;
