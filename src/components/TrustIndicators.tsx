import { Shield, Award, Lock, CheckCircle, Users, Clock } from "lucide-react";

const TrustIndicators = () => {
  const certifications = [
    {
      title: "IRS Authorized",
      subtitle: "e-file Provider",
      icon: CheckCircle,
      description: "Officially authorized by the IRS for electronic filing"
    },
    {
      title: "Licensed Professional",
      subtitle: "Certified Professional",
      icon: Award,
      description: "Licensed Certified Public Accountant with 15+ years experience"
    },
    {
      title: "Bank-Level Security",
      subtitle: "256-bit Encryption",
      icon: Lock,
      description: "Your data is protected with military-grade encryption"
    },
    {
      title: "BBB Accredited",
      subtitle: "A+ Rating",
      icon: Shield,
      description: "Better Business Bureau accredited with highest rating"
    }
  ];

  const statistics = [
    {
      number: "15+",
      label: "Years of Service",
      icon: Award
    },
    {
      number: "5,000+",
      label: "Clients Helped",
      icon: Users
    },
    {
      number: "Same Day",
      label: "Response Time",
      icon: Clock
    },
    {
      number: "Year-Round",
      label: "Support Available",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-12 bg-muted/20 border-y border-border overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Trusted & Certified By
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-glow transition-shadow duration-300">
                  <cert.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-foreground text-sm mb-1">
                  {cert.title}
                </h4>
                <p className="text-xs text-primary font-medium mb-2">
                  {cert.subtitle}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className="h-6 w-6 text-secondary mr-2" />
                  <span className="text-3xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                    {stat.number}
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;