import { Star, Quote, CheckCircle, Award } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Local Auto Repair Business",
      title: "Family-Owned Business",
      company: "Houston Auto Services",
      rating: 5,
      content: "The Vargas family has been handling our business taxes for over 5 years. They found deductions we never knew existed and got us a much larger refund than expected. Professional, thorough, and trustworthy. They treat us like family!",
      savings: "$4,200",
      service: "Business Tax Preparation"
    },
    {
      name: "Tech Startup Owner", 
      title: "Small Business Owner",
      company: "Houston Tech Solutions",
      rating: 5,
      content: "I've been using Vargas Tax for 8 years now. They handle both my personal and business taxes with such care and attention to detail. When I had an IRS audit, they represented me and resolved everything quickly. Highly recommend!",
      savings: "$2,800",
      service: "Tax Resolution & Audit Defense"
    },
    {
      name: "Real Estate Investment Group", 
      title: "Property Management",
      company: "Houston Properties LLC",
      rating: 5,
      content: "As real estate investors with multiple properties, our taxes are complex. Vargas Tax not only handles everything perfectly but also provides year-round tax planning advice that has saved us thousands. Their expertise is unmatched.",
      savings: "$7,500",
      service: "Investment Tax Planning"
    },
    {
      name: "Freelance Professional",
      title: "Independent Consultant",
      company: "Houston Consulting Services",
      rating: 5,
      content: "Switching to Vargas Tax was the best decision I made for my freelance business. They set up my quarterly payments, found deductions I was missing, and always respond quickly to my questions. Professional service at its finest.",
      savings: "$3,100",
      service: "Self-Employment Taxes"
    },
    {
      name: "Retired Professional",
      title: "Retired Educator",
      company: "Houston School District",
      rating: 5,
      content: "After retirement, my tax situation became more complex with pensions and investments. The Vargas team explained everything clearly and made sure I wasn't overpaying. Their patience and expertise gave me peace of mind.",
      savings: "$1,900",
      service: "Retirement Tax Planning"
    },
    {
      name: "Healthcare Professional",
      title: "Medical Practitioner",
      company: "Houston Medical Center",
      rating: 5,
      content: "Between my W-2 job and side consulting work, my taxes were a nightmare. Vargas Tax organized everything, maximized my deductions, and even helped me plan for next year. I can't imagine doing taxes with anyone else.",
      savings: "$2,400",
      service: "Multi-Income Tax Prep"
    }
  ];

  const overallStats = [
    {
      icon: Star,
      value: "4.9/5",
      label: "Average Rating"
    },
    {
      icon: CheckCircle,
      value: "500+",
      label: "5-Star Reviews"
    },
    {
      icon: Award,
      value: "99%",
      label: "Client Retention"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Don't just take our word for it. See what thousands of satisfied clients 
            have to say about our professional tax services.
          </p>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {overallStats.map((stat, index) => (
              <div key={index} className="flex items-center">
                <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center mr-3">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-elegant transition-all duration-300 group relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="h-12 w-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Service & Savings */}
              <div className="mb-6 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                <div className="text-sm text-secondary font-medium mb-1">
                  Service: {testimonial.service}
                </div>
                <div className="text-lg font-bold text-secondary">
                  Tax Savings: {testimonial.savings}
                </div>
              </div>

              {/* Client Info */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-primary font-medium">
                  {testimonial.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Satisfied Clients
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the same level of professional service and tax savings. 
              Schedule your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-300 shadow-glow">
                Schedule Free Consultation
              </button>
              <button className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors duration-300">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;