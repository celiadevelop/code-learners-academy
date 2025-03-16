
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, CheckCircle2, Clock, Users, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect } from 'react';

interface Module {
  title: string;
  duration: string;
  description: string;
  topics: string[];
}

interface CourseData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  level: string;
  duration: string;
  students: number;
  imageSrc: string;
  popular?: boolean;
  instructor: {
    name: string;
    role: string;
    bio: string;
    imageSrc: string;
  };
  modules: Module[];
  outcomes: string[];
}

const courses: Record<string, CourseData> = {
  "technical-communication": {
    id: "technical-communication",
    title: "Technical Communication Fundamentals",
    description: "Master the essentials of clear technical communication for developers and engineers working in international teams.",
    longDescription: "This comprehensive course builds the foundation for effective technical communication in English. You'll learn how to articulate complex concepts clearly, participate confidently in technical discussions, and improve your written communication for documentation, email, and chat platforms commonly used in tech environments.",
    level: "Beginner",
    duration: "8 weeks",
    students: 458,
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    popular: true,
    instructor: {
      name: "Dr. Sarah Chen",
      role: "Lead Technical Communication Instructor",
      bio: "Former technical writer at Google with a PhD in Computational Linguistics. Sarah specializes in helping non-native English speakers communicate complex technical concepts clearly.",
      imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    },
    modules: [
      {
        title: "Core Technical Vocabulary",
        duration: "1 week",
        description: "Build the essential vocabulary needed for technical discussions and documentation.",
        topics: ["Software development terminology", "Hardware and infrastructure terms", "Industry-specific acronyms and jargon"]
      },
      {
        title: "Structuring Technical Explanations",
        duration: "2 weeks",
        description: "Learn patterns for explaining complex concepts clearly and logically.",
        topics: ["Breaking down complex ideas", "Using analogies and examples", "Progressive disclosure techniques"]
      },
      {
        title: "Written Technical Communication",
        duration: "2 weeks",
        description: "Develop skills for clear written communication in technical contexts.",
        topics: ["Documentation best practices", "Email communication", "Chat and async communication"]
      },
      {
        title: "Verbal Technical Communication",
        duration: "2 weeks",
        description: "Build confidence in speaking about technical topics.",
        topics: ["Meeting participation", "Asking clarifying questions", "Pronunciation of technical terms"]
      },
      {
        title: "Capstone Project",
        duration: "1 week",
        description: "Apply your skills in a realistic technical scenario.",
        topics: ["End-to-end communication scenario", "Peer feedback", "Instructor evaluation"]
      }
    ],
    outcomes: [
      "Confidently explain technical concepts to both technical and non-technical audiences",
      "Write clear and concise technical documentation and emails",
      "Participate effectively in technical meetings and discussions",
      "Ask precise questions to gather the information you need",
      "Adapt your communication style to different technical contexts"
    ]
  },
  "code-review-english": {
    id: "code-review-english",
    title: "Code Review English Mastery",
    description: "Learn specific vocabulary and communication patterns for effective code reviews and technical discussions.",
    longDescription: "This specialized course focuses on the language skills needed for effective code reviews, pull requests, and technical discussions about code. You'll learn how to give constructive feedback, discuss code architecture, and communicate about code quality and improvements in a clear, professional way.",
    level: "Intermediate",
    duration: "6 weeks",
    students: 327,
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    instructor: {
      name: "Michael Park",
      role: "Senior Software Engineer & Communication Coach",
      bio: "Senior developer with 15 years of experience leading international development teams at Microsoft and Amazon. Michael specializes in code review processes and technical mentorship.",
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    modules: [
      {
        title: "Code Review Fundamentals",
        duration: "1 week",
        description: "Understanding the purpose and process of code reviews.",
        topics: ["Code review vocabulary", "Types of code reviews", "Review platforms and tools"]
      },
      {
        title: "Giving Constructive Feedback",
        duration: "2 weeks",
        description: "Learn to provide effective, non-confrontational feedback.",
        topics: ["Framing suggestions positively", "Asking vs. telling", "Cultural sensitivity in feedback"]
      },
      {
        title: "Discussing Code Architecture",
        duration: "1 week",
        description: "Vocabulary and patterns for architectural discussions.",
        topics: ["Design pattern terminology", "Discussing trade-offs", "Architectural improvement suggestions"]
      },
      {
        title: "Pull Request Communication",
        duration: "1 week",
        description: "Effective communication in PRs and merge requests.",
        topics: ["Writing clear PR descriptions", "Responding to review comments", "Discussion threading and resolution"]
      },
      {
        title: "Practical Review Scenarios",
        duration: "1 week",
        description: "Apply your skills in realistic review scenarios.",
        topics: ["Frontend code reviews", "Backend code reviews", "Cross-functional review communication"]
      }
    ],
    outcomes: [
      "Provide clear, constructive feedback in code reviews",
      "Discuss code architecture and design patterns effectively",
      "Write professional pull request descriptions and comments",
      "Receive and respond to code feedback gracefully",
      "Collaborate more effectively in cross-cultural development teams"
    ]
  },
  "tech-presentation": {
    id: "tech-presentation",
    title: "Tech Presentation Skills",
    description: "Develop confidence in presenting technical concepts, products, and project updates in English.",
    longDescription: "This practical course helps you build the skills needed to deliver compelling technical presentations in English. From team meetings to conferences, you'll learn how to structure technical content, create effective slides, handle Q&A sessions, and deliver with confidence, even as a non-native English speaker.",
    level: "Intermediate",
    duration: "4 weeks",
    students: 285,
    imageSrc: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    instructor: {
      name: "Elena Vasquez",
      role: "Technical Presentation Coach",
      bio: "Former Developer Advocate at MongoDB with extensive experience presenting at tech conferences worldwide. Elena helps technical professionals deliver clear, engaging presentations.",
      imageSrc: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80"
    },
    modules: [
      {
        title: "Structuring Technical Presentations",
        duration: "1 week",
        description: "Learn effective structures for different types of technical presentations.",
        topics: ["Stand-up and status update formats", "Project presentations", "Technical deep dives"]
      },
      {
        title: "Visual Aids and Demonstrations",
        duration: "1 week",
        description: "Create effective slides and demonstrations for technical content.",
        topics: ["Slide design principles", "Code demonstrations", "Data visualization"]
      },
      {
        title: "Delivery Techniques",
        duration: "1 week",
        description: "Build confidence in your verbal and non-verbal communication.",
        topics: ["Pacing and emphasis", "Managing nervousness", "Pronunciation and articulation"]
      },
      {
        title: "Q&A and Interactive Sessions",
        duration: "1 week",
        description: "Handle questions and facilitate technical discussions.",
        topics: ["Anticipating questions", "Thinking on your feet", "Redirecting and clarifying"]
      }
    ],
    outcomes: [
      "Structure clear, engaging technical presentations",
      "Create effective slides and visual aids for technical content",
      "Present with confidence in meetings and public settings",
      "Handle technical questions effectively",
      "Adapt presentations for different technical audiences"
    ]
  }
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses[courseId as string];
  
  useEffect(() => {
    if (!course) {
      navigate('/courses');
    }
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [course, navigate]);
  
  if (!course) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12">
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="bg-tech-light text-tech border-tech-light">
                    {course.level}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Users className="h-3 w-3 mr-1" />
                    {course.students} students
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
                  {course.title}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {course.longDescription}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button size="lg" className="group">
                    Enroll in This Course
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Download Syllabus
                  </Button>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <img 
                      src={course.instructor.imageSrc} 
                      alt={course.instructor.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{course.instructor.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {course.instructor.role}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-video rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <img 
                    src={course.imageSrc} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-tech-dark/50 via-transparent to-transparent" />
                  {course.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white text-tech font-medium px-3">
                        Popular
                      </Badge>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16">
              <Tabs defaultValue="curriculum">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="outcomes">Learning Outcomes</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                </TabsList>
                
                <TabsContent value="curriculum" className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                  
                  {course.modules.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-xl p-6 border border-border shadow-sm"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{module.title}</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            {module.duration}
                          </div>
                        </div>
                        <BookOpen className="h-6 w-6 text-tech" />
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {module.description}
                      </p>
                      
                      <h4 className="text-sm font-semibold mb-2">Topics covered:</h4>
                      <ul className="space-y-1">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle2 className="h-4 w-4 text-tech mr-2 flex-shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </TabsContent>
                
                <TabsContent value="outcomes">
                  <h2 className="text-2xl font-bold mb-6">Learning Outcomes</h2>
                  
                  <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                    <p className="text-lg mb-8">
                      By the end of this course, you will be able to:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.outcomes.map((outcome, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle2 className="h-5 w-5 text-tech" />
                          </div>
                          <p className="ml-3">{outcome}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-border">
                      <div className="flex items-center gap-3">
                        <Award className="h-6 w-6 text-tech" />
                        <p className="font-semibold">
                          You'll receive a certificate upon completion
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="instructor">
                  <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>
                  
                  <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="relative w-32 h-32 overflow-hidden rounded-full flex-shrink-0 mx-auto md:mx-0">
                        <img 
                          src={course.instructor.imageSrc} 
                          alt={course.instructor.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-2">{course.instructor.name}</h3>
                        <p className="text-tech font-medium mb-4">{course.instructor.role}</p>
                        
                        <p className="text-muted-foreground">
                          {course.instructor.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="mt-16 pt-8 border-t border-border">
              <h2 className="text-2xl font-bold mb-8 text-center">Ready to elevate your technical English?</h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  Browse All Courses
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
