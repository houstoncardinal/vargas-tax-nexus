import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What documents do I need to bring for tax preparation?",
      answer: "We'll provide you with a comprehensive checklist, but typically you'll need: W-2s, 1099s, receipts for deductions, previous year's tax return, Social Security cards, and any other relevant tax documents. We offer a secure client portal where you can upload documents at your convenience."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing depends on the complexity of your tax situation. Individual returns start at $150, while business returns vary based on entity type and complexity. We provide transparent, upfront pricing during your free consultation with no hidden fees. Most clients find our fees are more than offset by the additional refunds we secure."
    },
    {
      question: "Do you offer year-round tax planning services?",
      answer: "Absolutely! Tax planning shouldn't be a once-a-year activity. We offer quarterly check-ins, estimated tax payment planning, and strategic advice throughout the year to minimize your tax liability. Our year-round clients typically save 15-30% more than those who only seek help during tax season."
    },
    {
      question: "What if I get audited by the IRS?",
      answer: "We provide full audit support and representation. If you're selected for an audit, we'll handle all communications with the IRS, prepare necessary documentation, and represent you throughout the process. Our audit defense service is included with our comprehensive tax preparation packages."
    },
    {
      question: "How do you ensure the security of my personal information?",
      answer: "We take data security extremely seriously. All client information is protected with bank-level 256-bit encryption, secure servers, and strict access controls. Our team is trained in confidentiality protocols, and we're fully compliant with IRS security requirements for tax professionals."
    },
    {
      question: "Can you help with back taxes and IRS debt?",
      answer: "Yes, we specialize in tax resolution services. We can help negotiate payment plans, reduce penalties, set up installment agreements, and in some cases, settle tax debt for less than what's owed. Our success rate in resolving IRS issues is over 95%."
    },
    {
      question: "Do you handle business taxes for different entity types?",
      answer: "We work with all business structures including sole proprietorships, partnerships, LLCs, S-Corps, and C-Corps. We also provide business formation advice, payroll services, and ongoing bookkeeping to ensure your business stays compliant year-round."
    },
    {
      question: "What makes Vargas Tax different from other preparers?",
      answer: "Our combination of professional expertise, personalized service, and year-round support sets us apart. Unlike seasonal preparers, we're available all year for questions and planning. Our certified professionals average 15+ years of experience, and we guarantee our work with audit protection included."
    },
    {
      question: "How quickly can you prepare my tax return?",
      answer: "Most individual returns are completed within 3-5 business days, while business returns may take 5-10 days depending on complexity. During peak season (March-April), we maintain these timeframes by managing our client load and having adequate staff. Rush service is available if needed."
    },
    {
      question: "Do you offer electronic filing and direct deposit?",
      answer: "Yes, all returns are electronically filed with the IRS for faster processing and confirmation. You can choose direct deposit for your refund, which typically arrives 8-15 days faster than paper checks. We also provide real-time tracking so you know exactly when to expect your refund."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about our tax preparation services. 
            Don't see your question? Contact us for personalized assistance.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-primary" />
                    ) : (
                      <Plus className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our tax professionals are here to help. Schedule a free consultation 
              to discuss your specific situation and get personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-300 shadow-glow">
                Schedule Free Consultation
              </button>
              <button className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors duration-300">
                Contact Us Directly
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;