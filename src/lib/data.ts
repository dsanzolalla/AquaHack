export type Report = {
  id: string;
  location: string;
  problem: 'BROKEN_PUMP' | 'TURBID_WATER' | 'DEAD_ANIMALS' | 'BAD_SMELL' | 'SICKNESS_AFTER_DRINKING';
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  date: string;
  status: 'OPEN' | 'In Progress' | 'Resolved';
};

export type Resource = {
  id: string;
  question: string;
  answer: string;
};

export type MapMarkerData = {
  id: string;
  position: { lat: number; lng: number };
  problem: 'BROKEN_PUMP' | 'TURBID_WATER' | 'DEAD_ANIMALS' | 'BAD_SMELL' | 'SICKNESS_AFTER_DRINKING';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  date: string;
  status: 'OPEN' | 'In Progress' | 'Resolved';
  description: string;
};

// Based on the user's SQL schema
export const reports: Report[] = [
  {
    id: 'REP-001',
    location: 'Kisozi Village, Gomba District',
    problem: 'BROKEN_PUMP',
    description: 'report_desc_1',
    priority: 'HIGH',
    date: '2025-01-15',
    status: 'OPEN',
  },
  {
    id: 'REP-002',
    location: 'Bwaise, Kampala',
    problem: 'SICKNESS_AFTER_DRINKING',
    description: 'report_desc_2',
    priority: 'HIGH',
    date: '2025-02-20',
    status: 'In Progress',
  },
  {
    id: 'REP-003',
    location: 'Jinja, near the Nile',
    problem: 'TURBID_WATER',
    description: 'report_desc_3',
    priority: 'LOW',
    date: '2025-03-10',
    status: 'OPEN',
  },
  {
    id: 'REP-004',
    location: 'Gulu Town, Pece Division',
    problem: 'BAD_SMELL',
    description: 'report_desc_4',
    priority: 'MEDIUM',
    date: '2025-04-05',
    status: 'In Progress',
  },
  {
    id: 'REP-005',
    location: 'Arua District, Vurra County',
    problem: 'DEAD_ANIMALS',
    description: 'report_desc_5',
    priority: 'MEDIUM',
    date: '2025-05-21',
    status: 'OPEN',
  },
  {
    id: 'REP-006',
    location: 'Mbarara, Kakoba Market',
    problem: 'BROKEN_PUMP',
    description: 'report_desc_6',
    priority: 'MEDIUM',
    date: '2025-06-18',
    status: 'In Progress',
  },
  {
    id: 'REP-007',
    location: 'Mbale, Wanale Sub-county',
    problem: 'TURBID_WATER',
    description: 'report_desc_7',
    priority: 'LOW',
    date: '2025-07-22',
    status: 'OPEN',
  },
  {
    id: 'REP-008',
    location: 'Yumbe, Bidi Bidi Settlement Zone 2',
    problem: 'SICKNESS_AFTER_DRINKING',
    description: 'report_desc_8',
    priority: 'HIGH',
    date: '2025-08-01',
    status: 'In Progress',
  },
  {
    id: 'REP-009',
    location: 'Lira Town, Central Division',
    problem: 'BAD_SMELL',
    description: 'report_desc_9',
    priority: 'MEDIUM',
    date: '2025-10-29',
    status: 'OPEN',
  },
  {
    id: 'REP-010',
    location: 'Masaka, Kyanamukaka',
    problem: 'BROKEN_PUMP',
    description: 'report_desc_10',
    priority: 'LOW',
    date: '2025-10-02',
    status: 'In Progress',
  },
  {
    id: 'REP-011',
    location: 'Karamoja, Moroto District',
    problem: 'DEAD_ANIMALS',
    description: 'report_desc_11',
    priority: 'HIGH',
    date: '2025-01-25',
    status: 'OPEN',
  },
  {
    id: 'REP-012',
    location: 'Jinja, Njeru Town',
    problem: 'BAD_SMELL',
    description: 'report_desc_12',
    priority: 'HIGH',
    date: '2025-02-14',
    status: 'In Progress',
  },
  {
    id: 'REP-013',
    location: 'Wakiso, Kyengera',
    problem: 'BROKEN_PUMP',
    description: 'report_desc_13',
    priority: 'MEDIUM',
    date: '2025-03-29',
    status: 'OPEN',
  },
  {
    id: 'REP-014',
    location: 'Arua, Rhino Camp',
    problem: 'DEAD_ANIMALS',
    description: 'report_desc_14',
    priority: 'MEDIUM',
    date: '2025-04-19',
    status: 'In Progress',
  },
  {
    id: 'REP-015',
    location: 'Kabale, Lake Bunyonyi',
    problem: 'TURBID_WATER',
    description: 'report_desc_15',
    priority: 'MEDIUM',
    date: '2025-05-08',
    status: 'OPEN',
  },
  {
    id: 'REP-016',
    location: 'Mbarara, Kakoba',
    problem: 'SICKNESS_AFTER_DRINKING',
    description: 'report_desc_16',
    priority: 'LOW',
    date: '2025-06-23',
    status: 'In Progress',
  },
  {
    id: 'REP-017',
    location: 'Gulu, Koch Goma',
    problem: 'BROKEN_PUMP',
    description: 'report_desc_17',
    priority: 'MEDIUM',
    date: '2025-07-17',
    status: 'OPEN',
  },
  {
    id: 'REP-018',
    location: 'Kampala, Katwe Slum',
    problem: 'BAD_SMELL',
    description: 'report_desc_18',
    priority: 'HIGH',
    date: '2025-08-30',
    status: 'In Progress',
  },
  {
    id: 'REP-019',
    location: 'Hoima, Buseruka',
    problem: 'TURBID_WATER',
    description: 'report_desc_19',
    priority: 'MEDIUM',
    date: '2025-09-09',
    status: 'OPEN',
  },
  {
    id: 'REP-020',
    location: 'Luwero, Wobulenzi',
    problem: 'DEAD_ANIMALS',
    description: 'report_desc_20',
    priority: 'LOW',
    date: '2025-10-14',
    status: 'In Progress',
  },
  {
    id: 'REP-021',
    location: 'Isingiro, Nakivale Settlement',
    problem: 'SICKNESS_AFTER_DRINKING',
    description: 'report_desc_21',
    priority: 'HIGH',
    date: '2025-08-21',
    status: 'In Progress',
  }
];

