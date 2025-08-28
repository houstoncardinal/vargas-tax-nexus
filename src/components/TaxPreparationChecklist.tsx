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
  Clock,
  Users,
  CreditCard,
  Shield
} from "lucide-react";

interface ChecklistCategory {
  id: string;
  title: string;
  description: string;
  icon: any;
  items: ChecklistItem[];
}

interface ChecklistItem {
  id: string;
  name: string;
  description: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  notes: string;
}

const TaxPreparationChecklist = () => {
  const [checklistCategories, setChecklistCategories] = useState<ChecklistCategory[]>([
    {
      id: "preparation",
      title: "Pre-Appointment Preparation",
      description: "Get ready for your tax preparation appointment",
      icon: Calendar,
      items: [
        { id: "organize_docs", name: "Organize all documents by category", description: "Sort W-2s, 1099s, receipts, etc.", completed: false, priority: 'high', notes: "" },
        { id: "review_previous", name: "Review previous year's tax return", description: "Identify carryovers and changes", completed: false, priority: 'high', notes: "" },
        { id: "list_questions", name: "Prepare list of questions", description: "Write down any tax-related questions", completed: false, priority: 'medium', notes: "" },
        { id: "check_deductions", name: "Review potential deductions", description: "Identify all possible tax deductions", completed: false, priority: 'high', notes: "" },
        { id: "verify_info", name: "Verify personal information", description: "Check SSNs, addresses, bank info", completed: false, priority: 'high', notes: "" }
      ]
    },
    {
      id: "income",
      title: "Income Verification",
      description: "Ensure all income sources are documented",
      icon: DollarSign,
      items: [
        { id: "w2_verification", name: "Verify all W-2 forms received", description: "Check that all employers sent W-2s", completed: false, priority: 'high', notes: "" },
        { id: "1099_verification", name: "Verify all 1099 forms received", description: "Check for 1099-NEC, 1099-MISC, etc.", completed: false, priority: 'high', notes: "" },
        { id: "side_income", name: "Document side income", description: "Freelance, gig work, cash payments", completed: false, priority: 'medium', notes: "" },
        { id: "investment_income", name: "Document investment income", description: "Dividends, interest, capital gains", completed: false, priority: 'medium', notes: "" },
        { id: "rental_income", name: "Document rental income", description: "Rental property income and expenses", completed: false, priority: 'medium', notes: "" }
      ]
    },
    {
      id: "deductions",
      title: "Deduction Preparation",
      description: "Gather documents for tax deductions",
      icon: FileText,
      items: [
        { id: "mortgage_interest", name: "Gather mortgage interest statements", description: "Form 1098 from mortgage lender", completed: false, priority: 'high', notes: "" },
        { id: "property_tax", name: "Gather property tax records", description: "Real estate tax payment receipts", completed: false, priority: 'high', notes: "" },
        { id: "charitable_donations", name: "Organize charitable donations", description: "Receipts and acknowledgments", completed: false, priority: 'medium', notes: "" },
        { id: "medical_expenses", name: "Gather medical expense records", description: "Bills, prescriptions, insurance", completed: false, priority: 'medium', notes: "" },
        { id: "education_expenses", name: "Gather education expense records", description: "Tuition, books, student loan interest", completed: false, priority: 'medium', notes: "" },
        { id: "childcare_expenses", name: "Gather childcare expense records", description: "Daycare, after-school care receipts", completed: false, priority: 'medium', notes: "" }
      ]
    },
    {
      id: "business",
      title: "Business Documentation",
      description: "Organize business income and expenses",
      icon: Building,
      items: [
        { id: "business_income", name: "Organize business income records", description: "Sales receipts, invoices, cash receipts", completed: false, priority: 'high', notes: "" },
        { id: "business_expenses", name: "Organize business expense records", description: "Receipts, invoices, mileage logs", completed: false, priority: 'high', notes: "" },
        { id: "vehicle_expenses", name: "Organize vehicle expense records", description: "Gas, repairs, insurance, mileage", completed: false, priority: 'medium', notes: "" },
        { id: "home_office", name: "Calculate home office expenses", description: "Utilities, rent, mortgage interest", completed: false, priority: 'medium', notes: "" },
        { id: "equipment_purchases", name: "Document equipment purchases", description: "Computers, furniture, tools", completed: false, priority: 'medium', notes: "" }
      ]
    },
    {
      id: "personal",
      title: "Personal Information",
      description: "Verify personal and family information",
      icon: Users,
      items: [
        { id: "ssn_verification", name: "Verify Social Security numbers", description: "Check SSNs for accuracy", completed: false, priority: 'high', notes: "" },
        { id: "dependent_info", name: "Update dependent information", description: "Birth dates, SSNs, relationship", completed: false, priority: 'high', notes: "" },
        { id: "address_verification", name: "Verify current address", description: "Check address for accuracy", completed: false, priority: 'high', notes: "" },
        { id: "bank_info", name: "Verify bank account information", description: "For direct deposit of refund", completed: false, priority: 'medium', notes: "" },
        { id: "life_changes", name: "Document life changes", description: "Marriage, divorce, birth, death", completed: false, priority: 'high', notes: "" }
      ]
    }
  ]);

  const [appointmentInfo, setAppointmentInfo] = useState({
    appointmentDate: "",
    appointmentTime: "",
    estimatedDuration: "",
    specialNeeds: "",
    preferredContact: "email"
  });

  const [isCompleted, setIsCompleted] = useState(false);

  const updateChecklistItem = (categoryId: string, itemId: string, completed: boolean, notes: string = "") => {
    setChecklistCategories(prev => 
      prev.map(category => 
        category.id === categoryId 
          ? {
              ...category,
              items: category.items.map(item => 
                item.id === itemId 
                  ? { ...item, completed, notes }
                  : item
              )
            }
          : category
      )
    );
  };

  const getProgressPercentage = () => {
    const totalItems = checklistCategories.reduce((sum, category) => sum + category.items.length, 0);
    const completedItems = checklistCategories.reduce((sum, category) => 
      sum + category.items.filter(item => item.completed).length, 0
    );
    return Math.round((completedItems / totalItems) * 100);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const handleSubmit = () => {
    setIsCompleted(true);
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
          Tax Preparation Checklist Complete!
        </h3>
        <p className="text-gray-600 mb-6">
          Excellent! You've completed your tax preparation checklist. You're now ready for your tax preparation appointment. Our team will contact you to confirm your appointment details.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">What's Next:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Bring all organized documents to your appointment</li>
            <li>• Arrive 10 minutes early for your scheduled time</li>
            <li>• Have your questions ready for the tax professional</li>
            <li>• We'll prepare your return and maximize your refund</li>
          </ul>
        </div>
        <Button 
          onClick={() => {
            setIsCompleted(false);
          }}
          className="bg-primary hover:bg-primary/90"
        >
          Start New Checklist
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Tax Preparation Checklist
        </h3>
        <p className="text-gray-600">
          Use this comprehensive checklist to prepare for your tax preparation appointment. Complete each item to ensure a smooth and efficient tax preparation process.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="bg-gray-200 rounded-full h-3">
          <div 
            className="bg-primary h-3 rounded-full transition-all duration-300"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm text-gray-600">
            Checklist Progress: {getProgressPercentage()}% Complete
          </p>
          <p className="text-sm font-medium text-primary">
            {checklistCategories.reduce((sum, category) => sum + category.items.filter(item => item.completed).length, 0)} of {checklistCategories.reduce((sum, category) => sum + category.items.length, 0)} items completed
          </p>
        </div>
      </div>

      {/* Appointment Information */}
      <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-4 flex items-center">
          <Calendar className="h-5 w-5 mr-2" />
          Appointment Information
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="appointmentDate" className="text-sm font-medium text-blue-900 mb-2 block">
              Preferred Appointment Date
            </Label>
            <Input
              id="appointmentDate"
              type="date"
              value={appointmentInfo.appointmentDate}
              onChange={(e) => setAppointmentInfo(prev => ({ ...prev, appointmentDate: e.target.value }))}
              className="w-full"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div>
            <Label htmlFor="appointmentTime" className="text-sm font-medium text-blue-900 mb-2 block">
              Preferred Time
            </Label>
            <select
              id="appointmentTime"
              value={appointmentInfo.appointmentTime}
              onChange={(e) => setAppointmentInfo(prev => ({ ...prev, appointmentTime: e.target.value }))}
              className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              <option value="">Select time</option>
              <option value="morning">Morning (9AM-12PM)</option>
              <option value="afternoon">Afternoon (1PM-4PM)</option>
              <option value="evening">Evening (4PM-6PM)</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="specialNeeds" className="text-sm font-medium text-blue-900 mb-2 block">
            Special Requirements or Questions
          </Label>
          <Textarea
            id="specialNeeds"
            value={appointmentInfo.specialNeeds}
            onChange={(e) => setAppointmentInfo(prev => ({ ...prev, specialNeeds: e.target.value }))}
            className="w-full"
            placeholder="Any special requirements, questions, or concerns..."
            rows={3}
          />
        </div>
      </div>

      {/* Checklist Categories */}
      <div className="space-y-6">
        {checklistCategories.map((category) => (
          <div key={category.id} className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <category.icon className="h-6 w-6 text-primary mr-3" />
              <h4 className="text-lg font-semibold text-gray-900">{category.title}</h4>
            </div>
            <p className="text-gray-600 mb-4">{category.description}</p>
            
            <div className="space-y-3">
              {category.items.map((item) => (
                <div key={item.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Checkbox
                    checked={item.completed}
                    onCheckedChange={(checked) => updateChecklistItem(category.id, item.id, checked as boolean)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <p className={`font-medium ${item.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                          {item.name}
                        </p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                          {item.priority.toUpperCase()}
                        </span>
                      </div>
                      {item.completed && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                    <p className={`text-sm ${item.completed ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                    {item.completed && (
                      <div className="mt-2">
                        <Textarea
                          placeholder="Add notes about this item (optional)"
                          value={item.notes}
                          onChange={(e) => updateChecklistItem(category.id, item.id, true, e.target.value)}
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

      {/* Submit Button */}
      <div className="mt-8 flex justify-center">
        <Button 
          onClick={handleSubmit}
          className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg"
        >
          Complete Checklist & Schedule Appointment
        </Button>
      </div>

      {/* Tips Section */}
      <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-semibold text-yellow-900 mb-3 flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          Pro Tips for a Smooth Tax Preparation
        </h4>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Complete high-priority items first to ensure accuracy</li>
          <li>• Keep all documents organized in folders by category</li>
          <li>• Make copies of important documents before your appointment</li>
          <li>• Arrive 10 minutes early to your scheduled appointment</li>
          <li>• Have your questions written down for the tax professional</li>
        </ul>
      </div>
    </div>
  );
};

export default TaxPreparationChecklist; 