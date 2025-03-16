
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import Testimonial from '@/components/Testimonial';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  
  const courses = [
    {
      id: "technical-communication",
      title: "Technical Communication Fundamentals",
      description: "Master the essentials of clear technical communication for developers and engineers working in international teams.",
      level: "Beginner",
      duration: "8 weeks",
      students: 458,
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      popular: true
    },
    {
      id: "code-review-english",
      title: "Code Review English Mastery",
      description: "Learn specific vocabulary and communication patterns for effective code reviews and technical discussions.",
      level: "Intermediate",
      duration: "6 weeks",
      students: 327,
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "tech-presentation",
      title: "Tech Presentation Skills",
      description: "Develop confidence in presenting technical concepts, products, and project updates in English.",
      level: "Intermediate",
      duration: "4 weeks",
      students: 285,
      imageSrc: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
  ];
  
  const testimonials = [
    {
      content: "The technical communication course transformed my ability to explain complex concepts to international clients. I now lead cross-border projects with confidence.",
      author: "Elena Kostova",
      role: "Senior Developer",
      company: "Fintech Solutions",
      imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      content: "As a non-native English speaker, I struggled with code reviews and technical discussions. This program gave me specific vocabulary and patterns that made a real difference.",
      author: "Hiroshi Tanaka",
      role: "Backend Engineer",
      company: "Cloud Scale",
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      content: "Our entire development team went through TechEnglish training, and the improvement in our documentation, meeting efficiency, and overall communication was remarkable.",
      author: "Maria Rodriguez",
      role: "CTO",
      company: "DevOps Pro",
      imageSrc: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80"
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen" ref={ref}>
      <Navbar />
      
      <Hero />
      
      <section id="courses" className="section-padding">
        <div className="container-tight">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-tech-light text-tech text-sm font-medium mb-4">
              Our Curriculum
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              Specialized Courses for Tech Professionals
            </h2>
            <p className="text-lg text-muted-foreground">
              Our courses focus on the specific English skills needed in technical 
              environments, from code reviews to documentation and team communication.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                index={index}
                id={course.id}
                title={course.title}
                description={course.description}
                level={course.level}
                duration={course.duration}
                students={course.students}
                imageSrc={course.imageSrc}
                popular={course.popular}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Button variant="outline" className="group" asChild>
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      <About />
      
      <section id="testimonials" className="section-padding relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-tech-light rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-32 right-1/4 w-72 h-72 bg-blue-50 rounded-full filter blur-3xl opacity-30"></div>
        </motion.div>
        
        <div className="container-tight relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-tech-light text-tech text-sm font-medium mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from tech professionals who transformed their careers through 
              improved technical English communication skills.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                index={index}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                imageSrc={testimonial.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Contact />
      
      <Footer />
    </div>
  );
};

export default Index;
