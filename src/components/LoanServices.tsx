import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  Home, 
  Building, 
  Factory, 
  Store, 
  Wrench,
  ArrowRight 
} from "lucide-react";

const LoanServices = () => {
  const loanTypes = [
    {
      title: "Personal Loan",
      icon: User,
      description: "Quick personal loans for your immediate needs with minimal documentation.",
      features: ["Instant approval", "No collateral required", "Flexible repayment"],
      link: "#personal-loan"
    },
    {
      title: "Home Loan", 
      icon: Home,
      description: "Affordable home loans to make your dream home a reality.",
      features: ["Low interest rates", "Long tenure", "Tax benefits"],
      link: "#home-loan"
    },
    {
      title: "Business Loan",
      icon: Building,
      description: "Fuel your business growth with our tailored business loan solutions.",
      features: ["Working capital", "Expansion funding", "Quick processing"],
      link: "#business-loan"
    },
    {
      title: "Loan Against Property",
      icon: Factory,
      description: "Leverage your property to get substantial funding at competitive rates.",
      features: ["High loan amount", "Competitive rates", "Minimal documentation"],
      link: "#loan-against-property"
    },
    {
      title: "SME Loan",
      icon: Store,
      description: "Specialized loans for small and medium enterprises to boost growth.",
      features: ["Collateral free", "Fast disbursal", "Flexible terms"],
      link: "#sme-loan"
    },
    {
      title: "Project Financing",
      icon: Wrench,
      description: "Comprehensive project financing for large-scale business ventures.",
      features: ["Infrastructure funding", "Long-term finance", "Expert guidance"],
      link: "#project-financing"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Fastest Way to Apply for Loan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of loan products designed to meet your specific financial needs
          </p>
        </div>

        {/* Loan Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanTypes.map((loan, index) => {
            const IconComponent = loan.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-0 shadow-card"
              >
                <CardContent className="p-8 text-center space-y-6">
                  {/* Icon */}
                  <div className="mx-auto w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {loan.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {loan.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 text-sm">
                      {loan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 justify-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Need Help Choosing the Right Loan?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Our financial experts are here to guide you through the process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Calculate EMI
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanServices;