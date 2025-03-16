
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const About = () => {
  const benefits = [
    "Tech-specific vocabulary and communication patterns",
    "Real-world scenarios from software development environments",
    "Personalized feedback from tech-experienced instructors",
    "Focus on practical skills for immediate workplace application",
    "Collaborative projects that mirror tech team interactions",
    "Flexible learning schedule for busy professionals"
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-tech-light/20">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 relative z-10">
                <h2 className="text-3xl font-bold mb-6">Our Unique Approach</h2>
                
                <p className="text-muted-foreground mb-8">
                  Unlike general English courses, TechEnglish focuses exclusively on 
                  the language skills developers and tech professionals need most. 
                  Our methodology combines language acquisition with technical context, 
                  creating a learning experience that directly translates to your 
                  professional environment.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-tech" />
                      </div>
                      <p className="ml-3 text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute top-6 -left-6 w-64 h-64 bg-tech rounded-xl z-0 opacity-5"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-tech-light rounded-xl z-0"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-tech-light text-tech text-sm font-medium">
              Industry-Leading Methodology
            </span>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-balance">
              English training specifically <span className="text-tech">designed for tech teams</span>
            </h2>
            
            <p className="text-lg text-muted-foreground text-balance">
              Our curriculum is built by tech professionals who understand the 
              unique challenges of technical communication in global teams. 
              We focus on practical application rather than abstract language concepts.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-bold mb-2">Practical Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Learn to explain technical concepts, participate in code reviews, 
                  and communicate effectively in Agile environments.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-bold mb-2">Flexible Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Self-paced modules combined with live coaching sessions that 
                  adapt to your busy schedule as a tech professional.
                </p>
              </div>
            </div>
            
            <Button className="group" asChild>
              <Link to="/method">
                Learn More About Our Method
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
