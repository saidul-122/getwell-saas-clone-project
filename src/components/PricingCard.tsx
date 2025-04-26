
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText,
  ctaLink,
}: PricingCardProps) => {
  return (
    <Card
      className={`h-full transition-all duration-200 ${
        isPopular ? "border-primary shadow-lg" : ""
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <CardHeader className="pt-8 pb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-gray-500 ml-2">/month</span>}
        </div>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </CardHeader>

      <CardContent className="pb-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Link to={ctaLink} className="w-full">
          <Button
            className={`w-full ${
              isPopular ? "" : "bg-white text-primary border border-primary hover:bg-gray-50"
            }`}
            variant={isPopular ? "default" : "outline"}
          >
            {ctaText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
