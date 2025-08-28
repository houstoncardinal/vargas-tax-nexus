import { 
  FileText, 
  Building2, 
  Calculator, 
  Shield, 
  Clock, 
  TrendingUp,
  Users,
  CheckCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Individual Tax Returns",
      description: "Complete preparation of personal income tax returns with maximum deductions and credits.",
      features: ["Form 1040 Preparation", "Itemized Deductions", "Tax Credits Optimization", "E-filing Included"]
    },
    {
      icon: Building2,
      title: "Business Tax Services",
      description: "Comprehensive business tax solutions for LLCs, corporations, and partnerships.",
      features: ["Corporate Returns", "Partnership Filings", "Quarterly Estimates", "Business Deductions"]
    },
    {
      icon: Calculator,
      title: "Tax Planning & Strategy",
      description: "Year-round tax planning to minimize liability and maximize savings.",
      features: ["Strategic Planning", "Investment Advice", "Retirement Planning", "Estate Planning"]
    },
    {
      icon: Shield,
      title: "Tax Resolution Services",
      description: "Expert assistance with IRS issues, audits, and tax debt resolution.",
      features: ["IRS Representation", "Audit Defense", "Payment Plans", "Penalty Abatement"]
    },
    {
      icon: Clock,
      title: "Bookkeeping Services",
      description: "Professional bookkeeping to keep your finances organized year-round.",
      features: ["Monthly Reconciliation", "Financial Statements", "Payroll Services", "QuickBooks Setup"]
    },
    {
      icon: TrendingUp,
      title: "Financial Consulting",
      description: "Strategic financial advice to help grow your business and personal wealth.",
      features: ["Cash Flow Analysis", "Business Consulting", "Financial Projections", "Growth Strategies"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tax and financial services designed to meet your unique needs. 
            From individual returns to complex business strategies, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 border border-border hover:border-primary/20"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-success rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-card rounded-2xl p-8 shadow-elegant border border-border">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Get Started?
            </h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Schedule a free consultation with our certified tax professionals. 
            We'll review your situation and provide personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;