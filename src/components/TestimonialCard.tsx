
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({
  name,
  role,
  company,
  testimonial,
  rating,
  image,
}: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        
        <blockquote className="mb-6">
          <p className="text-gray-700 italic">{testimonial}</p>
        </blockquote>
        
        <div className="flex items-center">
          {image && (
            <div className="mr-4">
              <img
                src={image}
                alt={name}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-600">
              {role}, {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
