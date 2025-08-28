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
  TrendingUp,
  FileCheck,
  Upload,
  Download
} from "lucide-react";

interface TaxOrganizerData {
  // Personal Information
  clientName: string;
  spouseName: string;
  dependents: Dependent[];
  
  // Income Sources
  w2Income: W2Income[];
  selfEmployment: SelfEmployment[];
  rentalIncome: RentalIncome[];
  investmentIncome: InvestmentIncome;
  otherIncome: OtherIncome[];
  
  // Deductions
  itemizedDeductions: ItemizedDeductions;
  businessDeductions: BusinessDeductions;
  
  // Credits
  credits: Credits;
  
  // Additional Information
  lifeChanges: string;
  specialCircumstances: string;
  questions: string;
}

interface Dependent {
  name: string;
  ssn: string;
  relationship: string;
  dateOfBirth: string;
  monthsLivedWithYou: number;
}

interface W2Income {
  employerName: string;
  wages: number;
  federalWithholding: number;
  socialSecurityWithholding: number;
  medicareWithholding: number;
  stateWithholding: number;
  localWithholding: number;
}

interface SelfEmployment {
  businessName: string;
  businessType: string;
  grossIncome: number;
  expenses: number;
  netIncome: number;
}

interface RentalIncome {
  propertyAddress: string;
  grossRent: number;
  expenses: number;
  netIncome: number;
}

interface InvestmentIncome {
  dividends: number;
  interest: number;
  capitalGains: number;
  capitalLosses: number;
}

interface OtherIncome {
  description: string;
  amount: number;
}

interface ItemizedDeductions {
  mortgageInterest: number;
  propertyTax: number;
  stateIncomeTax: number;
  charitableDonations: number;
  medicalExpenses: number;
  unreimbursedEmployeeExpenses: number;
  taxPreparationFees: number;
  otherDeductions: number;
}

interface BusinessDeductions {
  vehicleExpenses: number;
  homeOfficeExpenses: number;
  equipmentExpenses: number;
  travelExpenses: number;
  mealsExpenses: number;
  otherBusinessExpenses: number;
}

interface Credits {
  childTaxCredit: number;
  earnedIncomeCredit: number;
  educationCredits: number;
  childCareCredit: number;
  retirementSavingsCredit: number;
  otherCredits: number;
}

const TaxOrganizerForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<TaxOrganizerData>({
    clientName: "",
    spouseName: "",
    dependents: [],
    w2Income: [],
    selfEmployment: [],
    rentalIncome: [],
    investmentIncome: {
      dividends: 0,
      interest: 0,
      capitalGains: 0,
      capitalLosses: 0
    },
    otherIncome: [],
    itemizedDeductions: {
      mortgageInterest: 0,
      propertyTax: 0,
      stateIncomeTax: 0,
      charitableDonations: 0,
      medicalExpenses: 0,
      unreimbursedEmployeeExpenses: 0,
      taxPreparationFees: 0,
      otherDeductions: 0
    },
    businessDeductions: {
      vehicleExpenses: 0,
      homeOfficeExpenses: 0,
      equipmentExpenses: 0,
      travelExpenses: 0,
      mealsExpenses: 0,
      otherBusinessExpenses: 0
    },
    credits: {
      childTaxCredit: 0,
      earnedIncomeCredit: 0,
      educationCredits: 0,
      childCareCredit: 0,
      retirementSavingsCredit: 0,
      otherCredits: 0
    },
    lifeChanges: "",
    specialCircumstances: "",
    questions: ""
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const steps = [
    { id: 1, title: "Personal Information", icon: Users },
    { id: 2, title: "Income Sources", icon: DollarSign },
    { id: 3, title: "Deductions", icon: Receipt },
    { id: 4, title: "Credits", icon: CreditCard },
    { id: 5, title: "Additional Information", icon: FileText },
    { id: 6, title: "Review & Submit", icon: CheckCircle }
  ];

  const addDependent = () => {
    setFormData(prev => ({
      ...prev,
      dependents: [...prev.dependents, {
        name: "",
        ssn: "",
        relationship: "",
        dateOfBirth: "",
        monthsLivedWithYou: 12
      }]
    }));
  };

  const updateDependent = (index: number, field: keyof Dependent, value: any) => {
    setFormData(prev => ({
      ...prev,
      dependents: prev.dependents.map((dep, i) => 
        i === index ? { ...dep, [field]: value } : dep
      )
    }));
  };

  const removeDependent = (index: number) => {
    setFormData(prev => ({
      ...prev,
      dependents: prev.dependents.filter((_, i) => i !== index)
    }));
  };

  const addW2Income = () => {
    setFormData(prev => ({
      ...prev,
      w2Income: [...prev.w2Income, {
        employerName: "",
        wages: 0,
        federalWithholding: 0,
        socialSecurityWithholding: 0,
        medicareWithholding: 0,
        stateWithholding: 0,
        localWithholding: 0
      }]
    }));
  };

  const updateW2Income = (index: number, field: keyof W2Income, value: any) => {
    setFormData(prev => ({
      ...prev,
      w2Income: prev.w2Income.map((w2, i) => 
        i === index ? { ...w2, [field]: value } : w2
      )
    }));
  };

  const removeW2Income = (index: number) => {
    setFormData(prev => ({
      ...prev,
      w2Income: prev.w2Income.filter((_, i) => i !== index)
    }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: {[key: string]: string} = {};

    switch (step) {
      case 1:
        if (!formData.clientName) newErrors.clientName = "Client name is required";
        break;
      case 2:
        if (formData.w2Income.length === 0) {
          newErrors.w2Income = "At least one W-2 income source is required";
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

  const updateField = (field: keyof TaxOrganizerData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as string]) {
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
          Tax Organizer Complete!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for completing your tax organizer. Our team will review your information and prepare your tax return with maximum accuracy and deductions.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">What's Next:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• We'll review your tax organizer</li>
            <li>• Prepare your tax return with all deductions</li>
            <li>• Schedule a review meeting</li>
            <li>• File your return electronically</li>
          </ul>
        </div>
        <Button 
          onClick={() => {
            setIsCompleted(false);
            setCurrentStep(1);
          }}
          className="bg-primary hover:bg-primary/90"
        >
          Start New Organizer
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Tax Organizer Form
        </h3>
        <p className="text-gray-600">
          Complete this comprehensive tax organizer to help us prepare your tax return with maximum accuracy and deductions.
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
              <Label htmlFor="clientName" className="text-sm font-medium text-gray-700 mb-2 block">
                Client Name *
              </Label>
              <Input
                id="clientName"
                value={formData.clientName}
                onChange={(e) => updateField("clientName", e.target.value)}
                className={errors.clientName ? "border-red-300" : ""}
                placeholder="Enter client name"
              />
              {errors.clientName && <p className="text-red-500 text-sm mt-1">{errors.clientName}</p>}
            </div>
            <div>
              <Label htmlFor="spouseName" className="text-sm font-medium text-gray-700 mb-2 block">
                Spouse Name (if applicable)
              </Label>
              <Input
                id="spouseName"
                value={formData.spouseName}
                onChange={(e) => updateField("spouseName", e.target.value)}
                placeholder="Enter spouse name"
              />
            </div>
          </div>

          {/* Dependents Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-900">Dependents</h4>
              <Button
                onClick={addDependent}
                variant="outline"
                size="sm"
                className="border-gray-300"
              >
                Add Dependent
              </Button>
            </div>
            
            {formData.dependents.map((dependent, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="font-medium text-gray-900">Dependent {index + 1}</h5>
                  <Button
                    onClick={() => removeDependent(index)}
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-300 hover:bg-red-50"
                  >
                    Remove
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Full Name
                    </Label>
                    <Input
                      value={dependent.name}
                      onChange={(e) => updateDependent(index, "name", e.target.value)}
                      placeholder="Enter dependent name"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      SSN
                    </Label>
                    <Input
                      value={dependent.ssn}
                      onChange={(e) => updateDependent(index, "ssn", e.target.value)}
                      placeholder="XXX-XX-XXXX"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Relationship
                    </Label>
                    <Input
                      value={dependent.relationship}
                      onChange={(e) => updateDependent(index, "relationship", e.target.value)}
                      placeholder="e.g., Son, Daughter"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Date of Birth
                    </Label>
                    <Input
                      type="date"
                      value={dependent.dateOfBirth}
                      onChange={(e) => updateDependent(index, "dateOfBirth", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Months Lived With You
                    </Label>
                    <Input
                      type="number"
                      min="0"
                      max="12"
                      value={dependent.monthsLivedWithYou}
                      onChange={(e) => updateDependent(index, "monthsLivedWithYou", parseInt(e.target.value) || 0)}
                      placeholder="12"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Step 2: Income Sources */}
      {currentStep === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* W-2 Income */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-900">W-2 Income</h4>
              <Button
                onClick={addW2Income}
                variant="outline"
                size="sm"
                className="border-gray-300"
              >
                Add W-2
              </Button>
            </div>
            
            {formData.w2Income.map((w2, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="font-medium text-gray-900">W-2 {index + 1}</h5>
                  <Button
                    onClick={() => removeW2Income(index)}
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-300 hover:bg-red-50"
                  >
                    Remove
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Employer Name
                    </Label>
                    <Input
                      value={w2.employerName}
                      onChange={(e) => updateW2Income(index, "employerName", e.target.value)}
                      placeholder="Enter employer name"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Wages, Tips, Other Compensation
                    </Label>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      value={w2.wages}
                      onChange={(e) => updateW2Income(index, "wages", parseFloat(e.target.value) || 0)}
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Federal Income Tax Withheld
                    </Label>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      value={w2.federalWithholding}
                      onChange={(e) => updateW2Income(index, "federalWithholding", parseFloat(e.target.value) || 0)}
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Social Security Tax Withheld
                    </Label>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      value={w2.socialSecurityWithholding}
                      onChange={(e) => updateW2Income(index, "socialSecurityWithholding", parseFloat(e.target.value) || 0)}
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Medicare Tax Withheld
                    </Label>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      value={w2.medicareWithholding}
                      onChange={(e) => updateW2Income(index, "medicareWithholding", parseFloat(e.target.value) || 0)}
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      State Income Tax Withheld
                    </Label>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      value={w2.stateWithholding}
                      onChange={(e) => updateW2Income(index, "stateWithholding", parseFloat(e.target.value) || 0)}
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Investment Income */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Investment Income</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Dividends
                </Label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.investmentIncome.dividends}
                  onChange={(e) => updateField("investmentIncome", {
                    ...formData.investmentIncome,
                    dividends: parseFloat(e.target.value) || 0
                  })}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Interest Income
                </Label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.investmentIncome.interest}
                  onChange={(e) => updateField("investmentIncome", {
                    ...formData.investmentIncome,
                    interest: parseFloat(e.target.value) || 0
                  })}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Capital Gains
                </Label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.investmentIncome.capitalGains}
                  onChange={(e) => updateField("investmentIncome", {
                    ...formData.investmentIncome,
                    capitalGains: parseFloat(e.target.value) || 0
                  })}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Capital Losses
                </Label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.investmentIncome.capitalLosses}
                  onChange={(e) => updateField("investmentIncome", {
                    ...formData.investmentIncome,
                    capitalLosses: parseFloat(e.target.value) || 0
                  })}
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
            Submit Organizer
          </Button>
        )}
      </div>
    </div>
  );
};

export default TaxOrganizerForm; 