import { 
  Award, 
  GraduationCap, 
  Shield, 
  Users, 
  Star,
  CheckCircle,
  Calendar
} from "lucide-react";

const AboutSection = () => {
  const certifications = [
    "Certified Public Accountant (CPA)",
    "Enrolled Agent (EA)",
    "QuickBooks ProAdvisor",
    "Tax Resolution Specialist"
  ];

  const achievements = [
    {
      icon: Users,
      number: "5,000+",
      label: "Clients Served"
    },
    {
      icon: Calendar,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: Award,
      number: "99.8%",
      label: "Success Rate"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Client Rating"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About Vargas Tax Preparation Services
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2008, Vargas Tax Preparation Services has been serving individuals 
              and businesses with professional, reliable tax services. Our commitment to 
              accuracy, integrity, and personalized service has made us a trusted partner 
              for thousands of satisfied clients.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Led by Maria Vargas, CPA, our team combines decades of experience with 
              the latest tax knowledge to ensure you receive maximum refunds and 
              maintain full compliance with tax regulations.
            </p>

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <GraduationCap className="h-6 w-6 text-primary mr-2" />
                Professional Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Shield className="h-6 w-6 text-primary mr-2" />
                Why Choose Us?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Personalized attention and customized tax strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Year-round support and tax planning services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Secure, confidential handling of your financial information</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Competitive pricing with transparent fee structure</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Stats & Testimonials */}
          <div className="space-y-8">
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center bg-card rounded-xl p-6 shadow-card border border-border group hover:shadow-elegant transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-success rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Client Testimonials */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground text-center">
                What Our Clients Say
              </h3>
              
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground italic mb-3">
                    "Maria and her team are absolutely fantastic! They found deductions 
                    I never knew existed and got me a much larger refund than expected. 
                    Professional, thorough, and trustworthy."
                  </p>
                  <div className="font-semibold text-foreground">
                    - Robert Johnson, Small Business Owner
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground italic mb-3">
                    "I've been using Vargas Tax for 8 years now. They handle both my 
                    personal and business taxes with such care and attention to detail. 
                    Highly recommend!"
                  </p>
                  <div className="font-semibold text-foreground">
                    - Sarah Martinez, Marketing Executive
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;