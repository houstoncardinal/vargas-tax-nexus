import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Send,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      subtitle: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@vargastax.com",
      subtitle: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Main Street, Suite 200",
      subtitle: "Downtown Financial District"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM",
      subtitle: "Sat: 9AM-2PM (Tax Season)"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to maximize your tax savings? Contact us today for a free consultation. 
            We're here to help you navigate your tax needs with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 text-primary mr-2" />
                Contact Information
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elegant transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    <p className="text-primary font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule Appointment CTA */}
            <div className="bg-gradient-card rounded-xl p-8 shadow-elegant border border-border">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">
                  Schedule Your Free Consultation
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Book a complimentary 30-minute consultation to discuss your tax situation. 
                No obligation, just expert advice tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  Call Now
                </Button>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <h4 className="font-semibold text-foreground mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday (Tax Season)</span>
                  <span className="text-foreground font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground font-medium">Closed</span>
                </div>
                <div className="pt-2 mt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    * Extended hours available during tax season (January - April)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-elegant border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input type="email" placeholder="john.doe@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="(555) 123-4567" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Needed
                </label>
                <select className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-ring">
                  <option value="">Select a service</option>
                  <option value="individual">Individual Tax Return</option>
                  <option value="business">Business Tax Services</option>
                  <option value="planning">Tax Planning</option>
                  <option value="resolution">Tax Resolution</option>
                  <option value="bookkeeping">Bookkeeping</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea 
                  placeholder="Tell us about your tax situation and how we can help you..."
                  rows={4}
                />
              </div>

              <Button size="lg" className="w-full">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Required fields. We'll respond within 24 hours during business days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;