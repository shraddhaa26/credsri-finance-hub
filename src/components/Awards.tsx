import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Medal, Star } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Best Financial Services 2023",
      organization: "Finance Excellence Awards",
      year: "2023",
      description: "Recognized for outstanding customer service and innovative loan products."
    },
    {
      icon: Award,
      title: "Customer Choice Award",
      organization: "Business Today",
      year: "2023",
      description: "Voted by customers as the most trusted financial services provider."
    },
    {
      icon: Medal,
      title: "Fastest Growing NBFC",
      organization: "Economic Times",
      year: "2022",
      description: "Acknowledged for rapid growth and expansion across multiple cities."
    },
    {
      icon: Star,
      title: "Digital Innovation Award",
      organization: "BFSI Technology Awards",
      year: "2022",
      description: "For implementing cutting-edge technology in loan processing systems."
    }
  ];

  const certifications = [
    "RBI Registered NBFC",
    "ISO 9001:2015 Certified",
    "CRISIL Rated",
    "MSME Registered"
  ];

  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by leading industry bodies and publications.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-0 shadow-card text-center"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-primary">
                      {award.year}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {award.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {award.organization}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {award.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-subtle rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Certifications & Compliance
            </h3>
            <p className="text-lg text-muted-foreground">
              We maintain the highest standards of regulatory compliance and quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-card hover:shadow-hover transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">
                  {cert}
                </h4>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              All our operations are regulated and monitored by the Reserve Bank of India (RBI) 
              and other relevant financial authorities to ensure complete transparency and security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;