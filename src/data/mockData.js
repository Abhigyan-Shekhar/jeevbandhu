export const governmentPolicies = [
  {
    id: 1,
    name: "Livestock Health & Disease Control (LH&DC)",
    coverage: "Both poultry & pigs",
    benefits: "Aims to improve disease prevention & control: vaccination programmes, disease surveillance, veterinary infrastructure. Classical Swine Fever Control Programme (for pigs) is part of this.",
    department: "Animal Husbandry & Dairying"
  },
  {
    id: 2,
    name: "National Livestock Mission (NLM)",
    coverage: "Both, with specific sub-missions for piggery & poultry",
    benefits: "Promotes entrepreneurship, breed improvement, feed/fodder development, infrastructure. Provides capital subsidies.",
    department: "Animal Husbandry & Dairying"
  },
  {
    id: 3,
    name: "NLM Entrepreneurship Development Programme (EDP)",
    coverage: "Pigs, poultry",
    benefits: "Offers 50% capital subsidy in many cases. For example, a pig breeding farm (100 sows + 10 boars) can get upto ~₹30 lakh subsidy. Poultry projects too have their ceilings.",
    department: "Boss Wallah Blog"
  },
  {
    id: 4,
    name: "Animal Husbandry Infrastructure Development Fund (AHIDF)",
    coverage: "Both meat & poultry & ancillary infrastructure",
    benefits: "Interest subsidies, funding for processing, hatcheries, cold chain etc. Infrastructure growth for poultry especially.",
    department: "www.khetivyapar.com"
  }
];

export const feedPosts = [
  {
    id: 1,
    author: "Rajesh Kumar",
    location: "Karnataka",
    timestamp: "2024-01-15T10:30:00",
    type: "tip",
    animalType: "pig",
    content: "Pro tip: Maintaining proper ventilation in pig pens reduces respiratory diseases by 40%. Just installed new exhaust fans!",
    likes: 45,
    comments: 12,
    shares: 8,
    image: null
  },
  {
    id: 2,
    author: "Priya Sharma",
    location: "Punjab",
    timestamp: "2024-01-14T15:45:00",
    type: "alert",
    animalType: "poultry",
    content: "⚠️ ALERT: Avian flu outbreak reported in nearby district. Increase biosecurity measures immediately!",
    likes: 120,
    comments: 34,
    shares: 56,
    image: null
  },
  {
    id: 3,
    author: "Government Update",
    location: "National",
    timestamp: "2024-01-14T09:00:00",
    type: "scheme",
    animalType: "both",
    content: "New subsidy announced under NLM! 50% capital subsidy for pig breeding farms. Apply before March 31st.",
    likes: 234,
    comments: 89,
    shares: 145,
    image: null
  }
];

export const diseases = {
  pig: [
    {
      id: 1,
      name: "African Swine Fever",
      symptoms: ["High fever", "Loss of appetite", "Skin hemorrhages", "Diarrhea"],
      prevention: ["Regular vaccination", "Quarantine new animals", "Proper biosecurity"],
      treatment: "No specific treatment. Supportive care and antibiotics for secondary infections."
    },
    {
      id: 2,
      name: "Porcine Reproductive and Respiratory Syndrome (PRRS)",
      symptoms: ["Respiratory distress", "Reproductive failure", "Blue ears", "Poor growth"],
      prevention: ["Vaccination", "All-in-all-out production", "Good ventilation"],
      treatment: "Supportive care, anti-inflammatories, antibiotics for secondary infections."
    },
    {
  
      id: 3,
      name: "Avian Influenza (AI)",
      symptoms: ["Sudden death", "Respiratory distress", "Swelling of head/comb", "Drop in egg production"],
      prevention: ["Biosecurity", "Vaccination (where approved)", "Quarantine and culling"],
      treatment: "Immediate antiviral medications, especially Oseltamivir (Tamiflu), administered within 48 hours of symptom onset"

    }
  ],
  poultry: [
    {
      id: 1,
      name: "Newcastle Disease",
      symptoms: ["Respiratory distress", "Green diarrhea", "Twisted neck", "Paralysis"],
      prevention: ["Vaccination schedule", "Biosecurity", "Quarantine"],
      treatment: "No treatment. Prevention through vaccination is key."
    },
    {
      id: 2,
      name: "Infectious Bursal Disease (IBD)",
      symptoms: ["Depression", "Ruffled feathers", "White diarrhea", "Dehydration"],
      prevention: ["Vaccination", "Good hygiene", "Proper nutrition"],
      treatment: "Supportive care with electrolytes and vitamins."
    }
  ]
};

