
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Clock, Users } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  duration: string;
  students: number;
  imageSrc: string;
  popular?: boolean;
  index: number;
  id?: string;
}

const CourseCard = ({
  title,
  description,
  level,
  duration,
  students,
  imageSrc,
  popular = false,
  index,
  id,
}: CourseCardProps) => {
  // Generate an ID from the title if not provided
  const courseId = id || title.toLowerCase().replace(/\s+/g, '-');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-gradient-to-tr from-tech-dark/20 via-transparent to-transparent z-10" />
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {popular && (
          <div className="absolute top-4 right-4 z-20">
            <Badge variant="secondary" className="bg-white text-tech font-medium px-3">
              Popular
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="bg-tech-light text-tech border-tech-light">
            {level}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            {duration}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Users className="h-3 w-3 mr-1" />
            {students}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-tech transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        
        <Button variant="outline" className="w-full group" asChild>
          <Link to={`/courses/${courseId}`}>
            View Course
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
