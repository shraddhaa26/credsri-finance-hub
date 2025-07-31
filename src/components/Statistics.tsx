import { useEffect, useState } from "react";
import { Users, TrendingUp, MapPin, Building2 } from "lucide-react";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: Users,
      value: 5000,
      label: "HAPPY CUSTOMERS",
      suffix: "+"
    },
    {
      icon: TrendingUp,
      value: 100,
      label: "OVER 100 CR DISBURSALS",
      prefix: "₹",
      suffix: " CR+"
    },
    {
      icon: MapPin,
      value: 5,
      label: "MORE THAN 5 CITIES",
      suffix: "+"
    },
    {
      icon: Building2,
      value: 25,
      label: "MORE THAN 25 BANKS/NBFCS",
      suffix: "+"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('statistics');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const CountUpNumber = ({ value, isVisible, prefix = "", suffix = "" }: { 
    value: number; 
    isVisible: boolean; 
    prefix?: string; 
    suffix?: string; 
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [value, isVisible]);

    return (
      <span>
        {prefix}{count}{suffix}
      </span>
    );
  };

  return (
    <section id="statistics" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center text-white space-y-4 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold">
                  <CountUpNumber 
                    value={stat.value}
                    isVisible={isVisible}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                
                <div className="text-sm lg:text-base font-medium text-blue-100 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;