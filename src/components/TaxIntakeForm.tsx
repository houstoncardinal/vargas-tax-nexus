import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  FileText, 
  Building, 
  Home, 
  Car, 
  GraduationCap,
  Heart,
  DollarSign,
  Calendar,
  CheckCircle,
  AlertCircle,
  Users,
  CreditCard,
  Shield,
  Calculator,
  Receipt,
  Banknote,
  PiggyBank,
  TrendingUp
} from "lucide-react";

interface TaxIntakeData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ssn: string;
  dateOfBirth: string;
  filingStatus: string;
  dependents: number;
  
  // Address Information
  address: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Employment Information
  employerName: string;
  employerAddress: string;
  employerPhone: string;
  jobTitle: string;
  startDate: string;
  
  // Income Information
  wages: number;
  tips: number;
  bonuses: number;
  otherIncome: number;
  
  // Business Information
  hasBusiness: boolean;
  businessName: string;
  businessType: string;
  businessIncome: number;
  businessExpenses: number;
  
  // Investment Information
  hasInvestments: boolean;
  investmentIncome: number;
  capitalGains: number;
  dividends: number;
  interest: number;
  
  // Deduction Information
  mortgageInterest: number;
  propertyTax: number;
  charitableDonations: number;
  medicalExpenses: number;
  educationExpenses: number;
  childcareExpenses: number;
  
  // Additional Information
  lifeChanges: string;
  specialCircumstances: string;
  questions: string;
}

const TaxIntakeForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<TaxIntakeData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    ssn: "",
    dateOfBirth: "",
    filingStatus: "",
    dependents: 0,
    address: "",
    city: "",
    state: "",
    zipCode: "",
    employerName: "",
    employerAddress: "",
    employerPhone: "",
    jobTitle: "",
    startDate: "",
    wages: 0,
    tips: 0,
    bonuses: 0,
    otherIncome: 0,
    hasBusiness: false,
    businessName: "",
    businessType: "",
    businessIncome: 0,
    businessExpenses: 0,
    hasInvestments: false,
    investmentIncome: 0,
    capitalGains: 0,
    dividends: 0,
    interest: 0,
    mortgageInterest: 0,
    propertyTax: 0,
    charitableDonations: 0,
    medicalExpenses: 0,
    educationExpenses: 0,
    childcareExpenses: 0,
    lifeChanges: "",
    specialCircumstances: "",
    questions: ""
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const steps = [
    { id: 1, title: "Personal Information", icon: Users },
    { id: 2, title: "Employment & Income", icon: DollarSign },
    { id: 3, title: "Business & Investments", icon: Building },
    { id: 4, title: "Deductions & Credits", icon: Receipt },
    { id: 5, title: "Additional Information", icon: FileText },
    { id: 6, title: "Review & Submit", icon: CheckCircle }
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: {[key: string]: string} = {};

    switch (step) {
      case 1:
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phone) newErrors.phone = "Phone is required";
        if (!formData.ssn) newErrors.ssn = "SSN is required";
        if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
        if (!formData.filingStatus) newErrors.filingStatus = "Filing status is required";
        break;
      case 2:
        if (!formData.employerName) newErrors.employerName = "Employer name is required";
        if (formData.wages < 0) newErrors.wages = "Wages cannot be negative";
        break;
      case 3:
        if (formData.hasBusiness && !formData.businessName) {
          newErrors.businessName = "Business name is required if you have a business";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      setIsCompleted(true);
    }
  };

  const updateField = (field: keyof TaxIntakeData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  if (isCompleted) {
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
          Tax Intake Form Complete!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for completing your tax intake form. Our team will review your information and contact you within 24 hours to schedule your tax preparation appointment.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">What's Next:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• We'll review your tax information</li>
            <li>• Schedule your tax preparation appointment</li>
            <li>• Prepare your return with maximum deductions</li>
            <li>• File your return electronically for faster refunds</li>
          </ul>
        </div>
        <Button 
          onClick={() => {
            setIsCompleted(false);
            setCurrentStep(1);
          }}
          className="bg-primary hover:bg-primary/90"
        >
          Start New Form
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Tax Preparation Intake Form
        </h3>
        <p className="text-gray-600">
          Please complete this comprehensive form to help us prepare your tax return accurately and maximize your refund.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= step.id 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                <step.icon className="h-5 w-5" />
              </div>
              {index < steps.length - 1 && (
                <div className={`w-12 h-1 mx-2 ${
                  currentStep > step.id ? 'bg-primary' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-gray-900">{steps[currentStep - 1].title}</p>
          <p className="text-xs text-gray-500">Step {currentStep} of {steps.length}</p>
        </div>
      </div>

      {/* Step 1: Personal Information */}
      {currentStep === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                First Name *
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
                className={errors.firstName ? "border-red-300" : ""}
                placeholder="Enter your first name"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                Last Name *
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
                className={errors.lastName ? "border-red-300" : ""}
                placeholder="Enter your last name"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={errors.email ? "border-red-300" : ""}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className={errors.phone ? "border-red-300" : ""}
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
              <Label htmlFor="ssn" className="text-sm font-medium text-gray-700 mb-2 block">
                Social Security Number *
              </Label>
              <Input
                id="ssn"
                value={formData.ssn}
                onChange={(e) => updateField("ssn", e.target.value)}
                className={errors.ssn ? "border-red-300" : ""}
                placeholder="XXX-XX-XXXX"
              />
              {errors.ssn && <p className="text-red-500 text-sm mt-1">{errors.ssn}</p>}
            </div>
            <div>
              <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700 mb-2 block">
                Date of Birth *
              </Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => updateField("dateOfBirth", e.target.value)}
                className={errors.dateOfBirth ? "border-red-300" : ""}
              />
              {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="filingStatus" className="text-sm font-medium text-gray-700 mb-2 block">
                Filing Status *
              </Label>
              <select
                id="filingStatus"
                value={formData.filingStatus}
                onChange={(e) => updateField("filingStatus", e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                  errors.filingStatus ? "border-red-300" : "border-gray-300"
                }`}
              >
                <option value="">Select filing status</option>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="married_separate">Married Filing Separately</option>
                <option value="head">Head of Household</option>
                <option value="widow">Qualifying Widow(er)</option>
              </select>
              {errors.filingStatus && <p className="text-red-500 text-sm mt-1">{errors.filingStatus}</p>}
            </div>
            <div>
              <Label htmlFor="dependents" className="text-sm font-medium text-gray-700 mb-2 block">
                Number of Dependents
              </Label>
              <Input
                id="dependents"
                type="number"
                min="0"
                value={formData.dependents}
                onChange={(e) => updateField("dependents", parseInt(e.target.value) || 0)}
                placeholder="0"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Address Information</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <Label htmlFor="address" className="text-sm font-medium text-gray-700 mb-2 block">
                  Street Address
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => updateField("address", e.target.value)}
                  placeholder="Enter your street address"
                />
              </div>
              <div>
                <Label htmlFor="city" className="text-sm font-medium text-gray-700 mb-2 block">
                  City
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  placeholder="Enter your city"
                />
              </div>
              <div>
                <Label htmlFor="state" className="text-sm font-medium text-gray-700 mb-2 block">
                  State
                </Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => updateField("state", e.target.value)}
                  placeholder="TX"
                />
              </div>
              <div>
                <Label htmlFor="zipCode" className="text-sm font-medium text-gray-700 mb-2 block">
                  ZIP Code
                </Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => updateField("zipCode", e.target.value)}
                  placeholder="Enter your ZIP code"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Step 2: Employment & Income */}
      {currentStep === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Employment Information</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="employerName" className="text-sm font-medium text-gray-700 mb-2 block">
                  Employer Name *
                </Label>
                <Input
                  id="employerName"
                  value={formData.employerName}
                  onChange={(e) => updateField("employerName", e.target.value)}
                  className={errors.employerName ? "border-red-300" : ""}
                  placeholder="Enter employer name"
                />
                {errors.employerName && <p className="text-red-500 text-sm mt-1">{errors.employerName}</p>}
              </div>
              <div>
                <Label htmlFor="jobTitle" className="text-sm font-medium text-gray-700 mb-2 block">
                  Job Title
                </Label>
                <Input
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) => updateField("jobTitle", e.target.value)}
                  placeholder="Enter your job title"
                />
              </div>
              <div>
                <Label htmlFor="startDate" className="text-sm font-medium text-gray-700 mb-2 block">
                  Start Date
                </Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => updateField("startDate", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="employerPhone" className="text-sm font-medium text-gray-700 mb-2 block">
                  Employer Phone
                </Label>
                <Input
                  id="employerPhone"
                  type="tel"
                  value={formData.employerPhone}
                  onChange={(e) => updateField("employerPhone", e.target.value)}
                  placeholder="Enter employer phone number"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="employerAddress" className="text-sm font-medium text-gray-700 mb-2 block">
                Employer Address
              </Label>
              <Input
                id="employerAddress"
                value={formData.employerAddress}
                onChange={(e) => updateField("employerAddress", e.target.value)}
                placeholder="Enter employer address"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Income Information</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="wages" className="text-sm font-medium text-gray-700 mb-2 block">
                  Wages, Salaries, Tips
                </Label>
                <Input
                  id="wages"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.wages}
                  onChange={(e) => updateField("wages", parseFloat(e.target.value) || 0)}
                  className={errors.wages ? "border-red-300" : ""}
                  placeholder="0.00"
                />
                {errors.wages && <p className="text-red-500 text-sm mt-1">{errors.wages}</p>}
              </div>
              <div>
                <Label htmlFor="tips" className="text-sm font-medium text-gray-700 mb-2 block">
                  Tips
                </Label>
                <Input
                  id="tips"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.tips}
                  onChange={(e) => updateField("tips", parseFloat(e.target.value) || 0)}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="bonuses" className="text-sm font-medium text-gray-700 mb-2 block">
                  Bonuses
                </Label>
                <Input
                  id="bonuses"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.bonuses}
                  onChange={(e) => updateField("bonuses", parseFloat(e.target.value) || 0)}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="otherIncome" className="text-sm font-medium text-gray-700 mb-2 block">
                  Other Income
                </Label>
                <Input
                  id="otherIncome"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.otherIncome}
                  onChange={(e) => updateField("otherIncome", parseFloat(e.target.value) || 0)}
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Button 
          onClick={handlePrevious}
          disabled={currentStep === 1}
          variant="outline"
          className="border-gray-300"
        >
          Previous
        </Button>
        
        {currentStep < steps.length ? (
          <Button 
            onClick={handleNext}
            className="bg-primary hover:bg-primary/90"
          >
            Next
          </Button>
        ) : (
          <Button 
            onClick={handleSubmit}
            className="bg-primary hover:bg-primary/90"
          >
            Submit Form
          </Button>
        )}
      </div>
    </div>
  );
};

export default TaxIntakeForm; 