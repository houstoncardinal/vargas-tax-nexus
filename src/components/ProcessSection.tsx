import { 
  Calendar, 
  FileText, 
  Calculator, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Shield,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const processSteps = [
    {
      step: "01",
      icon: Calendar,
      title: "Initial Consultation",
      description: "Schedule your free 30-minute consultation to discuss your tax situation and goals.",
      details: ["Review previous tax returns", "Identify potential deductions", "Discuss tax strategies", "Answer all your questions"],
      duration: "30 minutes",
      type: "Free"
    },
    {
      step: "02", 
      icon: FileText,
      title: "Document Collection",
      description: "We'll provide a comprehensive checklist of documents needed for your tax preparation.",
      details: ["Secure document portal access", "Organized checklist provided", "Photo upload capability", "Real-time progress tracking"],
      duration: "1-3 days",
      type: "Guided"
    },
    {
      step: "03",
      icon: Calculator,
      title: "Expert Preparation",
      description: "Our certified professionals prepare your returns with meticulous attention to detail.",
      details: ["CPA review and preparation", "Maximum deduction identification", "Error checking & validation", "Compliance verification"],
      duration: "3-5 business days",
      type: "Professional"
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Review & Filing",
      description: "Final review with you before secure electronic filing and confirmation.",
      details: ["Line-by-line review session", "E-filing with IRS", "Refund tracking setup", "Document storage & backup"],
      duration: "Same day",
      type: "Secure"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Professional Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined, secure process designed to maximize your refund while ensuring 
            accuracy and compliance. Here's how we work together to optimize your tax situation.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="group">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Step Number & Icon */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-success rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block w-px h-16 bg-border mt-8" />
                  )}
                </div>

                {/* Content */}
                <div className="lg:col-span-7">
                  <div className="bg-card rounded-xl p-8 shadow-card border border-border group-hover:shadow-elegant transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {step.duration}
                        </div>
                        <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                          {step.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow (Desktop only) */}
                <div className="lg:col-span-3 hidden lg:flex justify-center">
                  {index < processSteps.length - 1 ? (
                    <ArrowRight className="h-8 w-8 text-muted-foreground/30 group-hover:text-primary transition-colors duration-300" />
                  ) : (
                    <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center shadow-glow">
                      <Send className="h-8 w-8 text-white" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-card rounded-2xl p-8 shadow-elegant border border-border">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Get Started?
            </h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust us with their tax preparation. 
            Schedule your free consultation today and discover how much you could save.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Start Free Consultation
            </Button>
            <Button size="lg" variant="outline">
              Learn About Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;