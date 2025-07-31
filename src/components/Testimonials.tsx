import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mr. Rajesh Kumar",
      position: "Business Owner",
      company: "Kumar Enterprises",
      content: "They did costing according to what I needed for my business. The team was professional and the process was transparent throughout.",
      rating: 5,
      image: "RK"
    },
    {
      name: "Ms. Priya Sharma",
      position: "Home Buyer",
      company: "Software Engineer",
      content: "Fast and easy services, very useful for urgent funding. Got my home loan approved in just 48 hours with minimal documentation.",
      rating: 5,
      image: "PS"
    },
    {
      name: "Mr. Aleem Khan",
      position: "Entrepreneur",
      company: "Prime Marketing",
      content: "Fast and easy service, very useful for urgent funding. Their team helped me expand my business with the right loan product.",
      rating: 5,
      image: "AK"
    },
    {
      name: "Dr. Sunita Patel",
      position: "Medical Practitioner",
      company: "Patel Clinic",
      content: "Professional approach and competitive interest rates. They helped me set up my clinic with their business loan solutions.",
      rating: 5,
      image: "SP"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with CREDSRI HOLDINGS.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-0 shadow-card"
            >
              <CardContent className="p-8 space-y-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-12 w-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-subtle rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Trusted by Thousands of Customers
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our growing family of satisfied customers who have achieved their financial goals with our support.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Approval Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24-72 Hrs</div>
                <div className="text-sm text-muted-foreground">Processing Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;