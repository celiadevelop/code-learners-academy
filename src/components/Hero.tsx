
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-32 right-10 w-64 h-64 bg-tech-light rounded-full filter blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-32 left-10 w-72 h-72 bg-blue-50 rounded-full filter blur-3xl opacity-50"></div>
      </div>
      
      <div className="container-tight z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 rounded-full bg-tech-light text-tech text-sm font-medium mb-6"
            >
              Specialized for Tech Professionals
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-balance mb-6"
            >
              Master English for Your <span className="text-tech">Tech Career</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg text-balance"
            >
              Specialized language training for developers, engineers, and tech professionals. 
              Learn the precise vocabulary and communication skills needed for technical discussions, 
              code reviews, and international collaboration.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="group">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Learn Our Approach
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-video bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-br from-tech-light to-blue-100 absolute inset-0"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 text-center backdrop-blur-sm bg-white/30 rounded-xl max-w-sm">
                  <h3 className="text-xl font-bold mb-3">Industry-Specific Learning</h3>
                  <p className="text-sm text-gray-700">
                    Our curriculum is designed by tech professionals with real-world experience
                    in international software development teams.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tech-light rounded-full z-[-1]"></div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 lg:mt-24 flex flex-wrap justify-center gap-8 py-8"
        >
          <div className="text-center px-4">
            <h3 className="text-3xl font-bold text-tech mb-2">1000+</h3>
            <p className="text-sm text-muted-foreground">Tech Professionals Trained</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-3xl font-bold text-tech mb-2">96%</h3>
            <p className="text-sm text-muted-foreground">Job Improvement Rate</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-3xl font-bold text-tech mb-2">12</h3>
            <p className="text-sm text-muted-foreground">Specialized Tech Courses</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-3xl font-bold text-tech mb-2">24/7</h3>
            <p className="text-sm text-muted-foreground">Learning Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