export const generateNewReportId = (currentReports: Report[]): string => {
  const existingIds = currentReports.map(r => parseInt(r.id.split('-')[1]));
  const maxId = Math.max(0, ...existingIds);
  const newId = maxId + 1;
  return `REP-${String(newId).padStart(3, '0')}`;
};


// Note: The content of resources is now managed in en.json and es.json
// This remains as a structural example but is not directly used in the UI anymore.
export const resources: Resource[] = [
  {
    id: 'res-1',
    question: 'What are the common signs of water contamination?',
    answer: 'Common signs include unusual taste or smell (like bleach, gasoline, or fish), discoloration (cloudy, brown, or green water), and the presence of particles or sediment. If you notice any of these, avoid using the water and report it immediately.',
  },
  {
    id: 'res-2',
    question: 'What should I do if I suspect my water is contaminated?',
    answer: 'Do not drink, cook with, or bathe in the water. Use an alternative water source like bottled water if possible. Report the issue to your local water authority and through our app. Seek medical attention if you or your family members show symptoms of illness.',
  },
  {
    id: 'res-3',
    question: 'How can I prevent water contamination at home?',
    answer: 'You can prevent contamination by properly disposing of hazardous household chemicals, avoiding flushing non-degradable items, maintaining your septic system, and using water filters. Regularly check your pipes for leaks or damage.',
  },
  {
    id: 'res-4',
    question: 'What are the health risks of drinking contaminated water?',
    answer: 'Contaminated water can cause a range of health issues, from gastrointestinal problems like diarrhea and vomiting to more severe conditions like typhoid, cholera, and long-term effects from chemical exposure. Vulnerable populations like children and the elderly are at higher risk.',
  },
];

