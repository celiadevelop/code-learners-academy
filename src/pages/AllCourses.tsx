
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const AllCourses = () => {
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
    {
      id: "documentation-writing",
      title: "Documentation Writing",
      description: "Learn how to write clear, comprehensive technical documentation that's accessible to both technical and non-technical audiences.",
      level: "All Levels",
      duration: "5 weeks",
      students: 192,
      imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "remote-team-communication",
      title: "Remote Team Communication",
      description: "Optimize your communication in distributed tech teams with specific strategies for async collaboration and virtual meetings.",
      level: "Intermediate",
      duration: "4 weeks",
      students: 218,
      imageSrc: "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      popular: true
    },
    {
      id: "interview-english",
      title: "Interview English for Tech Roles",
      description: "Prepare for technical interviews in English with specialized vocabulary, common questions, and practice sessions.",
      level: "All Levels",
      duration: "3 weeks",
      students: 312,
      imageSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-tech-light text-tech text-sm font-medium mb-4">
                Course Catalog
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
                Tech-Focused English Courses
              </h1>
              <p className="text-lg text-muted-foreground">
                Browse our specialized courses designed specifically for developers, engineers, and tech professionals.
              </p>
            </motion.div>
            
            <div className="mb-12 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search courses..." className="pl-10" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Don't see what you're looking for?
              </h2>
              <p className="text-muted-foreground mb-8">
                We can create custom programs for your technical team.
                Contact us to discuss your specific language training needs.
              </p>
              <Button variant="outline" className="group" asChild>
                <Link to="/#contact">
                  Contact for Custom Training
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

export default AllCourses;
