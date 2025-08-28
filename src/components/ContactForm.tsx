import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar,
  Building,
  FileText,
  Send,
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  message: string;
  preferredContact: string;
  consultationDate: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    message: "",
    preferredContact: "email",
    consultationDate: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceTypes = [
    "Individual Tax Return",
    "Business Tax Return",
    "Tax Planning & Strategy",
    "Tax Resolution Services",
    "Bookkeeping Services",
    "Financial Consulting",
    "Other"
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        message: "",
        preferredContact: "email",
        consultationDate: ""
      });
    }, 3000);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const inputVariants = {
    focus: { scale: 1.02 },
    blur: { scale: 1 }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-200"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" as const }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="h-10 w-10 text-green-600" />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Thank You!
        </h3>
        <p className="text-gray-600 mb-6">
          Your consultation request has been submitted successfully. We'll contact you within 24 hours to schedule your free consultation.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-gray-500"
        >
          A confirmation email has been sent to {formData.email}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Schedule Your Free Consultation
        </h3>
        <p className="text-gray-600">
          Fill out the form below and we'll contact you within 24 hours to schedule your free 30-minute consultation. 
          Or call us directly at <span className="font-semibold text-primary">(832) 287-9056</span>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* First Name */}
        <div>
          <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
            First Name *
          </Label>
                     <motion.div
             variants={inputVariants}
             whileFocus="focus"
           >
             <Input
               id="firstName"
               type="text"
               value={formData.firstName}
               onChange={(e) => handleInputChange("firstName", e.target.value)}
               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 ${
                 errors.firstName ? "border-red-300" : "border-gray-300"
               }`}
               placeholder="Enter your first name"
             />
           </motion.div>
          {errors.firstName && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.firstName}
            </motion.p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
            Last Name *
          </Label>
                     <motion.div
             variants={inputVariants}
             whileFocus="focus"
           >
             <Input
               id="lastName"
               type="text"
               value={formData.lastName}
               onChange={(e) => handleInputChange("lastName", e.target.value)}
               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 ${
                 errors.lastName ? "border-red-300" : "border-gray-300"
               }`}
               placeholder="Enter your last name"
             />
           </motion.div>
          {errors.lastName && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.lastName}
            </motion.p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
            Email Address *
          </Label>
                     <motion.div
             variants={inputVariants}
             whileFocus="focus"
           >
             <Input
               id="email"
               type="email"
               value={formData.email}
               onChange={(e) => handleInputChange("email", e.target.value)}
               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 ${
                 errors.email ? "border-red-300" : "border-gray-300"
               }`}
               placeholder="Enter your email address"
             />
           </motion.div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.email}
            </motion.p>
          )}
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
            Phone Number *
          </Label>
          <motion.div
            variants={inputVariants}
            whileFocus="focus"
          >
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 ${
                errors.phone ? "border-red-300" : "border-gray-300"
              }`}
              placeholder="Enter your phone number"
            />
          </motion.div>
          {errors.phone && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.phone}
            </motion.p>
          )}
        </div>

        {/* Company */}
        <div>
          <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
            Company (Optional)
          </Label>
          <motion.div
            variants={inputVariants}
            whileFocus="focus"
          >
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              placeholder="Enter your company name"
            />
          </motion.div>
        </div>

        {/* Service Type */}
        <div>
          <Label htmlFor="serviceType" className="text-sm font-medium text-gray-700 mb-2 block">
            Service Type *
          </Label>
          <motion.div
            variants={inputVariants}
            whileFocus="focus"
          >
            <select
              id="serviceType"
              value={formData.serviceType}
              onChange={(e) => handleInputChange("serviceType", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 ${
                errors.serviceType ? "border-red-300" : "border-gray-300"
              }`}
            >
              <option value="">Select a service</option>
              {serviceTypes.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </motion.div>
          {errors.serviceType && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.serviceType}
            </motion.p>
          )}
        </div>
      </div>

      {/* Preferred Contact Method */}
      <div className="mb-6">
        <Label className="text-sm font-medium text-gray-700 mb-3 block">
          Preferred Contact Method
        </Label>
        <div className="flex space-x-4">
          {["email", "phone"].map((method) => (
            <label key={method} className="flex items-center">
              <input
                type="radio"
                name="preferredContact"
                value={method}
                checked={formData.preferredContact === method}
                onChange={(e) => handleInputChange("preferredContact", e.target.value)}
                className="mr-2 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700 capitalize">{method}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Preferred Consultation Date */}
      <div className="mb-6">
        <Label htmlFor="consultationDate" className="text-sm font-medium text-gray-700 mb-2 block">
          Preferred Consultation Date (Optional)
        </Label>
        <motion.div
          variants={inputVariants}
          whileFocus="focus"
          whileBlur="blur"
        >
          <Input
            id="consultationDate"
            type="date"
            value={formData.consultationDate}
            onChange={(e) => handleInputChange("consultationDate", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
          />
        </motion.div>
      </div>

      {/* Message */}
      <div className="mb-8">
        <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
          Additional Information *
        </Label>
        <motion.div
          variants={inputVariants}
          whileFocus="focus"
          whileBlur="blur"
        >
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 min-h-[120px] ${
              errors.message ? "border-red-300" : "border-gray-300"
            }`}
            placeholder="Please provide any additional information about your tax situation, questions, or specific concerns you'd like to discuss during the consultation."
          />
        </motion.div>
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-1 flex items-center"
          >
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
            />
          ) : (
            <Send className="h-5 w-5 mr-2" />
          )}
          {isSubmitting ? "Submitting..." : "Schedule Free Consultation"}
        </Button>
      </motion.div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        By submitting this form, you agree to our privacy policy and consent to being contacted about our services.
      </p>
    </motion.form>
  );
};

export default ContactForm; 