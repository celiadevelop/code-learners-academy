
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  imageSrc: string;
  index: number;
}

const Testimonial = ({
  content,
  author,
  role,
  company,
  imageSrc,
  index,
}: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "flex flex-col rounded-2xl p-8 shadow-sm",
        index % 2 === 0 ? "bg-card" : "bg-tech-light"
      )}
    >
      <div className="mb-6">
        <Quote className={cn(
          "h-8 w-8",
          index % 2 === 0 ? "text-tech" : "text-tech-dark"
        )} />
      </div>
      
      <p className="text-balance mb-6 text-lg font-medium leading-relaxed">
        "{content}"
      </p>
      
      <div className="mt-auto flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <img 
            src={imageSrc} 
            alt={author}
            className="h-full w-full object-cover"
          />
        </div>
        
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
