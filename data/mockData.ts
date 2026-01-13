
import { Scheme, ExamNotification } from '../types';

export const schemes: Scheme[] = [
  {
    id: 's1',
    name: 'PM Kisan Samman Nidhi',
    category: 'Farmer',
    description: 'Income support of ₹6000 per year to all landholding farmer families.',
    benefits: ['Direct cash transfer of ₹2000 every 4 months', 'Coverage for all farmer families'],
    eligibilityCriteria: ['Small and marginal farmers', 'Landholding families'],
    requiredDocuments: ['Aadhar Card', 'Land Records', 'Bank Passbook'],
    lastDate: 'Ongoing',
    applyUrl: 'https://pmkisan.gov.in/',
    isCentral: true
  },
  {
    id: 's2',
    name: 'Sukanya Samriddhi Yojana',
    category: 'Women',
    description: 'A small deposit scheme for the girl child launched as a part of the Beti Bachao Beti Padhao campaign.',
    benefits: ['High interest rate', 'Tax benefits under Section 80C', 'Maturity after 21 years'],
    eligibilityCriteria: ['Girl child below 10 years', 'Indian citizenship'],
    requiredDocuments: ['Birth Certificate of girl child', 'ID proof of parent', 'Address proof'],
    lastDate: 'Ongoing',
    applyUrl: 'https://www.indiapost.gov.in/',
    isCentral: true
  },
  {
    id: 's3',
    name: 'PM Awas Yojana (Gramin)',
    category: 'Rural Development',
    description: 'Provide a pucca house with basic amenities to all houseless householders.',
    benefits: ['Financial assistance of ₹1.2 Lakh', 'Subsidized loan options'],
    eligibilityCriteria: ['Houseless families', 'Living in kutcha houses'],
    requiredDocuments: ['MGNREGA job card number', 'Aadhar', 'Bank details'],
    lastDate: 'Ongoing',
    applyUrl: 'https://pmayg.nic.in/',
    isCentral: true
  },
  {
    id: 's4',
    name: 'Skill India Mission',
    category: 'Employment',
    description: 'Training youth in various vocational skills to increase employability.',
    benefits: ['Free skill training', 'Certification from NSDC', 'Placement assistance'],
    eligibilityCriteria: ['Unemployed youth', 'School/College dropouts'],
    requiredDocuments: ['Educational certificates', 'ID proof'],
    lastDate: 'Ongoing',
    applyUrl: 'https://www.skillindia.gov.in/',
    isCentral: true
  }
];

export const exams: ExamNotification[] = [
  {
    id: 'e1',
    title: 'SSC Combined Graduate Level (CGL) 2024',
    organization: 'SSC',
    vacancyCount: 17727,
    lastDate: '2024-07-24',
    eligibility: 'Bachelor\'s Degree',
    applyUrl: 'https://ssc.gov.in/'
  },
  {
    id: 'e2',
    title: 'UPSC Civil Services Examination 2024',
    organization: 'UPSC',
    vacancyCount: 1056,
    lastDate: '2024-03-05',
    eligibility: 'Any Degree',
    applyUrl: 'https://upsc.gov.in/'
  },
  {
    id: 'e3',
    title: 'RRB NTPC Graduate Level Posts',
    organization: 'RRB',
    vacancyCount: 8113,
    lastDate: '2024-10-13',
    eligibility: 'Graduation',
    applyUrl: 'https://indianrailways.gov.in/'
  },
  {
    id: 'e4',
    title: 'IBPS Clerk Recruitment 2024',
    organization: 'Banking',
    vacancyCount: 6128,
    lastDate: '2024-07-21',
    eligibility: 'Any Graduation',
    applyUrl: 'https://www.ibps.in/'
  }
];
