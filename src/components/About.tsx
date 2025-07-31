import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Users2, Target, Award, HeartHandshake } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Complete transparency in all our dealings with no hidden charges or fees."
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast loan approval and disbursal within 24-72 hours of application."
    },
    {
      icon: Users2,
      title: "Customer First",
      description: "High level of customer satisfaction is our primary goal and commitment."
    },
    {
      icon: Target,
      title: "Customized Solutions",
      description: "Tailored financial solutions designed to meet your specific requirements."
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery."
    },
    {
      icon: HeartHandshake,
      title: "Trust",
      description: "Building lasting relationships based on trust and mutual respect."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About CREDSRI HOLDINGS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted financial partner committed to providing transparent, 
            fast, and reliable loan solutions for all your financial needs.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Why Choose CREDSRI HOLDINGS?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At CREDSRI HOLDINGS, we believe in making financial services accessible, 
                transparent, and customer-centric. With years of experience in the financial 
                sector, we have helped thousands of customers achieve their financial goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to transparency and high-level customer satisfaction sets us 
                apart in the industry. We provide various loan products with quick processing 
                times and competitive interest rates.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Our Promise:</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">No hidden charges or fees</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Minimal documentation process</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Competitive interest rates</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">24/7 customer support</span>
                </li>
              </ul>
            </div>

            <Button variant="cta" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-hover transition-all duration-300 border-0 shadow-card">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-subtle rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide us in every interaction and decision we make for our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;