export const myPigs = [
  {
    id: "PIG001",
    breed: "Yorkshire",
    sex: "Female",
    birthDate: "2023-06-15",
    currentWeight: 120,
    vaccinations: [
      { date: "2023-07-15", vaccine: "CSF", nextDue: "2024-01-15" },
      { date: "2023-08-15", vaccine: "FMD", nextDue: "2024-02-15" }
    ],
    weightLogs: [
      { date: "2023-06-15", weight: 1.5 },
      { date: "2023-09-15", weight: 45 },
      { date: "2023-12-15", weight: 95 },
      { date: "2024-01-10", weight: 120 }
    ]
  },
  {
    id: "PIG002",
    breed: "Duroc",
    sex: "Male",
    birthDate: "2023-05-20",
    currentWeight: 135,
    vaccinations: [
      { date: "2023-06-20", vaccine: "CSF", nextDue: "2024-01-20" },
      { date: "2023-07-20", vaccine: "FMD", nextDue: "2024-01-20" }
    ],
    weightLogs: [
      { date: "2023-05-20", weight: 1.6 },
      { date: "2023-08-20", weight: 50 },
      { date: "2023-11-20", weight: 100 },
      { date: "2024-01-10", weight: 135 }
    ]
  }
];

export const myPoultryBatches = [
  {
    id: "BATCH001",
    breed: "Broiler",
    hatchDate: "2023-12-01",
    initialCount: 500,
    currentCount: 485,
    mortalityLog: [
      { date: "2023-12-05", count: 5, reason: "Weak chicks" },
      { date: "2023-12-15", count: 10, reason: "Coccidiosis" }
    ],
    vaccinations: [
      { date: "2023-12-01", vaccine: "Marek's", completed: true },
      { date: "2023-12-07", vaccine: "Newcastle Disease", completed: true },
      { date: "2023-12-14", vaccine: "IBD", completed: true }
    ],
    feedLog: [
      { date: "2024-01-10", amount: 150, type: "Starter" },
      { date: "2024-01-11", amount: 155, type: "Grower" }
    ]
  }
];

export const complianceChecklist = [
  { id: 1, task: "Clean water tanks", frequency: "Daily", category: "Water" },
  { id: 2, task: "Check feeders", frequency: "Daily", category: "Feed" },
  { id: 3, task: "Footbath at entry", frequency: "Daily", category: "Biosecurity" },
  { id: 4, task: "Temperature check", frequency: "Twice daily", category: "Environment" },
  { id: 5, task: "Remove dead animals", frequency: "Daily", category: "Health" },
  { id: 6, task: "Check ventilation", frequency: "Daily", category: "Environment" },
  { id: 7, task: "Disinfect equipment", frequency: "Weekly", category: "Biosecurity" },
  { id: 8, task: "Pest control check", frequency: "Weekly", category: "Biosecurity" }
];

