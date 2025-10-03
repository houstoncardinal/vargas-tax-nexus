import { Star, Quote, CheckCircle, Award } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Local Auto Repair Business",
      title: "Family-Owned Business",
      company: "Houston Auto Services",
      rating: 5,
      content: "The Vargas family has been handling our business taxes for over 5 years. They're thorough, professional, and always take the time to answer our questions. We really appreciate their attention to detail and friendly service.",
      service: "Business Tax Preparation"
    },
    {
      name: "Tech Startup Owner", 
      title: "Small Business Owner",
      company: "Houston Tech Solutions",
      rating: 5,
      content: "I've been using Vargas Tax for 8 years now. They handle both my personal and business taxes with such care and attention to detail. When I had an IRS audit, they represented me and resolved everything quickly. Highly recommend!",
      service: "Tax Resolution & Audit Defense"
    },
    {
      name: "Real Estate Investment Group", 
      title: "Property Management",
      company: "Houston Properties LLC",
      rating: 5,
      content: "As real estate investors with multiple properties, our taxes are complex. Vargas Tax handles everything professionally and provides helpful tax planning advice throughout the year. Their expertise has been invaluable to our business.",
      service: "Investment Tax Planning"
    },
    {
      name: "Freelance Professional",
      title: "Independent Consultant",
      company: "Houston Consulting Services",
      rating: 5,
      content: "Switching to Vargas Tax was a great decision for my freelance business. They helped set up my quarterly payments, identified deductions I was missing, and always respond quickly to my questions. Very professional service.",
      service: "Self-Employment Taxes"
    },
    {
      name: "Retired Professional",
      title: "Retired Educator",
      company: "Houston School District",
      rating: 5,
      content: "After retirement, my tax situation became more complex with pensions and investments. The Vargas team explained everything clearly and helped ensure I understood all my options. Their patience and expertise were very helpful.",
      service: "Retirement Tax Planning"
    },
    {
      name: "Healthcare Professional",
      title: "Medical Practitioner",
      company: "Houston Medical Center",
      rating: 5,
      content: "Between my W-2 job and side consulting work, my taxes were complicated. Vargas Tax helped organize everything, explained my deductions clearly, and provided planning advice for next year. Very happy with their service.",
      service: "Multi-Income Tax Prep"
    }
  ];

  const overallStats = [
    {
      icon: Star,
      value: "4.9/5",
      label: "Client Rating"
    },
    {
      icon: CheckCircle,
      value: "500+",
      label: "Client Reviews"
    },
    {
      icon: Award,
      value: "15+ Yrs",
      label: "Experience"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Read real experiences from clients we've worked with over the years.
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

              {/* Service Info */}
              <div className="mb-6 p-3 bg-muted/50 rounded-lg border border-border">
                <div className="text-sm text-muted-foreground font-medium">
                  Service: {testimonial.service}
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
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We'd be happy to learn about your tax situation and see how we can help. 
              Get in touch for a no-obligation consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-300 shadow-glow">
                Contact Us
              </button>
              <button className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors duration-300">
                View More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;