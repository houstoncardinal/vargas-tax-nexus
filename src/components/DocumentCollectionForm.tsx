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
  Upload,
  Download
} from "lucide-react";

interface DocumentCategory {
  id: string;
  title: string;
  description: string;
  icon: any;
  documents: DocumentItem[];
}

interface DocumentItem {
  id: string;
  name: string;
  description: string;
  required: boolean;
  collected: boolean;
  notes: string;
}

const DocumentCollectionForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [documentCategories, setDocumentCategories] = useState<DocumentCategory[]>([
    {
      id: "income",
      title: "Income Documents",
      description: "All forms showing your income for the tax year",
      icon: DollarSign,
      documents: [
        { id: "w2", name: "W-2 Forms", description: "From all employers", required: true, collected: false, notes: "" },
        { id: "1099", name: "1099 Forms", description: "1099-NEC, 1099-MISC, 1099-INT, etc.", required: false, collected: false, notes: "" },
        { id: "1099r", name: "1099-R Forms", description: "Retirement distributions", required: false, collected: false, notes: "" },
        { id: "1099ssa", name: "1099-SSA", description: "Social Security benefits", required: false, collected: false, notes: "" },
        { id: "1099div", name: "1099-DIV", description: "Dividend income", required: false, collected: false, notes: "" },
        { id: "1099b", name: "1099-B", description: "Brokerage statements", required: false, collected: false, notes: "" }
      ]
    },
    {
      id: "business",
      title: "Business Documents",
      description: "Business income and expense records",
      icon: Building,
      documents: [
        { id: "business_income", name: "Business Income Records", description: "Sales receipts, invoices, cash receipts", required: false, collected: false, notes: "" },
        { id: "business_expenses", name: "Business Expense Records", description: "Receipts, invoices, mileage logs", required: false, collected: false, notes: "" },
        { id: "vehicle_expenses", name: "Vehicle Expenses", description: "Gas, repairs, insurance, mileage logs", required: false, collected: false, notes: "" },
        { id: "home_office", name: "Home Office Expenses", description: "Utilities, rent, mortgage interest", required: false, collected: false, notes: "" },
        { id: "equipment", name: "Equipment Purchases", description: "Computers, furniture, tools", required: false, collected: false, notes: "" }
      ]
    },
    {
      id: "deductions",
      title: "Deductions & Credits",
      description: "Documents for tax deductions and credits",
      icon: FileText,
      documents: [
        { id: "mortgage", name: "Mortgage Interest (Form 1098)", description: "From your mortgage lender", required: false, collected: false, notes: "" },
        { id: "property_tax", name: "Property Tax Records", description: "Real estate tax payments", required: false, collected: false, notes: "" },
        { id: "charitable", name: "Charitable Contributions", description: "Donation receipts and acknowledgments", required: false, collected: false, notes: "" },
        { id: "medical", name: "Medical Expenses", description: "Medical bills, prescriptions, insurance", required: false, collected: false, notes: "" },
        { id: "education", name: "Education Expenses", description: "Tuition, books, student loan interest", required: false, collected: false, notes: "" },
        { id: "childcare", name: "Childcare Expenses", description: "Daycare, after-school care receipts", required: false, collected: false, notes: "" }
      ]
    },
    {
      id: "personal",
      title: "Personal Information",
      description: "Personal identification and family information",
      icon: FileText,
      documents: [
        { id: "ssn", name: "Social Security Cards", description: "For taxpayer, spouse, and dependents", required: true, collected: false, notes: "" },
        { id: "birth_certificates", name: "Birth Certificates", description: "For new dependents", required: false, collected: false, notes: "" },
        { id: "previous_return", name: "Previous Year's Tax Return", description: "For reference and carryovers", required: false, collected: false, notes: "" },
        { id: "bank_info", name: "Bank Account Information", description: "For direct deposit of refund", required: false, collected: false, notes: "" }
      ]
    }
  ]);

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    filingStatus: "",
    dependents: 0,
    hasBusiness: false,
    hasInvestments: false,
    hasRental: false
  });

  const [isCompleted, setIsCompleted] = useState(false);

  const updateDocumentStatus = (categoryId: string, documentId: string, collected: boolean, notes: string = "") => {
    setDocumentCategories(prev => 
      prev.map(category => 
        category.id === categoryId 
          ? {
              ...category,
              documents: category.documents.map(doc => 
                doc.id === documentId 
                  ? { ...doc, collected, notes }
                  : doc
              )
            }
          : category
      )
    );
  };

  const getProgressPercentage = () => {
    const totalDocuments = documentCategories.reduce((sum, category) => sum + category.documents.length, 0);
    const collectedDocuments = documentCategories.reduce((sum, category) => 
      sum + category.documents.filter(doc => doc.collected).length, 0
    );
    return Math.round((collectedDocuments / totalDocuments) * 100);
  };

  const handleSubmit = () => {
    setIsCompleted(true);
  };

  const steps = [
    { id: 1, title: "Personal Information", description: "Basic information about you" },
    { id: 2, title: "Document Collection", description: "Gather your tax documents" },
    { id: 3, title: "Review & Submit", description: "Review and submit your information" }
  ];

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
          Document Collection Complete!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for completing the document collection process. Our team will review your information and contact you within 24 hours to schedule your tax preparation appointment.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Next Steps:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• We'll review your document checklist</li>
            <li>• Schedule your tax preparation appointment</li>
            <li>• Prepare your tax return with maximum deductions</li>
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
          Start New Collection
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Tax Document Collection
        </h3>
        <p className="text-gray-600">
          Let's gather all the documents needed for your tax preparation. This will help ensure we maximize your refund and complete your return accurately.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= step.id 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {step.id}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-1 mx-2 ${
                  currentStep > step.id ? 'bg-primary' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-gray-900">{steps[currentStep - 1].title}</p>
          <p className="text-xs text-gray-500">{steps[currentStep - 1].description}</p>
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
                value={personalInfo.firstName}
                onChange={(e) => setPersonalInfo(prev => ({ ...prev, firstName: e.target.value }))}
                className="w-full"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                Last Name *
              </Label>
              <Input
                id="lastName"
                value={personalInfo.lastName}
                onChange={(e) => setPersonalInfo(prev => ({ ...prev, lastName: e.target.value }))}
                className="w-full"
                placeholder="Enter your last name"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={personalInfo.email}
                onChange={(e) => setPersonalInfo(prev => ({ ...prev, email: e.target.value }))}
                className="w-full"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={personalInfo.phone}
                onChange={(e) => setPersonalInfo(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="filingStatus" className="text-sm font-medium text-gray-700 mb-2 block">
                Filing Status *
              </Label>
              <select
                id="filingStatus"
                value={personalInfo.filingStatus}
                onChange={(e) => setPersonalInfo(prev => ({ ...prev, filingStatus: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                <option value="">Select filing status</option>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="married_separate">Married Filing Separately</option>
                <option value="head">Head of Household</option>
                <option value="widow">Qualifying Widow(er)</option>
              </select>
            </div>
            <div>
              <Label htmlFor="dependents" className="text-sm font-medium text-gray-700 mb-2 block">
                Number of Dependents
              </Label>
              <Input
                id="dependents"
                type="number"
                min="0"
                value={personalInfo.dependents}
                onChange={(e) => setPersonalInfo(prev => ({ ...prev, dependents: parseInt(e.target.value) || 0 }))}
                className="w-full"
                placeholder="0"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Additional Information</h4>
            <div className="space-y-3">
              <label className="flex items-center">
                <Checkbox
                  checked={personalInfo.hasBusiness}
                  onCheckedChange={(checked) => setPersonalInfo(prev => ({ ...prev, hasBusiness: checked as boolean }))}
                  className="mr-3"
                />
                <span className="text-sm text-gray-700">I have business income or expenses</span>
              </label>
              <label className="flex items-center">
                <Checkbox
                  checked={personalInfo.hasInvestments}
                  onCheckedChange={(checked) => setPersonalInfo(prev => ({ ...prev, hasInvestments: checked as boolean }))}
                  className="mr-3"
                />
                <span className="text-sm text-gray-700">I have investment income (stocks, bonds, etc.)</span>
              </label>
              <label className="flex items-center">
                <Checkbox
                  checked={personalInfo.hasRental}
                  onCheckedChange={(checked) => setPersonalInfo(prev => ({ ...prev, hasRental: checked as boolean }))}
                  className="mr-3"
                />
                <span className="text-sm text-gray-700">I have rental property income</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <Button 
              onClick={() => setCurrentStep(2)}
              disabled={!personalInfo.firstName || !personalInfo.lastName || !personalInfo.email || !personalInfo.phone || !personalInfo.filingStatus}
              className="bg-primary hover:bg-primary/90"
            >
              Continue to Document Collection
            </Button>
          </div>
        </motion.div>
      )}

      {/* Step 2: Document Collection */}
      {currentStep === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Document Collection Progress: {getProgressPercentage()}% Complete
            </p>
          </div>

          {/* Document Categories */}
          <div className="space-y-6">
            {documentCategories.map((category) => (
              <div key={category.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <category.icon className="h-6 w-6 text-primary mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">{category.title}</h4>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <div className="space-y-3">
                  {category.documents.map((document) => (
                    <div key={document.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Checkbox
                        checked={document.collected}
                        onCheckedChange={(checked) => updateDocumentStatus(category.id, document.id, checked as boolean)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              {document.name}
                              {document.required && <span className="text-red-500 ml-1">*</span>}
                            </p>
                            <p className="text-sm text-gray-600">{document.description}</p>
                          </div>
                          {document.collected && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                        {document.collected && (
                          <div className="mt-2">
                            <Textarea
                              placeholder="Add notes about this document (optional)"
                              value={document.notes}
                              onChange={(e) => updateDocumentStatus(category.id, document.id, true, e.target.value)}
                              className="text-sm"
                              rows={2}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <Button 
              onClick={() => setCurrentStep(1)}
              variant="outline"
              className="border-gray-300"
            >
              Back
            </Button>
            <Button 
              onClick={() => setCurrentStep(3)}
              className="bg-primary hover:bg-primary/90"
            >
              Review & Submit
            </Button>
          </div>
        </motion.div>
      )}

      {/* Step 3: Review & Submit */}
      {currentStep === 3 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Review Your Information</h4>
            <p className="text-blue-800 text-sm">
              Please review your personal information and document collection status before submitting.
            </p>
          </div>

          {/* Personal Information Review */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Personal Information</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Name:</span>
                <span className="ml-2 font-medium">{personalInfo.firstName} {personalInfo.lastName}</span>
              </div>
              <div>
                <span className="text-gray-600">Email:</span>
                <span className="ml-2 font-medium">{personalInfo.email}</span>
              </div>
              <div>
                <span className="text-gray-600">Phone:</span>
                <span className="ml-2 font-medium">{personalInfo.phone}</span>
              </div>
              <div>
                <span className="text-gray-600">Filing Status:</span>
                <span className="ml-2 font-medium capitalize">{personalInfo.filingStatus.replace('_', ' ')}</span>
              </div>
              <div>
                <span className="text-gray-600">Dependents:</span>
                <span className="ml-2 font-medium">{personalInfo.dependents}</span>
              </div>
            </div>
          </div>

          {/* Document Collection Summary */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Document Collection Summary</h4>
            <div className="space-y-3">
              {documentCategories.map((category) => {
                const collectedCount = category.documents.filter(doc => doc.collected).length;
                const totalCount = category.documents.length;
                return (
                  <div key={category.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <category.icon className="h-5 w-5 text-primary mr-3" />
                      <span className="font-medium">{category.title}</span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {collectedCount} of {totalCount} documents collected
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-between">
            <Button 
              onClick={() => setCurrentStep(2)}
              variant="outline"
              className="border-gray-300"
            >
              Back
            </Button>
            <Button 
              onClick={handleSubmit}
              className="bg-primary hover:bg-primary/90"
            >
              Submit Document Collection
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DocumentCollectionForm; 