// Geocoded locations for the new reports
export const mapMarkers: MapMarkerData[] = [
    {
        id: 'REP-001',
        position: { lat: 0.2336, lng: 31.9509 }, // Gomba District
        problem: 'BROKEN_PUMP',
        description: 'report_desc_1',
        priority: 'HIGH',
        date: '2025-01-15',
        status: 'OPEN',
    },
    {
        id: 'REP-002',
        position: { lat: 0.3347, lng: 32.5695 }, // Bwaise, Kampala
        problem: 'SICKNESS_AFTER_DRINKING',
        description: 'report_desc_2',
        priority: 'HIGH',
        date: '2025-02-20',
        status: 'In Progress',
    },
    {
        id: 'REP-003',
        position: { lat: 0.4244, lng: 33.2044 }, // Jinja
        problem: 'TURBID_WATER',
        description: 'report_desc_3',
        priority: 'LOW',
        date: '2025-03-10',
        status: 'OPEN',
    },
    {
        id: 'REP-004',
        position: { lat: 2.7725, lng: 32.2896 }, // Gulu
        problem: 'BAD_SMELL',
        description: 'report_desc_4',
        priority: 'MEDIUM',
        date: '2025-04-05',
        status: 'In Progress',
    },
    {
        id: 'REP-005',
        position: { lat: 3.021, lng: 30.911 }, // Arua
        problem: 'DEAD_ANIMALS',
        description: 'report_desc_5',
        priority: 'MEDIUM',
        date: '2025-05-21',
        status: 'OPEN',
    },
    {
        id: 'REP-006',
        position: { lat: -0.6072, lng: 30.6552 }, // Mbarara
        problem: 'BROKEN_PUMP',
        description: 'report_desc_6',
        priority: 'MEDIUM',
        date: '2025-06-18',
        status: 'In Progress',
    },
    {
        id: 'REP-007',
        position: { lat: 1.09, lng: 34.22 }, // Mbale, Wanale
        problem: 'TURBID_WATER',
        description: 'report_desc_7',
        priority: 'LOW',
        date: '2025-07-22',
        status: 'OPEN',
    },
    {
        id: 'REP-008',
        position: { lat: 3.40, lng: 31.38 }, // Yumbe, Bidi Bidi
        problem: 'SICKNESS_AFTER_DRINKING',
        description: 'report_desc_8',
        priority: 'HIGH',
        date: '2025-08-01',
        status: 'In Progress',
    },
    {
        id: 'REP-009',
        position: { lat: 2.25, lng: 32.90 }, // Lira Town
        problem: 'BAD_SMELL',
        description: 'report_desc_9',
        priority: 'MEDIUM',
        date: '2025-10-29',
        status: 'OPEN',
    },
    {
        id: 'REP-010',
        position: { lat: -0.45, lng: 31.65 }, // Masaka, Kyanamukaka
        problem: 'BROKEN_PUMP',
        description: 'report_desc_10',
        priority: 'LOW',
        date: '2025-10-02',
        status: 'In Progress',
    },
    {
        id: 'REP-011',
        position: { lat: 2.53, lng: 34.66 }, // Karamoja, Moroto
        problem: 'DEAD_ANIMALS',
        description: 'report_desc_11',
        priority: 'HIGH',
        date: '2025-01-25',
        status: 'OPEN',
    },
    {
        id: 'REP-012',
        position: { lat: 0.45, lng: 33.12 }, // Jinja, Njeru Town
        problem: 'BAD_SMELL',
        description: 'report_desc_12',
        priority: 'HIGH',
        date: '2025-02-14',
        status: 'In Progress',
    },
    {
        id: 'REP-013',
        position: { lat: 0.29, lng: 32.48 }, // Wakiso, Kyengera
        problem: 'BROKEN_PUMP',
        description: 'report_desc_13',
        priority: 'MEDIUM',
        date: '2025-03-29',
        status: 'OPEN',
    },
    {
        id: 'REP-014',
        position: { lat: 2.38, lng: 31.42 }, // Arua, Rhino Camp
        problem: 'DEAD_ANIMALS',
        description: 'report_desc_14',
        priority: 'MEDIUM',
        date: '2025-04-19',
        status: 'In Progress',
    },
    {
        id: 'REP-015',
        position: { lat: -1.29, lng: 29.91 }, // Kabale, Lake Bunyonyi
        problem: 'TURBID_WATER',
        description: 'report_desc_15',
        priority: 'MEDIUM',
        date: '2025-05-08',
        status: 'OPEN',
    },
    {
        id: 'REP-016',
        position: { lat: -0.615, lng: 30.645 }, // Mbarara, Kakoba
        problem: 'SICKNESS_AFTER_DRINKING',
        description: 'report_desc_16',
        priority: 'LOW',
        date: '2025-06-23',
        status: 'In Progress',
    },
    {
        id: 'REP-017',
        position: { lat: 2.56, lng: 32.18 }, // Gulu, Koch Goma
        problem: 'BROKEN_PUMP',
        description: 'report_desc_17',
        priority: 'MEDIUM',
        date: '2025-07-17',
        status: 'OPEN',
    },
    {
        id: 'REP-018',
        position: { lat: 0.298, lng: 32.571 }, // Kampala, Katwe Slum
        problem: 'BAD_SMELL',
        description: 'report_desc_18',
        priority: 'HIGH',
        date: '2025-08-30',
        status: 'In Progress',
    },
    {
        id: 'REP-019',
        position: { lat: 1.50, lng: 31.25 }, // Hoima, Buseruka
        problem: 'TURBID_WATER',
        description: 'report_desc_19',
        priority: 'MEDIUM',
        date: '2025-09-09',
        status: 'OPEN',
    },
    {
        id: 'REP-020',
        position: { lat: 0.80, lng: 32.52 }, // Luwero, Wobulenzi
        problem: 'DEAD_ANIMALS',
        description: 'report_desc_20',
        priority: 'LOW',
        date: '2025-10-14',
        status: 'In Progress',
    },
    {
        id: 'REP-021',
        position: { lat: -0.835, lng: 30.958 }, // Isingiro, Nakivale Settlement
        problem: 'SICKNESS_AFTER_DRINKING',
        description: 'report_desc_21',
        priority: 'HIGH',
        date: '2025-08-21',
        status: 'In Progress',
    }
];

    

    