export const forumPosts = [
  {
    id: 1,
    author: "Suresh Patel",
    timestamp: "2024-01-14T11:00:00",
    category: "disease",
    title: "My piglets have diarrhea - what should I do?",
    content: "5-week old piglets showing watery diarrhea since yesterday. Already isolated them. What treatment works best?",
    upvotes: 23,
    replies: [
      {
        author: "Dr. Amit (Veterinarian)",
        content: "Could be E. coli or Rotavirus. Provide ORS immediately. Start antibiotic therapy after consulting local vet. Keep them warm and hydrated.",
        timestamp: "2024-01-14T11:30:00"
      },
      {
        author: "Rajesh Kumar",
        content: "Had similar issue last month. Zinc oxide supplement helped. Also check feed quality.",
        timestamp: "2024-01-14T12:00:00"
      }
    ]
  },
  {
    id: 2,
    author: "Meena Devi",
    timestamp: "2024-01-13T16:00:00",
    category: "feed",
    title: "Best feed mix for broilers in week 3?",
    content: "What's your recommended protein percentage for 3-week old broilers? Current growth seems slow.",
    upvotes: 15,
    replies: [
      {
        author: "Poultry Expert",
        content: "21-22% protein is ideal for week 3. Check your feed ingredients. Add lysine supplement if needed.",
        timestamp: "2024-01-13T17:00:00"
      }
    ]
  }
];

export const translations = {
  en: {
    appName: "Jeevbandhu",
    home: "Home",
    myFarm: "My Farm",
    community: "Community",
    diseases: "Diseases",
    compliance: "Compliance",
    analytics: "Analytics",
    profile: "Profile",
    settings: "Settings",
    notifications: "Notifications"
  },
  hi: {
    appName: "जीवबंधु",
    home: "होम",
    myFarm: "मेरा फार्म",
    community: "समुदाय",
    diseases: "रोग",
    compliance: "अनुपालन",
    analytics: "विश्लेषण",
    profile: "प्रोफ़ाइल",
    settings: "सेटिंग्स",
    notifications: "सूचनाएं"
  },
  kn: {
    appName: "ಜೀವಬಂಧು",
    home: "ಮುಖಪುಟ",
    myFarm: "ನನ್ನ ಫಾರ್ಮ್",
    community: "ಸಮುದಾಯ",
    diseases: "ರೋಗಗಳು",
    compliance: "ಅನುಸರಣೆ",
    analytics: "ವಿಶ್ಲೇಷಣೆ",
    profile: "ಪ್ರೊಫೈಲ್",
    settings: "ಸೆಟ್ಟಿಂಗ್ಸ್",
    notifications: "ಅಧಿಸೂಚನೆಗಳು"
  }
};

// ... previous code ...

export const notifications = [
  {
    id: 1,
    type: "vaccination",
    message: "CSF vaccination due for PIG001 tomorrow",
    timestamp: "2024-01-14T08:00:00",
    read: false
  },
  {
    id: 2,
    type: "alert",
    message: "Disease outbreak reported 10km away - Increase biosecurity",
    timestamp: "2024-01-13T18:00:00",
    read: false
  },
  {
    id: 3,
    type: "community",
    message: "Rajesh Kumar replied to your post",
    timestamp: "2024-01-13T14:00:00",
    read: true
  }
];

export const analyticsData = {
  pigGrowth: [
    { month: "Jan", avgWeight: 45 },
    { month: "Feb", avgWeight: 60 },
    { month: "Mar", avgWeight: 78 },
    { month: "Apr", avgWeight: 95 },
    { month: "May", avgWeight: 110 },
    { month: "Jun", avgWeight: 125 }
  ],
  poultryMortality: [
    { week: "Week 1", mortality: 2 },
    { week: "Week 2", mortality: 1.5 },
    { week: "Week 3", mortality: 1 },
    { week: "Week 4", mortality: 0.8 },
    { week: "Week 5", mortality: 0.5 },
    { week: "Week 6", mortality: 0.3 }
  ],
  feedEfficiency: [
    { month: "Jan", fcr: 2.8 },
    { month: "Feb", fcr: 2.6 },
    { month: "Mar", fcr: 2.5 },
    { month: "Apr", fcr: 2.4 },
    { month: "May", fcr: 2.3 },
    { month: "Jun", fcr: 2.2 }
  ]
};

export const userProfile = {
  name: "Farmer Demo",
  location: "Karnataka, India",
  farmType: ["pig", "poultry"],
  joinDate: "2023-01-15",
  following: 45,
  followers: 38,
  posts: 12,
  badges: ["Early Adopter", "Disease Prevention Champion", "Community Helper"]
};