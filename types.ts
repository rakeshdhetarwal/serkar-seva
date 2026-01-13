
export type Category = 'Student' | 'Farmer' | 'Women' | 'Health' | 'Employment' | 'Rural Development' | 'Urban Development' | 'Education' | 'All';

export interface UserProfile {
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  category: 'General' | 'SC' | 'ST' | 'OBC';
  income: number;
  education: string;
  residence: 'Urban' | 'Rural';
  state: string;
}

export interface Scheme {
  id: string;
  name: string;
  category: Category;
  description: string;
  benefits: string[];
  eligibilityCriteria: string[];
  requiredDocuments: string[];
  lastDate: string;
  applyUrl: string;
  isCentral: boolean;
}

export interface ExamNotification {
  id: string;
  title: string;
  organization: 'SSC' | 'UPSC' | 'RRB' | 'Banking' | 'State' | 'Other';
  vacancyCount: number;
  lastDate: string;
  eligibility: string;
  applyUrl: string;
}

export interface LanguageStrings {
  [key: string]: {
    welcome: string;
    findSchemes: string;
    checkEligibility: string;
    latestExams: string;
    categories: string;
    searchPlaceholder: string;
    results: string;
  };
}
