import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(20, 184, 166, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to <span className="text-yellow-300">CREDSRI HOLDINGS</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-blue-100">
                SECURED AND UNSECURED LOANS
              </h2>
              <p className="text-xl text-blue-50">
                We've served thousands of customers nationwide.
                <br />
                <strong>Now it's time to help you.</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm text-blue-100">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold">₹100 Cr+</div>
                <div className="text-sm text-blue-100">Disbursals</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold">24-72 Hrs</div>
                <div className="text-sm text-blue-100">Processing</div>
              </div>
            </div>
          </div>

          {/* Feature Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              We provide various Loans in 24-72 hours
            </h3>
            <p className="text-blue-100 mb-6">
              CREDSRI HOLDINGS believes in Transparency and High Level of Customer Satisfaction
            </p>
            <ul className="space-y-3 text-white">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                Quick Processing - 24 to 72 hours
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                Minimal Documentation Required
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                Competitive Interest Rates
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                No Hidden Charges
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;