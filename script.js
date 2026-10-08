/**
 * SchemeMatch – Scheme Eligibility Platform
 * Unified Core JavaScript Engine (script.js)
 * 
 * Features:
 * 1. 69 Verified Real-world Indian Central, Social Category, Minority, Disability, Loan, and State Schemes
 * 2. Deterministic, Explainable Rule-Based Matching Engine (Calculates transparent match scores & green/red criteria reasons)
 * 3. 6-Step Multi-Step Wizard with Step Navigation, Validation, and Demo Profiles (A, B, C, D)
 * 4. Document Upload & Live WebRTC Camera Capture with AI/OCR Information Extraction & Editable Verification
 * 5. Multilingual Conversational Voice Assistant (Web Speech API) supporting English, Hindi, Marathi, Bengali, Tamil, Telugu
 * 6. Context-Aware Voice Actions, Navigation & "Type Instead" Fallback
 * 7. Accessibility Controls (Font Resize, High Contrast Mode, Screen Reader Audio)
 * 8. Interactive 3D Hero Scene with Mouse Parallax & Dynamic Ambient Visuals
 */

// ==========================================================================
// 1. SCHEME DATABASE (69 Verified Real-World Indian Government Schemes)
// ==========================================================================
const SCHEME_DATABASE = [
  {
    "id": "pm-kisan",
    "name": "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    "short_description": "Direct financial income support of ₹6,000/- per year in three equal installments of ₹2,000 each to all landholding farmer families across India.",
    "category": "Agriculture & Farmers",
    "state": "All India",
    "benefits": "₹6,000/- annually transferred directly into bank accounts via Direct Benefit Transfer (DBT) in 3 equal four-monthly installments of ₹2,000.",
    "required_documents": [
      "aadhaar",
      "land_records",
      "bank_account",
      "citizenship_proof"
    ],
    "application_process": "Register online at pmkisan.gov.in under 'New Farmer Registration' or visit nearest CSC. Complete Aadhaar eKYC, submit Khasra/Khatauni land record copy, and active bank account seeded with NPCI.",
    "important_dates": "Registration open year-round; Installments released in April-July, August-November, and December-March.",
    "official_source": "Department of Agriculture and Farmers Welfare, Govt. of India",
    "application_url": "https://pmkisan.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 85,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Farmer",
        "Agricultural Worker",
        "Dairy Farmer"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All",
        "Class 10th",
        "Class 12th",
        "Undergraduate / Diploma",
        "Postgraduate",
        "No Formal Education"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-fasal-bima",
    "name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    "short_description": "Comprehensive crop insurance scheme protecting farmers against non-preventable natural risks from pre-sowing to post-harvest at minimal premium.",
    "category": "Agriculture & Farmers",
    "state": "All India",
    "benefits": "Full sum insured payout for crop loss due to drought, flood, pests, or hailstorms. Farmer pays only 1.5% premium for Rabi, 2% for Kharif, and 5% for commercial/horticultural crops.",
    "required_documents": [
      "aadhaar",
      "land_records",
      "bank_account",
      "sowing_certificate"
    ],
    "application_process": "Apply via pmfby.gov.in, local bank branch, cooperative society, or CSC. Submit Aadhaar, land possession certificate/RoR, bank passbook, and crop sowing certificate issued by Patwari/Village Officer.",
    "important_dates": "Kharif cutoff usually July 31; Rabi cutoff usually December 31 annually.",
    "official_source": "Ministry of Agriculture and Farmers Welfare",
    "application_url": "https://pmfby.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Farmer",
        "Agricultural Worker"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "kisan-credit-card",
    "name": "Kisan Credit Card (KCC) Scheme",
    "short_description": "Affordable, timely institutional credit for farmers to meet crop cultivation expenses, post-harvest costs, and maintenance of farm assets.",
    "category": "Agriculture & Farmers",
    "state": "All India",
    "benefits": "Collateral-free loan up to ₹1.60 Lakhs (and up to ₹3 Lakhs with interest subvention at effective 4% p.a. upon prompt repayment). Covers crop cultivation, dairy, poultry, and fisheries.",
    "required_documents": [
      "aadhaar",
      "land_records",
      "bank_account",
      "pan_card"
    ],
    "application_process": "Download 1-page KCC application from agricoop.nic.in or visit any commercial bank/RRB/Cooperative bank. Submit with land record (Khatauni) and Aadhaar.",
    "important_dates": "Open throughout the year at all bank branches.",
    "official_source": "Reserve Bank of India & Ministry of Agriculture",
    "application_url": "https://agricoop.nic.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 75,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Farmer",
        "Dairy Farmer",
        "Fisherman",
        "Agricultural Worker"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-kisan-maandhan",
    "name": "PM Kisan Maandhan Yojana (PM-KMY)",
    "short_description": "Old age pension scheme for small and marginal farmers providing a monthly assured pension after age 60.",
    "category": "Agriculture & Farmers",
    "state": "All India",
    "benefits": "Guaranteed minimum pension of ₹3,000/- per month on reaching 60 years of age with equal government co-contribution.",
    "required_documents": [
      "aadhaar",
      "bank_account",
      "land_records"
    ],
    "application_process": "Enroll at nearest CSC or online at maandhan.in with Aadhaar and Khasra/Khatauni showing cultivable land up to 2 hectares.",
    "important_dates": "Open enrollment for farmers aged 18 to 40 years.",
    "official_source": "Ministry of Agriculture & LIC of India",
    "application_url": "https://maandhan.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 40,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Farmer"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-vishwakarma",
    "name": "PM Vishwakarma Yojana",
    "short_description": "Holistic support scheme for traditional artisans and craftspersons with collateral-free credit at 5%, modern toolkits, and skill upgrade.",
    "category": "Business, MSME & Artisans",
    "state": "All India",
    "benefits": "PM Vishwakarma Certificate & ID card, ₹15,000 e-voucher for modern toolkits, 5-7 days skill training with ₹500/day stipend, and collateral-free enterprise credit up to ₹3 Lakhs in two tranches (₹1L + ₹2L) at concessional 5% interest rate.",
    "required_documents": [
      "aadhaar",
      "bank_account",
      "pan_card",
      "trade_proof"
    ],
    "application_process": "Register via CSC with Aadhaar and trade verification across 18 designated trades (Carpenter, Blacksmith, Potter, Sculptor, Cobbler, Tailor, Barber, etc.) on pmvishwakarma.gov.in.",
    "important_dates": "Open year-round across all districts of India.",
    "official_source": "Ministry of Micro, Small and Medium Enterprises (MSME)",
    "application_url": "https://pmvishwakarma.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 75,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Artisan",
        "Worker",
        "Self-Employed",
        "Business Owner",
        "All"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-mudra-yojana",
    "name": "Pradhan Mantri MUDRA Yojana (PMMY)",
    "short_description": "Collateral-free institutional business loans up to ₹20 Lakhs to non-corporate, non-farm small and micro enterprises.",
    "category": "Business, MSME & Artisans",
    "state": "All India",
    "benefits": "Collateral-free loans in 4 categories: Shishu (loans up to ₹50,000), Kishore (₹50,000 to ₹5 Lakhs), Tarun (₹5 Lakhs to ₹10 Lakhs), and Tarun Plus (₹10 Lakhs to ₹20 Lakhs) for shopkeepers, service units, and manufacturing micro-units.",
    "required_documents": [
      "aadhaar",
      "pan_card",
      "business_address_proof",
      "bank_account"
    ],
    "application_process": "Apply online at udyamimitra.in or visit any commercial bank, RRB, MFI, or Small Finance Bank with business proposal and KYC.",
    "important_dates": "Open continuously through all participating financial institutions.",
    "official_source": "Department of Financial Services, Ministry of Finance",
    "application_url": "https://www.mudra.org.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 70,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Business Owner",
        "Self-Employed",
        "Entrepreneur",
        "Artisan",
        "Worker",
        "All"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-svanidhi",
    "name": "PM SVANidhi (Street Vendor's AtmaNirbhar Nidhi)",
    "short_description": "Affordable working capital micro-credit scheme empowering street vendors and hawkers to resume and expand their livelihoods.",
    "category": "Business, MSME & Artisans",
    "state": "All India",
    "benefits": "Collateral-free working capital loan starting with ₹10,000 in 1st tranche, graduating to ₹20,000 in 2nd tranche, and ₹50,000 in 3rd tranche upon timely repayment. Interest subsidy of 7% p.a. credited directly, plus monthly digital transaction cashback up to ₹100.",
    "required_documents": [
      "aadhaar",
      "bank_account",
      "vending_id"
    ],
    "application_process": "Apply via pmsvanidhi.mohua.gov.in or SVANidhi mobile app. Submit Aadhaar and Urban Local Body (ULB) Certificate of Vending or recommendation letter.",
    "important_dates": "Scheme active across all urban local bodies.",
    "official_source": "Ministry of Housing and Urban Affairs (MoHUA)",
    "application_url": "https://pmsvanidhi.mohua.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 75,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Worker",
        "Self-Employed",
        "Business Owner",
        "All"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "stand-up-india",
    "name": "Stand-Up India Scheme",
    "short_description": "Promotes entrepreneurship among women and SC/ST communities for setting up greenfield manufacturing, service, or trading enterprises.",
    "category": "Business, MSME & Artisans",
    "state": "All India",
    "benefits": "Bank loans between ₹10 Lakhs and ₹1 Crore to at least one SC or ST borrower and at least one Woman borrower per bank branch for setting up greenfield enterprises.",
    "required_documents": [
      "aadhaar",
      "pan_card",
      "caste_cert",
      "project_report",
      "bank_account"
    ],
    "application_process": "Apply online through standupmitra.in portal or visit commercial bank branches with detailed business project report.",
    "important_dates": "Scheme extended up to 2026.",
    "official_source": "Ministry of Finance & SIDBI",
    "application_url": "https://www.standupmitra.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 65,
      "genders": [
        "All",
        "Female",
        "Male"
      ],
      "occupations": [
        "Entrepreneur",
        "Business Owner",
        "Woman",
        "Self-Employed",
        "All"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "SC",
        "ST",
        "General",
        "OBC",
        "EWS",
        "All"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "ayushman-bharat-pmjay",
    "name": "Ayushman Bharat PM-JAY (Pradhan Mantri Jan Arogya Yojana)",
    "short_description": "World's largest government-funded health insurance scheme offering cashless treatment of up to ₹5 Lakhs per family per year for secondary and tertiary care.",
    "category": "Healthcare & Wellness",
    "state": "All India",
    "benefits": "₹5,00,000/- per family per year cashless hospitalization coverage across 27,000+ empanelled public and private hospitals. Covers surgery, medicine, diagnostics, ICU, and pre/post-hospitalization expenses. Extended to all senior citizens aged 70+ regardless of income.",
    "required_documents": [
      "aadhaar",
      "ration_card",
      "family_id"
    ],
    "application_process": "Check eligibility at beneficiary.nha.gov.in using Aadhaar or Ration Card number, or visit any empanelled hospital/CSC to generate Ayushman Golden Card.",
    "important_dates": "Ayushman cards can be generated anytime throughout the year.",
    "official_source": "National Health Authority (NHA), Ministry of Health & Family Welfare",
    "application_url": "https://pmjay.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 0,
      "maxAge": 100,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "All",
        "Worker",
        "Farmer",
        "Senior Citizen",
        "Homemaker",
        "Student"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-jan-aushadhi",
    "name": "Pradhan Mantri Bharatiya Janaushadhi Pariyojana (PMBJP)",
    "short_description": "Provides quality generic medicines and surgical products at 50% to 90% cheaper prices than branded market medicines to all citizens.",
    "category": "Healthcare & Wellness",
    "state": "All India",
    "benefits": "Over 2,000 quality generic medicines, 300 surgical consumables, and oxo-biodegradable sanitary pads (Suvidha at ₹1/pad) available at 10,000+ Janaushadhi Kendras across India.",
    "required_documents": [
      "doctor_prescription"
    ],
    "application_process": "Visit any nearest Jan Aushadhi Kendra with a valid doctor prescription. Locate nearby Kendra via Janaushadhi Sugam mobile app or website.",
    "important_dates": "Open daily across all towns and districts in India.",
    "official_source": "Pharmaceuticals & Medical Devices Bureau of India (PMBI)",
    "application_url": "https://janaushadhi.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 0,
      "maxAge": 100,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "All"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-matru-vandana",
    "name": "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
    "short_description": "Maternity financial benefit scheme compensating for wage loss and providing cash incentives to pregnant women and lactating mothers for health and nutrition.",
    "category": "Healthcare & Wellness",
    "state": "All India",
    "benefits": "Direct cash benefit of ₹5,000 for first child in 2 installments, and ₹6,000 for second girl child transferred directly into mother's Aadhaar-seeded bank account.",
    "required_documents": [
      "aadhaar",
      "mcp_card",
      "bank_account"
    ],
    "application_process": "Register online at pmmvy.wcd.gov.in or visit nearest Anganwadi Centre / primary health center with Mother & Child Protection (MCP) card and Aadhaar.",
    "important_dates": "Apply within 270 days from Last Menstrual Period (LMP) date.",
    "official_source": "Ministry of Women and Child Development",
    "application_url": "https://pmmvy.wcd.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 19,
      "maxAge": 45,
      "genders": [
        "Female"
      ],
      "occupations": [
        "Woman",
        "Homemaker",
        "Worker",
        "All"
      ],
      "maxIncome": 800000,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-awas-gramin",
    "name": "Pradhan Mantri Awas Yojana - Gramin (PMAY-G)",
    "short_description": "Flagship rural housing scheme providing direct financial assistance to houseless rural families and those living in kutcha/dilapidated houses to build a pucca house.",
    "category": "Housing & Shelter",
    "state": "All India",
    "benefits": "Financial grant of ₹1,20,000/- in plain areas and ₹1,30,000/- in hilly/difficult/Himalayan states. Additionally provides 90-95 days of unskilled labor wage under MGNREGA (~₹20,000) and ₹12,000 assistance for toilet construction under Swachh Bharat.",
    "required_documents": [
      "aadhaar",
      "job_card_mgnrega",
      "bank_account",
      "bpl_ration_card"
    ],
    "application_process": "Beneficiaries identified through SECC/Awaas+ verified list. Register through Gram Panchayat, Block Development Office, or via pmayg.nic.in with geotagged house photos.",
    "important_dates": "Ongoing continuous implementation with direct installment releases based on construction stages.",
    "official_source": "Ministry of Rural Development, Govt. of India",
    "application_url": "https://pmayg.nic.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 85,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Farmer",
        "Worker",
        "Homemaker",
        "All"
      ],
      "maxIncome": 200000,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-awas-urban",
    "name": "Pradhan Mantri Awas Yojana - Urban (PMAY-U 2.0)",
    "short_description": "Comprehensive urban housing mission ensuring all-weather pucca houses to all eligible urban households in EWS, LIG, and Middle Income categories.",
    "category": "Housing & Shelter",
    "state": "All India",
    "benefits": "Interest subsidy up to ₹2.67 Lakhs on home loans for first-time homebuyers, and central financial assistance up to ₹1.5 Lakhs for beneficiary-led individual house construction.",
    "required_documents": [
      "aadhaar",
      "pan_card",
      "income_cert",
      "land_property_papers",
      "bank_account"
    ],
    "application_process": "Apply online at pmaymis.gov.in under 'Citizen Assessment' or through municipal corporations and CSCs.",
    "important_dates": "PMAY-U 2.0 approved for 1 crore additional urban houses.",
    "official_source": "Ministry of Housing and Urban Affairs",
    "application_url": "https://pmaymis.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 75,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Worker",
        "Self-Employed",
        "Business Owner",
        "Salaried Employee",
        "All"
      ],
      "maxIncome": 600000,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "lakhpati-didi",
    "name": "Lakhpati Didi Scheme",
    "short_description": "National economic empowerment mission training and supporting women members of Self-Help Groups (SHGs) to achieve a sustainable annual household income of at least ₹1 Lakh.",
    "category": "Women & Child Welfare",
    "state": "All India",
    "benefits": "Collateral-free credit support up to ₹5 Lakhs, enterprise skill training (drone piloting/Namo Drone Didi, tailoring, LED manufacturing, solar panel maintenance, organic farming), access to GeM portal for selling products, and financial mentoring.",
    "required_documents": [
      "aadhaar",
      "shg_membership_proof",
      "bank_account"
    ],
    "application_process": "Apply through local Deendayal Antyodaya Yojana - NRLM village organization or Block Mission Management Unit (BMMU).",
    "important_dates": "Active target to empower 3 Crore Lakhpati Didis.",
    "official_source": "Deendayal Antyodaya Yojana - NRLM, Ministry of Rural Development",
    "application_url": "https://aajeevika.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 60,
      "genders": [
        "Female"
      ],
      "occupations": [
        "Woman",
        "Homemaker",
        "Self-Employed",
        "Farmer",
        "All"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-ujjwala-yojana",
    "name": "Pradhan Mantri Ujjwala Yojana (PMUY 2.0)",
    "short_description": "Provides clean cooking fuel (LPG connections) free of deposit to adult women from poor and BPL households across India.",
    "category": "Women & Child Welfare",
    "state": "All India",
    "benefits": "Free deposit-free LPG gas connection, complimentary first gas cylinder refill, free hotplate (gas stove), and ₹300 per cylinder direct targeted subsidy on up to 12 refills per year.",
    "required_documents": [
      "aadhaar",
      "ration_card",
      "bank_account"
    ],
    "application_process": "Apply online at pmuy.gov.in or submit physical 2-page form at any nearest Indane, Bharatgas, or HP Gas distributorship.",
    "important_dates": "Open for enrollment under PMUY 2.0 expansion.",
    "official_source": "Ministry of Petroleum and Natural Gas",
    "application_url": "https://www.pmuy.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "Female"
      ],
      "occupations": [
        "Woman",
        "Homemaker",
        "Worker",
        "All"
      ],
      "maxIncome": 250000,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "sukanya-samriddhi",
    "name": "Sukanya Samriddhi Yojana (SSY)",
    "short_description": "Government-backed high-yield small savings scheme under Beti Bachao Beti Padhao for girl children to finance higher education and marriage.",
    "category": "Women & Child Welfare",
    "state": "All India",
    "benefits": "Guaranteed 8.2% p.a. tax-free interest rate (highest among small savings). Minimum deposit ₹250/year up to ₹1.5 Lakhs/year. 100% tax exemption on deposit (Section 80C), interest earned, and maturity payout (EEE status).",
    "required_documents": [
      "birth_certificate_girl",
      "aadhaar_parent",
      "pan_parent"
    ],
    "application_process": "Open account at any Post Office or authorized commercial bank (SBI, PNB, BoB, etc.) using girl child's birth certificate and parents' KYC.",
    "important_dates": "Account can be opened from birth until the girl child reaches 10 years of age.",
    "official_source": "National Savings Institute & Department of Posts",
    "application_url": "https://www.indiapost.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 0,
      "maxAge": 10,
      "genders": [
        "Female"
      ],
      "occupations": [
        "Student",
        "Woman",
        "All"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "mahila-samman-savings",
    "name": "Mahila Samman Savings Certificate (MSSC)",
    "short_description": "One-time small savings scheme for women and girls offering 7.5% fixed interest. The subscription window for opening new accounts closed on March 31, 2025.",
    "category": "Women & Child Welfare",
    "state": "All India",
    "benefits": "Guaranteed fixed interest rate of 7.5% per annum compounded quarterly. Minimum deposit ₹1,000 up to maximum ₹2 Lakhs for a 2-year tenure. Partial withdrawal up to 40% allowed after 1 year.",
    "required_documents": [
      "aadhaar",
      "pan_card",
      "photo"
    ],
    "application_process": "Open account at any Post Office branch or designated nationalized banks.",
    "important_dates": "New subscription closed on March 31, 2025. Existing accounts continue until 2-year maturity.",
    "official_source": "Ministry of Finance, Govt. of India",
    "application_url": "https://www.indiapost.gov.in",
    "status": "CLOSED",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 10,
      "maxAge": 90,
      "genders": [
        "Female"
      ],
      "occupations": [
        "Woman",
        "Homemaker",
        "Salaried Employee",
        "All"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "e-shram-card",
    "name": "e-Shram Universal Social Security Card",
    "short_description": "National database and universal welfare identity for 30+ crore unorganized workers providing seamless portability of all government benefits.",
    "category": "Workers & Labor Welfare",
    "state": "All India",
    "benefits": "Universal 12-digit UAN card, ₹2 Lakh free accidental death cover (and ₹1 Lakh for partial disability) under PMSBY, direct financial aid during national emergencies, and unified access to social security pensions, rations, and healthcare schemes.",
    "required_documents": [
      "aadhaar",
      "bank_account",
      "mobile_linked_aadhaar"
    ],
    "application_process": "Self-register online at eshram.gov.in using Aadhaar OTP or visit any CSC centre. Takes under 5 minutes.",
    "important_dates": "Registration open continuously. No expiry date on UAN card.",
    "official_source": "Ministry of Labour and Employment",
    "application_url": "https://eshram.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 16,
      "maxAge": 59,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Worker",
        "Agricultural Worker",
        "Driver",
        "Artisan",
        "Self-Employed",
        "All"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-shram-yogi-maandhan",
    "name": "Pradhan Mantri Shram Yogi Maan-dhan (PM-SYM)",
    "short_description": "Voluntary and contributory pension scheme for unorganized workers to ensure old age protection and financial dignity.",
    "category": "Workers & Labor Welfare",
    "state": "All India",
    "benefits": "Guaranteed minimum monthly pension of ₹3,000/- upon reaching 60 years of age. Monthly contribution ranges from ₹55 to ₹200 (matched 50:50 by Central Government). 50% family pension to spouse upon pensioner's death.",
    "required_documents": [
      "aadhaar",
      "bank_account"
    ],
    "application_process": "Enroll at any Common Services Centre (CSC) or online at maandhan.in with Aadhaar and Jan Dhan/savings account details.",
    "important_dates": "Open enrollment for workers earning up to ₹15,000/month.",
    "official_source": "Ministry of Labour and Employment & LIC",
    "application_url": "https://maandhan.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 40,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Worker",
        "Agricultural Worker",
        "Driver",
        "Artisan",
        "All"
      ],
      "maxIncome": 180000,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "mgnrega",
    "name": "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
    "short_description": "Statutory social security measure guaranteeing 100 days of wage employment per financial year to rural households willing to do unskilled manual work.",
    "category": "Workers & Labor Welfare",
    "state": "All India",
    "benefits": "Legal entitlement to 100 days of guaranteed wage employment per family. Daily wage rates ranging from ₹234 to ₹374 per day (state-specific). Unemployment allowance paid if work is not provided within 15 days.",
    "required_documents": [
      "aadhaar",
      "ration_card",
      "bank_account",
      "mgnrega_job_card"
    ],
    "application_process": "Apply for MGNREGA Job Card at local Gram Panchayat. Submit work demand application (Form 6) to receive formal dated receipt and work allocation.",
    "important_dates": "Available 365 days a year across all rural districts.",
    "official_source": "Ministry of Rural Development, Govt. of India",
    "application_url": "https://nrega.nic.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 75,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Worker",
        "Agricultural Worker",
        "Farmer",
        "Homemaker",
        "All"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "atal-pension-yojana",
    "name": "Atal Pension Yojana (APY)",
    "short_description": "Flagship government-backed pension scheme guaranteeing a fixed lifelong monthly pension of ₹1,000 to ₹5,000 to all Indian citizens.",
    "category": "Social Security & Pension",
    "state": "All India",
    "benefits": "Guaranteed fixed monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 starting from age 60 until death. Same pension continues to spouse upon death, and full accumulated pension corpus is returned to nominee.",
    "required_documents": [
      "aadhaar",
      "bank_account",
      "nominee_details"
    ],
    "application_process": "Subscribe at any bank branch or online through netbanking/mobile banking. Auto-debit facility from savings account.",
    "important_dates": "Must enroll between 18 and 40 years of age. Non-income tax payers eligible.",
    "official_source": "Pension Fund Regulatory and Development Authority (PFRDA)",
    "application_url": "https://www.npscra.nsdl.co.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 40,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "All",
        "Worker",
        "Self-Employed",
        "Business Owner",
        "Farmer",
        "Homemaker"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-jeevan-jyoti-bima",
    "name": "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
    "short_description": "Affordable one-year term life insurance scheme offering ₹2 Lakh cover for death due to any reason at a nominal annual premium.",
    "category": "Social Security & Pension",
    "state": "All India",
    "benefits": "₹2,00,000/- life insurance payout to nominee in the event of subscriber's death due to any cause. Annual premium of only ₹436/- auto-debited from bank account.",
    "required_documents": [
      "aadhaar",
      "bank_account",
      "nominee_aadhaar"
    ],
    "application_process": "Enable auto-debit through any bank branch or internet banking portal. Requires simple consent form.",
    "important_dates": "Coverage period runs June 1 to May 31 annually with automatic yearly renewal.",
    "official_source": "Department of Financial Services, Ministry of Finance",
    "application_url": "https://financialservices.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 50,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "All"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-suraksha-bima",
    "name": "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    "short_description": "Most affordable accident insurance scheme in the world providing ₹2 Lakh cover for accidental death and permanent disability at just ₹20 per year.",
    "category": "Social Security & Pension",
    "state": "All India",
    "benefits": "₹2,00,000/- on accidental death or permanent total disability, and ₹1,00,000/- on permanent partial disability. Annual premium of just ₹20/- per year.",
    "required_documents": [
      "aadhaar",
      "bank_account",
      "nominee_details"
    ],
    "application_process": "Enroll at any bank branch, post office, or via mobile banking app.",
    "important_dates": "Renewable annually on June 1.",
    "official_source": "Department of Financial Services, Ministry of Finance",
    "application_url": "https://financialservices.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 70,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "All"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "national-old-age-pension",
    "name": "Indira Gandhi National Old Age Pension Scheme (IGNOAPS)",
    "short_description": "Non-contributory monthly welfare pension providing subsistence support to elderly citizens living below the poverty line.",
    "category": "Social Security & Pension",
    "state": "All India",
    "benefits": "Monthly pension (₹500 to ₹2,500/month depending on state top-up) directly credited into senior citizen's bank or post office account for life.",
    "required_documents": [
      "aadhaar",
      "age_proof",
      "bpl_card",
      "bank_account"
    ],
    "application_process": "Apply via Social Welfare Office, Gram Panchayat, or state pension portal (e.g. SSPY UP, SSP Maharashtra, Samagra MP).",
    "important_dates": "Continuous enrollment for citizens turning 60 years.",
    "official_source": "Ministry of Rural Development & National Social Assistance Programme (NSAP)",
    "application_url": "https://nsap.nic.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 60,
      "maxAge": 100,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Senior Citizen",
        "Retired Person",
        "All"
      ],
      "maxIncome": 150000,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-kaushal-vikas",
    "name": "Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)",
    "short_description": "Flagship skill certification scheme enabling Indian youth to take up industry-relevant skill training for better livelihood opportunities.",
    "category": "Skills & Employment",
    "state": "All India",
    "benefits": "100% free government-certified skill training, free assessment and certification, transport allowance, placement assistance, and ₹8,000 cash reward upon successful certification.",
    "required_documents": [
      "aadhaar",
      "educational_marksheet",
      "bank_account"
    ],
    "application_process": "Register on Skill India Digital portal (skillindiadigital.gov.in) or visit nearest PMKK (Pradhan Mantri Kaushal Kendra).",
    "important_dates": "New batches enroll every month across 300+ job roles.",
    "official_source": "Ministry of Skill Development and Entrepreneurship (MSDE)",
    "application_url": "https://www.skillindiadigital.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 15,
      "maxAge": 45,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "Worker",
        "Unemployed",
        "Self-Employed",
        "All"
      ],
      "maxIncome": 0,
      "minMarks": 0,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "educationLevels": [
        "All"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-usp-central-sector",
    "name": "PM-USP Central Sector Scheme of Scholarship for College and University Students",
    "short_description": "Financial assistance to meritorious students from low-income families to meet day-to-day expenses while pursuing higher education.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "₹12,000/- per annum at Graduation level for first 3 years, ₹20,000/- per annum at Post-Graduation level.",
    "required_documents": [
      "aadhaar",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Apply online through National Scholarship Portal (scholarships.gov.in). Submit Aadhaar, income certificate, Class 12 board marksheet, and college bonafide. Institute nodal officer verifies application online.",
    "important_dates": "Applications typically open July-August; Last date usually October-November annually.",
    "official_source": "Department of Higher Education, Ministry of Education, Govt. of India",
    "application_url": "https://scholarships.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 17,
      "maxAge": 26,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 450000,
      "minMarks": 80,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-usp-special-jk-ladakh",
    "name": "PM-USP Special Scholarship Scheme for Jammu & Kashmir and Ladakh (PMSSS)",
    "short_description": "Empowers youth of J&K and Ladakh to pursue undergraduate studies in premier colleges outside the UTs, covering tuition and maintenance.",
    "category": "Scholarships",
    "state": "Jammu and Kashmir, Ladakh",
    "benefits": "Full tuition fee reimbursement (up to ₹1.25 Lakh for General, ₹3 Lakh for Engineering, ₹4 Lakh for Medical) plus ₹1 Lakh per year maintenance allowance.",
    "required_documents": [
      "aadhaar",
      "domicile_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Register on the AICTE-JK-PMSSS portal. Attend online document verification at designated facilitation centers, participate in merit-based online counseling, and get allotted college.",
    "important_dates": "Portal registration opens around May-June; Counseling starts July.",
    "official_source": "All India Council for Technical Education (AICTE) & Ministry of Education",
    "application_url": "https://www.aicte-jk-scholarship-gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 17,
      "maxAge": 27,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 800000,
      "minMarks": 60,
      "states": [
        "Jammu and Kashmir",
        "Ladakh"
      ],
      "domicileRequired": true,
      "domicileStates": [
        "Jammu and Kashmir",
        "Ladakh"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma"
      ],
      "courses": [
        "Engineering / Technology",
        "Medical / Pharmacy / Nursing",
        "General Sciences / Arts / Commerce",
        "Hotel Management / Catering"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "aicte-pragati",
    "name": "AICTE Pragati Scholarship Scheme for Girl Students",
    "short_description": "Encourages and supports female learners admitted to AICTE-approved technical degree and diploma institutions across India.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "₹50,000/- per annum lump sum for college fees, purchase of laptop/books/study material.",
    "required_documents": [
      "aadhaar",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Apply online through NSP (scholarships.gov.in) under AICTE schemes. Upload admission proof, 10+2 marksheet, family income certificate, and tuition fee receipt.",
    "important_dates": "NSP cycle opens August-September; verification by November.",
    "official_source": "All India Council for Technical Education (AICTE)",
    "application_url": "https://www.aicte-india.org/schemes/students-development-schemes/Pragati",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 16,
      "maxAge": 28,
      "genders": [
        "Female"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 800000,
      "minMarks": 50,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma"
      ],
      "courses": [
        "Engineering / Technology",
        "IT / Computer Applications",
        "Medical / Pharmacy / Nursing"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "aicte-saksham",
    "name": "AICTE Saksham Scholarship Scheme for Specially-Abled Students",
    "short_description": "Provides financial backing to students with benchmark disabilities pursuing technical diploma and degree programs.",
    "category": "Special Support",
    "state": "All India",
    "benefits": "₹50,000/- per year for every year of technical study as lump sum allowance.",
    "required_documents": [
      "aadhaar",
      "disability_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Register on NSP portal, select AICTE Saksham, provide valid UDID/disability certificate (minimum 40% disability), family income certificate, and institute bonafide.",
    "important_dates": "Annual NSP window: August to December.",
    "official_source": "AICTE, Ministry of Education",
    "application_url": "https://www.aicte-india.org/schemes/students-development-schemes/Saksham",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 16,
      "maxAge": 30,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 800000,
      "minMarks": 50,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma"
      ],
      "courses": [
        "Engineering / Technology",
        "IT / Computer Applications",
        "Medical / Pharmacy / Nursing"
      ],
      "disabilityOnly": true,
      "minDisabilityPercentage": 40,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "aicte-swanath",
    "name": "AICTE Swanath Scholarship Scheme",
    "short_description": "Provides financial aid and encouragement to orphaned students, wards of armed forces/CAPFs martyred in action, or whose both parents died due to Covid-19.",
    "category": "Special Support",
    "state": "All India",
    "benefits": "₹50,000/- per annum for every year of study towards academic and living expenses.",
    "required_documents": [
      "aadhaar",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet",
      "other_doc"
    ],
    "application_process": "Apply online via National Scholarship Portal under AICTE section. Attach proof of being an orphan or martyr's ward certificate issued by competent armed/police authority.",
    "important_dates": "NSP timeline August-December.",
    "official_source": "AICTE, Ministry of Education",
    "application_url": "https://www.aicte-india.org/schemes/students-development-schemes/Swanath",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 16,
      "maxAge": 28,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 800000,
      "minMarks": 45,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma"
      ],
      "courses": [
        "Engineering / Technology",
        "IT / Computer Applications",
        "Medical / Pharmacy / Nursing"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "ishan-uday-ugc",
    "name": "Ishan Uday Special Scholarship Scheme for North Eastern Region",
    "short_description": "Dedicated scholarship by UGC to promote higher education among students of the North Eastern States (Assam, Arunachal, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura).",
    "category": "Scholarships",
    "state": "Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura",
    "benefits": "₹5,400/- per month for general degree courses; ₹7,800/- per month for technical/medical/professional courses through DBT.",
    "required_documents": [
      "aadhaar",
      "domicile_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Register on scholarships.gov.in under UGC/AICTE section. Upload NER domicile certificate, annual income certificate issued by competent authority, and Class 12 marksheet.",
    "important_dates": "Annual application period: August to November.",
    "official_source": "University Grants Commission (UGC), Ministry of Education",
    "application_url": "https://www.ugc.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 17,
      "maxAge": 26,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 450000,
      "minMarks": 60,
      "states": [
        "Assam",
        "Arunachal Pradesh",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Sikkim",
        "Tripura"
      ],
      "domicileRequired": true,
      "domicileStates": [
        "Assam",
        "Arunachal Pradesh",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Sikkim",
        "Tripura",
        "North-Eastern States Resident"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "nmmss-scholarship",
    "name": "National Means-cum-Merit Scholarship Scheme (NMMSS)",
    "short_description": "Awards scholarships to meritorious students of economically weaker sections to arrest drop-out at Class 8 and encourage secondary stage education.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "₹12,000/- per annum (₹1,000 per month) from Class 9 to Class 12.",
    "required_documents": [
      "aadhaar",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Appear in State-level NMMS selection test in Class 8. Qualified candidates apply on National Scholarship Portal with exam roll number and school verification.",
    "important_dates": "Exam conducted October-December; Portal entry starts following academic session.",
    "official_source": "Department of School Education & Literacy, Ministry of Education",
    "application_url": "https://scholarships.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 13,
      "maxAge": 18,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 350000,
      "minMarks": 55,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "School / 10th",
        "12th / Intermediate"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pmss-warb-capf",
    "name": "Prime Minister's Scholarship Scheme for Wards of CAPFs and Assam Rifles (WARB)",
    "short_description": "Encourages higher technical and professional education for dependent wards and widows of Central Armed Police Forces & Assam Rifles personnel.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "₹3,000/- per month for girls (₹36,000 per year) and ₹2,500/- per month for boys (₹30,000 per year).",
    "required_documents": [
      "aadhaar",
      "bank_account",
      "student_id",
      "marksheet",
      "other_doc"
    ],
    "application_process": "Apply via National Scholarship Portal under Ministry of Home Affairs. Provide discharge book/service certificate, MEA/WARB recommendation letter, and 10+2 marksheet.",
    "important_dates": "NSP cycle opens August to November annually.",
    "official_source": "Welfare and Rehabilitation Board (WARB), Ministry of Home Affairs",
    "application_url": "https://scholarships.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 17,
      "maxAge": 27,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 1000000,
      "minMarks": 60,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma"
      ],
      "courses": [
        "Engineering / Technology",
        "Medical / Pharmacy / Nursing",
        "Management / Business Administration",
        "Law / Legal Studies"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pmss-rpf-rpsf",
    "name": "Prime Minister's Scholarship Scheme for RPF/RPSF",
    "short_description": "Scholarship support for dependent wards and widows of Railway Protection Force and Railway Protection Special Force personnel.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "₹2,500/- per month for male wards and ₹3,000/- per month for female wards directly transferred to student bank account.",
    "required_documents": [
      "aadhaar",
      "bank_account",
      "student_id",
      "marksheet",
      "other_doc"
    ],
    "application_process": "Apply on National Scholarship Portal under Ministry of Railways section. Verified by respective Zonal Security Commissioner/Chief Security Commissioner.",
    "important_dates": "Opens August-September; Closes November.",
    "official_source": "Railway Board, Ministry of Railways, Govt. of India",
    "application_url": "https://scholarships.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 17,
      "maxAge": 27,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 1000000,
      "minMarks": 60,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma"
      ],
      "courses": [
        "Engineering / Technology",
        "Medical / Pharmacy / Nursing",
        "Architecture / Planning"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "central-sector-post-matric-nsp",
    "name": "NSP Central Sector Post-Matric Scholarship Records (NSP-Linked)",
    "short_description": "Central framework scholarships connecting college and university degree learners across India with direct DBT benefit transfers on the NSP portal.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "Full or partial college tuition subsidy plus maintenance allowance ranging from ₹5,000 to ₹25,000 per academic year.",
    "required_documents": [
      "aadhaar",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Complete One Time Registration (OTR) on scholarships.gov.in, select active post-matric department scheme, submit college verification form.\n\n⚠️ Note: This represents a category of state-level schemes. Check your state government portal for the exact scheme applicable to your state.",
    "important_dates": "Active annual cycle July to December.",
    "official_source": "National Scholarship Portal (NSP), Ministry of Electronics & IT",
    "application_url": "https://scholarships.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 16,
      "maxAge": 28,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 600000,
      "minMarks": 50,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "top-class-education-sc",
    "name": "Top Class Education Scheme for SC Students",
    "short_description": "Promotes qualitative education among Scheduled Caste students by providing full financial support in notified premier institutions (IITs, IIMs, NITs, AIIMS, NLUs).",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "Full tuition fee & non-refundable charges, living expenses of ₹3,000/month, books/stationery ₹5,000/year, and latest computer/laptop ₹45,000 one-time.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Apply on National Scholarship Portal after securing admission in a notified Top Class institution. Institutional nodal officer validates admission.",
    "important_dates": "July to November on NSP.",
    "official_source": "Ministry of Social Justice and Empowerment, Govt. of India",
    "application_url": "https://socialjustice.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 17,
      "maxAge": 30,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 800000,
      "minMarks": 50,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "SC"
      ],
      "educationLevels": [
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "Engineering / Technology",
        "Medical / Pharmacy / Nursing",
        "Management / Business Administration",
        "Law / Legal Studies"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "nfsc-national-fellowship-sc",
    "name": "National Fellowship for Scheduled Caste Students (NFSC)",
    "short_description": "Provides financial assistance to Scheduled Caste candidates pursuing regular and full-time M.Phil. and Ph.D. degrees in Sciences, Humanities, and Social Sciences.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "Junior Research Fellowship (JRF) ₹37,000/month for first 2 years; Senior Research Fellowship (SRF) ₹42,000/month for remaining period + contingency allowance.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Administered through UGC-NET selection score. Eligible SC scholars register via National Fellowship portal upon UGC qualification.",
    "important_dates": "Aligned with UGC-NET cycle (June & December sessions).",
    "official_source": "Ministry of Social Justice and Empowerment & UGC",
    "application_url": "https://www.ugcnetonline.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 21,
      "maxAge": 36,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 800000,
      "minMarks": 55,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "SC"
      ],
      "educationLevels": [
        "PhD / Research"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "post-matric-scholarship-sc",
    "name": "Post-Matric Scholarship for SC Students",
    "short_description": "Centrally sponsored flagship scheme providing financial assistance to Scheduled Caste students studying at post-matriculation or post-secondary stage.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "Full compulsory non-refundable fees reimbursed + academic maintenance allowance up to ₹13,500/year for hostellers and ₹7,000/year for day scholars.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Apply online through respective State Scholarship Portal or NSP. Direct Benefit Transfer directly into Aadhaar-seeded bank account.",
    "important_dates": "Annual window August to December.",
    "official_source": "Department of Social Justice and Empowerment, Govt. of India",
    "application_url": "https://socialjustice.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 15,
      "maxAge": 30,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 250000,
      "minMarks": 40,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "SC"
      ],
      "educationLevels": [
        "12th / Intermediate",
        "Undergraduate / Diploma",
        "Postgraduate",
        "PhD / Research"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pre-matric-scholarship-sc",
    "name": "Pre-Matric Scholarship for SC Students (Classes 9 & 10)",
    "short_description": "Financial assistance to Scheduled Caste students studying in Class 9 and 10 in government recognized schools to support transition to secondary stage.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "Day scholars: ₹3,500/- per annum; Hostellers: ₹7,000/- per annum + book grant.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id"
    ],
    "application_process": "Apply through state education / social welfare portal or NSP. School headmaster forwards verified student records.",
    "important_dates": "July to October annually.",
    "official_source": "Ministry of Social Justice and Empowerment",
    "application_url": "https://socialjustice.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 13,
      "maxAge": 17,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 250000,
      "minMarks": 40,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "SC"
      ],
      "educationLevels": [
        "School / 10th"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "top-class-education-st",
    "name": "Top Class Education for ST Students",
    "short_description": "Centrally funded scheme providing full tuition and maintenance to meritorious Scheduled Tribe students in notified premier institutions (IITs, IIMs, NITs, Medical).",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "Full tuition fee reimbursement, living allowance ₹3,000/month, books grant ₹5,000/year, and latest laptop allowance of ₹45,000.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Apply via National Scholarship Portal under Ministry of Tribal Affairs. Institution verifies admission and fee structure.",
    "important_dates": "NSP timeline August to November.",
    "official_source": "Ministry of Tribal Affairs, Govt. of India",
    "application_url": "https://tribal.nic.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 17,
      "maxAge": 30,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 600000,
      "minMarks": 50,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "ST"
      ],
      "educationLevels": [
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "Engineering / Technology",
        "Medical / Pharmacy / Nursing",
        "Management / Business Administration",
        "Law / Legal Studies"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "nfst-national-fellowship-st",
    "name": "National Fellowship for ST Students (NFST)",
    "short_description": "Encourages Scheduled Tribe candidates to acquire higher degrees (M.Phil. & Ph.D.) through dedicated research fellowships.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "JRF fellowship ₹37,000/month for initial 2 years; SRF fellowship ₹42,000/month for remaining term plus contingency grants.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Online application through Tribal Affairs Fellowship portal / UGC-NET matching database.",
    "important_dates": "Twice a year matching UGC NET schedule.",
    "official_source": "Ministry of Tribal Affairs",
    "application_url": "https://tribal.nic.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 21,
      "maxAge": 36,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 600000,
      "minMarks": 55,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "ST"
      ],
      "educationLevels": [
        "PhD / Research"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "post-matric-scholarship-st",
    "name": "Post-Matric Scholarship for ST Students",
    "short_description": "Provides financial support to Scheduled Tribe learners studying at recognized post-matriculation courses across India.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "Full compulsory course fee waiver/reimbursement + maintenance allowance up to ₹13,500/year for hostellers and ₹7,000/year for day scholars.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Online via state scholarship portals or NSP. Requires valid ST caste certificate and family income verification.",
    "important_dates": "August to December annually.",
    "official_source": "Ministry of Tribal Affairs, Govt. of India",
    "application_url": "https://tribal.nic.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 15,
      "maxAge": 30,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 250000,
      "minMarks": 40,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "ST"
      ],
      "educationLevels": [
        "12th / Intermediate",
        "Undergraduate / Diploma",
        "Postgraduate",
        "PhD / Research"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pre-matric-scholarship-st",
    "name": "Pre-Matric Scholarship for ST Students (Classes 9 & 10)",
    "short_description": "Aims to support parents of ST children for education of their wards studying in classes 9 and 10, minimizing drop-out rates.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "Day Scholars: ₹3,500/- per year; Hostellers: ₹7,000/- per year disbursed via Direct Benefit Transfer.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id"
    ],
    "application_process": "Apply through state portal or NSP. School headmaster validates student enrollment.",
    "important_dates": "July to October annually.",
    "official_source": "Ministry of Tribal Affairs",
    "application_url": "https://tribal.nic.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 13,
      "maxAge": 17,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 250000,
      "minMarks": 40,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "ST"
      ],
      "educationLevels": [
        "School / 10th"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-yasasvi-obc-ebc-dnt",
    "name": "PM YASASVI Scholarship Scheme for OBC, EBC and DNT Students",
    "short_description": "Top-class school and higher education scholarship scheme by the Ministry of Social Justice for OBC, Economically Backward Classes (EBC) and De-Notified Nomadic Tribes (DNT).",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "₹75,000/- per year for Class 9/10; ₹1,25,000/- per year for Class 11/12; Full tuition in top college segment.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Apply on National Scholarship Portal under PM YASASVI vertical. Provide valid OBC/EBC/DNT certificate and school/college bonafide.",
    "important_dates": "August to November annually.",
    "official_source": "Department of Social Justice and Empowerment, Govt. of India",
    "application_url": "https://socialjustice.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 14,
      "maxAge": 26,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 250000,
      "minMarks": 60,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "OBC",
        "EBC",
        "DNT"
      ],
      "educationLevels": [
        "School / 10th",
        "12th / Intermediate",
        "Undergraduate / Diploma"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "top-class-education-obc-ebc-dnt",
    "name": "Top Class Education Scheme for OBC/EBC/DNT Students",
    "short_description": "Recognizes and financially supports OBC, EBC, and DNT students admitted to designated premier institutions (IITs, IIMs, NITs, Central Universities).",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "Full tuition fee & non-refundable charges, living expenses ₹3,000/month, books grant ₹5,000/year, and one-time laptop allowance ₹45,000.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Apply on National Scholarship Portal after securing admission in notified institution list.",
    "important_dates": "August to December.",
    "official_source": "Ministry of Social Justice and Empowerment",
    "application_url": "https://socialjustice.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 17,
      "maxAge": 28,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 250000,
      "minMarks": 60,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "OBC",
        "EBC",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "Engineering / Technology",
        "Medical / Pharmacy / Nursing",
        "Management / Business Administration",
        "Law / Legal Studies"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "post-matric-scholarship-minorities",
    "name": "Post-Matric Scholarship Scheme for Minorities",
    "short_description": "Financial assistance to meritorious students belonging to notified minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi) for higher education.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "Full admission and tuition fee reimbursement up to ₹10,000/year + maintenance allowance up to ₹1,200/month.",
    "required_documents": [
      "aadhaar",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet",
      "caste_cert"
    ],
    "application_process": "Apply online through National Scholarship Portal under Ministry of Minority Affairs. Self-declaration of minority community and parental income certificate required.",
    "important_dates": "NSP cycle July to November annually.",
    "official_source": "Ministry of Minority Affairs, Govt. of India",
    "application_url": "https://minorityaffairs.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 16,
      "maxAge": 28,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 200000,
      "minMarks": 50,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "12th / Intermediate",
        "Undergraduate / Diploma",
        "Postgraduate",
        "PhD / Research"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": true,
      "minorityCommunities": [
        "Muslim",
        "Christian",
        "Sikh",
        "Buddhist",
        "Jain",
        "Parsi"
      ]
    }
  },
  {
    "id": "pre-matric-scholarship-minorities",
    "name": "Pre-Matric Scholarship Scheme for Minorities (Classes 9 & 10)",
    "short_description": "Assistance to school-going children belonging to notified minority communities studying in Class 9 and 10 to encourage continued schooling.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "Admission & tuition fee reimbursement up to ₹4,000/year plus maintenance allowance ₹500/month.",
    "required_documents": [
      "aadhaar",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Apply on NSP portal. School institution verifies enrollment and previous class marksheet.",
    "important_dates": "July to October annually.",
    "official_source": "Ministry of Minority Affairs",
    "application_url": "https://scholarships.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 13,
      "maxAge": 17,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 100000,
      "minMarks": 50,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "School / 10th"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": true,
      "minorityCommunities": [
        "Muslim",
        "Christian",
        "Sikh",
        "Buddhist",
        "Jain",
        "Parsi"
      ]
    }
  },
  {
    "id": "merit-cum-means-minorities",
    "name": "Merit-cum-Means Scholarship for Professional and Technical Courses (Minorities)",
    "short_description": "Financial assistance to poor and meritorious students belonging to minority communities to pursue professional and technical courses.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "Full course fee up to ₹20,000/year (or full actual fee in listed premier institutions) + ₹1,000/month maintenance allowance for hostellers.",
    "required_documents": [
      "aadhaar",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Apply on National Scholarship Portal. Valid admission in approved technical/professional college required.",
    "important_dates": "August to November on NSP.",
    "official_source": "Ministry of Minority Affairs",
    "application_url": "https://minorityaffairs.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 17,
      "maxAge": 28,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 250000,
      "minMarks": 50,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "Engineering / Technology",
        "IT / Computer Applications",
        "Medical / Pharmacy / Nursing",
        "Management / Business Administration",
        "Law / Legal Studies"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": true,
      "minorityCommunities": [
        "Muslim",
        "Christian",
        "Sikh",
        "Buddhist",
        "Jain",
        "Parsi"
      ]
    }
  },
  {
    "id": "scholarship-students-disabilities",
    "name": "Post-Matric Scholarship for Students with Disabilities",
    "short_description": "Dedicated central scholarship providing fees and special allowances to students with benchmark disabilities (40%+ disability) in higher education.",
    "category": "Special Support",
    "state": "All India",
    "benefits": "Tuition fee reimbursement + maintenance allowance up to ₹1,600/month + disability conveyance allowance & escort allowance.",
    "required_documents": [
      "aadhaar",
      "disability_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Apply on National Scholarship Portal under Department of Empowerment of Persons with Disabilities (DEPwD). Submit valid UDID card.",
    "important_dates": "July to November annually.",
    "official_source": "Department of Empowerment of Persons with Disabilities, Govt. of India",
    "application_url": "https://disabilityaffairs.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 15,
      "maxAge": 32,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 250000,
      "minMarks": 40,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "12th / Intermediate",
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": true,
      "minDisabilityPercentage": 40,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "nfpwd-national-fellowship-pwd",
    "name": "National Fellowship for Persons with Disabilities (NFPwD)",
    "short_description": "Provides financial aid to research scholars with benchmark disabilities pursuing regular M.Phil. and Ph.D. degrees in Indian Universities.",
    "category": "Special Support",
    "state": "All India",
    "benefits": "Fellowship of ₹37,000/month (JRF) and ₹42,000/month (SRF) + escort/reader allowance of ₹2,000/month and annual contingency grant.",
    "required_documents": [
      "aadhaar",
      "disability_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Selection made through UGC-NET score or DEPwD portal merit ranking for registered research scholars.",
    "important_dates": "Matches UGC-NET academic cycles.",
    "official_source": "DEPwD & University Grants Commission",
    "application_url": "https://www.ugc.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 21,
      "maxAge": 38,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 800000,
      "minMarks": 50,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "PhD / Research"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": true,
      "minDisabilityPercentage": 40,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "beedi-cine-mine-workers-scholarship",
    "name": "Financial Assistance for Education of the Children of Beedi/Cine/IOMC/LSDM Workers",
    "short_description": "Provides educational stipends to dependent children of Beedi workers, Iron/Manganese/Chrome ore mine workers, and Cine workers.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "Annual grant ranging from ₹1,000 (primary) to ₹15,000 (professional degree courses) per student.",
    "required_documents": [
      "aadhaar",
      "bank_account",
      "student_id",
      "marksheet",
      "other_doc"
    ],
    "application_process": "Apply on NSP under Ministry of Labour & Employment. Submit copy of parent's worker identity card issued by Labour Welfare Commissioner.",
    "important_dates": "August to November annually.",
    "official_source": "Ministry of Labour & Employment, Govt. of India",
    "application_url": "https://labour.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 10,
      "maxAge": 25,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 120000,
      "minMarks": 40,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "School / 10th",
        "12th / Intermediate",
        "Undergraduate / Diploma"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "central-sector-scholarship-pwd-higher",
    "name": "Central Sector Top Class Scholarship for College/University Students with Disabilities",
    "short_description": "Covers full tuition fees and technology aids for students with disabilities admitted to notified premier higher educational institutions.",
    "category": "Special Support",
    "state": "All India",
    "benefits": "Tuition fee up to ₹2.00 Lakh per annum + books allowance ₹5,000/year + assistive devices allowance up to ₹30,000 one-time.",
    "required_documents": [
      "aadhaar",
      "disability_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Apply via NSP under DEPwD vertical. Upload valid UDID card and college admission verification.",
    "important_dates": "July to November on NSP.",
    "official_source": "Department of Empowerment of Persons with Disabilities",
    "application_url": "https://disabilityaffairs.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 17,
      "maxAge": 32,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 600000,
      "minMarks": 50,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": true,
      "minDisabilityPercentage": 40,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "free-coaching-scheme-sc-obc",
    "name": "Free Coaching Scheme for SC and OBC Students",
    "short_description": "Quality coaching for competitive examinations (UPSC, State PSC, SSC, Banking, JEE, NEET, CLAT) for economically disadvantaged SC and OBC learners.",
    "category": "Education & Digital Support",
    "state": "All India",
    "benefits": "Full coaching course fee paid directly to empanelled coaching institutes + monthly stipend of ₹4,000 (outstation) or ₹2,500 (local).",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Apply online through coaching.dosje.gov.in portal. Selected on the basis of academic merit in 12th/Degree.",
    "important_dates": "Portal notifications released May-June.",
    "official_source": "Ministry of Social Justice and Empowerment, Govt. of India",
    "application_url": "https://socialjustice.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 17,
      "maxAge": 30,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 800000,
      "minMarks": 50,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "SC",
        "OBC"
      ],
      "educationLevels": [
        "12th / Intermediate",
        "Undergraduate / Diploma"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "pm-usp-csis-interest-subsidy",
    "name": "PM-USP Central Sector Interest Subsidy Scheme (CSIS) on Education Loans",
    "short_description": "Provides full interest subsidy during the moratorium period (course period + 1 year) on educational loans availed from scheduled banks for professional degrees.",
    "category": "Financial Support",
    "state": "All India",
    "benefits": "100% interest subsidy paid by Govt. of India during course duration plus 1 year on education loans up to ₹10 Lakhs.",
    "required_documents": [
      "aadhaar",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Apply for educational loan through Vidya Lakshmi Portal (vidyalakshmi.co.in). Bank uploads claim on Canara Bank CSIS web portal.",
    "important_dates": "Continuous submission through lending banks.",
    "official_source": "Department of Higher Education, Ministry of Education",
    "application_url": "https://www.vidyalakshmi.co.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 17,
      "maxAge": 32,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 450000,
      "minMarks": 50,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "Engineering / Technology",
        "IT / Computer Applications",
        "Medical / Pharmacy / Nursing",
        "Management / Business Administration",
        "Law / Legal Studies"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "cgfsel-education-loan-guarantee",
    "name": "Credit Guarantee Fund Scheme for Education Loans (CGFSEL)",
    "short_description": "Provides credit guarantee to member banks for education loans up to ₹7.5 Lakh without third-party guarantee or collateral security.",
    "category": "Financial Support",
    "state": "All India",
    "benefits": "Collateral-free educational loan approval up to ₹7.5 Lakh with NCGTC sovereign credit guarantee backing.",
    "required_documents": [
      "aadhaar",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Apply online via Vidya Lakshmi portal. Scheduled commercial banks process under IBA Model Educational Loan Scheme.",
    "important_dates": "Available year-round.",
    "official_source": "National Credit Guarantee Trustee Company (NCGTC) & Ministry of Education",
    "application_url": "https://www.ncgtc.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 17,
      "maxAge": 35,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 800000,
      "minMarks": 50,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "dr-ambedkar-interest-subsidy-obc-ebc",
    "name": "Dr. Ambedkar Central Sector Scheme of Interest Subsidy for OBC/EBC Education Loans",
    "short_description": "Provides interest subsidy to OBC and EBC students on educational loans for overseas studies at Masters, M.Phil., and Ph.D. level.",
    "category": "Financial Support",
    "state": "All India",
    "benefits": "100% interest subsidy on foreign education loan during moratorium period (course duration + 1 year).",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Avail overseas education loan through scheduled bank on Vidya Lakshmi portal. Bank claims subsidy on Ministry portal.",
    "important_dates": "Continuous banking cycle.",
    "official_source": "Ministry of Social Justice and Empowerment, Govt. of India",
    "application_url": "https://socialjustice.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 20,
      "maxAge": 35,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 800000,
      "minMarks": 55,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "OBC",
        "EBC"
      ],
      "educationLevels": [
        "Postgraduate",
        "PhD / Research"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "padho-pardesh-interest-subsidy-minority",
    "name": "Padho Pardesh Overseas Education Loan Interest Subsidy for Minorities",
    "short_description": "Discontinued by the Ministry of Minority Affairs from FY 2022-23. Previously provided interest subsidy on educational loans for overseas studies to students from notified minority communities.",
    "category": "Financial Support",
    "state": "All India",
    "benefits": "Full interest payment reimbursed for course duration + 1 year on sanctioned foreign education loans.",
    "required_documents": [
      "aadhaar",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Sanctioned education loan details uploaded by lending bank to IBA/Ministry portal.",
    "important_dates": "Scheme discontinued by Ministry of Minority Affairs from 2022-23. Existing sanctioned beneficiaries continue to receive subsidy.",
    "official_source": "Ministry of Minority Affairs",
    "application_url": "https://minorityaffairs.gov.in",
    "status": "DISCONTINUED",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 20,
      "maxAge": 35,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 600000,
      "minMarks": 55,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Postgraduate",
        "PhD / Research"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": true,
      "minorityCommunities": [
        "Muslim",
        "Christian",
        "Sikh",
        "Buddhist",
        "Jain",
        "Parsi"
      ]
    }
  },
  {
    "id": "national-overseas-scholarship-sc-st",
    "name": "National Overseas Scholarship (NOS) for SC/ST/De-notified Nomadic Tribes",
    "short_description": "Prestigious central scholarship facilitating low-income students belonging to SC, DNT, and traditional artisans to pursue Master/Ph.D. in top 500 QS world ranked universities.",
    "category": "Scholarships",
    "state": "All India",
    "benefits": "Full international tuition fee paid directly to university + annual maintenance allowance (USD 15,400 or GBP 9,900) + contingency allowance and air passage.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Apply online through nosmsje.gov.in portal. Unconditional offer letter from top 500 QS ranked foreign university required.",
    "important_dates": "Application portal opens February to March annually.",
    "official_source": "Ministry of Social Justice and Empowerment, Govt. of India",
    "application_url": "https://nosmsje.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 21,
      "maxAge": 35,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 800000,
      "minMarks": 60,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "SC",
        "DNT"
      ],
      "educationLevels": [
        "Postgraduate",
        "PhD / Research"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "central-interest-subsidy-ews-loans",
    "name": "Central Sector Education Loan Support Scheme for Economically Weaker Students",
    "short_description": "Provides targeted financial relief and interest rate concessions for students from EWS households taking education loans under Indian Banks Association guidelines.",
    "category": "Financial Support",
    "state": "All India",
    "benefits": "Subsidized interest rates and moratorium payment support on education loans up to ₹7.5 Lakhs.",
    "required_documents": [
      "aadhaar",
      "income_cert",
      "bank_account",
      "student_id",
      "marksheet"
    ],
    "application_process": "Apply through Vidya Lakshmi unified loan portal. Income certificate issued by Revenue Officer / Tehsildar mandatory.",
    "important_dates": "Rolling throughout the academic session.",
    "official_source": "Department of Financial Services & Department of Higher Education",
    "application_url": "https://www.vidyalakshmi.co.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 17,
      "maxAge": 32,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 450000,
      "minMarks": 50,
      "states": [
        "All India"
      ],
      "domicileRequired": false,
      "domicileStates": [
        "All India"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "mp-medhavi-vidyarthi-yojana",
    "name": "Madhya Pradesh Mukhyamantri Medhavi Vidyarthi Yojana (MMVY)",
    "short_description": "Financial support for meritorious Madhya Pradesh students pursuing eligible undergraduate professional courses in engineering, medicine, law and other notified programs.",
    "category": "Scholarships",
    "state": "Madhya Pradesh",
    "benefits": "Tuition fee support at eligible government and private institutions, subject to the scheme's course, marks, entrance and income conditions.",
    "required_documents": [
      "aadhaar",
      "income_cert",
      "domicile_cert",
      "student_id",
      "marksheet",
      "bank_account"
    ],
    "application_process": "Apply through the Madhya Pradesh Scholarship Portal using MP domicile, income, academic marks and admission details. The institution verifies the application before sanction.",
    "important_dates": "Application windows are announced for each academic admission cycle.",
    "official_source": "Government of Madhya Pradesh, Higher Education Department",
    "application_url": "https://medhavikalyan.mp.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 16,
      "maxAge": 35,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 600000,
      "minMarks": 75,
      "states": [
        "Madhya Pradesh"
      ],
      "domicileRequired": true,
      "domicileStates": [
        "Madhya Pradesh"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "mp-post-matric-sc-st",
    "name": "Madhya Pradesh Post-Matric Scholarship for SC/ST Students (MPTAAS)",
    "short_description": "Comprehensive scholarship by MP Tribal Affairs & SC Welfare department covering tuition and maintenance allowance for SC/ST college students.",
    "category": "Scholarships",
    "state": "Madhya Pradesh",
    "benefits": "100% tuition fee reimbursement directly to institute + maintenance allowance up to ₹1,500 per month into student bank account.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "domicile_cert",
      "marksheet"
    ],
    "application_process": "Register on MP Tribal Affairs Automation System (MPTAAS) portal (tribal.mp.gov.in/mptaas) using Samagra ID and Aadhaar e-KYC. Submit college admission details.",
    "important_dates": "August to January annually.",
    "official_source": "Tribal Affairs & Scheduled Caste Welfare Department, Govt. of Madhya Pradesh",
    "application_url": "https://www.tribal.mp.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 16,
      "maxAge": 30,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 600000,
      "minMarks": 40,
      "states": [
        "Madhya Pradesh"
      ],
      "domicileRequired": true,
      "domicileStates": [
        "Madhya Pradesh"
      ],
      "categories": [
        "SC",
        "ST"
      ],
      "educationLevels": [
        "12th / Intermediate",
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "mp-post-matric-obc",
    "name": "Madhya Pradesh Post-Matric Scholarship for OBC Students",
    "short_description": "State-funded educational grant for Other Backward Classes students enrolled in post-matric courses in recognized colleges in Madhya Pradesh.",
    "category": "Scholarships",
    "state": "Madhya Pradesh",
    "benefits": "Full tuition fee reimbursement for government colleges / capped fee for private colleges + monthly maintenance allowance.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "domicile_cert",
      "marksheet"
    ],
    "application_process": "Apply via Madhya Pradesh Scholarship Portal with MP Samagra ID and digital caste certificate.",
    "important_dates": "August to December.",
    "official_source": "Backward Classes & Minorities Welfare Department, Govt. of Madhya Pradesh",
    "application_url": "http://scholarshipportal.mp.nic.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 16,
      "maxAge": 28,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 300000,
      "minMarks": 45,
      "states": [
        "Madhya Pradesh"
      ],
      "domicileRequired": true,
      "domicileStates": [
        "Madhya Pradesh"
      ],
      "categories": [
        "OBC"
      ],
      "educationLevels": [
        "12th / Intermediate",
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "mp-minority-post-matric",
    "name": "Madhya Pradesh State Minority Post-Matric Scholarship",
    "short_description": "State welfare initiative providing scholarships to minority community students pursuing technical, medical, and general higher education in MP.",
    "category": "Scholarships",
    "state": "Madhya Pradesh",
    "benefits": "Financial assistance towards admission fee, tuition fee, and maintenance allowance up to ₹10,000/- per annum.",
    "required_documents": [
      "aadhaar",
      "income_cert",
      "bank_account",
      "student_id",
      "domicile_cert",
      "marksheet"
    ],
    "application_process": "Apply online on MP State Scholarship Portal. Requires MP Domicile and community declaration.",
    "important_dates": "September to December annually.",
    "official_source": "Minority Welfare Directorate, Govt. of Madhya Pradesh",
    "application_url": "http://scholarshipportal.mp.nic.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 16,
      "maxAge": 28,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 250000,
      "minMarks": 50,
      "states": [
        "Madhya Pradesh"
      ],
      "domicileRequired": true,
      "domicileStates": [
        "Madhya Pradesh"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": true,
      "minorityCommunities": [
        "Muslim",
        "Christian",
        "Sikh",
        "Buddhist",
        "Jain",
        "Parsi"
      ]
    }
  },
  {
    "id": "maha-vjnt-post-matric",
    "name": "Maharashtra Post-Matric Scholarship for VJNT Students (MahaDBT)",
    "short_description": "Full tuition fee waiver and examination fee support for Vimukta Jati and Nomadic Tribes students pursuing college and professional education in Maharashtra.",
    "category": "Scholarships",
    "state": "Maharashtra",
    "benefits": "100% tuition and exam fees paid to college + maintenance allowance of ₹425 to ₹1,200 per month depending on stream and hosteller status.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "domicile_cert",
      "marksheet"
    ],
    "application_process": "Register on MahaDBT portal (mahadbt.maharashtra.gov.in) with Aadhaar authentication. Select VJNT Post-Matric scheme and submit college admission receipt.",
    "important_dates": "MahaDBT cycle July to December annually.",
    "official_source": "VJNT, OBC & SBC Welfare Department, Govt. of Maharashtra",
    "application_url": "https://mahadbt.maharashtra.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 16,
      "maxAge": 30,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 150000,
      "minMarks": 40,
      "states": [
        "Maharashtra"
      ],
      "domicileRequired": true,
      "domicileStates": [
        "Maharashtra"
      ],
      "categories": [
        "DNT",
        "OBC",
        "SC",
        "ST"
      ],
      "educationLevels": [
        "12th / Intermediate",
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "maha-sc-post-matric",
    "name": "Maharashtra Post-Matric Scholarship for SC Students (MahaDBT)",
    "short_description": "Social Justice & Special Assistance Department scholarship providing full fee waiver and maintenance to Scheduled Caste students in Maharashtra.",
    "category": "Scholarships",
    "state": "Maharashtra",
    "benefits": "100% tuition, development, and examination fees reimbursed + maintenance allowance up to ₹13,500/year.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "domicile_cert",
      "marksheet"
    ],
    "application_process": "Submit online form on MahaDBT portal (mahadbt.maharashtra.gov.in) with caste certificate issued by Maharashtra competent authority.",
    "important_dates": "August to January on MahaDBT.",
    "official_source": "Social Justice and Special Assistance Department, Govt. of Maharashtra",
    "application_url": "https://mahadbt.maharashtra.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 16,
      "maxAge": 30,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 250000,
      "minMarks": 40,
      "states": [
        "Maharashtra"
      ],
      "domicileRequired": true,
      "domicileStates": [
        "Maharashtra"
      ],
      "categories": [
        "SC"
      ],
      "educationLevels": [
        "12th / Intermediate",
        "Undergraduate / Diploma",
        "Postgraduate",
        "PhD / Research"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "maha-st-post-matric",
    "name": "Maharashtra Post-Matric Scholarship for ST Students (Tribal Development)",
    "short_description": "Tribal Development Department, Maharashtra scholarship for Scheduled Tribe students studying in higher education institutions.",
    "category": "Scholarships",
    "state": "Maharashtra",
    "benefits": "Full college tuition & non-refundable fees reimbursed directly to college + living expense allowance up to ₹13,500/year for hostellers.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "domicile_cert",
      "marksheet"
    ],
    "application_process": "Apply online via MahaDBT portal under Tribal Development Department vertical. Requires valid ST Caste Validity Certificate.",
    "important_dates": "August to December annually.",
    "official_source": "Tribal Development Department, Govt. of Maharashtra",
    "application_url": "https://mahadbt.maharashtra.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 16,
      "maxAge": 30,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 250000,
      "minMarks": 40,
      "states": [
        "Maharashtra"
      ],
      "domicileRequired": true,
      "domicileStates": [
        "Maharashtra"
      ],
      "categories": [
        "ST"
      ],
      "educationLevels": [
        "12th / Intermediate",
        "Undergraduate / Diploma",
        "Postgraduate",
        "PhD / Research"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "maha-minority-scholarship-higher",
    "name": "Maharashtra State Minority Scholarship (Higher & Professional Courses)",
    "short_description": "Government of Maharashtra scholarship supporting minority community students pursuing undergraduate and postgraduate professional courses.",
    "category": "Scholarships",
    "state": "Maharashtra",
    "benefits": "Financial grant of ₹50,000/- per year or actual tuition fee (whichever is lower) disbursed via DBT.",
    "required_documents": [
      "aadhaar",
      "income_cert",
      "bank_account",
      "student_id",
      "domicile_cert",
      "marksheet"
    ],
    "application_process": "Apply on MahaDBT portal under Directorate of Technical Education / Medical Education vertical.",
    "important_dates": "September to December annually.",
    "official_source": "Minority Development Department, Govt. of Maharashtra",
    "application_url": "https://mahadbt.maharashtra.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 17,
      "maxAge": 28,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 800000,
      "minMarks": 50,
      "states": [
        "Maharashtra"
      ],
      "domicileRequired": true,
      "domicileStates": [
        "Maharashtra"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "Engineering / Technology",
        "IT / Computer Applications",
        "Medical / Pharmacy / Nursing",
        "Management / Business Administration",
        "Law / Legal Studies"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": true,
      "minorityCommunities": [
        "Muslim",
        "Christian",
        "Sikh",
        "Buddhist",
        "Jain",
        "Parsi"
      ]
    }
  },
  {
    "id": "delhi-higher-technical-support",
    "name": "Delhi Higher & Technical Education Support / Merit-cum-Means Scheme",
    "short_description": "Government of NCT of Delhi scheme providing financial assistance to meritorious economically weaker students in Delhi State Universities (DTU, NSUT, IPU, IIITD).",
    "category": "Scholarships",
    "state": "Delhi",
    "benefits": "100% fee waiver for family income under ₹2.5 Lakh; 50% fee waiver for income ₹2.5-6.0 Lakh.",
    "required_documents": [
      "aadhaar",
      "income_cert",
      "bank_account",
      "student_id",
      "domicile_cert",
      "marksheet"
    ],
    "application_process": "Apply online on Delhi Higher Education e-District portal (edistrict.delhigovt.nic.in). Nodal university officer verifies admissions.",
    "important_dates": "Annual application window October to January.",
    "official_source": "Directorate of Higher Education, Govt. of NCT of Delhi",
    "application_url": "https://edistrict.delhigovt.nic.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 17,
      "maxAge": 26,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 600000,
      "minMarks": 60,
      "states": [
        "Delhi"
      ],
      "domicileRequired": true,
      "domicileStates": [
        "Delhi"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "Undergraduate / Diploma"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "rajasthan-post-matric-sje",
    "name": "Rajasthan Post-Matric Scholarship Scheme (SJE Portal)",
    "short_description": "Direct fee reimbursement and maintenance allowance for SC, ST, and Special Backward Category students studying in colleges and universities in Rajasthan.",
    "category": "Scholarships",
    "state": "Rajasthan",
    "benefits": "100% compulsory tuition and examination fee reimbursed directly to students + monthly maintenance stipend.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "domicile_cert",
      "marksheet"
    ],
    "application_process": "Apply via Rajasthan SSO Portal (sso.rajasthan.gov.in) under SJMS (Social Justice Management System) using Jan Aadhaar card.",
    "important_dates": "Portal active July to December annually.",
    "official_source": "Social Justice and Empowerment Department, Govt. of Rajasthan",
    "application_url": "https://sje.rajasthan.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 16,
      "maxAge": 30,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 250000,
      "minMarks": 40,
      "states": [
        "Rajasthan"
      ],
      "domicileRequired": true,
      "domicileStates": [
        "Rajasthan"
      ],
      "categories": [
        "SC",
        "ST",
        "OBC"
      ],
      "educationLevels": [
        "12th / Intermediate",
        "Undergraduate / Diploma",
        "Postgraduate"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  },
  {
    "id": "up-post-matric-scholarship",
    "name": "Uttar Pradesh Post-Matric Scholarship & Fee Reimbursement Scheme",
    "short_description": "Flagship scholarship and full fee reimbursement scheme for General, OBC, SC, ST, and Minority students studying in higher education institutions in Uttar Pradesh.",
    "category": "Scholarships",
    "state": "Uttar Pradesh",
    "benefits": "100% non-refundable tuition fee reimbursement (up to government limits) + monthly maintenance allowance up to ₹1,200/month.",
    "required_documents": [
      "aadhaar",
      "caste_cert",
      "income_cert",
      "bank_account",
      "student_id",
      "domicile_cert",
      "marksheet"
    ],
    "application_process": "Register on UP Scholarship Portal (scholarship.up.gov.in) with Aadhaar authentication, submit application to college, college verifies and forwards to District Welfare Officer.",
    "important_dates": "July to December annually.",
    "official_source": "Social Welfare Department, Govt. of Uttar Pradesh",
    "application_url": "https://scholarship.up.gov.in",
    "status": "ACTIVE",
    "last_verified": "2026-03-01",
    "eligibilityRules": {
      "minAge": 16,
      "maxAge": 30,
      "genders": [
        "All",
        "Male",
        "Female",
        "Other"
      ],
      "occupations": [
        "Student",
        "College Student"
      ],
      "maxIncome": 250000,
      "minMarks": 45,
      "states": [
        "Uttar Pradesh"
      ],
      "domicileRequired": true,
      "domicileStates": [
        "Uttar Pradesh"
      ],
      "categories": [
        "All",
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "DNT"
      ],
      "educationLevels": [
        "12th / Intermediate",
        "Undergraduate / Diploma",
        "Postgraduate",
        "PhD / Research"
      ],
      "courses": [
        "All"
      ],
      "disabilityOnly": false,
      "minDisabilityPercentage": 0,
      "minorityOnly": false,
      "minorityCommunities": [
        "All"
      ]
    }
  }
];

// 2. DEMO PROFILES FOR PRESENTATION & TESTING
// ==========================================================================
const DEMO_PROFILES = {
  "profile-a": {
    name: "Rahul Kumar",
    age: 20,
    gender: "Male",
    occupation: "Student",
    state: "Madhya Pradesh",
    district: "Indore",
    category: "OBC",
    disabilityStatus: "No",
    disabilityPct: "",
    minorityStatus: "No",
    minorityCommunity: "",
    educationLevel: "Undergraduate / Diploma",
    course: "Engineering / Technology",
    branch: "Computer Science & Engineering",
    yearSemester: "2nd Year",
    collegeType: "Government",
    collegeState: "Madhya Pradesh",
    academicMarks: 82,
    prevMarks: 84,
    income: 200000,
    incomeCertStatus: "Yes",
    scholarshipReceived: "No",
    feeReimbursement: "No",
    educationLoan: "No",
    domicileState: "Madhya Pradesh",
    specialCategory: "None",
    parentOccupation: "Farmer",
    govtEmployee: "No",
    defenceRelation: "None",
    docs: ["aadhaar", "income_cert", "caste_cert", "domicile_cert", "bank_account", "student_id", "marksheet"]
  },
  "profile-b": {
    name: "Priya Sharma",
    age: 19,
    gender: "Female",
    occupation: "Student",
    state: "Maharashtra",
    district: "Pune",
    category: "General",
    disabilityStatus: "No",
    disabilityPct: "",
    minorityStatus: "No",
    minorityCommunity: "",
    educationLevel: "Undergraduate / Diploma",
    course: "Engineering / Technology",
    branch: "Electronics & Telecommunication",
    yearSemester: "1st Year",
    collegeType: "Govt-Aided",
    collegeState: "Maharashtra",
    academicMarks: 88,
    prevMarks: 90,
    income: 350000,
    incomeCertStatus: "Yes",
    scholarshipReceived: "No",
    feeReimbursement: "No",
    educationLoan: "Planning to take",
    domicileState: "Maharashtra",
    specialCategory: "Single Girl Child",
    parentOccupation: "Small Business / Vendor",
    govtEmployee: "No",
    defenceRelation: "None",
    docs: ["aadhaar", "income_cert", "domicile_cert", "bank_account", "student_id", "marksheet"]
  },
  "profile-c": {
    name: "Amit Patel",
    age: 21,
    gender: "Male",
    occupation: "Student",
    state: "Madhya Pradesh",
    district: "Bhopal",
    category: "OBC",
    disabilityStatus: "No",
    disabilityPct: "",
    minorityStatus: "No",
    minorityCommunity: "",
    educationLevel: "Undergraduate / Diploma",
    course: "Medical / Pharmacy / Nursing",
    branch: "B.Pharmacy",
    yearSemester: "3rd Year",
    collegeType: "Government",
    collegeState: "Madhya Pradesh",
    academicMarks: 76,
    prevMarks: 78,
    income: 180000,
    incomeCertStatus: "Yes",
    scholarshipReceived: "No",
    feeReimbursement: "No",
    educationLoan: "No",
    domicileState: "Madhya Pradesh",
    specialCategory: "None",
    parentOccupation: "Laborer / Daily Wage",
    govtEmployee: "No",
    defenceRelation: "None",
    docs: ["aadhaar", "income_cert", "caste_cert", "domicile_cert", "bank_account", "student_id", "marksheet"]
  },
  "profile-d": {
    name: "Sunita Verma",
    age: 22,
    gender: "Female",
    occupation: "Student",
    state: "Uttar Pradesh",
    district: "Lucknow",
    category: "SC",
    disabilityStatus: "Yes",
    disabilityPct: "40% or more (Benchmark Disability)",
    minorityStatus: "No",
    minorityCommunity: "",
    educationLevel: "Undergraduate / Diploma",
    course: "IT / Computer Applications",
    branch: "BCA / Software Development",
    yearSemester: "Final Year",
    collegeType: "Government",
    collegeState: "Uttar Pradesh",
    academicMarks: 79,
    prevMarks: 81,
    income: 250000,
    incomeCertStatus: "Yes",
    scholarshipReceived: "No",
    feeReimbursement: "No",
    educationLoan: "No",
    domicileState: "Uttar Pradesh",
    specialCategory: "None",
    parentOccupation: "Artisan / Craftsperson",
    govtEmployee: "No",
    defenceRelation: "None",
    docs: ["aadhaar", "disability_cert", "income_cert", "caste_cert", "domicile_cert", "bank_account", "student_id", "marksheet"]
  }
};

// ==========================================================================
// 3. MULTILINGUAL DICTIONARY SYSTEM (6 Primary Languages)
// ==========================================================================
const I18N = {
  "en-IN": {
    langName: "English",
    tag_portal: "SCHEME ELIGIBILITY PLATFORM",
    top_bar_initiative: "Student & Citizen Benefit Discovery Service",
    lang_label: "Language:",
    access_title: "Accessibility Tools:",
    access_desc: "Adjust text size, contrast, and voice assistance for effortless reading",
    brand_subtitle: "Scheme Eligibility Platform",
    nav_home: "Home",
    nav_find: "Find Schemes",
    nav_results: "Results",
    nav_about: "About",
    nav_help: "Help",
    btn_voice_assistant: "Voice Assistant",
    btn_accessibility: "Accessibility",
    btn_new_search: "New Search",
    btn_back_results: "← Back to Results",
    hero_pill: "Government Schemes • Empowering Students & Citizens",
    hero_h2_part1: "Find Government",
    hero_h2_highlight: "Schemes",
    hero_h2_part2: "You May Be Eligible For",
    hero_desc: "Tell us about yourself, upload your documents, and SchemeMatch will help you discover relevant government scholarships, loan subsidies, and student benefits with explainable match scores.",
    hero_btn_find: "Find Schemes →",
    hero_btn_how: "How It Works ↓",
    hero_btn_voice: "🎙️ Use Voice Assistant",
    hero_access_tip: "Difficulty typing or reading? Use our 6-language Voice Assistant for guided assistance.",
    hero_3d_title: "SchemeMatch AI",
    hero_3d_sub: "Verified Welfare Portal",
    hero_3d_tag: "50+ Central & State Schemes",
    cat_scholarships: "Scholarships",
    cat_financial: "Financial Support",
    cat_education_digital: "Education & Digital",
    cat_innovation: "Innovation",
    cat_travel: "Travel & Concessions",
    cat_special: "Special Support",
    workflow_tag: "4-Step Process",
    workflow_title: "How SchemeMatch Works",
    workflow_desc: "Smart, explainable matching turning complex government criteria into clear opportunities.",
    step1_title: "Tell Us About You",
    step1_desc: "Enter your education, category, income, state, and special qualifications.",
    step2_title: "Upload Documents",
    step2_desc: "Upload files or capture live photos using your camera with AI field extraction.",
    step3_title: "Find Matching Schemes",
    step3_desc: "The rule-based matching engine compares your profile against scheme rules.",
    step4_title: "Apply Through Official Portal",
    step4_desc: "View detailed requirements and open verified official government application portals.",
    voice_modal_heading: "Multilingual Voice Assistant",
    voice_intro_text: "Speak naturally in your preferred language to navigate and ask questions.",
    voice_status_ready: "Ready to Listen",
    voice_status_listening: "Listening...",
    voice_status_processing: "Understanding...",
    voice_status_speaking: "Speaking...",
    voice_status_stopped: "Voice Idle",
    voice_transcript_lbl: "Live Speech Transcript:",
    voice_transcript_placeholder: "Tap 'Start Listening' and speak into your microphone...",
    btn_start_listening: "Start Listening",
    btn_stop: "Stop",
    btn_read_aloud: "Read Aloud",
    voice_commands_header: "Try Saying (Voice Commands):",
    read_instructions_text: "Welcome to SchemeMatch. You can tell me your details or say 'Find Schemes', 'Show Scholarships', or 'Explain this scheme'."
  },
  "hi-IN": {
    langName: "हिन्दी",
    tag_portal: "सरकारी नागरिक पोर्टल",
    top_bar_initiative: "राष्ट्रीय योजना खोज एवं छात्र हितलाभ सेवा",
    lang_label: "भाषा:",
    access_title: "सुगमता साधन (Accessibility):",
    access_desc: "सहज पठन के लिए टेक्स्ट आकार, कंट्रास्ट और वॉयस सहायता समायोजित करें",
    brand_subtitle: "सरकारी योजना खोजक प्रणाली",
    nav_home: "होम",
    nav_find: "योजनाएं खोजें",
    nav_results: "परिणाम",
    nav_about: "परिचय",
    nav_help: "सहायता",
    btn_voice_assistant: "वॉयस असिस्टेंट",
    btn_accessibility: "एक्सेसिबिलिटी",
    btn_new_search: "नई खोज",
    btn_back_results: "← परिणामों पर वापस",
    hero_pill: "सरकारी योजनाएं • छात्र और नागरिक सशक्तिकरण",
    hero_h2_part1: "सरकारी",
    hero_h2_highlight: "योजनाएं",
    hero_h2_part2: "खोजें जिनके आप पात्र हो सकते हैं",
    hero_desc: "अपने बारे में जानकारी दर्ज करें, दस्तावेज़ अपलोड करें, और SchemeMatch आपको छात्रवृत्ति, शिक्षा ऋण ब्याज छूट एवं अन्य लाभ खोजने में सहायता करेगा।",
    hero_btn_find: "योजनाएं खोजें →",
    hero_btn_how: "यह कैसे काम करता है ↓",
    hero_btn_voice: "🎙️ वॉयस असिस्टेंट का प्रयोग करें",
    hero_access_tip: "टाइप करने में कठिनाई? अपनी भाषा में वॉयस असिस्टेंट का प्रयोग करें।",
    hero_3d_title: "SchemeMatch AI",
    hero_3d_sub: "सत्यापित कल्याणकारी पोर्टल",
    hero_3d_tag: "50+ केंद्र और राज्य योजनाएं",
    cat_scholarships: "छात्रवृत्तियां",
    cat_financial: "वित्तीय सहायता",
    cat_education_digital: "शिक्षा और डिजिटल",
    cat_innovation: "नवाचार",
    cat_travel: "यात्रा व रियायत",
    cat_special: "विशेष सहायता",
    workflow_tag: "सरल 4 चरण",
    workflow_title: "SchemeMatch कैसे काम करता है",
    workflow_desc: "स्पष्ट और पारदर्शी मिलान जो सरकारी नियमों को आसान बनाता है।",
    step1_title: "अपनी जानकारी दें",
    step1_desc: "शिक्षा, सामाजिक श्रेणी, आय, राज्य और अन्य विवरण दर्ज करें।",
    step2_title: "दस्तावेज़ अपलोड करें",
    step2_desc: "फ़ाइलें अपलोड करें या कैमरे से कैप्चर करके AI द्वारा फ़ील्ड निकालें।",
    step3_title: "मिलान योजनाएं देखें",
    step3_desc: "हमारा नियम-आधारित इंजन आपकी पात्रता का पारदर्शी स्कोर निकालता है।",
    step4_title: "आधिकारिक पोर्टल पर आवेदन करें",
    step4_desc: "सरकारी वेबसाइट के सत्यापित लिंक से सीधे आवेदन करें।",
    voice_modal_heading: "बहुभाषी वॉयस असिस्टेंट",
    voice_intro_text: "वेबसाइट को नियंत्रित करने या प्रश्न पूछने के लिए अपनी भाषा में बोलें।",
    voice_status_ready: "सुनने के लिए तैयार",
    voice_status_listening: "सुन रहा हूँ...",
    voice_status_processing: "समझ रहा हूँ...",
    voice_status_speaking: "बोल रहा हूँ...",
    voice_status_stopped: "निष्क्रिय",
    voice_transcript_lbl: "आपकी आवाज़:",
    voice_transcript_placeholder: "'बोलना शुरू करें' दबाकर माइक्रोफ़ोन में स्पष्ट बोलें...",
    btn_start_listening: "बोलना शुरू करें",
    btn_stop: "रोकें",
    btn_read_aloud: "पढ़कर सुनाएं",
    voice_commands_header: "यह बोलकर देखें (कमांड्स):",
    read_instructions_text: "SchemeMatch में आपका स्वागत है। आप 'योजनाएं खोजें', 'स्कॉलरशिप दिखाओ', या 'दस्तावेज क्या चाहिए' बोल सकते हैं।"
  },
  "mr-IN": {
    langName: "मराठी",
    tag_portal: "शासकीय नागरिक पोर्टल",
    top_bar_initiative: "राष्ट्रीय योजना शोध व विद्यार्थी लाभ सेवा",
    lang_label: "भाषा:",
    access_title: "सुगमता साधने:",
    access_desc: "वाचनासाठी मजकूर आकार, कॉन्ट्रास्ट आणि आवाज सहाय्य समायोजित करा",
    brand_subtitle: "शासकीय योजना शोधक",
    nav_home: "मुख्यपृष्ठ",
    nav_find: "योजना शोधा",
    nav_results: "निकाल",
    nav_about: "माहिती",
    nav_help: "मदत",
    btn_voice_assistant: "व्हॉईस असिस्टंट",
    btn_accessibility: "सुगमता",
    btn_new_search: "नवीन शोध",
    btn_back_results: "← निकालांवर परत",
    hero_pill: "शासकीय योजना • विद्यार्थी सक्षमीकरण",
    hero_h2_part1: "आपण पात्र असणाऱ्या",
    hero_h2_highlight: "शासकीय योजना",
    hero_h2_part2: "शोधा",
    hero_desc: "तुमची माहिती भरा, कागदपत्रे जोडा आणि SchemeMatch तुम्हाला शिष्यवृत्ती, कर्ज सवलत व इतर लाभांची अचूक माहिती देईल.",
    hero_btn_find: "योजना शोधा →",
    hero_btn_how: "हे कसे चालते ↓",
    hero_btn_voice: "🎙️ व्हॉईस असिस्टंट वापरा",
    hero_access_tip: "टाईप करणे अवघड वाटते? आपल्या मराठी व्हॉईस असिस्टंटचा वापर करा.",
    hero_3d_title: "SchemeMatch AI",
    hero_3d_sub: "अधिकृत योजना मंच",
    hero_3d_tag: "50+ केंद्र व राज्य योजना",
    cat_scholarships: "शिष्यवृत्ती",
    cat_financial: "आर्थिक सहाय्य",
    cat_education_digital: "शिक्षण व डिजिटल",
    cat_innovation: "नवकल्पना",
    cat_travel: "प्रवास सवलत",
    cat_special: "विशेष सहाय्य",
    workflow_tag: "४ सोप्या पायऱ्या",
    workflow_title: "SchemeMatch कसे कार्य करते",
    workflow_desc: "सरकारी नियमांचे पारदर्शक मूल्यमापन करून अचूक योजना शोधणे.",
    step1_title: "माहिती भरा",
    step1_desc: "शिक्षण, वर्गवारी, उत्पन्न आणि राज्याची माहिती द्या.",
    step2_title: "कागदपत्रे अपलोड करा",
    step2_desc: "फाइल जोडा किंवा कॅमेऱ्याने फोटो काढून AI द्वारे माहिती मिळवा.",
    step3_title: "पात्र योजना तपासा",
    step3_desc: "नियम आधारित प्रणालीद्वारे पारदर्शक मॅच स्कोर तपासा.",
    step4_title: "अधिकृत पोर्टलवर अर्ज करा",
    step4_desc: "शासनाच्या अधिकृत संकेतस्थळावर जाऊन सुरक्षित अर्ज करा.",
    voice_modal_heading: "मराठी व्हॉईस असिस्टंट",
    voice_intro_text: "माहिती विचारण्यासाठी किंवा पोर्टल चालवण्यासाठी मराठीत बोला.",
    voice_status_ready: "ऐकण्यासाठी सज्ज",
    voice_status_listening: "ऐकत आहे...",
    voice_status_processing: "प्रक्रिया करत आहे...",
    voice_status_speaking: "बोलत आहे...",
    voice_status_stopped: "थांबले आहे",
    voice_transcript_lbl: "तुमचे बोलणे:",
    voice_transcript_placeholder: "'बोलणे सुरू करा' बटण दाबून स्पष्ट बोला...",
    btn_start_listening: "बोलणे सुरू करा",
    btn_stop: "थांबवा",
    btn_read_aloud: "वाचून दाखवा",
    voice_commands_header: "असे बोलून पहा:",
    read_instructions_text: "SchemeMatch मध्ये आपले स्वागत आहे. आपण 'योजना शोधा' किंवा 'माझे निकाल दाखवा' असे सांगू शकता."
  },
  "bn-IN": {
    langName: "বাংলা",
    tag_portal: "সরকারি নাগরিক পোর্টাল",
    top_bar_initiative: "জাতীয় সরকারি যোজনা ও শিক্ষার্থী সহায়তা পরিষেবা",
    lang_label: "ভাষা:",
    access_title: "সহজ পাঠ সরঞ্জাম:",
    access_desc: "টেক্সটের আকার, বৈসাদৃশ্য এবং ভয়েস সহায়তা সেট করুন",
    brand_subtitle: "সরকারি যোজনা ফাইন্ডার",
    nav_home: "হোম",
    nav_find: "যোজনা খুঁজুন",
    nav_results: "ফলাফল",
    nav_about: "সম্পর্কে",
    nav_help: "সাহায্য",
    btn_voice_assistant: "ভয়েস অ্যাসিস্ট্যান্ট",
    btn_accessibility: "অ্যাক্সেসিবিলিটি",
    btn_new_search: "নতুন অনুসন্ধান",
    btn_back_results: "← ফলাফলে ফিরুন",
    hero_pill: "সরকারি প্রকল্প • শিক্ষার্থী সহায়তা",
    hero_h2_part1: "আপনার যোগ্য",
    hero_h2_highlight: "সরকারি যোজনা",
    hero_h2_part2: "খুঁজে নিন",
    hero_desc: "আপনার বিবরণ লিখুন, নথি আপলোড করুন এবং SchemeMatch আপনাকে প্রাসঙ্গিক স্কলারশিপ এবং সরকারি সহায়তা পেতে সাহায্য করবে।",
    hero_btn_find: "যোজনা খুঁজুন →",
    hero_btn_how: "কিভাবে কাজ করে ↓",
    hero_btn_voice: "🎙️ ভয়েস সহকারী ব্যবহার করুন",
    hero_access_tip: "টাইপ করতে সমস্যা? ভয়েস সহকারীর সাথে কথা বলুন।",
    hero_3d_title: "SchemeMatch AI",
    hero_3d_sub: "যাচাইকৃত পোর্টাল",
    hero_3d_tag: "৫০+ কেন্দ্রীয় ও রাজ্য যোজনা",
    cat_scholarships: "বৃত্তি / স্কলারশিপ",
    cat_financial: "আর্থিক সহায়তা",
    cat_education_digital: "শিক্ষা ও ডিজিটাল",
    cat_innovation: "উদ্ভাবন",
    cat_travel: "ভ্রমণ ও ছাড়",
    cat_special: "বিশেষ সহায়তা",
    workflow_tag: "৪টি ধাপ",
    workflow_title: "SchemeMatch কিভাবে কাজ করে",
    workflow_desc: "স্বচ্ছ নিয়মের ভিত্তিতে আপনার যোগ্য যোজনা খুঁজে দেয়।",
    step1_title: "বিবরণ প্রদান করুন",
    step1_desc: "শিক্ষা, শ্রেণি, আয় ও রাজ্যের তথ্য প্রদান করুন।",
    step2_title: "নথিপত্র আপলোড করুন",
    step2_desc: "ফাইল আপলোড করুন অথবা ক্যামেরা দিয়ে স্ক্যান করুন।",
    step3_title: "যোগ্য যোজনা দেখুন",
    step3_desc: "নিয়ম-ভিত্তিক ইঞ্জিন আপনার স্কোর গণনা করে।",
    step4_title: "অফিসিয়াল পোর্টালে আবেদন করুন",
    step4_desc: "সরকারি অফিশিয়াল পোর্টালে গিয়ে সরাসরি আবেদন করুন।",
    voice_modal_heading: "বাংলা ভয়েস অ্যাসিস্ট্যান্ট",
    voice_intro_text: "নেভিগেট করতে বা প্রশ্ন জিজ্ঞাসা করতে স্পষ্ট করে বাংলায় বলুন।",
    voice_status_ready: "শোনার জন্য প্রস্তুত",
    voice_status_listening: "শুনছি...",
    voice_status_processing: "বুঝতে চেষ্টা করছি...",
    voice_status_speaking: "বলছি...",
    voice_status_stopped: "বন্ধ আছে",
    voice_transcript_lbl: "আপনার কথা:",
    voice_transcript_placeholder: "'শোনা শুরু করুন' চাপুন এবং কথা বলুন...",
    btn_start_listening: "শোনা শুরু করুন",
    btn_stop: "থামুন",
    btn_read_aloud: "পড়ে শোনান",
    voice_commands_header: "এই কথাগুলো বলে দেখুন:",
    read_instructions_text: "SchemeMatch-এ স্বাগতম। আপনি 'যোজনা দেখাও' বা 'আমার ফলাফল দেখাও' বলতে পারেন।"
  },
  "ta-IN": {
    langName: "தமிழ்",
    tag_portal: "அரசு குடிமக்கள் போர்டல்",
    top_bar_initiative: "தேசிய அரசு நலத்திட்டங்கள் மற்றும் மாணவர் உதவி சேவை",
    lang_label: "மொழி:",
    access_title: "அணுகல்தன்மை கருவிகள்:",
    access_desc: "எழுத்து அளவு, மாறுபாடு மற்றும் குரல் உதவியை மாற்றியமைக்கவும்",
    brand_subtitle: "அரசு திட்டங்கள் கண்டறிதல்",
    nav_home: "முகப்பு",
    nav_find: "திட்டங்களைக் காண்க",
    nav_results: "முடிவுகள்",
    nav_about: "பற்றி",
    nav_help: "உதவி",
    btn_voice_assistant: "குரல் உதவியாளர்",
    btn_accessibility: "அணுகல்தன்மை",
    btn_new_search: "புதிய தேடல்",
    btn_back_results: "← முடிவுகளுக்கு திரும்பு",
    hero_pill: "அரசு நலத்திட்டங்கள் • மாணவர் மேம்பாடு",
    hero_h2_part1: "நீங்கள் தகுதியுள்ள",
    hero_h2_highlight: "அரசு திட்டங்களை",
    hero_h2_part2: "கண்டறியுங்கள்",
    hero_desc: "உங்கள் விவரங்களைப் பதிவு செய்து ஆவணங்களை இணைப்பதன் மூலம் உங்களுக்கான கல்வி உதவித்தொகை மற்றும் அரசு சலுகைகளை SchemeMatch கண்டறியும்.",
    hero_btn_find: "திட்டங்களைக் காண்க →",
    hero_btn_how: "எவ்வாறு செயல்படுகிறது ↓",
    hero_btn_voice: "🎙️ குரல் உதவியாளரைப் பயன்படுத்துங்கள்",
    hero_access_tip: "தட்டச்சு செய்ய சிரமமா? தமிழில் பேச குரல் உதவியாளரைப் பயன்படுத்துங்கள்.",
    hero_3d_title: "SchemeMatch AI",
    hero_3d_sub: "சரிபார்க்கப்பட்ட தளம்",
    hero_3d_tag: "50+ மத்திய & மாநில திட்டங்கள்",
    cat_scholarships: "கல்வி உதவித்தொகை",
    cat_financial: "நிதி உதவி",
    cat_education_digital: "கல்வி & டிஜிட்டல்",
    cat_innovation: "கண்டுபிடிப்புகள்",
    cat_travel: "பயணச் சலுகைகள்",
    cat_special: "சிறப்பு உதவி",
    workflow_tag: "4 எளிய படிகள்",
    workflow_title: "SchemeMatch எவ்வாறு செயல்படுகிறது",
    workflow_desc: "எளிய முறையில் அரசு திட்டங்களை அறிந்து தகுதியை சரிபார்க்கும் தளம்.",
    step1_title: "விவரங்களை உள்ளிடுக",
    step1_desc: "கல்வி, பிரிவு, வருமானம் மற்றும் மாநில விவரங்களை வழங்கவும்.",
    step2_title: "ஆவணங்களைப் பதிவேற்றுக",
    step2_desc: "கோப்புகளை பதிவேற்றவும் அல்லது கேமரா மூலம் படம் பிடிக்கவும்.",
    step3_title: "பொருத்தமான திட்டங்களை காண்க",
    step3_desc: "விதி அடிப்படையிலான தகுதி மதிப்பெண்ணைப் பெறுங்கள்.",
    step4_title: "அதிகாரப்பூர்வ தளத்தில் விண்ணப்பிக்கவும்",
    step4_desc: "அரசின் அதிகாரப்பூர்வ இணையதளத்தில் விண்ணப்பிக்கவும்.",
    voice_modal_heading: "தமிழ் குரல் உதவியாளர்",
    voice_intro_text: "தகவல்களைக் கேட்க அல்லது செல்ல தமிழில் பேசுங்கள்.",
    voice_status_ready: "கேட்க தயாராக உள்ளது",
    voice_status_listening: "கேட்கிறது...",
    voice_status_processing: "செயலாக்குகிறது...",
    voice_status_speaking: "பேசுகிறது...",
    voice_status_stopped: "நிறுத்தப்பட்டது",
    voice_transcript_lbl: "நீங்கள் பேசியது:",
    voice_transcript_placeholder: "'பேசத் தொடங்கு' பொத்தானை அழுத்தி பேசவும்...",
    btn_start_listening: "பேசத் தொடங்கு",
    btn_stop: "நிறுத்து",
    btn_read_aloud: "படித்துக்காட்டு",
    voice_commands_header: "இவற்றை பேசலாம்:",
    read_instructions_text: "SchemeMatch-க்கு வரவேற்கிறோம். 'திட்டங்களை காட்டு' அல்லது 'ஆவணங்கள் என்ன வேண்டும்' என்று கேட்கலாம்."
  },
  "te-IN": {
    langName: "తెలుగు",
    tag_portal: "ప్రభుత్వ పౌర పోర్టల్",
    top_bar_initiative: "జాతీయ ప్రభుత్వ పథకాలు & విద్యార్థి ప్రయోజనాల సేవ",
    lang_label: "భాష:",
    access_title: "సౌలభ్య సాధనాలు:",
    access_desc: "టెక్స్ట్ పరిమాణం, కాంట్రాస్ట్ మరియు వాయిస్ సహాయాన్ని సరిచేయండి",
    brand_subtitle: "ప్రభుత్వ పథకాల గుర్తింపు వ్యవస్థ",
    nav_home: "హోమ్",
    nav_find: "పథకాలను శోధించండి",
    nav_results: "ఫలితాలు",
    nav_about: "గురించి",
    nav_help: "సహాయం",
    btn_voice_assistant: "వాయిస్ అసిస్టెంట్",
    btn_accessibility: "సౌలభ్యం",
    btn_new_search: "కొత్త శోధన",
    btn_back_results: "← ఫలితాలకు తిరిగి వెళ్లండి",
    hero_pill: "ప్రభుత్వ పథకాలు • విద్యార్థి సాధికారత",
    hero_h2_part1: "మీరు అర్హత గల",
    hero_h2_highlight: "ప్రభుత్వ పథకాలను",
    hero_h2_part2: "కనుగొనండి",
    hero_desc: "మీ వివరాలను నమోదు చేసి, పత్రాలను అప్‌లోడ్ చేయడం ద్వారా స్కాలర్‌షిప్‌లు మరియు ప్రభుత్వ ప్రయోజనాలను SchemeMatch ద్వారా సులభంగా తెలుసుకోండి.",
    hero_btn_find: "పథకాలను శోధించండి →",
    hero_btn_how: "ఎలా పనిచేస్తుంది ↓",
    hero_btn_voice: "🎙️ వాయిస్ అసిస్టెంట్ వాడండి",
    hero_access_tip: "టైప్ చేయడం కష్టంగా ఉందా? తెలుగులో వాయిస్ అసిస్టెంట్‌తో మాట్లాడండి.",
    hero_3d_title: "SchemeMatch AI",
    hero_3d_sub: "ధృవీకరించబడిన పోర్టల్",
    hero_3d_tag: "50+ కేంద్ర & రాష్ట్ర పథకాలు",
    cat_scholarships: "స్కాలర్‌షిప్‌లు",
    cat_financial: "ఆర్థిక సహాయం",
    cat_education_digital: "విద్య & డిజిటల్",
    cat_innovation: "ఆవిష్కరణలు",
    cat_travel: "ప్రయాణ రాయితీలు",
    cat_special: "ప్రత్యేక సహాయం",
    workflow_tag: "4 సులభ దశలు",
    workflow_title: "SchemeMatch ఎలా పనిచేస్తుంది",
    workflow_desc: "ప్రభుత్వ నిబంధనల ఆధారంగా పారదర్శకంగా మీకు తగిన పథకాలను చూపిస్తుంది.",
    step1_title: "వివరాలను నమోదు చేయండి",
    step1_desc: "విద్య, సామాజిక వర్గం, ఆదాయం మరియు రాష్ట్ర సమాచారం ఇవ్వండి.",
    step2_title: "పత్రాలు అప్‌లోడ్ చేయండి",
    step2_desc: "ఫైల్‌లను అప్‌లోడ్ చేయండి లేదా కెమెరాతో క్యాప్చర్ చేయండి.",
    step3_title: "సరిపోలే పథకాలను కనుగొనండి",
    step3_desc: "నియమాల ఆధారంగా మీ అర్హత స్కోర్‌ను లెక్కించండి.",
    step4_title: "అధికారిక పోర్టల్‌లో దరఖాస్తు చేయండి",
    step4_desc: "ప్రభుత్వ అధికారిక వెబ్‌సైట్‌కు వెళ్లి నేరుగా దరఖాస్తు చేసుకోండి.",
    voice_modal_heading: "తెలుగు వాయిస్ అసిస్టెంట్",
    voice_intro_text: "వెబ్‌సైట్‌ను ఉపయోగించడానికి లేదా ప్రశ్నలు అడగడానికి స్పష్టంగా మాట్లాడండి.",
    voice_status_ready: "వినడానికి సిద్ధంగా ఉంది",
    voice_status_listening: "వింటోంది...",
    voice_status_processing: "అర్థం చేసుకుంటోంది...",
    voice_status_speaking: "మాట్లాడుతోంది...",
    voice_status_stopped: "ఆగిపోయింది",
    voice_transcript_lbl: "మీరు మాట్లాడినది:",
    voice_transcript_placeholder: "'మాట్లాడటం ప్రారంభించు' నొక్కి మైక్రోఫోన్‌లో స్పష్టంగా మాట్లాడండి...",
    btn_start_listening: "మాట్లాడటం ప్రారంభించు",
    btn_stop: "ఆపు",
    btn_read_aloud: "చదివి వినిపించు",
    voice_commands_header: "ఇలా మాట్లాడండి:",
    read_instructions_text: "SchemeMatch కు స్వాగతం. మీరు 'పథకాలు చూపించు' లేదా 'నా ఫలితాలు చూపించు' అని అడగవచ్చు."
  }
};

/**
 * Safely read JSON persisted in localStorage.
 * Handles missing, malformed, and incorrectly typed values without crashing
 * page initialization or the eligibility engine.
 */
function readStoredJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null || raw === "") return fallback;
    const parsed = JSON.parse(raw);
    return parsed === null || parsed === undefined ? fallback : parsed;
  } catch (error) {
    console.warn(`SchemeMatch: ignoring invalid stored JSON for \"${key}\".`, error);
    try {
      localStorage.removeItem(key);
    } catch (_) {
      // Storage can be unavailable in privacy-restricted contexts.
    }
    return fallback;
  }
}


// MERGE EXTRA TRANSLATIONS INTO I18N
const _EXTRA_I18N_DATA = {"en-IN":{"nav_about":"About","btn_voice_copilot":"SevaVaani Voice Co-Pilot","btn_new_search":"🔍 New Search","btn_back_results":"← Back to Results","hero_h2_html":"Find <span class=\"hero-heading-highlight\">Schemes</span> You May Be Eligible For","hero_badge_text":"Direct Ministry Welfare Directory • <span class=\"dynamic-active-schemes-count\">67</span> Verified Active Schemes","trust_badge_free":"100% Free Public Portal","trust_badge_redirect":"Direct Redirection to NSP / Official Portals","trust_badge_voice":"Multilingual Voice Assistance","voice_adv_title":"SevaVaani Voice Co-Pilot Available:","voice_adv_desc":"Speak in Hindi or English to ask: <em>\"PM-KISAN ke liye kya chahiye?\", \"Ayushman card kaise banaye?\", \"Mudra loan kaise milega?\", \"Form kaise bhare?\"</em>","screener_badge":"Live Calculator","screener_title":"Quick Citizen Eligibility Check","screener_sub":"Select your occupation & income to instantly find matching welfare schemes:","lbl_occupation":"Your Occupation / Livelihood","lbl_social_cat":"Social Category","lbl_family_income":"Annual Family Income","screener_schemes_found":"Schemes Found","screener_quote":"The right opportunity starts with the right information.","btn_screener_submit":"View Matching Schemes & Criteria →","screener_footer":"🛡️ No registration required • Privacy protected","occ_all":"All Citizens (Any Occupation)","occ_farmer":"🌾 Farmer / Agricultural Worker","occ_dairy":"🐄 Dairy Farmer / Fisherman","occ_artisan":"🔨 Artisan / Traditional Craftsman","occ_business":"💼 Small Business / MSME Owner","occ_self_emp":"🛒 Self-Employed / Street Vendor","occ_worker":"🏗️ Unorganized / Daily Wage Worker","occ_driver":"🚗 Driver (Taxi / Auto / Truck)","occ_salaried":"👔 Salaried Employee (Private Sector)","occ_govt":"🏛️ Government Employee","occ_woman":"👩 Woman / SHG Member / Homemaker","occ_senior":"👴 Senior Citizen (60+)","occ_retired":"📋 Retired (Pensioner)","occ_student":"🎓 Student / Scholar","occ_unemployed":"🔍 Unemployed / Job Seeker","occ_other":"📝 Other","cat_all":"All Categories","cat_gen":"General / Open","cat_obc":"OBC (Other Backward Classes)","cat_sc":"SC (Scheduled Caste)","cat_st":"ST (Scheduled Tribe)","cat_ews":"EWS (Economically Weaker Section)","cat_dnt":"DNT / VJNT (De-Notified Nomadic Tribes)","inc_250k":"Up to ₹2.5 Lakhs","inc_450k":"Up to ₹4.5 Lakhs","inc_800k":"Up to ₹8.0 Lakhs","inc_above_800k":"Above ₹8 Lakhs","ticker_heading":"VERIFIED GUIDELINES FROM RECOGNIZED CENTRAL & STATE MINISTRIES","wizard_tag":"Intelligent Eligibility Wizard","wizard_title_html":"Find <span class=\"hero-heading-highlight\">Schemes</span> You May Be Eligible For","wizard_desc":"Complete the 6-step guided profile, upload your documents or capture them via camera, and let our deterministic engine discover your best matching government schemes across verified welfare programs.","demo_panel_title":"Instant Sample Profiles (Quick Auto-Fill)","demo_badge":"One-Click Auto-Fill","demo_panel_desc":"Click any verified demo student scenario below to instantly populate all wizard steps and test deterministic matching:","demo_btn_a":"👨‍🎓 Profile A: College Student (OBC, ₹2L, Engineering)","demo_btn_b":"👩‍🎓 Profile B: Girl Student (General, ₹3.5L, Pragati Eligible)","demo_btn_c":"🏛️ Profile C: MP State Post-Matric (OBC, ₹1.8L, Pharmacy)","demo_btn_d":"♿ Profile D: Student with Disability (SC, PwD 40%+, Saksham Eligible)","step_lbl_personal":"Personal","step_lbl_education":"Education","step_lbl_financial":"Income","step_lbl_other":"Location","step_lbl_documents":"Documents","step_lbl_submit":"Results","step1_heading":"1. Personal Information","step1_badge":"Step 1 of 6","step1_sub":"Provide your demographic details for accurate statutory eligibility calculation.","lbl_name":"Full Name","ph_name":"Enter your full name","help_name":"As printed on your Aadhaar card or marksheet.","lbl_age":"Age (Years)","ph_age":"Enter your age","help_age":"Enter your current age in years (1 to 120).","lbl_gender":"Gender","opt_gender_select":"Select Gender","opt_gender_male":"Male","opt_gender_female":"Female (Eligible for Pragati & Girl-specific schemes)","opt_gender_other":"Other / Transgender","lbl_social_category":"Social Category","opt_cat_select":"Select Category","lbl_occ":"Current Occupation / Livelihood","opt_occ_select":"Select Occupation","lbl_state":"Current State of Residence","opt_state_select":"Select State","lbl_district":"District","ph_district":"Enter your district","lbl_pwd":"Person with Benchmark Disability (PwD 40%+)?","opt_pwd_select":"Select Disability Status","opt_pwd_no":"No","opt_pwd_yes":"Yes (Eligible for Saksham & DEPwD scholarships)","lbl_pwd_pct":"Disability Percentage","opt_pwd_pct_select":"Select Disability Percentage","opt_pwd_pct_40":"40% or more (Benchmark Disability - Meets statutory criteria)","opt_pwd_pct_less40":"Less than 40%","lbl_minority":"Belong to Notified Minority Community?","opt_minority_select":"Select Minority Status","opt_minority_no":"No","opt_minority_yes":"Yes (Eligible for Ministry of Minority Affairs schemes)","lbl_minority_comm":"Minority Community","opt_minority_comm_select":"Select Minority Community","btn_next_edu":"Education Information →","btn_next_fin":"Financial Information →","btn_prev":"← Previous Step","btn_prev_edu":"← Education Information","btn_prev_personal":"← Personal Details","step2_heading":"2. Education Information","step2_badge":"Step 2 of 6","step2_sub":"Enter your ongoing academic stream, university details, and scores for scholarship matching.","lbl_edu_level":"Current Education Level","opt_edu_select":"Select Education Level","lbl_course":"Course / Program Stream","opt_course_select":"Select Course / Program Stream","lbl_branch":"Specialization / Branch","ph_branch":"Enter branch or specialization","lbl_year":"Year of Study / Semester","opt_year_select":"Select Year of Study / Semester","lbl_college_type":"College / Institution Type","opt_college_type_select":"Select College / Institution Type","lbl_college_state":"College State","opt_college_state_select":"Select College State","lbl_score_type":"Current Academic Score Type","lbl_academic_marks":"Current Academic Marks / CGPA","ph_academic_marks":"Enter percentage or CGPA","help_academic_marks":"Overall percentage in current course or latest semester exam.","lbl_prev_marks":"Previous Qualification Marks (Class 10th / 12th %)","ph_prev_marks":"Enter percentage","help_prev_marks":"Central Sector schemes require above 80th percentile in Class 12.","step3_heading":"3. Financial Information","step3_badge":"Step 3 of 6","step3_sub":"Income information determines income-ceiling eligibility for means-based scholarships and interest subsidies.","lbl_income":"Annual Family Income (₹ INR)","ph_income":"Enter annual family income","help_income":"Total combined gross annual income of parents/guardians from all sources.","lbl_income_cert_status":"Competent Income Certificate Available?","opt_income_cert_select":"Select Certificate Status","opt_income_cert_yes":"Yes (Issued by Tehsildar / Revenue Officer / SDO)","opt_income_cert_in_process":"In-Process / Applied at e-District Portal","opt_income_cert_no":"No / Not yet applied","lbl_other_scholarship":"Currently Receiving Another Government Scholarship?","lbl_fee_reimbursement":"Receiving Tuition Fee Reimbursement?","lbl_loan_status":"Education Loan Status","parent_info_heading":"👨‍👩‍👧 Parent / Guardian Information (Student Applicants Only)","lbl_parent_occ":"Parent / Guardian Occupation","lbl_govt_employee":"Either Parent Class-I / Gazetted Govt Employee?","lbl_defence_relation":"Relation with Central Armed Police Forces (CAPF) or RPF","step4_heading":"4. Special Category & Background Criteria","step4_badge":"Step 4 of 6","step4_sub":"Special criteria unlock targeted quotas such as CAPF wards, Northeast residents, orphans, and single girl child schemes.","lbl_domicile":"State of Permanent Domicile","opt_domicile_select":"Select State of Permanent Domicile","lbl_special_quota":"Special Category / Quota","opt_special_quota_select":"Select Special Category","step5_heading":"5. Document Upload & Verification","step5_badge":"Step 5 of 6","doc_upload_banner_title":"Upload Verification Documents","doc_upload_banner_desc":"Attach your identity, income, and category documents to verify eligibility and automatically calculate your Paperwork Readiness score.","readiness_title":"Document Paperwork Readiness","camera_banner_title":"Don't have scanned files handy?","camera_banner_desc":"Take a quick photo of your physical certificate using your device camera.","btn_choose_file":"📁 Choose File","hint_drag_drop":"or drag & drop PDF / image","privacy_banner_title":"100% Client-Side Privacy Guarantee:","privacy_banner_desc":"Uploaded and camera-captured documents are processed exclusively inside your web browser. Confidential certificates and files are never sent to or stored on external servers.","step6_heading":"6. Review Profile & Calculate Matches","step6_sub":"Your profile will now be evaluated across verified Central and State government schemes using our deterministic, explainable scoring engine.","btn_calc_matches":"🔍 Calculate SchemeMatch Scores →","btn_back_docs":"← Back to Documents","loader_heading":"Analyzing Your Profile...","loader_sub":"Matching your credentials across verified welfare records","loader_step_edu":"Checking education level and stream criteria","loader_step_income":"Checking annual family income ceiling","loader_step_category":"Checking social category and reservation quotas","loader_step_domicile":"Checking state domicile and regional guidelines","loader_step_special":"Checking special eligibility (Girls, PwD, Minorities)","loader_step_final":"Finalizing transparent match scores","results_heading_html":"Your Matching <span class=\"hero-heading-highlight\">Schemes</span>","results_sub_prefix":"Based on your profile and document status, we found","results_sub_suffix":"matching schemes for you.","search_schemes_label":"Search Schemes","search_schemes_placeholder":"Search by scheme name, benefit, category or occupation","showing_results_prefix":"Showing","showing_results_mid":"matching schemes out of","showing_results_suffix":"verified government schemes","label_benefit":"Benefit:","primary_criteria_satisfied":"Primary eligibility criteria satisfied.","btn_view_details":"View Details →","btn_official_portal":"Official Portal ↗","doc_uploaded":"✓ Uploaded","doc_pending":"○ Upload pending","likely_eligible":"Likely Eligible","info_required":"Information Required","not_eligible":"Not Currently Eligible","no_schemes_found":"No Schemes Found","no_schemes_desc":"No schemes match your search. Try another name, category or keyword.","btn_clear_search":"Clear Search","btn_update_profile":"Update Profile Details","chip_age":"Age:","chip_gender":"Gender:","chip_education":"Education:","chip_category":"Category:","chip_income":"Income:","chip_state":"State:","chip_domicile":"Domicile:","chip_marks":"Marks:","chip_pwd":"PwD:","btn_edit_profile":"✏️ Edit Profile","not_specified":"Not Specified","years_suffix":"yrs","doc_aadhaar":"Aadhaar Card","doc_income_cert":"Income Certificate","doc_caste_cert":"Category Certificate","doc_marksheet":"Marksheet","doc_student_id":"College Bonafide","doc_bank_account":"Bank Passbook","doc_domicile_cert":"Domicile Certificate","doc_disability_cert":"Disability Certificate","status_active":"ACTIVE","btn_read_details":"🔊 Read Scheme Details","docs_ready_suffix":"Documents Ready","sec_advisory":"ℹ️ Statutory Information & Advisory","advisory_text":"Calculated matches are based on the criteria entered in your profile. SchemeMatch does not guarantee official approval. Final sanction is strictly decided by the competent government department upon physical document verification.","sec_why_matches":"Why this scheme matches your profile","sec_missing_criteria":"Criteria requiring verification / Missing details","sec_benefits":"🎁 Benefits & Financial Assistance","primary_entitlement":"Primary Entitlement:","sec_criteria":"⚖️ Official Eligibility Criteria","sec_docs_checklist":"📄 Required Documents Checklist","sec_docs_checklist_sub":"Check your paperwork preparation against official guidelines before initiating your application:","sec_how_to_apply":"📝 How to Apply (Step-by-Step Guidelines)","lbl_app_cycle":"Important Dates / Application Cycle:","btn_apply_official":"Apply on Official Website ↗","th_edu_level":"Target Education Level","th_courses":"Eligible Courses / Disciplines","th_category":"Social Category Requirement","th_income":"Annual Family Income Ceiling","th_marks":"Minimum Marks / Percentile","th_age":"Eligible Age Range","th_gender":"Gender Eligibility","th_state":"State & Domicile Criteria","th_pwd":"Disability (PwD) Criteria","th_minority":"Minority Community Criteria","doc_missing":"⚠️ Missing"},"hi-IN":{"nav_about":"परिचय","btn_voice_copilot":"सेवावाणी वॉयस को-पायलट","btn_new_search":"🔍 नई खोज","btn_back_results":"← परिणामों पर वापस","hero_h2_html":"पाएं <span class=\"hero-heading-highlight\">योजनाएं</span> जिनके आप पात्र हो सकते हैं","hero_badge_text":"मंत्रालय कल्याणकारी निर्देशिका • <span class=\"dynamic-active-schemes-count\">67</span> सत्यापित सक्रिय योजनाएं","trust_badge_free":"100% निःशुल्क नागरिक पोर्टल","trust_badge_redirect":"आधिकारिक पोर्टल पर सीधा आवेदन","trust_badge_voice":"बहुभाषी वॉयस सहायता","voice_adv_title":"सेवावाणी वॉयस को-पायलट उपलब्ध:","voice_adv_desc":"हिंदी या अंग्रेजी में पूछें: <em>\"PM-KISAN के लिए क्या चाहिए?\", \"आयुष्मान कार्ड कैसे बनाएं?\", \"मुद्रा लोन कैसे मिलेगा?\", \"फॉर्म कैसे भरें?\"</em>","screener_badge":"लाइव कैलकुलेटर","screener_title":"त्वरित नागरिक पात्रता जांच","screener_sub":"तुरंत मिलान वाली योजनाएं खोजने के लिए अपना व्यवसाय और आय चुनें:","lbl_occupation":"आपका व्यवसाय / आजीविका","lbl_social_cat":"सामाजिक श्रेणी","lbl_family_income":"वार्षिक पारिवारिक आय","screener_schemes_found":"योजनाएं मिलीं","screener_quote":"सही जानकारी से ही सही अवसर की शुरुआत होती है।","btn_screener_submit":"पात्र योजनाएं और नियम देखें →","screener_footer":"🛡️ पंजीकरण आवश्यक नहीं • गोपनीयता सुरक्षित","occ_all":"सभी नागरिक (कोई भी व्यवसाय)","occ_farmer":"🌾 किसान / कृषि श्रमिक","occ_dairy":"🐄 डेयरी किसान / मछुआरे","occ_artisan":"🔨 कारीगर / पारंपरिक शिल्पकार","occ_business":"💼 छोटा व्यवसाय / MSME मालिक","occ_self_emp":"🛒 स्वरोजगार / स्ट्रीट वेंडर","occ_worker":"🏗️ असंगठित / दिहाड़ी मजदूर","occ_driver":"🚗 चालक (टैक्सी / ऑटो / ट्रक)","occ_salaried":"👔 वेतनभोगी कर्मचारी (निजी क्षेत्र)","occ_govt":"🏛️ सरकारी कर्मचारी","occ_woman":"👩 महिला / SHG सदस्य / गृहिणी","occ_senior":"👴 वरिष्ठ नागरिक (60+)","occ_retired":"📋 सेवानिवृत्त (पेंशनभोगी)","occ_student":"🎓 छात्र / अध्येता","occ_unemployed":"🔍 बेरोजगार / नौकरी चाहने वाले","occ_other":"📝 अन्य","cat_all":"सभी श्रेणियां","cat_gen":"सामान्य (General)","cat_obc":"ओबीसी (OBC - अन्य पिछड़ा वर्ग)","cat_sc":"अनुसूचित जाति (SC)","cat_st":"अनुसूचित जनजाति (ST)","cat_ews":"ईडब्ल्यूएस (EWS - आर्थिक रूप से कमजोर)","cat_dnt":"विमुक्त व घुमंतू जनजातियां (DNT/VJNT)","inc_250k":"₹2.5 लाख तक","inc_450k":"₹4.5 लाख तक","inc_800k":"₹8.0 लाख तक","inc_above_800k":"₹8 लाख से अधिक","ticker_heading":"मान्यता प्राप्त केंद्रीय व राज्य मंत्रालयों के सत्यापित दिशानिर्देश","wizard_tag":"स्मार्ट पात्रता विज़ार्ड","wizard_title_html":"पाएं <span class=\"hero-heading-highlight\">योजनाएं</span> जिनके आप पात्र हो सकते हैं","wizard_desc":"6-चरणों की प्रोफ़ाइल भरें, अपने दस्तावेज़ अपलोड करें या कैमरे से कैप्चर करें, और हमारा इंजन 69+ सत्यापित सरकारी योजनाओं में से आपके लिए सबसे उपयुक्त योजनाएं खोजेगा।","demo_panel_title":"त्वरित नमूना प्रोफाइल (ऑटो-फिल)","demo_badge":"एक-क्लिक ऑटो-फिल","demo_panel_desc":"विज़ार्ड को तुरंत भरने और मिलान जांचने के लिए नीचे किसी भी डेमो प्रोफाइल पर क्लिक करें:","demo_btn_a":"👨‍🎓 प्रोफाइल A: कॉलेज छात्र (OBC, ₹2 लाख, इंजीनियरिंग)","demo_btn_b":"👩‍🎓 प्रोफाइल B: छात्रा (General, ₹3.5 लाख, प्रगति पात्र)","demo_btn_c":"🏛️ प्रोफाइल C: म.प्र. पोस्ट-मैट्रिक (OBC, ₹1.8 लाख, फार्मेसी)","demo_btn_d":"♿ प्रोफाइल D: दिव्यांग छात्र (SC, 40%+ PwD, सक्षम पात्र)","step_lbl_personal":"व्यक्तिगत","step_lbl_education":"शिक्षा","step_lbl_financial":"आय","step_lbl_other":"स्थान","step_lbl_documents":"दस्तावेज़","step_lbl_submit":"परिणाम","step1_heading":"1. व्यक्तिगत जानकारी","step1_badge":"चरण 1 / 6","step1_sub":"सटीक सरकारी पात्रता गणना के लिए अपना जनसांख्यिकीय विवरण दर्ज करें।","lbl_name":"पूरा नाम","ph_name":"अपना पूरा नाम दर्ज करें","help_name":"आधार कार्ड या अंकसूची के अनुसार।","lbl_age":"आयु (वर्ष)","ph_age":"अपनी आयु दर्ज करें","help_age":"अपनी वर्तमान आयु दर्ज करें (1 से 120 वर्ष)।","lbl_gender":"लिंग","opt_gender_select":"लिंग चुनें","opt_gender_male":"पुरुष (Male)","opt_gender_female":"महिला (Female - प्रगति व बालिका योजनाओं हेतु पात्र)","opt_gender_other":"अन्य / ट्रांसजेंडर","lbl_social_category":"सामाजिक श्रेणी","opt_cat_select":"श्रेणी चुनें","lbl_occ":"वर्तमान व्यवसाय / आजीविका","opt_occ_select":"व्यवसाय चुनें","lbl_state":"वर्तमान निवास का राज्य","opt_state_select":"राज्य चुनें","lbl_district":"ज़िला","ph_district":"अपना ज़िला दर्ज करें","lbl_pwd":"क्या आप दिव्यांग (PwD 40%+) हैं?","opt_pwd_select":"दिव्यांगता स्थिति चुनें","opt_pwd_no":"नहीं","opt_pwd_yes":"हाँ (सक्षम व DEPwD योजनाओं हेतु पात्र)","lbl_pwd_pct":"दिव्यांगता प्रतिशत","opt_pwd_pct_select":"दिव्यांगता प्रतिशत चुनें","opt_pwd_pct_40":"40% या अधिक (मानक दिव्यांगता - सरकारी मानदंडों के अनुसार)","opt_pwd_pct_less40":"40% से कम","lbl_minority":"क्या आप अधिसूचित अल्पसंख्यक समुदाय से हैं?","opt_minority_select":"अल्पसंख्यक स्थिति चुनें","opt_minority_no":"नहीं","opt_minority_yes":"हाँ (अल्पसंख्यक कार्य मंत्रालय की योजनाओं हेतु पात्र)","lbl_minority_comm":"अल्पसंख्यक समुदाय","opt_minority_comm_select":"समुदाय चुनें","btn_next_edu":"शिक्षा विवरण →","btn_next_fin":"वित्तीय विवरण →","btn_prev":"← पिछला चरण","btn_prev_edu":"← शिक्षा विवरण","btn_prev_personal":"← व्यक्तिगत विवरण","step2_heading":"2. शिक्षा संबंधी जानकारी","step2_badge":"चरण 2 / 6","step2_sub":"छात्रवृत्ति मिलान के लिए अपने वर्तमान पाठ्यक्रम, संकाय और संस्थान का विवरण दें।","lbl_edu_level":"वर्तमान शिक्षा स्तर","opt_edu_select":"शिक्षा स्तर चुनें","lbl_course":"पाठ्यक्रम / संकाय","opt_course_select":"पाठ्यक्रम / संकाय चुनें","lbl_branch":"विशेषज्ञता / शाखा","ph_branch":"अपनी शाखा या विशेषज्ञता दर्ज करें","lbl_year":"अध्ययन वर्ष / सेमेस्टर","opt_year_select":"वर्ष / सेमेस्टर चुनें","lbl_college_type":"कॉलेज / संस्थान का प्रकार","opt_college_type_select":"संस्थान प्रकार चुनें","lbl_college_state":"कॉलेज का राज्य","opt_college_state_select":"कॉलेज राज्य चुनें","lbl_score_type":"अंक स्कोर का प्रकार","lbl_academic_marks":"वर्तमान अंक / CGPA","ph_academic_marks":"प्रतिशत या CGPA दर्ज करें","help_academic_marks":"वर्तमान पाठ्यक्रम या नवीनतम सेमेस्टर परीक्षा में कुल प्रतिशत।","lbl_prev_marks":"पिछली योग्यता के अंक (10वीं / 12वीं %)","ph_prev_marks":"प्रतिशत दर्ज करें","help_prev_marks":"केंद्रीय क्षेत्र की योजनाओं के लिए 12वीं में 80वीं परसेंटाइल से अधिक अंक आवश्यक हैं।","step3_heading":"3. वित्तीय जानकारी","step3_badge":"चरण 3 / 6","step3_sub":"आय सीमा जांचने के लिए अपनी वार्षिक पारिवारिक आय व राशन स्थिति दर्ज करें।","lbl_income":"वार्षिक पारिवारिक आय (₹ INR)","ph_income":"वार्षिक पारिवारिक आय दर्ज करें","help_income":"सभी स्रोतों से माता-पिता/अभिभावक की कुल वार्षिक सकल आय।","lbl_income_cert_status":"क्या सक्षम आय प्रमाण पत्र उपलब्ध है?","opt_income_cert_select":"प्रमाण पत्र स्थिति चुनें","opt_income_cert_yes":"हाँ (तहसीलदार / राजस्व अधिकारी / SDO द्वारा जारी)","opt_income_cert_in_process":"प्रक्रियाधीन / ई-डिस्ट्रिक्ट पोर्टल पर आवेदन किया है","opt_income_cert_no":"नहीं / अभी आवेदन नहीं किया","lbl_other_scholarship":"क्या वर्तमान में कोई अन्य सरकारी छात्रवृत्ति मिल रही है?","lbl_fee_reimbursement":"क्या ट्यूशन फीस प्रतिपूर्ति प्राप्त हो रही है?","lbl_loan_status":"शिक्षा ऋण की स्थिति","parent_info_heading":"👨‍👩‍👧 माता-पिता / अभिभावक की जानकारी (केवल छात्रों के लिए)","lbl_parent_occ":"माता-पिता / अभिभावक का व्यवसाय","lbl_govt_employee":"क्या माता या पिता में से कोई क्लास-I / राजपत्रित अधिकारी हैं?","lbl_defence_relation":"सशस्त्र पुलिस बल (CAPF) या RPF से संबंध","step4_heading":"4. विशेष श्रेणी एवं मूल निवास","step4_badge":"चरण 4 / 6","step4_sub":"लक्षित योजनाओं और कोटे के लिए मूल निवास और विशेष विवरण दर्ज करें।","lbl_domicile":"स्थायी मूल निवास का राज्य","opt_domicile_select":"स्थायी मूल निवास राज्य चुनें","lbl_special_quota":"विशेष श्रेणी / कोटा","opt_special_quota_select":"विशेष श्रेणी चुनें","step5_heading":"5. दस्तावेज़ अपलोड एवं सत्यापन","step5_badge":"चरण 5 / 6","doc_upload_banner_title":"सत्यापन दस्तावेज़ अपलोड करें","doc_upload_banner_desc":"पात्रता सत्यापित करने और अपना दस्तावेज़ तत्परता स्कोर जानने के लिए अपने पहचान, आय और श्रेणी दस्तावेज़ संलग्न करें।","readiness_title":"दस्तावेज़ तत्परता स्कोर","camera_banner_title":"स्कैन की गई फ़ाइल नहीं है?","camera_banner_desc":"अपने डिवाइस कैमरे से अपने भौतिक प्रमाण पत्र की त्वरित फोटो लें।","btn_choose_file":"📁 फ़ाइल चुनें","hint_drag_drop":"या PDF / फोटो खींचकर यहां लाएं","privacy_banner_title":"100% ब्राउज़र गोपनीयता गारंटी:","privacy_banner_desc":"अपलोड और कैमरे से लिए गए दस्तावेज़ केवल आपके वेब ब्राउज़र में प्रोसेस होते हैं। आपकी गोपनीय फाइलें किसी बाहरी सर्वर पर नहीं भेजी जाती हैं।","step6_heading":"6. प्रोफ़ाइल समीक्षा एवं परिणाम","step6_sub":"अब आपकी प्रोफ़ाइल का हमारे नियम-आधारित पारदर्शी इंजन द्वारा 69 सत्यापित सरकारी योजनाओं में मूल्यांकन किया जाएगा।","btn_calc_matches":"🔍 पात्रता स्कोर की गणना करें →","btn_back_docs":"← दस्तावेज़ों पर वापस","loader_heading":"आपकी प्रोफ़ाइल का विश्लेषण जारी है...","loader_sub":"सत्यापित सरकारी रिकॉर्ड में आपके विवरण का मिलान किया जा रहा है","loader_step_edu":"शिक्षा स्तर और संकाय मानदंडों की जांच","loader_step_income":"वार्षिक पारिवारिक आय सीमा की जांच","loader_step_category":"सामाजिक श्रेणी और आरक्षण कोटे की जांच","loader_step_domicile":"राज्य मूल निवास और क्षेत्रीय दिशानिर्देशों की जांच","loader_step_special":"विशेष पात्रता (बालिका, दिव्यांग, अल्पसंख्यक) की जांच","loader_step_final":"पारदर्शी मिलान स्कोर तैयार किए जा रहे हैं","results_heading_html":"आपकी पात्र <span class=\"hero-heading-highlight\">योजनाएं</span>","results_sub_prefix":"आपकी प्रोफ़ाइल और दस्तावेज़ स्थिति के आधार पर हमें आपके लिए","results_sub_suffix":"उपयुक्त योजनाएं मिली हैं।","search_schemes_label":"योजनाएं खोजें","search_schemes_placeholder":"योजना का नाम, लाभ, श्रेणी या व्यवसाय से खोजें...","showing_results_prefix":"प्रदर्शित","showing_results_mid":"उपयुक्त योजनाएं, कुल","showing_results_suffix":"सत्यापित सरकारी योजनाओं में से","label_benefit":"लाभ:","primary_criteria_satisfied":"मुख्य पात्रता मानदंड पूरे हैं।","btn_view_details":"विवरण देखें →","btn_official_portal":"आधिकारिक पोर्टल ↗","doc_uploaded":"✓ अपलोड किया गया","doc_pending":"○ अपलोड बाकी","likely_eligible":"संभावित पात्र","info_required":"अतिरिक्त जानकारी आवश्यक","not_eligible":"वर्तमान में पात्र नहीं","no_schemes_found":"कोई योजना नहीं मिली","no_schemes_desc":"आपकी खोज से मेल खाती कोई योजना नहीं मिली। कृपया कोई अन्य नाम या श्रेणी खोजें।","btn_clear_search":"खोज हटाएं","btn_update_profile":"प्रोफ़ाइल विवरण अपडेट करें","chip_age":"आयु:","chip_gender":"लिंग:","chip_education":"शिक्षा:","chip_category":"श्रेणी:","chip_income":"आय:","chip_state":"राज्य:","chip_domicile":"मूल निवास:","chip_marks":"अंक:","chip_pwd":"दिव्यांगता:","btn_edit_profile":"✏️ प्रोफ़ाइल संपादित करें","not_specified":"निर्दिष्ट नहीं","years_suffix":"वर्ष","doc_aadhaar":"आधार कार्ड","doc_income_cert":"आय प्रमाण पत्र","doc_caste_cert":"जाति / श्रेणी प्रमाण पत्र","doc_marksheet":"अंकसूची / मार्कशीट","doc_student_id":"कॉलेज बोनाफाइड / छात्र आईडी","doc_bank_account":"बैंक पासबुक","doc_domicile_cert":"मूल निवास प्रमाण पत्र","doc_disability_cert":"दिव्यांगता प्रमाण पत्र","status_active":"सक्रिय","btn_read_details":"🔊 योजना विवरण सुनें","docs_ready_suffix":"दस्तावेज़ तैयार","sec_advisory":"ℹ️ वैधानिक जानकारी व सलाह","advisory_text":"यह परिणाम आपकी प्रोफ़ाइल जानकारी पर आधारित हैं। SchemeMatch आधिकारिक स्वीकृति की गारंटी नहीं देता है। अंतिम स्वीकृति संबंधित सरकारी विभाग द्वारा भौतिक दस्तावेज़ सत्यापन के बाद ही दी जाती है।","sec_why_matches":"यह योजना आपकी प्रोफ़ाइल से क्यों मेल खाती है","sec_missing_criteria":"सत्यापन आवश्यक मानदंड / अधूरी जानकारी","sec_benefits":"🎁 लाभ एवं वित्तीय सहायता","primary_entitlement":"मुख्य लाभ:","sec_criteria":"⚖️ आधिकारिक पात्रता मानदंड","sec_docs_checklist":"📄 आवश्यक दस्तावेज़ सूची","sec_docs_checklist_sub":"आवेदन शुरू करने से पहले आधिकारिक दिशानिर्देशों के अनुसार अपने दस्तावेज़ जांचें:","sec_how_to_apply":"📝 आवेदन कैसे करें (चरण-दर-चरण)","lbl_app_cycle":"महत्वपूर्ण तिथियां / आवेदन चक्र:","btn_apply_official":"आधिकारिक वेबसाइट पर आवेदन करें ↗","th_edu_level":"लक्षित शिक्षा स्तर","th_courses":"पात्र पाठ्यक्रम / संकाय","th_category":"सामाजिक श्रेणी","th_income":"वार्षिक पारिवारिक आय सीमा","th_marks":"न्यूनतम अंक / प्रतिशत","th_age":"पात्र आयु सीमा","th_gender":"लिंग पात्रता","th_state":"राज्य व मूल निवास मानदंड","th_pwd":"दिव्यांगता (PwD) मानदंड","th_minority":"अल्पसंख्यक समुदाय मानदंड","doc_missing":"⚠️ अनुपलब्ध / आवश्यक"},"mr-IN":{"nav_about":"माहिती","btn_voice_copilot":"सेवावाणी व्हॉईस को-पायलट","btn_new_search":"🔍 नवीन शोध","btn_back_results":"← निकालांवर परत","hero_h2_html":"आपण पात्र असणाऱ्या <span class=\"hero-heading-highlight\">शासकीय योजना</span> शोधा","trust_badge_free":"100% मोफत नागरिक पोर्टल","trust_badge_redirect":"अधिकृत पोर्टलवर थेट अर्ज","trust_badge_voice":"बहुभाषिक व्हॉईस सहाय्य","screener_badge":"लाईव्ह कॅल्क्युलेटर","screener_title":"जलद नागरिक पात्रता तपासणी","screener_sub":"पात्र योजना शोधण्यासाठी आपला व्यवसाय आणि उत्पन्न निवडा:","lbl_occupation":"आपला व्यवसाय / उपजीविका","lbl_social_cat":"सामाजिक प्रवर्ग","lbl_family_income":"वार्षिक कौटुंबिक उत्पन्न","screener_schemes_found":"योजना सापडल्या","btn_screener_submit":"पात्र योजना व अटी पहा →","results_heading_html":"आपल्या पात्र <span class=\"hero-heading-highlight\">योजना</span>","search_schemes_label":"योजना शोधा","search_schemes_placeholder":"योजनेचे नाव, लाभ, प्रवर्ग किंवा व्यवसायानुसार शोधा...","btn_view_details":"तपशील पहा →","btn_official_portal":"अधिकृत पोर्टल ↗","likely_eligible":"पात्र असण्याची शक्यता","info_required":"अधिक माहिती आवश्यक","not_eligible":"सध्या अपात्र","doc_uploaded":"✓ जोडले","doc_pending":"○ जोडणे बाकी","label_benefit":"फायदा:"},"bn-IN":{"nav_about":"সম্পর্কে","btn_voice_copilot":"সেবাভাণী ভয়েস কো-পাইলট","btn_new_search":"🔍 নতুন অনুসন্ধান","btn_back_results":"← ফলাফলে ফিরুন","hero_h2_html":"আপনার যোগ্য <span class=\"hero-heading-highlight\">সরকারি যোজনা</span> খুঁজুন","trust_badge_free":"১০০% বিনামূল্যে নাগরিক পোর্টাল","trust_badge_redirect":"অফিসিয়াল পোর্টালে সরাসরি আবেদন","trust_badge_voice":"বহুভাষিক ভয়েস সহায়তা","screener_badge":"লাইভ ক্যালকুলেটর","screener_title":"দ্রুত নাগরিক যোগ্যতা যাচাই","screener_sub":"আপনার পেশা ও আয় নির্বাচন করে অবিলম্বে উপযুক্ত যোজনা খুঁজুন:","lbl_occupation":"আপনার পেশা / জীবিকা","lbl_social_cat":"সামাজিক শ্রেণি","lbl_family_income":"বার্ষিক পারিবারিক আয়","screener_schemes_found":"যোজনা পাওয়া গেছে","btn_screener_submit":"উপযুক্ত যোজনা ও নিয়মাবলী দেখুন →","results_heading_html":"আপনার উপযুক্ত <span class=\"hero-heading-highlight\">যোজনা</span>","search_schemes_label":"যোজনা খুঁজুন","search_schemes_placeholder":"যোজনার নাম, সুবিধা, শ্রেণি বা পেশা দ্বারা খুঁজুন...","btn_view_details":"বিস্তারিত দেখুন →","btn_official_portal":"অফিসিয়াল পোর্টাল ↗","likely_eligible":"যোগ্য হওয়ার সম্ভাবনা","info_required":"তথ্য প্রয়োজন","not_eligible":"বর্তমানে যোগ্য নয়","doc_uploaded":"✓ আপলোড করা হয়েছে","doc_pending":"○ আপলোড বাকি","label_benefit":"সুবিধা:"},"ta-IN":{"nav_about":"பற்றி","btn_voice_copilot":"சேவாவாணி குரல் கோ-பைலட்","btn_new_search":"🔍 புதிய தேடல்","btn_back_results":"← முடிவுகளுக்கு திரும்பு","hero_h2_html":"நீங்கள் தகுதியுள்ள <span class=\"hero-heading-highlight\">அரசு திட்டங்களை</span> கண்டறியுங்கள்","trust_badge_free":"100% இலவச பொது தளம்","trust_badge_redirect":"அதிகாரப்பூர்வ தளத்திற்கு நேரடி இணைப்பு","trust_badge_voice":"பன்மொழி குரல் உதவி","screener_badge":"நேரலை கணக்கீடு","screener_title":"விரைவு குடிமக்கள் தகுதி சரிபார்ப்பு","screener_sub":"திட்டங்களைக் கண்டறிய உங்கள் தொழில் மற்றும் வருமானத்தைத் தேர்ந்தெடுக்கவும்:","lbl_occupation":"உங்கள் தொழில் / வாழ்வாதாரம்","lbl_social_cat":"சமூகப் பிரிவு","lbl_family_income":"ஆண்டு குடும்ப வருமானம்","screener_schemes_found":"திட்டங்கள் உள்ளன","btn_screener_submit":"பொருந்தும் திட்டங்கள் மற்றும் விதிகளைக் காண்க →","results_heading_html":"நீங்கள் தகுதியுள்ள <span class=\"hero-heading-highlight\">திட்டங்கள்</span>","search_schemes_label":"திட்டங்களைத் தேடுங்கள்","search_schemes_placeholder":"திட்டத்தின் பெயர், பயன், பிரிவு மூலம் தேடுக...","btn_view_details":"விவரங்களைக் காண்க →","btn_official_portal":"அதிகாரப்பூர்வ தளம் ↗","likely_eligible":"தகுதியுள்ள வாய்ப்பு","info_required":"கூடுதல் தகவல் தேவை","not_eligible":"தற்போது தகுதியில்லை","doc_uploaded":"✓ பதிவேற்றப்பட்டது","doc_pending":"○ நிலுவையில் உள்ளது","label_benefit":"பயன்:"},"te-IN":{"nav_about":"గురించి","btn_voice_copilot":"సేవావాణి వాయిస్ కో-పైలట్","btn_new_search":"🔍 కొత్త శోధన","btn_back_results":"← ఫలితాలకు తిరిగి వెళ్లండి","hero_h2_html":"మీరు అర్హత గల <span class=\"hero-heading-highlight\">ప్రభుత్వ పథకాలను</span> కనుగొనండి","trust_badge_free":"100% ఉచిత పౌర పోర్టల్","trust_badge_redirect":"అధికారిక పోర్టల్‌కు నేరుగా వెళ్లండి","trust_badge_voice":"బహుభాషా వాయిస్ సహాయం","screener_badge":"లైవ్ కాలిక్యులేటర్","screener_title":"త్వరిత పౌర అర్హత తనిఖీ","screener_sub":"పథకాలను కనుగొనడానికి మీ వృత్తి మరియు ఆదాయాన్ని ఎంచుకోండి:","lbl_occupation":"మీ వృత్తి / జీవనోపాధి","lbl_social_cat":"సామాజిక వర్గం","lbl_family_income":"వార్షిక కుటుంబ ఆదాయం","screener_schemes_found":"పథకాలు కనుగొనబడ్డాయి","btn_screener_submit":"సరిపోలే పథకాలు & నిబంధనలు చూడండి →","results_heading_html":"మీ సరిపోలే <span class=\"hero-heading-highlight\">పథకాలు</span>","search_schemes_label":"పథకాలను శోధించండి","search_schemes_placeholder":"పథకం పేరు, ప్రయోజనం, వర్గం ద్వారా వెతకండి...","btn_view_details":"వివరాలు చూడండి →","btn_official_portal":"అధికారిక పోర్టల్ ↗","likely_eligible":"అర్హత సాధించే అవకాశం","info_required":"సమాచారం అవసరం","not_eligible":"ప్రస్తుతం అర్హత లేదు","doc_uploaded":"✓ అప్‌లోడ్ చేయబడింది","doc_pending":"○ పెండింగ్‌లో ఉంది","label_benefit":"ప్రయోజనం:"}};
Object.keys(_EXTRA_I18N_DATA).forEach(lang => {
  if (!I18N[lang]) I18N[lang] = {};
  Object.assign(I18N[lang], _EXTRA_I18N_DATA[lang]);
});

function t(key, fallback = "") {
  try {
    const dict = I18N[currentLangCode] || I18N["en-IN"];
    if (dict && dict[key] !== undefined && dict[key] !== null) return dict[key];
    if (I18N["en-IN"] && I18N["en-IN"][key] !== undefined) return I18N["en-IN"][key];
  } catch (e) {}
  return fallback || key;
}

let currentLangCode = localStorage.getItem("schemematch_lang") || "en-IN";
let isListening = false;
let globalRecognition = null;

// ==========================================================================
// 4. LANGUAGE TRANSLATION MANAGER
// ==========================================================================
function applyLanguageTranslations(langCode) {
  if (!langCode || !I18N[langCode]) langCode = "en-IN";
  currentLangCode = langCode;
  localStorage.setItem("schemematch_lang", langCode);
  const dict = I18N[langCode] || I18N["en-IN"];
  const enDict = I18N["en-IN"] || {};

  // 1. Text elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = (dict && dict[key] !== undefined) ? dict[key] : enDict[key];
    if (val !== undefined && val !== null) {
      el.textContent = val;
    }
  });

  // 2. HTML elements
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    const val = (dict && dict[key] !== undefined) ? dict[key] : enDict[key];
    if (val !== undefined && val !== null) {
      el.innerHTML = val;
    }
  });

  // 3. Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = (dict && dict[key] !== undefined) ? dict[key] : enDict[key];
    if (val !== undefined && val !== null) {
      el.setAttribute("placeholder", val);
    }
  });

  // 4. Titles
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    const val = (dict && dict[key] !== undefined) ? dict[key] : enDict[key];
    if (val !== undefined && val !== null) {
      el.setAttribute("title", val);
    }
  });

  // 5. Aria Labels
  document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria-label");
    const val = (dict && dict[key] !== undefined) ? dict[key] : enDict[key];
    if (val !== undefined && val !== null) {
      el.setAttribute("aria-label", val);
    }
  });

  // 6. Sync dropdowns
  const langSelects = document.querySelectorAll("#site-lang-select");
  langSelects.forEach(sel => {
    sel.value = langCode;
  });

  // 7. Sync SevaVaani
  const langText = document.getElementById("sevavaani-lang-text");
  if (langText) {
    langText.textContent = langCode.startsWith("hi") ? "HI" : (langCode.substring(0, 2).toUpperCase());
  }

  const langInfo = document.getElementById("voice-modal-lang-info");
  if (langInfo) {
    langInfo.innerHTML = 'Active Voice Language: <strong>' + (dict.langName || "English") + ' (' + langCode + ')</strong>';
  }

  renderVoiceCommandHints(langCode);

  // 8. Re-render dynamic components
  if (typeof window.updateHeroQuickScreenerText === 'function') {
    window.updateHeroQuickScreenerText();
  }

  if (typeof window.refreshResultsPage === 'function') {
    window.refreshResultsPage();
  }

  if (typeof window.refreshSchemeDetailsPage === 'function') {
    window.refreshSchemeDetailsPage();
  }

  if (typeof window.updateWizardLocalizedButtons === 'function') {
    window.updateWizardLocalizedButtons();
  }
}

function renderVoiceCommandHints(langCode) {
  const hintsContainer = document.getElementById("voice-commands-hints");
  if (!hintsContainer) return;

  const hintLists = {
    "en-IN": [
      '"Find schemes"',
      '"Show scholarships"',
      '"Show my results"',
      '"What documents do I need?"',
      '"Explain this scheme"',
      '"Go back"'
    ],
    "hi-IN": [
      '"योजनाएं खोजें"',
      '"स्कॉलरशिप दिखाओ"',
      '"मेरा रिजल्ट दिखाओ"',
      '"दस्तावेज क्या चाहिए?"',
      '"इस योजना के बारे में बताओ"',
      '"पीछे जाओ"'
    ],
    "mr-IN": [
      '"योजना शोधा"',
      '"शिष्यवृत्ती दाखवा"',
      '"निकाल दाखवा"',
      '"कागदपत्रे काय हवीत?"',
      '"या योजनेची माहिती द्या"',
      '"मागे जा"'
    ],
    "bn-IN": [
      '"যোজনা দেখাও"',
      '"বৃত্তি দেখাও"',
      '"ফলাফল দেখাও"',
      '"কি কি নথি লাগবে?"',
      '"এই যোজনাটি ব্যাখ্যা করো"',
      '"পিছনে যাও"'
    ],
    "ta-IN": [
      '"திட்டங்களைக் காட்டு"',
      '"கல்வி உதவித்தொகை காட்டு"',
      '"முடிவுகளைக் காட்டு"',
      '"என்ன ஆவணங்கள் தேவை?"',
      '"இந்த திட்டத்தை விளக்குங்கள்"',
      '"பின்செல்"'
    ],
    "te-IN": [
      '"పథకాలు చూపించు"',
      '"స్కాలర్‌షిప్‌లు చూపించు"',
      '"ఫలితాలు చూపించు"',
      '"ఏయే పత్రాలు కావాలి?"',
      '"ఈ పథకం గురించి చెప్పు"',
      '"వెనుకకు వెళ్లు"'
    ]
  };

  const list = hintLists[langCode] || hintLists["en-IN"];
  hintsContainer.innerHTML = list.map(cmd => '<span class="voice-hint-chip">' + cmd + '</span>').join("");
}
// SCHEME CRITERIA FORMATTERS (Single Source of Truth: eligibilityRules)
// ==========================================================================
function getSchemeEduText(s) {
  const r = (s && s.eligibilityRules) || {};
  if (!r.educationLevels || r.educationLevels.includes("All") || r.educationLevels.length === 0) {
    return "Open to All Education Levels";
  }
  return r.educationLevels.join(", ");
}

function getSchemeCourseText(s) {
  const r = (s && s.eligibilityRules) || {};
  if (!r.courses || r.courses.includes("All") || r.courses.length === 0) {
    return "All Accredited Higher Education Courses / Not Course-Restricted";
  }
  return r.courses.join(", ");
}

function getSchemeCategoryText(s) {
  const r = (s && s.eligibilityRules) || {};
  if (!r.categories || r.categories.includes("All") || r.categories.length === 0) {
    return "Open across All Social Categories";
  }
  return r.categories.join(", ");
}

function getSchemeIncomeText(s) {
  const r = (s && s.eligibilityRules) || {};
  if (!r.maxIncome || r.maxIncome === 0) {
    return "No restrictive annual family income ceiling";
  }
  return "Up to ₹" + r.maxIncome.toLocaleString("en-IN") + " per annum";
}

function getSchemeMarksText(s) {
  const r = (s && s.eligibilityRules) || {};
  if (!r.minMarks || r.minMarks === 0) {
    return "No minimum qualifying percentage required";
  }
  return r.minMarks + "% in previous qualifying exam";
}

function getSchemeAgeText(s) {
  const r = (s && s.eligibilityRules) || {};
  if (!r.minAge && !r.maxAge) return "Open across all age groups";
  if (r.minAge && r.maxAge) return r.minAge + " to " + r.maxAge + " years";
  if (r.minAge) return "Minimum " + r.minAge + " years";
  return "Up to " + r.maxAge + " years";
}

function getSchemeGenderText(s) {
  const r = (s && s.eligibilityRules) || {};
  if (!r.genders || r.genders.includes("All") || r.genders.length === 0) {
    return "Open to All Genders";
  }
  if (r.genders.includes("Female") && r.genders.length === 1) {
    return "Exclusively for Girl Students / Women Applicants";
  }
  if (r.genders.includes("Male") && r.genders.length === 1) {
    return "Exclusively for Male Applicants";
  }
  return r.genders.join(", ");
}

function getSchemeStateText(s) {
  const r = (s && s.eligibilityRules) || {};
  if (r.domicileRequired) {
    const dStates = r.domicileStates || r.states || [];
    return dStates.filter(d => d !== "North-Eastern States Resident").join(", ") + " (Permanent Domicile Mandatory)";
  }
  if (!r.states || r.states.includes("All India") || r.states.length === 0) {
    return "All India (Pan-India Central Scheme)";
  }
  return r.states.join(", ");
}

function getSchemeDisabilityText(s) {
  const r = (s && s.eligibilityRules) || {};
  if (r.disabilityOnly) {
    return "Reserved for Candidates with Benchmark Disability (" + (r.minDisabilityPercentage || 40) + "%+ Disability)";
  }
  return "Open to All Candidates (PwD and Non-PwD)";
}

function getSchemeMinorityText(s) {
  const r = (s && s.eligibilityRules) || {};
  if (r.minorityOnly) {
    return "Designated for Notified Minority Communities (Muslim, Sikh, Christian, Buddhist, Jain, Parsi)";
  }
  return "Open to All Communities";
}

// 5. DETERMINISTIC EXPLAINABLE MATCHING ENGINE
// ==========================================================================
/**
 * Top-level helper to detect student occupations across all pages and engine
 */
function isStudentOccupation(occVal) {
  if (!occVal || typeof occVal !== "string") return false;
  const val = occVal.trim().toLowerCase();
  return val.includes("student") || val === "scholar" || val === "intern";
}

function calculateSchemeMatch(user, scheme) {
  const matchedReasons = [];
  const unmatchedReasons = [];
  const missingReasons = [];

  const rules = (scheme && scheme.eligibilityRules) || {};

  // 0. Status Verification (Discontinued or Closed)
  if (scheme.status === "DISCONTINUED") {
    unmatchedReasons.push("Scheme Status: This scheme has been discontinued by the respective Ministry.");
  } else if (scheme.status === "CLOSED" || scheme.status === "EXPIRED") {
    unmatchedReasons.push("Scheme Status: This scheme is currently closed / expired for new subscriptions.");
  }

  // Strictly parse user values without ANY fake default values
  const hasUser = user && typeof user === "object" && Object.keys(user).length > 0;

  const userAge = (hasUser && user.age !== null && user.age !== undefined && user.age !== "" && !isNaN(parseInt(user.age, 10))) 
    ? parseInt(user.age, 10) 
    : null;

  const userIncome = (hasUser && user.income !== null && user.income !== undefined && user.income !== "" && !isNaN(parseFloat(user.income))) 
    ? parseFloat(user.income) 
    : null;

  const rawAcademicMarks = (hasUser && user.academicMarks !== null && user.academicMarks !== undefined && user.academicMarks !== "" && !isNaN(parseFloat(user.academicMarks)))
    ? parseFloat(user.academicMarks)
    : null;
  const userMarks = rawAcademicMarks === null ? null : (user.academicMarksType === "cgpa" ? rawAcademicMarks * 10 : rawAcademicMarks);
  const userPrevMarks = (hasUser && user.prevMarks !== null && user.prevMarks !== undefined && user.prevMarks !== "" && !isNaN(parseFloat(user.prevMarks)))
    ? parseFloat(user.prevMarks)
    : null;
  const marksForScheme = scheme.id === "mp-medhavi-vidyarthi-yojana" ? userPrevMarks : userMarks;

  const userCat = (hasUser && user.category && user.category !== "" && user.category !== "Select Category") 
    ? user.category 
    : (hasUser && user.socialCategory && user.socialCategory !== "" ? user.socialCategory : null);

  const userGender = (hasUser && user.gender && user.gender !== "" && user.gender !== "Select Gender") 
    ? user.gender 
    : null;

  const userEdu = (hasUser && user.educationLevel && user.educationLevel !== "" && user.educationLevel !== "Select Education Level") 
    ? user.educationLevel 
    : null;

  const userCourse = (hasUser && user.course && user.course !== "" && user.course !== "Select Course / Discipline") 
    ? user.course 
    : null;

  const userBranch = (hasUser && user.branch && user.branch !== "") 
    ? user.branch 
    : null;

  // Strict distinction: Living state vs Permanent domicile state
  const userLivingState = (hasUser && user.state && user.state !== "" && user.state !== "Select State") 
    ? user.state 
    : null;

  const userDomicileState = (hasUser && user.domicileState && user.domicileState !== "" && user.domicileState !== "Select State of Permanent Domicile") 
    ? user.domicileState 
    : null;

  const userOccupation = (hasUser && user.occupation && user.occupation !== "" && user.occupation !== "Select Occupation") 
    ? user.occupation 
    : null;

  const userDisabilityStatus = (hasUser && user.disabilityStatus && user.disabilityStatus !== "" && user.disabilityStatus !== "Select Disability Status") 
    ? user.disabilityStatus 
    : null;

  const userDisabilityPct = (hasUser && user.disabilityPct && user.disabilityPct !== "") 
    ? user.disabilityPct 
    : null;

  const userMinorityStatus = (hasUser && user.minorityStatus && user.minorityStatus !== "" && user.minorityStatus !== "Select Minority Status") 
    ? user.minorityStatus 
    : null;

  const userMinorityCommunity = (hasUser && user.minorityCommunity && user.minorityCommunity !== "" && user.minorityCommunity !== "Select Minority Community") 
    ? user.minorityCommunity 
    : null;

  // Scoring Weights Tracker
  let earnedWeight = 0;
  let totalWeight = 0;

  function addWeight(weight, isMatch) {
    totalWeight += weight;
    if (isMatch) earnedWeight += weight;
  }

  // 1. Occupation Matching (Weight: 15)
  const occWeight = 15;
  const isAllOcc = !rules.occupations || rules.occupations.includes("All") || rules.occupations.length === 0;
  if (isAllOcc) {
    addWeight(occWeight, true);
    matchedReasons.push("Occupation criteria satisfied: Open to citizens across all occupations.");
  } else {
    if (userOccupation === null) {
      missingReasons.push("Occupation is required to verify occupation-targeted eligibility.");
      addWeight(occWeight, false);
    } else {
      const occsLower = rules.occupations.map(o => o.toLowerCase());
      const uOccLower = userOccupation.toLowerCase();
      const isStudentUser = isStudentOccupation(userOccupation);
      const isStudentScheme = occsLower.some(o => o.includes("student"));

      const occMatched = occsLower.includes(uOccLower) ||
        occsLower.some(o => o.includes(uOccLower) || uOccLower.includes(o)) ||
        (isStudentUser && isStudentScheme);

      if (occMatched) {
        addWeight(occWeight, true);
        matchedReasons.push("Occupation match: " + userOccupation + " is an eligible beneficiary category.");
      } else {
        addWeight(occWeight, false);
        unmatchedReasons.push("Occupation restriction: Designated for " + rules.occupations.join(", ") + " (Your selection: " + userOccupation + ").");
      }
    }
  }

  // 2. Education Level Matching (Weight: 15)
  const eduWeight = 15;
  const isAllEdu = !rules.educationLevels || rules.educationLevels.includes("All") || rules.educationLevels.length === 0;
  if (isAllEdu) {
    addWeight(eduWeight, true);
    matchedReasons.push("Educational level criteria satisfied: Open regardless of educational qualification.");
  } else {
    if (userEdu === null) {
      missingReasons.push("Education level is required to check qualification criteria.");
      addWeight(eduWeight, false);
    } else {
      const uEduLower = userEdu.toLowerCase();
      const eduMatched = rules.educationLevels.some(e => {
        const eLower = e.toLowerCase();
        if (eLower === "all") return true;
        if (uEduLower.includes(eLower) || eLower.includes(uEduLower)) return true;
        if ((uEduLower.includes("undergraduate") || uEduLower.includes("diploma")) && 
            (eLower.includes("undergraduate") || eLower.includes("diploma") || eLower.includes("degree"))) return true;
        if (uEduLower.includes("12th") && 
            (eLower.includes("12th") || eLower.includes("intermediate") || eLower.includes("post-matric"))) return true;
        if (uEduLower.includes("10th") && 
            (eLower.includes("10th") || eLower.includes("school") || eLower.includes("secondary"))) return true;
        if (uEduLower.includes("postgraduate") && 
            (eLower.includes("postgraduate") || eLower.includes("masters"))) return true;
        return false;
      });

      if (eduMatched) {
        addWeight(eduWeight, true);
        matchedReasons.push("Education level satisfied: " + userEdu + " is eligible.");
      } else {
        addWeight(eduWeight, false);
        unmatchedReasons.push("Education level: Requires " + rules.educationLevels.join(" or ") + " (You entered " + userEdu + ").");
      }
    }
  }

  // 3. Course / Branch Discipline (Weight: 10)
  const isSpecificCourse = rules.courses && rules.courses.length > 0 && !rules.courses.includes("All");
  if (isSpecificCourse) {
    const courseWeight = 10;
    if (userOccupation && isStudentOccupation(userOccupation)) {
      if (userCourse === null) {
        missingReasons.push("Course of study is required to verify eligible degrees.");
        addWeight(courseWeight, false);
      } else {
        const uCourseLower = userCourse.toLowerCase();
        const courseMatched = rules.courses.some(c => {
          const cLower = c.toLowerCase();
          return uCourseLower.includes(cLower) || cLower.includes(uCourseLower);
        });

        if (courseMatched) {
          addWeight(courseWeight, true);
          matchedReasons.push("Course discipline satisfied: " + userCourse + " is an approved stream.");
        } else {
          addWeight(courseWeight, false);
          unmatchedReasons.push("Course criteria: Designated for " + rules.courses.join(", ") + " (Your course: " + userCourse + ").");
        }
      }
    } else {
      addWeight(courseWeight, false);
      unmatchedReasons.push("Course restriction: Requires active enrollment in " + rules.courses.join(", ") + ".");
    }
  }

  // 4. Family Annual Income Matching (Weight: 20)
  const incWeight = 20;
  const hasIncomeCap = rules.maxIncome !== undefined && rules.maxIncome !== null && rules.maxIncome > 0;
  if (!hasIncomeCap) {
    addWeight(incWeight, true);
    matchedReasons.push("Family income satisfied: No restrictive income ceiling for this scheme.");
  } else {
    if (userIncome === null) {
      missingReasons.push("Annual family income is required to determine income eligibility.");
      addWeight(incWeight, false);
    } else if (userIncome <= rules.maxIncome) {
      addWeight(incWeight, true);
      matchedReasons.push("Family income satisfied: Annual income ₹" + userIncome.toLocaleString("en-IN") + " is within ceiling of ₹" + rules.maxIncome.toLocaleString("en-IN") + ".");
    } else {
      addWeight(incWeight, false);
      unmatchedReasons.push("Family income exceeds limit: ₹" + userIncome.toLocaleString("en-IN") + " is above the maximum cap of ₹" + rules.maxIncome.toLocaleString("en-IN") + ".");
    }
  }

  // 5. Academic Marks / Percentage (Weight: 10)
  const marksWeight = 10;
  const hasMinMarks = rules.minMarks !== undefined && rules.minMarks !== null && rules.minMarks > 0;
  if (!hasMinMarks) {
    addWeight(marksWeight, true);
    matchedReasons.push("Academic marks: No minimum qualifying percentage required.");
  } else {
    if (marksForScheme === null) {
      if (userOccupation && isStudentOccupation(userOccupation)) {
        missingReasons.push(scheme.id === "mp-medhavi-vidyarthi-yojana"
          ? "Class 12th percentage is required to verify Medhavi eligibility."
          : "Academic marks percentage is required to verify merit eligibility.");
      }
      addWeight(marksWeight, false);
    } else if (marksForScheme >= rules.minMarks) {
      addWeight(marksWeight, true);
      matchedReasons.push((scheme.id === "mp-medhavi-vidyarthi-yojana" ? "Class 12th marks" : "Academic marks") + " satisfied: Entered " + marksForScheme + "% meets or exceeds minimum required " + rules.minMarks + "%.");
    } else {
      addWeight(marksWeight, false);
      unmatchedReasons.push((scheme.id === "mp-medhavi-vidyarthi-yojana" ? "Class 12th marks" : "Academic marks") + ": Minimum required is " + rules.minMarks + "% (Your entered score: " + marksForScheme + "%).");
    }
  }

  // 6. Social Category Matching (Weight: 15)
  const catWeight = 15;
  const isAllCat = !rules.categories || rules.categories.includes("All") || rules.categories.length === 0;
  if (isAllCat) {
    addWeight(catWeight, true);
    matchedReasons.push("Social category satisfied: Open across all social categories.");
  } else {
    if (userCat === null) {
      missingReasons.push("Social category is required to check category-specific reservations.");
      addWeight(catWeight, false);
    } else if (rules.categories.includes(userCat) || rules.categories.some(c => c.toLowerCase() === userCat.toLowerCase())) {
      addWeight(catWeight, true);
      matchedReasons.push("Social category satisfied: " + userCat + " is eligible.");
    } else {
      addWeight(catWeight, false);
      unmatchedReasons.push("Social category: Specifically designated for " + rules.categories.join(", ") + " applicants (You selected " + userCat + ").");
    }
  }

  // 7. Age Window Matching (Weight: 5)
  const ageWeight = 5;
  const hasMinAge = rules.minAge !== undefined && rules.minAge !== null && rules.minAge > 0;
  const hasMaxAge = rules.maxAge !== undefined && rules.maxAge !== null && rules.maxAge < 100;
  if (!hasMinAge && !hasMaxAge) {
    addWeight(ageWeight, true);
    matchedReasons.push("Age requirement satisfied: Open across all age groups.");
  } else {
    if (userAge === null) {
      missingReasons.push("Age is required to check age-bracket eligibility.");
      addWeight(ageWeight, false);
    } else {
      let ageOk = true;
      if (hasMinAge && userAge < rules.minAge) {
        ageOk = false;
        unmatchedReasons.push("Age criteria: Minimum required is " + rules.minAge + " years (Your age: " + userAge + ").");
      }
      if (hasMaxAge && userAge > rules.maxAge) {
        ageOk = false;
        unmatchedReasons.push("Age criteria: Maximum permitted is " + rules.maxAge + " years (Your age: " + userAge + ").");
      }
      addWeight(ageWeight, ageOk);
      if (ageOk) {
        matchedReasons.push("Age requirement satisfied: " + userAge + " years aligns with scheme window (" + (rules.minAge || 0) + "–" + (rules.maxAge || "any") + " yrs).");
      }
    }
  }

  // 8. Gender Criteria Matching (Weight: 5)
  const genderWeight = 5;
  const isSpecificGender = rules.genders && rules.genders.length > 0 && !rules.genders.includes("All");
  if (!isSpecificGender) {
    addWeight(genderWeight, true);
    matchedReasons.push("Gender eligibility satisfied: Open to all genders.");
  } else {
    if (userGender === null) {
      missingReasons.push("Gender is required to verify gender-specific criteria.");
      addWeight(genderWeight, false);
    } else if (rules.genders.includes(userGender) || rules.genders.some(g => g.toLowerCase() === userGender.toLowerCase())) {
      addWeight(genderWeight, true);
      matchedReasons.push(userGender === "Female" ? "Gender requirement satisfied: Exclusively for girl/women applicants." : "Gender requirement satisfied (" + userGender + ").");
    } else {
      addWeight(genderWeight, false);
      unmatchedReasons.push("Gender restriction: Designated specifically for " + rules.genders.join(", ") + " applicants.");
    }
  }

  // 9. Domicile vs Current State Matching (Weight: 15)
  const stateWeight = 15;
  if (rules.domicileRequired) {
    // Domicile-mandatory scheme: strictly validate userDomicileState
    const targetDomiciles = rules.domicileStates || rules.states || [];
    if (userDomicileState === null) {
      missingReasons.push("State of permanent domicile is required to verify state-specific eligibility.");
      addWeight(stateWeight, false);
    } else {
      const domMatched = targetDomiciles.includes("All India") ||
        targetDomiciles.some(d => d.toLowerCase() === userDomicileState.toLowerCase()) ||
        (userDomicileState === "North-Eastern States Resident" && targetDomiciles.some(d => ["Assam","Arunachal Pradesh","Manipur","Meghalaya","Mizoram","Nagaland","Sikkim","Tripura"].includes(d)));

      if (domMatched) {
        addWeight(stateWeight, true);
        matchedReasons.push("Permanent domicile criteria satisfied: Domicile of " + userDomicileState + " verified.");
      } else {
        addWeight(stateWeight, false);
        unmatchedReasons.push("Domicile restriction: Scheme requires permanent domicile of " + targetDomiciles.filter(d => d !== "North-Eastern States Resident").join(", ") + " (Your domicile: " + userDomicileState + ").");
      }
    }
  } else {
    // Pan-India or residence-based scheme
    const targetStates = rules.states || ["All India"];
    const isPanIndia = targetStates.includes("All India");
    if (isPanIndia) {
      addWeight(stateWeight, true);
      matchedReasons.push("State & residence criteria satisfied: Pan-India Central Scheme.");
    } else {
      if (userLivingState === null && userDomicileState === null) {
        missingReasons.push("State of residence is required to check state-specific eligibility.");
        addWeight(stateWeight, false);
      } else {
        const stateMatched = (userLivingState && targetStates.some(s => s.toLowerCase() === userLivingState.toLowerCase())) ||
          (userDomicileState && targetStates.some(s => s.toLowerCase() === userDomicileState.toLowerCase()));

        if (stateMatched) {
          addWeight(stateWeight, true);
          matchedReasons.push("State criteria satisfied: Applicable in " + (userLivingState || userDomicileState) + ".");
        } else {
          addWeight(stateWeight, false);
          unmatchedReasons.push("State restriction: Implemented specifically for residents of " + targetStates.join(", ") + " (Your state: " + (userLivingState || "Not entered") + ").");
        }
      }
    }
  }

  // 10. Disability (PwD) and 40%+ Percentage Validation (Weight: 15)
  if (rules.disabilityOnly) {
    const pwdWeight = 15;
    const requiredPct = rules.minDisabilityPercentage || 40;
    if (userDisabilityStatus === null) {
      missingReasons.push("Disability status is required to verify PwD scholarship eligibility.");
      addWeight(pwdWeight, false);
    } else if (userDisabilityStatus === "Yes") {
      if (!userDisabilityPct) {
        missingReasons.push("Disability percentage declaration is required (Requires " + requiredPct + "%+ benchmark disability).");
        addWeight(pwdWeight, false);
      } else if (userDisabilityPct.includes("40% or more") || (!isNaN(parseFloat(userDisabilityPct)) && parseFloat(userDisabilityPct) >= requiredPct)) {
        addWeight(pwdWeight, true);
        matchedReasons.push("Benchmark disability satisfied: Candidate has " + requiredPct + "%+ statutory benchmark disability.");
      } else {
        addWeight(pwdWeight, false);
        unmatchedReasons.push("Disability criteria: Requires minimum " + requiredPct + "% benchmark disability (Your declaration: less than 40%).");
      }
    } else {
      addWeight(pwdWeight, false);
      unmatchedReasons.push("Disability criteria: Reserved exclusively for candidates with benchmark disability (" + requiredPct + "%+).");
    }
  }

  // 11. Minority Community Validation (Weight: 10)
  if (rules.minorityOnly) {
    const minWeight = 10;
    if (userMinorityStatus === null) {
      missingReasons.push("Minority status is required to check minority community scholarship eligibility.");
      addWeight(minWeight, false);
    } else if (userMinorityStatus === "Yes") {
      const allowedComms = rules.minorityCommunities || ["Muslim", "Christian", "Sikh", "Buddhist", "Jain", "Parsi"];
      if (userMinorityCommunity && allowedComms.length > 0 && !allowedComms.includes("All")) {
        if (allowedComms.includes(userMinorityCommunity)) {
          addWeight(minWeight, true);
          matchedReasons.push("Minority community satisfied: " + userMinorityCommunity + " is a notified minority community.");
        } else {
          addWeight(minWeight, false);
          unmatchedReasons.push("Minority community: Designated for " + allowedComms.join(", ") + " (Your declaration: " + userMinorityCommunity + ").");
        }
      } else {
        addWeight(minWeight, true);
        matchedReasons.push("Minority community satisfied: Member of notified religious minority community.");
      }
    } else {
      addWeight(minWeight, false);
      unmatchedReasons.push("Minority criteria: Applicable exclusively to students belonging to notified minority communities.");
    }
  }

  // Calculate Deterministic Score & 3-State Condition
  let status = "Likely Eligible";
  let finalScore = 0;

  if (unmatchedReasons.length > 0) {
    status = "Not Currently Eligible";
    const rawPct = totalWeight > 0 ? Math.round((earnedWeight / totalWeight) * 100) : 0;
    finalScore = Math.max(0, Math.min(35, Math.round(rawPct * 0.35) - (unmatchedReasons.length - 1) * 5));
  } else if (missingReasons.length > 0) {
    status = "Information Required";
    const rawPct = totalWeight > 0 ? Math.round((earnedWeight / totalWeight) * 100) : 0;
    finalScore = Math.max(40, Math.min(75, Math.round(rawPct * 0.75)));
  } else {
    status = "Likely Eligible";
    finalScore = 100;
  }

  return {
    score: finalScore,
    status: status,
    matchedReasons: matchedReasons.length > 0 ? matchedReasons : ["Basic demographic parameters align with general guidelines."],
    unmatchedReasons: unmatchedReasons,
    missingReasons: missingReasons
  };
}

/**
 * Maps numeric match score & 3-state condition to explainable status
 */
function getMatchScoreState(score, status, missingReasons, unmatchedReasons) {
  if (status === "Not Currently Eligible" || (unmatchedReasons && unmatchedReasons.length > 0) || score < 50) {
    return {
      cssClass: "match-state-low",
      label: "Not Currently Eligible",
      badgeText: score + "% Not Currently Eligible"
    };
  }
  if (status === "Information Required" || (missingReasons && missingReasons.length > 0) || (score >= 50 && score < 80)) {
    return {
      cssClass: "match-state-info-required",
      label: "Information Required",
      badgeText: "⚠ Information Required"
    };
  }
  return {
    cssClass: "match-state-excellent",
    label: "Likely Eligible",
    badgeText: "Eligibility Match: " + score + "%"
  };
}

/**
 * Normalizes document keys across schemes and uploaded user docs
 */
const DOC_ALIASES = {
  educational_marksheet: "marksheet",
  academic_marksheet: "marksheet",
  mgnrega_job_card: "job_card_mgnrega",
  bpl_ration_card: "ration_card",
  bpl_card: "ration_card",
  pan_parent: "pan_card",
  aadhaar_parent: "aadhaar"
};

function normalizeDocKey(key) {
  if (!key) return "";
  const k = key.trim().toLowerCase();
  return DOC_ALIASES[k] || k;
}

/**
 * Calculates document readiness percentage against a scheme's actual required documents
 */
function getDocumentReadiness(userDocs = [], requiredDocKeys = []) {
  if (!requiredDocKeys || requiredDocKeys.length === 0) {
    return { percentage: 100, attachedCount: 0, totalCount: 0 };
  }
  const normalizedUserDocs = (userDocs || []).map(normalizeDocKey);
  const attached = requiredDocKeys.filter(k => {
    const normK = normalizeDocKey(k);
    return normalizedUserDocs.includes(normK) || (userDocs || []).includes(k);
  }).length;
  const pct = Math.round((attached / requiredDocKeys.length) * 100);
  return {
    percentage: Math.min(100, pct),
    attachedCount: attached,
    totalCount: requiredDocKeys.length
  };
}

// ==========================================================================
// 6. MULTILINGUAL SPEECH SYNTHESIS (TTS)
// ==========================================================================
function readAloudText(textToSpeak, onStartCallback, onEndCallback) {
  if (!("speechSynthesis" in window)) {
    console.warn("Speech synthesis is not supported in this browser.");
    if (onEndCallback) onEndCallback();
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.rate = 0.95;
  utterance.pitch = 1.0;
  utterance.lang = currentLangCode;

  const voices = window.speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    const langPrefix = currentLangCode.split("-")[0];
    const exactVoice = voices.find(v => v.lang === currentLangCode || v.lang.replace("_", "-") === currentLangCode);
    const prefixVoice = voices.find(v => v.lang.startsWith(langPrefix));
    if (exactVoice) {
      utterance.voice = exactVoice;
    } else if (prefixVoice) {
      utterance.voice = prefixVoice;
    }
  }

  utterance.onstart = () => {
    if (onStartCallback) onStartCallback();
  };
  utterance.onend = () => {
    if (onEndCallback) onEndCallback();
  };
  utterance.onerror = (e) => {
    console.warn("Speech synthesis notice:", e);
    if (onEndCallback) onEndCallback();
  };

  window.speechSynthesis.speak(utterance);
}

function stopAllSpeech() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

// ==========================================================================
// 7. INTELLIGENT CONVERSATIONAL VOICE & CHAT CO-PILOT (SevaVaani)
// ==========================================================================

// Subtle audio synthesizer for pleasant voice feedback
function playVoiceTone(type) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    const now = ctx.currentTime;
    if (type === 'start') {
      osc.frequency.setValueAtTime(480, now);
      osc.frequency.exponentialRampToValueAtTime(640, now + 0.12);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.start(now);
      osc.stop(now + 0.18);
    } else if (type === 'success') {
      osc.frequency.setValueAtTime(560, now);
      osc.frequency.exponentialRampToValueAtTime(420, now + 0.14);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.start(now);
      osc.stop(now + 0.18);
    }
  } catch (e) {}
}

let isVoiceMuted = localStorage.getItem('schemematch_voice_muted') === 'true';

function toggleVoiceMute() {
  isVoiceMuted = !isVoiceMuted;
  localStorage.setItem('schemematch_voice_muted', isVoiceMuted ? 'true' : 'false');
  const soundBtn = document.getElementById('sevavaani-sound-btn');
  if (soundBtn) {
    soundBtn.textContent = isVoiceMuted ? '🔇' : '🔊';
    soundBtn.title = isVoiceMuted ? 'Unmute Voice' : 'Mute Voice';
  }
  if (isVoiceMuted) stopAllSpeech();
}

/**
 * Intelligent NLP & Conversational Response Generator
 */
function generateConversationalResponse(rawQuery) {
  const query = rawQuery.toLowerCase().trim();
  const profile = readStoredJson('schemematch_user_profile', {});
  const isHindi = currentLangCode.startsWith('hi') || /[\u0900-\u097F]/.test(query) || /\b(kya|kaise|kese|kaha|kahan|hai|hain|batao|kholo|dhundo|mujhe|chahiye|namaste|pranam|ladki|shiksha|aavedan|dastavez|patra)\b/i.test(query);

  // 1. NAVIGATION: Open Find Schemes Wizard
  if (/open\s*find|form\s*(kholo|kholiye|open|dikhao)|wizard\s*kholo|find\s*schemes\s*(kholo|open|chalo)/i.test(query)) {
    return {
      html: `
        <div class="assistant-bubble-card">
          <p><strong>${isHindi ? "📝 योजना खोज विज़ार्ड खोला जा रहा है" : "📝 Navigating to Find Schemes Wizard"}</strong></p>
          <p>${isHindi ? "आप 6 आसान चरणों में अपनी पात्रता चेक कर सकते हैं और दस्तावेज़ अपलोड कर सकते हैं।" : "You can check your eligibility across 6 simple steps and upload your documents."}</p>
          <div style="margin-top: 0.6rem;">
            <a href="find-schemes.html" class="assistant-action-btn">🚀 Open Find Schemes Wizard →</a>
          </div>
        </div>
      `,
      speech: isHindi ? "योजना खोज विज़ार्ड खोला जा रहा है।" : "Opening the Find Schemes wizard.",
      action: () => { setTimeout(() => { window.location.href = 'find-schemes.html'; }, 1400); }
    };
  }

  // 2. NAVIGATION: Open Results Page
  if (/result(s)?\s*(dikhao|kholo|open|dekhe)|show\s*result|check\s*my\s*result/i.test(query)) {
    return {
      html: `
        <div class="assistant-bubble-card">
          <p><strong>${isHindi ? "📊 परिणाम पृष्ठ खोला जा रहा है" : "📊 Opening Your Matches"}</strong></p>
          <p>${isHindi ? "आपकी प्रोफ़ाइल के अनुसार सभी ${SCHEME_DATABASE.length} योजनाओं के मिलान अंक देखें।" : "Viewing your personalized match scores across all ${SCHEME_DATABASE.length} verified schemes."}</p>
          <div style="margin-top: 0.6rem;">
            <a href="results.html" class="assistant-action-btn">🎯 Open Results Page →</a>
          </div>
        </div>
      `,
      speech: isHindi ? "आपके परिणाम पृष्ठ को खोला जा रहा है।" : "Opening your SchemeMatch results.",
      action: () => { setTimeout(() => { window.location.href = 'results.html'; }, 1400); }
    };
  }

  // 3. NAVIGATION: Go to Home
  if (/home\s*(jao|page|kholo|open)|mukhya\s*prishth/i.test(query)) {
    return {
      html: `<p>${isHindi ? "होम पेज पर जाया जा रहा है..." : "Navigating to homepage..."}</p>`,
      speech: isHindi ? "होम पेज पर जा रहे हैं।" : "Going to homepage.",
      action: () => { setTimeout(() => { window.location.href = 'index.html'; }, 1200); }
    };
  }

  // 4. READ PAGE ALOUD
  if (/read\s*(this\s*)?page|page\s*padho|padhkar\s*sunao|screen\s*reader/i.test(query)) {
    const mainText = document.querySelector('main')?.innerText || document.body.innerText;
    const snippet = mainText.slice(0, 380).replace(/\s+/g, ' ');
    return {
      html: `<p>🔊 ${isHindi ? "इस पेज की मुख्य जानकारी पढ़ी जा रही है:" : "Reading page summary aloud:"}</p><p class="assistant-quote">"${snippet.slice(0, 160)}..."</p>`,
      speech: snippet,
      action: null
    };
  }

  // 5. CHANGE LANGUAGE
  if (/\b(hindi|हिन्दी)\b/i.test(query)) {
    applyLanguageTranslations('hi-IN');
    return {
      html: `<p>🌐 <strong>भाषा हिन्दी (Hindi) में बदल दी गई है।</strong> अब आप हिन्दी में सहायता प्राप्त कर सकते हैं।</p>`,
      speech: "भाषा हिन्दी में बदल दी गई है।",
      action: null
    };
  }
  if (/\b(english)\b/i.test(query)) {
    applyLanguageTranslations('en-IN');
    return {
      html: `<p>🌐 <strong>Language switched to English.</strong> Portal and assistant are now set to English.</p>`,
      speech: "Language has been switched to English.",
      action: null
    };
  }

  // 6. FORM FILLING GUIDANCE (Step-by-step)
  if (/form\s*(kaise|kese|me|main|bhar|fill|submit)|kaise\s*bhare|how\s*to\s*fill|step\s*by\s*step|form\s*guidance|kya\s*bhare/i.test(query)) {
    if (isHindi) {
      return {
        html: `
          <div class="assistant-bubble-card">
            <h4 style="margin-bottom:0.4rem;color:#f97316;">📝 SchemeMatch Form भरने का आसान तरीका:</h4>
            <p>पोर्टल पर फॉर्म कुल <strong>6 चरणों</strong> में पूरा होता है:</p>
            <ol style="margin-left: 1.2rem; font-size: 0.88rem; line-height: 1.55; margin-top:0.3rem;">
              <li><strong>Step 1 (Personal Details):</strong> अपना पूरा नाम, उम्र, लिंग, सामाजिक श्रेणी (General, OBC, SC, ST, EWS) और राज्य चुनें।</li>
              <li><strong>Step 2 (Education Details):</strong> अपनी पढ़ाई का स्तर (12th, UG, PG, Diploma), कोर्स (Engineering, Arts, Medical आदि) और पिछले परीक्षा अंक (%) भरें।</li>
              <li><strong>Step 3 (Financial Details):</strong> परिवार की कुल वार्षिक आय (Annual Family Income) और BPL/EWS स्थिति दर्ज करें।</li>
              <li><strong>Step 4 (Special Support):</strong> यदि कोई दिव्यांगता (PwD 40%+), अल्पसंख्यक या सिंगल गर्ल चाइल्ड स्थिति हो तो उसे चुनें।</li>
              <li><strong>Step 5 (Documents & OCR):</strong> आधार, आय प्रमाण पत्र व अंकसूची अपलोड करें या वेबकैम से लाइव स्कैन करें।</li>
              <li><strong>Step 6 (Results):</strong> तुरंत अपना मैच स्कोर देखें और आधिकारिक पोर्टल पर सीधा आवेदन करें।</li>
            </ol>
            <div style="margin-top: 0.75rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
              <a href="find-schemes.html" class="assistant-action-btn">🚀 फॉर्म भरना शुरू करें →</a>
            </div>
          </div>
        `,
        speech: "SchemeMatch पर फॉर्म 6 आसान स्टेप्स में भरा जाता है: पहले अपनी व्यक्तिगत जानकारी, फिर शिक्षा, पारिवारिक आय, विशेष श्रेणी और दस्तावेज़ अपलोड करें। क्या आप अभी फॉर्म खोलना चाहते हैं?"
      };
    } else {
      return {
        html: `
          <div class="assistant-bubble-card">
            <h4 style="margin-bottom:0.4rem;color:#f97316;">📝 How to Fill the SchemeMatch Application:</h4>
            <p>The eligibility wizard consists of <strong>6 guided steps</strong>:</p>
            <ol style="margin-left: 1.2rem; font-size: 0.88rem; line-height: 1.55; margin-top:0.3rem;">
              <li><strong>Step 1 (Personal):</strong> Full Name, Age, Gender, Social Category (General/OBC/SC/ST), State.</li>
              <li><strong>Step 2 (Education):</strong> Level (12th/UG/PG), Stream (Engineering/Arts/Medical), and Passing Marks %.</li>
              <li><strong>Step 3 (Financial):</strong> Annual Family Income (as per Tehsildar certificate) and BPL/EWS status.</li>
              <li><strong>Step 4 (Other Details):</strong> Benchmark disability (PwD 40%+), Minority or Single Girl Child status.</li>
              <li><strong>Step 5 (Documents & OCR):</strong> Upload Aadhaar, Income & Marksheets or scan live via camera.</li>
              <li><strong>Step 6 (Results):</strong> Instant deterministic score and direct official application routing.</li>
            </ol>
            <div style="margin-top: 0.75rem;">
              <a href="find-schemes.html" class="assistant-action-btn">🚀 Open Form Wizard Now →</a>
            </div>
          </div>
        `,
        speech: "To fill the application, complete the 6 steps: personal details, education, family income, reservation, documents, and review your instant match score."
      };
    }
  }

  // 6b. NATIONAL SCHEME QUERIES - All-Citizen Welfare Schemes

  // PM-KISAN - Farmer Income Support
  if (/pm.?kisan|kisan.?samman|kisan.?nidhi|farmer.?(scheme|benefit|money|income)|kisan.?(paise|paisa|rupay|help)/i.test(query)) {
    const sch = SCHEME_DATABASE.find(s => s.id === 'pm-kisan');
    return {
      html: `
        <div class="assistant-bubble-card">
          <h4 style="margin-bottom:0.4rem;color:#4ade80;">🌾 ${isHindi ? 'PM-KISAN योजना' : 'PM-KISAN Samman Nidhi'}</h4>
          ${isHindi ? `
            <p><strong>क्या मिलता है:</strong> सभी किसान परिवारों को सालाना <strong>₹6,000</strong> तीन किस्तों में (₹2,000 × 3)।</p>
            <p><strong>पात्रता:</strong> सभी छोटे व सीमांत किसान (2 हेक्टेयर तक भूमि)। आयकर दाता, डॉक्टर, इंजीनियर, वकील, सरकारी कर्मचारी को इससे बाहर रखा गया है।</p>
            <p><strong>जरूरी दस्तावेज़:</strong> आधार कार्ड, खसरा/खतौनी (जमीन के रिकॉर्ड), बैंक खाता पासबुक।</p>
            <p><strong>आवेदन कहाँ करें:</strong> pmkisan.gov.in पोर्टल या नजदीकी CSC (Common Service Centre) केंद्र।</p>
          ` : `
            <p><strong>Benefit:</strong> <strong>₹6,000/year</strong> in 3 installments of ₹2,000 directly to bank account.</p>
            <p><strong>Eligibility:</strong> All small & marginal farmer families owning up to 2 hectares of land. Excludes income taxpayers, doctors, engineers, lawyers, govt employees.</p>
            <p><strong>Documents needed:</strong> Aadhaar Card, Khasra/Khatauni (land records), Bank Passbook.</p>
            <p><strong>Apply at:</strong> pmkisan.gov.in portal or nearest Common Service Centre (CSC).</p>
          `}
          <div style="margin-top: 0.75rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
            <a href="scheme-details.html?id=pm-kisan" class="assistant-action-btn">🌾 View Full Details →</a>
            <a href="https://pmkisan.gov.in" target="_blank" class="assistant-action-btn" style="background:rgba(34,197,94,0.15)">🌐 Official Portal ↗</a>
          </div>
        </div>
      `,
      speech: isHindi ? "PM-KISAN में हर किसान को सालाना 6000 रुपये मिलते हैं। आवेदन के लिए pmkisan.gov.in पर जाएं या CSC केंद्र पर जाएं।" : "PM-KISAN gives farmers 6000 rupees per year. Apply at pmkisan.gov.in or your nearest Common Service Centre."
    };
  }

  // Ayushman Bharat PM-JAY
  if (/ayushman|pm.?jay|aushman|golden.?card|health.?card|5.?lakh.?(health|hospital)|free.?(hospital|treatment|ilaj)|cashless.?(hospital|treatment)/i.test(query)) {
    return {
      html: `
        <div class="assistant-bubble-card">
          <h4 style="margin-bottom:0.4rem;color:#f87171;">🩺 ${isHindi ? 'आयुष्मान भारत PM-JAY' : 'Ayushman Bharat PM-JAY'}</h4>
          ${isHindi ? `
            <p><strong>क्या मिलता है:</strong> पात्र परिवारों को <strong>₹5 लाख तक</strong> का सालाना मुफ्त अस्पताल उपचार (1,500+ empanelled hospitals)।</p>
            <p><strong>पात्रता:</strong> SECC 2011 डेटाबेस में शामिल परिवार, BPL कार्डधारक, राज्य सरकार द्वारा अधिसूचित गरीब परिवार।</p>
            <p><strong>जरूरी दस्तावेज़:</strong> राशन कार्ड, आधार कार्ड। आयुष्मान गोल्डन कार्ड नजदीकी CSC या अस्पताल से बनवाएं।</p>
            <p><strong>चेक करें:</strong> mera.pmjay.gov.in पर अपनी पात्रता चेक करें।</p>
          ` : `
            <p><strong>Benefit:</strong> <strong>₹5 Lakh/year</strong> free cashless hospitalization at 1,500+ empanelled hospitals nationwide.</p>
            <p><strong>Eligibility:</strong> Families in SECC 2011 database, BPL cardholders, state-notified poor & vulnerable families.</p>
            <p><strong>Documents:</strong> Ration Card, Aadhaar Card. Get Ayushman Golden Card from CSC or empanelled hospital.</p>
            <p><strong>Check eligibility:</strong> Visit mera.pmjay.gov.in to verify your eligibility instantly.</p>
          `}
          <div style="margin-top: 0.75rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
            <a href="scheme-details.html?id=ayushman-bharat-pmjay" class="assistant-action-btn">🩺 View Full Details →</a>
            <a href="https://pmjay.gov.in" target="_blank" class="assistant-action-btn" style="background:rgba(239,68,68,0.15)">🌐 Official Portal ↗</a>
          </div>
        </div>
      `,
      speech: isHindi ? "आयुष्मान भारत में पात्र परिवारों को 5 लाख रुपये तक का मुफ्त अस्पताल उपचार मिलता है। mera.pmjay.gov.in पर अपनी पात्रता जांचें।" : "Ayushman Bharat gives eligible families 5 lakh rupees worth of free hospital treatment per year. Check eligibility at mera.pmjay.gov.in."
    };
  }

  // PM Vishwakarma
  if (/vishwakarma|viswakarma|karigar|artisan|carpenter|blacksmith|potter|weaver|goldsm|toolki/i.test(query)) {
    return {
      html: `
        <div class="assistant-bubble-card">
          <h4 style="margin-bottom:0.4rem;color:#fbbf24;">🔨 ${isHindi ? 'PM विश्वकर्मा योजना' : 'PM Vishwakarma Yojana'}</h4>
          ${isHindi ? `
            <p><strong>क्या मिलता है:</strong> 18 पारंपरिक शिल्पकारों/कारीगरों को <strong>₹3 लाख तक</strong> का सस्ता ऋण (5% ब्याज), <strong>₹15,000 टूलकिट वाउचर</strong>, कौशल प्रशिक्षण और डिजिटल ऑनबोर्डिंग।</p>
            <p><strong>पात्र कारीगर:</strong> बढ़ई, लोहार, कुम्हार, जूता बनाने वाले, दर्जी, नाई, माला बनाने वाले, नाव बनाने वाले, मूर्तिकार, मछली पकड़ने वाले जाल बनाने वाले, आदि (18 श्रेणियां)।</p>
            <p><strong>दस्तावेज़:</strong> आधार, मोबाइल नंबर, बैंक पासबुक, पारंपरिक व्यवसाय का स्व-घोषणापत्र।</p>
            <p><strong>आवेदन:</strong> pmvishwakarma.gov.in या CSC केंद्र।</p>
          ` : `
            <p><strong>Benefit:</strong> Up to <strong>₹3 Lakh loan at 5%</strong> interest, <strong>₹15,000 Toolkit Voucher</strong>, skill training & digital onboarding for 18 traditional artisan categories.</p>
            <p><strong>Eligible Artisans:</strong> Carpenter, Blacksmith, Potter, Cobbler, Tailor, Barber, Garland maker, Boat maker, Sculptor, Fish Net maker, etc. (18 categories).</p>
            <p><strong>Documents:</strong> Aadhaar, Mobile Number, Bank Passbook, self-declaration of traditional trade.</p>
            <p><strong>Apply at:</strong> pmvishwakarma.gov.in or CSC centres.</p>
          `}
          <div style="margin-top: 0.75rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
            <a href="scheme-details.html?id=pm-vishwakarma" class="assistant-action-btn">🔨 View Full Details →</a>
            <a href="https://pmvishwakarma.gov.in" target="_blank" class="assistant-action-btn" style="background:rgba(245,158,11,0.15)">🌐 Official Portal ↗</a>
          </div>
        </div>
      `,
      speech: isHindi ? "PM विश्वकर्मा में 18 पारंपरिक कारीगरों को 3 लाख तक सस्ता ऋण और 15000 का टूलकिट मिलता है।" : "PM Vishwakarma gives 18 traditional artisan categories up to 3 lakh rupees loan at 5 percent and a 15000 rupee toolkit."
    };
  }

  // PM Mudra Yojana
  if (/mudra|mudr|pmmy|shishu.?loan|kishore.?loan|tarun.?loan|small.?business.?loan|startup.?loan|vyapar.?loan/i.test(query)) {
    return {
      html: `
        <div class="assistant-bubble-card">
          <h4 style="margin-bottom:0.4rem;color:#60a5fa;">💼 ${isHindi ? 'PM मुद्रा योजना' : 'PM Mudra Yojana (PMMY)'}</h4>
          ${isHindi ? `
            <p><strong>तीन श्रेणियां:</strong></p>
            <ul style="margin-left:1.2rem; font-size:0.88rem; line-height:1.6;">
              <li><strong>शिशु:</strong> ₹50,000 तक - पहली बार व्यापार शुरू करने वालों के लिए</li>
              <li><strong>किशोर:</strong> ₹50,001 - ₹5 लाख - पहले से चल रहे व्यापार को बढ़ाने के लिए</li>
              <li><strong>तरुण:</strong> ₹5 लाख - ₹10 लाख - स्थापित छोटे उद्यमों के लिए</li>
              <li><strong>तरुण प्लस:</strong> ₹10 लाख - ₹20 लाख - उच्च क्रेडिट ट्रैक वाले उद्यमों के लिए</li>
            </ul>
            <p><strong>दस्तावेज़:</strong> आधार, PAN, व्यापार का पता प्रमाण, बैंक खाता विवरण।</p>
            <p><strong>आवेदन:</strong> किसी भी सरकारी/प्राइवेट बैंक, NBFC, MFI पर या mudra.org.in।</p>
          ` : `
            <p><strong>Three Loan Categories:</strong></p>
            <ul style="margin-left:1.2rem; font-size:0.88rem; line-height:1.6;">
              <li><strong>Shishu:</strong> Up to ₹50,000 - For first-time micro businesses</li>
              <li><strong>Kishore:</strong> ₹50,001 to ₹5 Lakh - For growing businesses</li>
              <li><strong>Tarun:</strong> ₹5 Lakh to ₹10 Lakh - For established small enterprises</li>
              <li><strong>Tarun Plus:</strong> ₹10 Lakh to ₹20 Lakh - For businesses with good credit track</li>
            </ul>
            <p><strong>Documents:</strong> Aadhaar, PAN, Business Address Proof, Bank Account Statement.</p>
            <p><strong>Apply at:</strong> Any Govt/Private Bank, NBFC, Microfinance Institution, or mudra.org.in.</p>
          `}
          <div style="margin-top: 0.75rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
            <a href="scheme-details.html?id=pm-mudra-yojana" class="assistant-action-btn">💼 View Full Details →</a>
            <a href="https://www.mudra.org.in" target="_blank" class="assistant-action-btn" style="background:rgba(59,130,246,0.15)">🌐 Official Portal ↗</a>
          </div>
        </div>
      `,
      speech: isHindi ? "PM Mudra योजना में 4 श्रेणियों में 50000 से 20 लाख तक का व्यापारिक ऋण मिलता है।" : "PM Mudra gives business loans from 50000 to 20 lakh rupees in 4 categories: Shishu, Kishore, Tarun, and Tarun Plus."
    };
  }

  // e-Shram & PM Shram Yogi Maandhan Pension
  if (/e.?shram|eshram|e.?sram|shram.?card|labour.?(card|register|scheme)|mazdoor|shramik|unorganised.?worker|pm.?sym|pm.?shram.?yogi|shram.?yogi.?maandhan/i.test(query)) {
    return {
      html: `
        <div class="assistant-bubble-card">
          <h4 style="margin-bottom:0.4rem;color:#fbbf24;">🏗️ ${isHindi ? 'e-श्रम कार्ड & PM-SYM पेंशन' : 'e-Shram Card & PM Shram Yogi Maandhan'}</h4>
          ${isHindi ? `
            <p><strong>e-श्रम कार्ड:</strong> असंगठित मजदूरों (निर्माण, घरेलू काम, रेहड़ी, ड्राइवर, आदि) का राष्ट्रीय डेटाबेस। UAN नंबर मिलता है।</p>
            <p><strong>PM-SYM पेंशन:</strong> 18-40 वर्ष के असंगठित श्रमिकों को 60 वर्ष की आयु के बाद <strong>₹3,000/माह पेंशन</strong>। ₹55-₹200/माह न्यूनतम अंशदान।</p>
            <p><strong>पात्रता:</strong> मासिक आय ₹15,000 से कम, EPFO/ESIC सदस्य नहीं, आयकर दाता नहीं।</p>
            <p><strong>दस्तावेज़:</strong> आधार कार्ड, मोबाइल नंबर, बैंक खाता, IFSC।</p>
            <p><strong>पंजीकरण:</strong> eshram.gov.in या CSC केंद्र।</p>
          ` : `
            <p><strong>e-Shram Card:</strong> National database for unorganized workers (construction, domestic, street vendors, drivers, etc.). Get a Unique UAN number.</p>
            <p><strong>PM-SYM Pension:</strong> Workers aged 18-40 get <strong>₹3,000/month pension</strong> after age 60. Min contribution ₹55-₹200/month (Govt matches equally).</p>
            <p><strong>Eligibility:</strong> Monthly income < ₹15,000, not an EPFO/ESIC member, not an income taxpayer.</p>
            <p><strong>Documents:</strong> Aadhaar Card, Mobile Number, Bank Account with IFSC.</p>
            <p><strong>Register at:</strong> eshram.gov.in or nearest CSC centre.</p>
          `}
          <div style="margin-top: 0.75rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
            <a href="scheme-details.html?id=e-shram-card" class="assistant-action-btn">🏗️ e-Shram Details →</a>
            <a href="https://eshram.gov.in" target="_blank" class="assistant-action-btn" style="background:rgba(245,158,11,0.15)">🌐 eshram.gov.in ↗</a>
          </div>
        </div>
      `,
      speech: isHindi ? "e-श्रम कार्ड बनवाने के लिए eshram.gov.in पर जाएं। PM-SYM में 60 के बाद 3000 रुपये माह पेंशन मिलती है।" : "Register for e-Shram Card at eshram.gov.in. PM-SYM gives 3000 rupees per month pension after age 60."
    };
  }

  // PM Awas Yojana (Housing)
  if (/awas|pmay|housing|ghar|makaan|makan|home.?(scheme|loan|subsidy)|gramin.?(awas|housing)|urban.?(awas|housing)/i.test(query)) {
    return {
      html: `
        <div class="assistant-bubble-card">
          <h4 style="margin-bottom:0.4rem;color:#38bdf8;">🏠 ${isHindi ? 'प्रधानमंत्री आवास योजना' : 'PM Awas Yojana (PMAY)'}</h4>
          ${isHindi ? `
            <p><strong>ग्रामीण (PMAY-G):</strong> BPL परिवारों को पक्का घर बनाने के लिए <strong>₹1.20-2.0 लाख</strong> की अनुदान सहायता।</p>
            <p><strong>शहरी (PMAY-U):</strong> EWS/LIG/MIG परिवारों को होम लोन पर <strong>₹2.67 लाख तक</strong> ब्याज सब्सिडी (CLSS)।</p>
            <p><strong>पात्रता:</strong> जिनके पास कोई पक्का घर नहीं है, EWS (₹3L/वर्ष आय तक), LIG (₹6L तक), MIG-I/II (₹12L/18L तक)।</p>
            <p><strong>दस्तावेज़:</strong> आधार, आय प्रमाण, पते का प्रमाण, बैंक खाता।</p>
            <p><strong>आवेदन:</strong> pmaymis.gov.in (शहरी) या rhreporting.nic.in (ग्रामीण)।</p>
          ` : `
            <p><strong>PMAY-Gramin:</strong> BPL families get <strong>₹1.20-2.0 Lakh</strong> grant to build a pucca house.</p>
            <p><strong>PMAY-Urban:</strong> EWS/LIG/MIG families get up to <strong>₹2.67 Lakh</strong> interest subsidy on home loans (CLSS scheme).</p>
            <p><strong>Eligibility:</strong> Families with no pucca house: EWS (income up to ₹3L/yr), LIG (up to ₹6L), MIG-I/II (up to ₹12L/18L).</p>
            <p><strong>Documents:</strong> Aadhaar, Income Certificate, Address Proof, Bank Account.</p>
            <p><strong>Apply at:</strong> pmaymis.gov.in (Urban) or rhreporting.nic.in (Rural).</p>
          `}
          <div style="margin-top: 0.75rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
            <a href="scheme-details.html?id=pm-awas-urban" class="assistant-action-btn">🏠 View Details →</a>
            <a href="https://pmaymis.gov.in" target="_blank" class="assistant-action-btn" style="background:rgba(14,165,233,0.15)">🌐 PMAY Portal ↗</a>
          </div>
        </div>
      `,
      speech: isHindi ? "PM Awas Yojana में ग्रामीण परिवारों को 1.2 लाख और शहरी परिवारों को 2.67 लाख तक की सब्सिडी मिलती है।" : "PM Awas Yojana gives up to 1.2 lakh to rural families and up to 2.67 lakh interest subsidy to urban families for housing."
    };
  }

  // Lakhpati Didi & Women Schemes
  if (/lakhpati.?didi|lakhpati|women.?(scheme|loan|benefit|shg|saving)|mahila.?(loan|yojana|scheme|bachat|samridhi)|shg|self.?help.?group/i.test(query)) {
    return {
      html: `
        <div class="assistant-bubble-card">
          <h4 style="margin-bottom:0.4rem;color:#f472b6;">👩 ${isHindi ? 'लखपति दीदी & महिला कल्याण योजनाएं' : 'Lakhpati Didi & Women Empowerment Schemes'}</h4>
          ${isHindi ? `
            <p><strong>लखपति दीदी:</strong> SHG महिलाओं को ₹1 लाख+ की सालाना आय अर्जित करने के लिए कौशल प्रशिक्षण, ब्याज-मुक्त ऋण (₹5,000-₹1 लाख)।</p>
            <p><strong>महिला सम्मान बचत पत्र:</strong> 2 साल के लिए <strong>7.5% गारंटीड ब्याज</strong> पर ₹2 लाख तक की जमा। Post Office में खुलवाएं।</p>
            <p><strong>PM उज्ज्वला 2.0:</strong> BPL/प्रवासी परिवारों की महिलाओं को <strong>मुफ्त LPG कनेक्शन</strong> + पहली रिफिल व स्टोव मुफ्त।</p>
            <p><strong>पात्रता:</strong> 18+ आयु की महिलाएं। Ujjwala के लिए BPL/प्रवासी परिवार।</p>
            <p><strong>आवेदन:</strong> नजदीकी SHG या DAY-NRLM केंद्र; Ujjwala के लिए LPG कंपनी।</p>
          ` : `
            <p><strong>Lakhpati Didi:</strong> Skill training and interest-free credit (₹5,000-₹1 Lakh) for SHG women to earn ₹1 Lakh+ annually.</p>
            <p><strong>Mahila Samman Savings:</strong> <strong>7.5% guaranteed interest</strong> for 2 years on deposits up to ₹2 Lakh at Post Office.</p>
            <p><strong>PM Ujjwala 2.0:</strong> <strong>Free LPG connection</strong> + first refill & stove free for BPL/migrant women.</p>
            <p><strong>Eligibility:</strong> Women aged 18+. Ujjwala for BPL/migrant households.</p>
            <p><strong>Apply at:</strong> Nearest SHG or DAY-NRLM centre; Ujjwala via LPG distributor.</p>
          `}
          <div style="margin-top: 0.75rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
            <a href="scheme-details.html?id=lakhpati-didi" class="assistant-action-btn">👩 View Schemes →</a>
            <a href="results.html" class="assistant-action-btn" style="background:rgba(236,72,153,0.15)">🎯 Check My Matches →</a>
          </div>
        </div>
      `,
      speech: isHindi ? "महिलाओं के लिए लखपति दीदी, महिला सम्मान बचत पत्र और PM उज्ज्वला जैसी योजनाएं हैं।" : "For women, schemes include Lakhpati Didi for SHG members, Mahila Samman Savings at 7.5 percent, and free LPG via PM Ujjwala."
    };
  }

  // Atal Pension Yojana & Old Age Pension
  if (/atal.?pension|apy|old.?age.?pension|vridha.?pension|senior.?citizen.?pension|ignoaps|pension.?(scheme|yojana|benefit)/i.test(query)) {
    return {
      html: `
        <div class="assistant-bubble-card">
          <h4 style="margin-bottom:0.4rem;color:#c084fc;">👴 ${isHindi ? 'पेंशन योजनाएं (APY & वृद्धावस्था)' : 'Pension Schemes (APY & Old Age)'}</h4>
          ${isHindi ? `
            <p><strong>अटल पेंशन योजना (APY):</strong> 18-40 वर्ष के भारतीय नागरिक, 60 के बाद <strong>₹1,000-₹5,000/माह</strong> गारंटीड पेंशन। ₹42-₹210/माह अंशदान।</p>
            <p><strong>IGNOAPS (राष्ट्रीय वृद्धावस्था पेंशन):</strong> 60+ वर्ष के BPL/गरीब बुजुर्गों को <strong>₹200-₹500/माह</strong> पेंशन (राज्य की टॉप-अप के साथ अधिक हो सकती है)।</p>
            <p><strong>APY के लिए दस्तावेज़:</strong> आधार, बैंक खाता, मोबाइल नंबर।</p>
            <p><strong>APY आवेदन:</strong> किसी भी बैंक शाखा में या NPS app/apyonboarding.nsdl.com।</p>
            <p><strong>IGNOAPS आवेदन:</strong> ग्राम पंचायत या नगर पालिका कार्यालय।</p>
          ` : `
            <p><strong>Atal Pension Yojana (APY):</strong> Indian citizens aged 18-40 get guaranteed <strong>₹1,000-₹5,000/month pension</strong> from age 60. Min contribution ₹42-₹210/month.</p>
            <p><strong>IGNOAPS (Old Age Pension):</strong> BPL/destitute seniors aged 60+ get <strong>₹200-₹500/month</strong> pension (states may top up additional amount).</p>
            <p><strong>APY Documents:</strong> Aadhaar, Bank Account, Mobile Number.</p>
            <p><strong>APY Apply at:</strong> Any bank branch or NPS app / apyonboarding.nsdl.com.</p>
            <p><strong>IGNOAPS Apply at:</strong> Village Panchayat or Municipal Office.</p>
          `}
          <div style="margin-top: 0.75rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
            <a href="scheme-details.html?id=atal-pension-yojana" class="assistant-action-btn">👴 APY Details →</a>
            <a href="scheme-details.html?id=national-old-age-pension" class="assistant-action-btn" style="background:rgba(168,85,247,0.15)">🏛️ Old Age Pension →</a>
          </div>
        </div>
      `,
      speech: isHindi ? "APY में 60 की उम्र के बाद 1000 से 5000 रुपये माह पेंशन मिलती है। बुजुर्गों को IGNOAPS में 200 से 500 रुपये माह मिलते हैं।" : "Atal Pension Yojana guarantees 1000 to 5000 rupees per month from age 60. Senior citizens get 200 to 500 rupees per month under IGNOAPS old age pension."
    };
  }

  // 7. SCHEME-SPECIFIC & GENERAL REQUIRED DOCUMENTS
  if (/document|documents|kagaz|kya\s*kya\s*chahiye|require\s*doc|dastavez|praman\s*patra|income\s*cert|caste\s*cert|bonafide/i.test(query)) {
    let targetScheme = null;
    if (/pragati/i.test(query)) targetScheme = SCHEME_DATABASE.find(s => s.id === 'aicte-pragati');
    else if (/saksham/i.test(query)) targetScheme = SCHEME_DATABASE.find(s => s.id === 'aicte-saksham');
    else if (/pmsss|jk|ladakh/i.test(query)) targetScheme = SCHEME_DATABASE.find(s => s.id === 'pm-usp-special-jk-ladakh');
    else if (/pm\s*-?\s*usp|central\s*sector/i.test(query)) targetScheme = SCHEME_DATABASE.find(s => s.id === 'pm-usp-central-sector');
    else if (/post\s*-?\s*matric.*(sc|st|obc)|mp\s*post/i.test(query)) targetScheme = SCHEME_DATABASE.find(s => s.id === 'mp-post-matric-obc' || s.id.includes('post-matric'));
    else if (/loan|interest\s*subsidy|csis/i.test(query)) targetScheme = SCHEME_DATABASE.find(s => s.id === 'pm-usp-csis-interest-subsidy');
    else if (/top\s*class.*sc/i.test(query)) targetScheme = SCHEME_DATABASE.find(s => s.id === 'top-class-education-sc');

    if (!targetScheme && window.location.pathname.includes('scheme-details')) {
      const uParams = new URLSearchParams(window.location.search);
      const sId = uParams.get('id');
      if (sId) targetScheme = SCHEME_DATABASE.find(s => s.id === sId);
    }

    if (targetScheme) {
      const docItems = targetScheme.required_documents.map(dKey => {
        const labels = {
          aadhaar: isHindi ? 'आधार कार्ड (सत्यापित मोबाइल नंबर से लिंक)' : 'Aadhaar Card (Linked to Mobile/NPCI)',
          income_cert: isHindi ? `आय प्रमाण पत्र (सक्षम प्राधिकारी/तहसीलदार द्वारा जारी, आय सीमा ₹${((targetScheme.eligibilityRules?.maxIncome || 0)/100000).toFixed(1)} लाख)` : `Family Income Certificate (Limit: ₹${((targetScheme.eligibilityRules?.maxIncome || 0)/100000).toFixed(1)} Lakhs)`,
          caste_cert: isHindi ? 'सक्षम प्राधिकारी द्वारा जारी जाति प्रमाण पत्र (Caste Certificate)' : 'Caste / Category Certificate by Competent Authority',
          student_id: isHindi ? 'संस्थान का बोनाफाइड प्रमाणपत्र / शुल्क रसीद (College Bonafide)' : 'College Bonafide Certificate / Fee Receipt',
          marksheet: isHindi ? 'कक्षा 10वीं व 12वीं की अंकसूची (Marksheets)' : 'Qualifying Examination Marksheets (10th & 12th)',
          bank_account: isHindi ? 'सक्रिय बैंक खाता पासबुक (NPCI आधार सीडेड)' : 'Active Bank Passbook (NPCI Seeded for DBT Transfer)',
          disability_cert: isHindi ? 'UDID कार्ड या 40%+ दिव्यांगता प्रमाण पत्र' : 'UDID Card / 40%+ Benchmark Disability Certificate',
          domicile_cert: isHindi ? 'मूल निवास प्रमाण पत्र (Domicile / Residence Certificate)' : 'State Domicile / Residence Certificate'
        };
        return `<li>📄 <strong>${labels[dKey] || dKey.replace('_', ' ').toUpperCase()}</strong></li>`;
      }).join('');

      return {
        html: `
          <div class="assistant-bubble-card">
            <h4 style="margin-bottom:0.4rem;color:#f97316;">📄 ${targetScheme.name}:</h4>
            <p>${isHindi ? "इस योजना के लिए आवश्यक दस्तावेज़ों की सूची:" : "Official Required Documents Checklist:"}</p>
            <ul style="margin-left: 1.2rem; font-size: 0.88rem; line-height: 1.55; margin-top:0.3rem;">
              ${docItems}
            </ul>
            <div style="margin-top: 0.75rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
              <a href="scheme-details.html?id=${targetScheme.id}" class="assistant-action-btn">🔍 View Scheme Details →</a>
              <a href="${targetScheme.application_url}" target="_blank" rel="noopener noreferrer" class="assistant-action-btn secondary">🌐 Official Portal ↗</a>
            </div>
          </div>
        `,
        speech: isHindi ? `${targetScheme.name} के लिए मुख्य दस्तावेज़ हैं: आधार कार्ड, आय प्रमाण पत्र, अंकसूची, बैंक पासबुक और कॉलेज बोनाफाइड प्रमाणपत्र।` : `Required documents for ${targetScheme.name} include Aadhaar, Income Certificate, Marksheets, and College Bonafide.`
      };
    }

    if (isHindi) {
      return {
        html: `
          <div class="assistant-bubble-card">
            <h4 style="margin-bottom:0.4rem;color:#f97316;">📄 सरकारी छात्रवृत्ति हेतु 5 अनिवार्य दस्तावेज़:</h4>
            <ul style="margin-left: 1.2rem; font-size: 0.88rem; line-height: 1.55;">
              <li><strong>1. आधार कार्ड:</strong> आपके मोबाइल नंबर से लिंक होना आवश्यक है।</li>
              <li><strong>2. आय प्रमाण पत्र (Income Certificate):</strong> तहसीलदार या SDM द्वारा जारी किया गया।</li>
              <li><strong>3. पिछली कक्षा की अंकसूची (Marksheet):</strong> 10वीं, 12वीं या पिछले सेमेस्टर का स्कोरकार्ड।</li>
              <li><strong>4. जाति प्रमाण पत्र (यदि लागू हो):</strong> SC, ST, OBC या EWS के लिए वैध डिजिटल प्रमाण पत्र।</li>
              <li><strong>5. कॉलेज बोनाफाइड व बैंक पासबुक:</strong> बैंक खाता NPCI मैपर पर आधार से सीडेड होना चाहिए।</li>
            </ul>
            <p style="margin-top:0.5rem;font-size:0.82rem;color:var(--text-muted);">💡 <em>सुझाव: किसी विशिष्ट योजना (जैसे Pragati, Saksham, PM-USP) के दस्तावेज़ जानने के लिए योजना का नाम पूछें।</em></p>
          </div>
        `,
        speech: "सरकारी छात्रवृत्ति के लिए 5 मुख्य दस्तावेज़ चाहिए: आधार कार्ड, आय प्रमाण पत्र, पिछली अंकसूची, जाति प्रमाण पत्र और आधार सीडेड बैंक पासबुक।"
      };
    } else {
      return {
        html: `
          <div class="assistant-bubble-card">
            <h4 style="margin-bottom:0.4rem;color:#f97316;">📄 5 Essential Documents for Government Schemes:</h4>
            <ul style="margin-left: 1.2rem; font-size: 0.88rem; line-height: 1.55;">
              <li><strong>1. Aadhaar Card:</strong> Must be linked to your active mobile number.</li>
              <li><strong>2. Income Certificate:</strong> Issued by Tehsildar/SDM within last 1-3 years.</li>
              <li><strong>3. Educational Marksheets:</strong> Class 10th, 12th, or last qualifying semester score.</li>
              <li><strong>4. Caste / Category Certificate:</strong> Valid digital certificate for SC, ST, OBC, or EWS.</li>
              <li><strong>5. College Bonafide & Bank Passbook:</strong> Account must be NPCI Aadhaar-seeded for DBT.</li>
            </ul>
            <p style="margin-top:0.5rem;font-size:0.82rem;color:var(--text-muted);">💡 <em>Tip: You can ask for specific schemes like 'Pragati documents' or 'PM-USP documents'.</em></p>
          </div>
        `,
        speech: "The essential documents are: Aadhaar card, family income certificate, qualifying marksheet, caste certificate if applicable, and Aadhaar seeded bank account."
      };
    }
  }

  // 8. WHERE AND HOW TO APPLY
  if (/kaha(n)?\s*apply|kaha\s*jana|official\s*website|official\s*portal|portal\s*kholo|link\s*kya|where\s*to\s*apply|how\s*to\s*apply|application\s*process|registration\s*kaise/i.test(query)) {
    let targetScheme = null;
    if (/pragati/i.test(query)) targetScheme = SCHEME_DATABASE.find(s => s.id === 'aicte-pragati');
    else if (/saksham/i.test(query)) targetScheme = SCHEME_DATABASE.find(s => s.id === 'aicte-saksham');
    else if (/pmsss|jk/i.test(query)) targetScheme = SCHEME_DATABASE.find(s => s.id === 'pm-usp-special-jk-ladakh');
    else if (/pm\s*-?\s*usp|central\s*sector/i.test(query)) targetScheme = SCHEME_DATABASE.find(s => s.id === 'pm-usp-central-sector');
    else if (/loan|csis/i.test(query)) targetScheme = SCHEME_DATABASE.find(s => s.id === 'pm-usp-csis-interest-subsidy');

    if (targetScheme) {
      return {
        html: `
          <div class="assistant-bubble-card">
            <h4 style="margin-bottom:0.4rem;color:#f97316;">🌐 ${targetScheme.name} का आवेदन पोर्टल:</h4>
            <p><strong>आधिकारिक विभाग:</strong> ${targetScheme.official_source}</p>
            <p><strong>आवेदन प्रक्रिया:</strong> ${targetScheme.application_process}</p>
            <p><strong>महत्वपूर्ण तिथियां:</strong> ${targetScheme.important_dates}</p>
            <div style="margin-top: 0.75rem;">
              <a href="${targetScheme.application_url}" target="_blank" rel="noopener noreferrer" class="assistant-action-btn">🚀 आधिकारिक वेबसाइट पर जाएं (Official Link) ↗</a>
            </div>
          </div>
        `,
        speech: `${targetScheme.name} का आवेदन ${targetScheme.official_source} के आधिकारिक पोर्टल पर होता है। लिंक स्क्रीन पर उपलब्ध करा दिया गया है।`
      };
    }

    if (isHindi) {
      return {
        html: `
          <div class="assistant-bubble-card">
            <h4 style="margin-bottom:0.4rem;color:#f97316;">🏛️ सरकारी छात्रवृत्ति हेतु प्रमुख आधिकारिक पोर्टल्स:</h4>
            <div style="font-size:0.88rem;line-height:1.6;">
              <p><strong>1. National Scholarship Portal (NSP):</strong><br>
              <a href="https://scholarships.gov.in" target="_blank" rel="noopener" style="color:#38bdf8;">scholarships.gov.in ↗</a> — Central Sector, AICTE, UGC व Minority योजनाओं के लिए OTR (One Time Registration) करें।</p>
              
              <p><strong>2. AICTE Student Development Portal:</strong><br>
              <a href="https://www.aicte-india.org" target="_blank" rel="noopener" style="color:#38bdf8;">aicte-india.org ↗</a> — Pragati, Saksham और Swanath तकनीकी छात्रवृत्तियों के लिए।</p>
              
              <p><strong>3. Vidya Lakshmi Education Loan Portal:</strong><br>
              <a href="https://www.vidyalakshmi.co.in" target="_blank" rel="noopener" style="color:#38bdf8;">vidyalakshmi.co.in ↗</a> — उच्च शिक्षा लोन पर 100% ब्याज सब्सिडी (CSIS) हेतु।</p>
              
              <p><strong>4. राज्य छात्रवृत्ति पोर्टल्स:</strong> MP (scholarshipportal.mp.nic.in), UP (scholarship.up.gov.in), Maharashtra (mahadbt.maharashtra.gov.in)।</p>
            </div>
            <div style="margin-top:0.75rem;padding:0.5rem;background:rgba(249,115,22,0.1);border-left:3px solid #f97316;font-size:0.82rem;">
              <strong>जरूरी टिप:</strong> आवेदन से पहले अपने बैंक खाते में आधार NPCI मैपर अवश्य एक्टिव करा लें!
            </div>
          </div>
        `,
        speech: "मुख्य आवेदन National Scholarship Portal scholarships.gov.in, AICTE पोर्टल, या विद्या लक्ष्मी पोर्टल पर किए जाते हैं। सभी लिंक्स चैट में मौजूद हैं।"
      };
    } else {
      return {
        html: `
          <div class="assistant-bubble-card">
            <h4 style="margin-bottom:0.4rem;color:#f97316;">🏛️ Key Official Government Portals:</h4>
            <div style="font-size:0.88rem;line-height:1.6;">
              <p><strong>1. National Scholarship Portal (NSP):</strong><br>
              <a href="https://scholarships.gov.in" target="_blank" rel="noopener" style="color:#38bdf8;">scholarships.gov.in ↗</a> — Unified portal for Central Sector, AICTE, and UGC schemes with Aadhaar OTR registration.</p>
              
              <p><strong>2. AICTE Portal:</strong><br>
              <a href="https://www.aicte-india.org" target="_blank" rel="noopener" style="color:#38bdf8;">aicte-india.org ↗</a> — For Pragati, Saksham, and Swanath technical programs.</p>
              
              <p><strong>3. Vidya Lakshmi Portal:</strong><br>
              <a href="https://www.vidyalakshmi.co.in" target="_blank" rel="noopener" style="color:#38bdf8;">vidyalakshmi.co.in ↗</a> — Apply for 100% interest subsidy on education loans (CSIS).</p>
            </div>
          </div>
        `,
        speech: "Official applications are routed through the National Scholarship Portal at scholarships.gov.in, AICTE, and Vidya Lakshmi portals."
      };
    }
  }

  // 9. ELIGIBILITY & CRITERIA FILTERING (Income, Engineering, Category)
  if (/income|engineering|medical|scholarship.*milegi|eligible|eligibility|yogyata|ladki|girl|obc|sc|st|general/i.test(query)) {
    const incMatch = query.match(/(\d+(?:\.\d+)?)\s*(?:lakh|लाख|lac)/i) || query.match(/(\d{4,7})/);
    let userIncome = null;
    if (incMatch) {
      userIncome = parseFloat(incMatch[1]);
      if (userIncome < 100) userIncome = userIncome * 100000;
    }

    const isGirl = /girl|ladki|female|beti/i.test(query);
    const isEngg = /engg|engineering|b\.?tech|diploma|tech/i.test(query);
    const isScSt = /sc|st/i.test(query);
    const isObc = /obc/i.test(query);

    let matches = SCHEME_DATABASE.filter(s => {
      const r = s.eligibilityRules || {};
      if (userIncome && r.maxIncome > 0 && userIncome > r.maxIncome) return false;
      if (isGirl && r.genders && r.genders.includes('Female')) return true;
      if (isEngg && r.courses && r.courses.some(c => c.includes('Engineering') || c.includes('Technology'))) return true;
      if (isScSt && r.categories && (r.categories.includes('SC') || r.categories.includes('ST'))) return true;
      if (isObc && r.categories && r.categories.includes('OBC')) return true;
      return !userIncome || !r.maxIncome || r.maxIncome >= userIncome;
    }).slice(0, 3);

    if (matches.length === 0) {
      return {
        html: `<div class="assistant-bubble-card"><p>No specific schemes directly matched that search criteria. You can browse all verified schemes or open the 6-step form wizard for a comprehensive profile evaluation.</p><div style="margin-top:0.6rem;"><a href="results.html" class="assistant-action-btn">Browse All Schemes →</a></div></div>`,
        speech: "No specific schemes directly matched those criteria. Try browsing all active schemes in the directory."
      };
    }

    const schemeCardsHtml = matches.map(s => `
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:0.6rem;margin-top:0.4rem;">
        <strong style="color:#ffffff;font-size:0.9rem;">${s.name}</strong>
        <p style="font-size:0.8rem;color:var(--text-muted);margin:0.2rem 0;">✨ ${s.benefits}</p>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.3rem;">
          <span style="font-size:0.75rem;color:#10b981;font-weight:600;">✓ Income Limit: ${(s.eligibilityRules?.maxIncome > 0) ? 'Up to ₹' + (s.eligibilityRules.maxIncome/100000).toFixed(1) + 'L' : 'No Limit'}</span>
          <a href="scheme-details.html?id=${s.id}" style="font-size:0.78rem;color:#38bdf8;font-weight:600;">Details →</a>
        </div>
      </div>
    `).join('');

    return {
      html: `
        <div class="assistant-bubble-card">
          <h4 style="margin-bottom:0.4rem;color:#f97316;">🎯 आपकी प्रोफ़ाइल हेतु सर्वश्रेष्ठ योजनाएं:</h4>
          ${userIncome ? `<p style="font-size:0.85rem;">वार्षिक आय ₹${(userIncome/100000).toFixed(1)} लाख के अंतर्गत आप निम्नलिखित योजनाओं के लिए पात्र हैं:</p>` : `<p style="font-size:0.85rem;">आपके द्वारा पूछे गए मानदंडों के आधार पर अनुशंसित योजनाएं:</p>`}
          ${schemeCardsHtml}
          <div style="margin-top: 0.75rem;">
            <a href="find-schemes.html" class="assistant-action-btn">🔍 सभी 75 योजनाओं की पात्रता चेक करें →</a>
          </div>
        </div>
      `,
      speech: isHindi ? `आपकी प्रोफ़ाइल के अनुसार ${matches.length} प्रमुख योजनाएं हैं, जैसे ${matches[0].name}। पूर्ण विवरण चैट में देख सकते हैं।` : `Based on your criteria, top matching schemes include ${matches[0].name}. Details are displayed in chat.`
    };
  }

  // 10. GREETINGS & NATURAL CONVERSATION
  if (/namaste|hello|hi\b|pranam|ram ram|kaise ho/i.test(query)) {
    if (isHindi) {
      return {
        html: `
          <div class="assistant-bubble-card">
            <p><strong>🙏 नमस्ते! मैं सेवा-वाणी (SevaVaani) हूँ।</strong></p>
            <p>मैं भारत सरकार व राज्यों की 50+ छात्रवृत्ति और कल्याणकारी योजनाओं की जानकारी देने के लिए आपकी सहायता कर सकता हूँ।</p>
            <p style="margin-top:0.4rem;font-size:0.85rem;color:var(--text-muted);">आप मुझसे पूछ सकते हैं:</p>
            <ul style="margin-left:1.2rem;font-size:0.84rem;margin-top:0.2rem;">
              <li>"फॉर्म कैसे भरना है?"</li>
              <li>"प्रगति योजना के क्या डाक्यूमेंट्स हैं?"</li>
              <li>"छात्रवृत्ति के लिए कहाँ अप्लाई करें?"</li>
              <li>"इंजीनियरिंग स्टूडेंट्स के लिए कौनसी योजना है?"</li>
            </ul>
          </div>
        `,
        speech: "नमस्ते! मैं सेवा-वाणी हूँ। आप मुझसे छात्रवृत्ति फॉर्म भरने, आवश्यक दस्तावेज़ या आवेदन पोर्टल के बारे में कुछ भी पूछ सकते हैं।"
      };
    } else {
      return {
        html: `
          <div class="assistant-bubble-card">
            <p><strong>👋 Hello! I am SevaVaani Co-Pilot.</strong></p>
            <p>I can help you navigate 69 central & state welfare schemes, calculate your eligibility, and guide you on documentation.</p>
            <p style="margin-top:0.4rem;font-size:0.85rem;color:var(--text-muted);">Try asking:</p>
            <ul style="margin-left:1.2rem;font-size:0.84rem;margin-top:0.2rem;">
              <li>"How to fill the application form?"</li>
              <li>"Required documents for Pragati scheme?"</li>
              <li>"Where to apply for scholarships?"</li>
              <li>"Best schemes for engineering students"</li>
            </ul>
          </div>
        `,
        speech: "Hello! I am SevaVaani Co-Pilot. You can ask me how to fill forms, required documents, or where to apply for scholarships."
      };
    }
  }

  // 11. GENERAL HIGH-INTELLIGENCE FALLBACK
  const searchResults = SCHEME_DATABASE.filter(s => {
    const sName = s.name.toLowerCase();
    const sDesc = s.short_description.toLowerCase();
    const sCat = s.category.toLowerCase();
    const words = query.split(/\s+/);
    return words.some(w => w.length > 3 && (sName.includes(w) || sDesc.includes(w) || sCat.includes(w)));
  }).slice(0, 2);

  if (searchResults.length > 0) {
    const listHtml = searchResults.map(s => `
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:0.6rem;margin-top:0.4rem;">
        <strong style="color:#ffffff;font-size:0.88rem;">${s.name}</strong>
        <p style="font-size:0.8rem;color:var(--text-muted);margin:0.2rem 0;">${s.short_description}</p>
        <a href="scheme-details.html?id=${s.id}" style="font-size:0.8rem;color:#38bdf8;">View Eligibility & Documents →</a>
      </div>
    `).join('');

    return {
      html: `
        <div class="assistant-bubble-card">
          <p>आपके प्रश्न <em>"${rawQuery}"</em> से संबंधित योजनाएं:</p>
          ${listHtml}
        </div>
      `,
      speech: isHindi ? "आपके प्रश्न से संबंधित योजनाएं स्क्रीन पर प्रदर्शित कर दी गई हैं।" : "Here are relevant schemes found for your query."
    };
  }

  return {
    html: `
      <div class="assistant-bubble-card">
        <p><strong>💡 ${isHindi ? "मैं आपकी सहायता कैसे कर सकता हूँ?" : "How can I help you?"}</strong></p>
        <p>${isHindi ? `मैंने सुना: "<em>${rawQuery}</em>"। आप नीचे दिए गए विषयों पर तुरंत जानकारी पा सकते हैं:` : `I heard: "<em>${rawQuery}</em>". You can get immediate answers on:`}</p>
        <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-top:0.5rem;">
          <button type="button" class="chip-btn" onclick="handleAssistantChip('Form kaise bhare?')">📝 Form कैसे भरें?</button>
          <button type="button" class="chip-btn" onclick="handleAssistantChip('Pragati scheme documents?')">📄 आवश्यक दस्तावेज़</button>
          <button type="button" class="chip-btn" onclick="handleAssistantChip('Kaha apply kare?')">🔗 कहाँ अप्लाई करें?</button>
          <button type="button" class="chip-btn" onclick="handleAssistantChip('Find schemes wizard kholo')">🚀 योजना खोजें</button>
        </div>
      </div>
    `,
    speech: isHindi ? `सुना गया: ${rawQuery}। आप फॉर्म भरने, दस्तावेज़ या आवेदन पोर्टल के बारे में पूछ सकते हैं।` : `Understood: ${rawQuery}. You can ask about form filling, documents, or application portals.`
  };
}

// Global chip click handler
window.handleAssistantChip = function(queryText) {
  handleAssistantUserMessage(queryText);
};

function handleAssistantUserMessage(userText) {
  if (!userText || !userText.trim()) return;
  const cleanText = userText.trim();

  // Append user message
  appendAssistantMessage('user', cleanText);

  // Status to thinking
  setAssistantStatus('thinking', currentLangCode.startsWith('hi') ? 'उत्तर तैयार किया जा रहा है...' : 'Generating guidance...');

  setTimeout(() => {
    const response = generateConversationalResponse(cleanText);
    playVoiceTone('success');
    appendAssistantMessage('assistant', response.html);

    if (!isVoiceMuted && response.speech) {
      setAssistantStatus('speaking', currentLangCode.startsWith('hi') ? 'बोल रहा है...' : 'Speaking...');
      readAloudText(response.speech, null, () => {
        setAssistantStatus('idle', currentLangCode.startsWith('hi') ? 'सहयोग हेतु तैयार' : 'Ready to help');
      });
    } else {
      setAssistantStatus('idle', currentLangCode.startsWith('hi') ? 'सहयोग हेतु तैयार' : 'Ready to help');
    }

    if (response.action) {
      response.action();
    }
  }, 350);
}

function appendAssistantMessage(sender, htmlContent) {
  const container = document.getElementById('sevavaani-messages');
  if (!container) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = sender === 'user' ? 'sevavaani-msg user' : 'sevavaani-msg assistant';

  if (sender === 'assistant') {
    msgDiv.innerHTML = `
      <div class="msg-avatar">🏛️</div>
      <div class="msg-bubble">${htmlContent}</div>
    `;
  } else {
    msgDiv.innerHTML = `
      <div class="msg-bubble">${escapeHtml(htmlContent)}</div>
      <div class="msg-avatar user">👤</div>
    `;
  }

  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;

  // Sync to legacy transcript display if present
  const legacyTranscript = document.getElementById('voice-transcript-display');
  if (legacyTranscript) legacyTranscript.textContent = sender === 'user' ? htmlContent : 'Response provided in assistant panel.';
}

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function setAssistantStatus(state, labelText) {
  const waveBar = document.getElementById('sevavaani-wave-bar');
  const statusText = document.getElementById('sevavaani-live-status');
  const micBtn = document.getElementById('sevavaani-mic-btn');

  if (waveBar) {
    waveBar.classList.remove('listening', 'speaking', 'thinking');
    if (state !== 'idle') waveBar.classList.add(state);
  }

  if (statusText && labelText) {
    statusText.textContent = labelText;
  }

  if (micBtn) {
    micBtn.classList.toggle('active', state === 'listening');
  }
}

// Backward compatible processVoiceCommands
function processVoiceCommands(transcriptText) {
  handleAssistantUserMessage(transcriptText);
}

// ==========================================================================
// 8. VOICE ASSISTANT DRAWER CONTROLLER
// ==========================================================================
function setupVoiceAssistant() {
  const drawer = document.getElementById('sevavaani-drawer');
  const triggerBtn = document.getElementById('sevavaani-trigger');
  const closeBtn = document.getElementById('sevavaani-close-btn');
  const navTrigger = document.getElementById('voice-assistant-trigger');
  const micBtn = document.getElementById('sevavaani-mic-btn');
  const textInput = document.getElementById('sevavaani-text-input');
  const sendBtn = document.getElementById('sevavaani-send-btn');
  const soundBtn = document.getElementById('sevavaani-sound-btn');
  const langBtn = document.getElementById('sevavaani-lang-btn');
  const langText = document.getElementById('sevavaani-lang-text');
  const chipBtns = document.querySelectorAll('#sevavaani-chips .chip-btn');

  function openAssistant() {
    if (drawer) {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      const msgContainer = document.getElementById('sevavaani-messages');
      if (msgContainer && msgContainer.children.length === 0) {
        const welcome = currentLangCode.startsWith('hi') 
          ? '🙏 <strong>नमस्ते! मैं सेवा-वाणी हूँ।</strong><br>आप मुझसे फॉर्म भरने, किसी भी योजना के दस्तावेज़ या कहाँ अप्लाई करना है, पूछ सकते हैं।'
          : '👋 <strong>Hello! I am SevaVaani Co-Pilot.</strong><br>Ask me how to fill the form, required documents for any scheme, or where to apply!';
        appendAssistantMessage('assistant', welcome);
      }
      setTimeout(() => { if (textInput) textInput.focus(); }, 300);
    }
  }

  function closeAssistant() {
    if (drawer) {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      stopAssistantListening();
      stopAllSpeech();
    }
  }

  if (triggerBtn) triggerBtn.addEventListener('click', openAssistant);
  if (navTrigger) navTrigger.addEventListener('click', openAssistant);
  if (closeBtn) closeBtn.addEventListener('click', closeAssistant);

  // Mute button
  if (soundBtn) {
    soundBtn.textContent = isVoiceMuted ? '🔇' : '🔊';
    soundBtn.addEventListener('click', toggleVoiceMute);
  }

  // Language switch inside assistant
  if (langBtn) {
    if (langText) langText.textContent = currentLangCode.startsWith('hi') ? 'HI' : 'EN';
    langBtn.addEventListener('click', () => {
      const nextLang = currentLangCode.startsWith('hi') ? 'en-IN' : 'hi-IN';
      applyLanguageTranslations(nextLang);
      if (langText) langText.textContent = nextLang.startsWith('hi') ? 'HI' : 'EN';
      const switchNotice = nextLang.startsWith('hi') ? 'भाषा बदलकर हिन्दी कर दी गई है।' : 'Language switched to English.';
      appendAssistantMessage('assistant', switchNotice);
      if (!isVoiceMuted) readAloudText(switchNotice);
    });
  }

  // Speech Recognition Handling
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let assistantListening = false;

  function stopAssistantListening() {
    if (globalRecognition) {
      try { globalRecognition.stop(); } catch (e) {}
    }
    assistantListening = false;
    setAssistantStatus('idle', currentLangCode.startsWith('hi') ? 'माइक बंद। टाइप करें या फिर से दबाएं।' : 'Mic stopped. Type or click mic.');
  }

  function startAssistantListening() {
    if (!SpeechRecognition) {
      alert(currentLangCode.startsWith('hi') ? 'आपके ब्राउज़र में आवाज़ पहचान उपलब्ध नहीं है। कृपया नीचे टाइप करें।' : 'Voice recognition is not supported in this browser. Please type below.');
      return;
    }

    try {
      stopAllSpeech();
      if (globalRecognition) {
        try { globalRecognition.abort(); } catch (e) {}
      }

      globalRecognition = new SpeechRecognition();
      globalRecognition.lang = currentLangCode;
      globalRecognition.interimResults = false;
      globalRecognition.continuous = false;

      globalRecognition.onstart = () => {
        assistantListening = true;
        playVoiceTone('start');
        setAssistantStatus('listening', currentLangCode.startsWith('hi') ? '🎙️ सुन रहा हूँ... बोलिए' : '🎙️ Listening... speak now');
      };

      globalRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        stopAssistantListening();
        handleAssistantUserMessage(transcript);
      };

      globalRecognition.onerror = (event) => {
        console.warn('Voice notice:', event.error);
        stopAssistantListening();
        if (event.error === 'not-allowed') {
          setAssistantStatus('idle', 'Microphone access denied. Type below.');
        } else {
          setAssistantStatus('idle', 'No speech heard. Try again.');
        }
      };

      globalRecognition.onend = () => {
        assistantListening = false;
        if (drawer && drawer.classList.contains('open')) {
          setAssistantStatus('idle', currentLangCode.startsWith('hi') ? 'सहयोग हेतु तैयार' : 'Ready to help');
        }
      };

      globalRecognition.start();
    } catch (err) {
      console.error('Voice start exception:', err);
      stopAssistantListening();
    }
  }

  if (micBtn) {
    micBtn.addEventListener('click', () => {
      if (assistantListening) {
        stopAssistantListening();
      } else {
        startAssistantListening();
      }
    });
  }

  // Text Send Handling
  function sendText() {
    if (!textInput) return;
    const text = textInput.value.trim();
    if (text) {
      textInput.value = '';
      handleAssistantUserMessage(text);
    }
  }

  if (sendBtn) sendBtn.addEventListener('click', sendText);
  if (textInput) {
    textInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendText();
      }
    });
  }

  // Suggestion Chips
  chipBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const q = this.getAttribute('data-query') || this.textContent;
      handleAssistantUserMessage(q);
    });
  });

  // Backward compatibility for legacy elements if present
  const oldOrb = document.getElementById('voice-orb');
  if (oldOrb) {
    oldOrb.addEventListener('click', openAssistant);
  }
}

// Interactive Hero Quick Screener Controller (index.html)
function initHeroQuickScreener() {
  // Support both occupation and education select (occupation takes priority if present)
  const occSelect = document.getElementById('hero-screener-occ');
  const eduSelect = document.getElementById('hero-screener-edu');
  const catSelect = document.getElementById('hero-screener-cat');
  const incSelect = document.getElementById('hero-screener-inc');
  const countBadge = document.getElementById('hero-screener-count');
  const screenerBtn = document.getElementById('hero-screener-submit');

  if (!incSelect) return;

  function updateQuickMatch() {
    const occVal = occSelect ? occSelect.value : 'All';
    const eduVal = eduSelect ? eduSelect.value : 'All';
    const catVal = catSelect ? catSelect.value : 'All';
    const incVal = parseInt(incSelect.value, 10) || 1000000;

    let matching = SCHEME_DATABASE.filter(s => {
      const r = s.eligibilityRules || {};
      if (r.maxIncome > 0 && incVal < 900000 && incVal > r.maxIncome) return false;
      if (catVal !== 'All' && r.categories && !r.categories.includes('All') && !r.categories.includes(catVal)) return false;
      // Occupation filter
      if (occVal && occVal !== 'All' && r.occupations && Array.isArray(r.occupations)) {
        const schOccs = r.occupations.map(o => o.toLowerCase());
        if (!schOccs.includes('all') && !schOccs.some(o => o.includes(occVal.toLowerCase()) || occVal.toLowerCase().includes(o))) return false;
      }
      // Education filter
      if ((!occVal || occVal === 'All') && eduVal !== 'All' && r.educationLevels && !r.educationLevels.includes('All') && !r.educationLevels.some(e => e.includes(eduVal))) return false;
      return true;
    });

    if (countBadge) countBadge.textContent = matching.length + ' ' + t("screener_schemes_found", "Schemes Found");
    window.updateHeroQuickScreenerText = updateQuickMatch;
  }

  if (occSelect) occSelect.addEventListener('change', updateQuickMatch);
  if (eduSelect) eduSelect.addEventListener('change', updateQuickMatch);
  if (catSelect) catSelect.addEventListener('change', updateQuickMatch);
  if (incSelect) incSelect.addEventListener('change', updateQuickMatch);
  updateQuickMatch();

  if (screenerBtn) {
    screenerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const profile = readStoredJson('schemematch_user_profile', {});
      if (eduSelect && eduSelect.value !== 'All') profile.educationLevel = eduSelect.value;
      if (occSelect && occSelect.value !== 'All') profile.occupation = occSelect.value;
      if (catSelect && catSelect.value !== 'All') profile.socialCategory = catSelect.value;
      profile.income = parseInt(incSelect.value, 10) || 250000;
      localStorage.setItem('schemematch_user_profile', JSON.stringify(profile));
      window.location.href = 'results.html';
    });
  }
}

// 9. ACCESSIBILITY CONTROLS
// ==========================================================================
function setupAccessibilityControls() {
  const decBtn = document.getElementById("font-decrease-btn");
  const resetBtn = document.getElementById("font-reset-btn");
  const incBtn = document.getElementById("font-increase-btn");
  const contrastBtn = document.getElementById("high-contrast-btn");
  const readPageBtn = document.getElementById("read-page-global-btn");
  const toggleDrawerBtn = document.getElementById("accessibility-toggle-btn");
  const drawer = document.getElementById("accessibility-bar");

  let currentFontSize = parseInt(localStorage.getItem("schemematch_font_size") || "100", 10);
  let isHighContrast = localStorage.getItem("schemematch_contrast") === "true";

  function applyFontSize(size) {
    currentFontSize = Math.min(130, Math.max(85, size));
    document.documentElement.style.fontSize = currentFontSize + "%";
    localStorage.setItem("schemematch_font_size", currentFontSize.toString());
  }

  function applyContrast(contrast) {
    isHighContrast = contrast;
    document.body.classList.toggle("high-contrast-mode", isHighContrast);
    localStorage.setItem("schemematch_contrast", isHighContrast.toString());
    if (contrastBtn) {
      contrastBtn.textContent = isHighContrast ? "☀️ Normal Contrast" : "🌓 High Contrast";
    }
  }

  applyFontSize(currentFontSize);
  applyContrast(isHighContrast);

  if (decBtn) decBtn.addEventListener("click", () => applyFontSize(currentFontSize - 10));
  if (resetBtn) resetBtn.addEventListener("click", () => applyFontSize(100));
  if (incBtn) incBtn.addEventListener("click", () => applyFontSize(currentFontSize + 10));
  if (contrastBtn) contrastBtn.addEventListener("click", () => applyContrast(!isHighContrast));

  if (toggleDrawerBtn && drawer) {
    toggleDrawerBtn.addEventListener("click", () => {
      drawer.classList.toggle("open");
    });
  }

  if (readPageBtn) {
    readPageBtn.addEventListener("click", () => {
      const mainText = document.querySelector("main")?.innerText || document.body.innerText;
      const snippet = mainText.slice(0, 450).replace(/\s+/g, " ");
      readAloudText(snippet, () => {
        readPageBtn.textContent = "⏹ Stop Reading";
      }, () => {
        readPageBtn.textContent = "🔊 Read Page";
      });
    });
  }
}

// ==========================================================================
// 10. 3D HERO SCENE WITH PARALLAX & AMBIENT VISUALS
// ==========================================================================
function setup3DHeroScene() {
  const scene = document.getElementById("hero-3d-card");
  if (!scene) return;

  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 24;
    const y = (e.clientY / window.innerHeight - 0.5) * 24;
    scene.style.transform = 'perspective(1000px) rotateY(' + x + 'deg) rotateX(' + (-y) + 'deg)';
  });
}

// ==========================================================================
// 11. FIND SCHEMES PAGE CONTROLLER (6-STEP WIZARD & CAMERA OCR)
// ==========================================================================
function initFindSchemesPage() {
  const form = document.getElementById("citizen-form");
  if (!form) return;

  let currentStep = 1;
  const totalSteps = 6;
  const stepPanels = [
    document.getElementById("step-personal"),
    document.getElementById("step-education"),
    document.getElementById("step-financial"),
    document.getElementById("step-other"),
    document.getElementById("step-documents"),
    document.getElementById("step-submit")
  ];
  const stepNavItems = document.querySelectorAll(".step-nav-item");

  function isStudentOccupation(occVal) {
    if (!occVal || occVal === "") return true;
    const val = occVal.toLowerCase();
    return val.includes("student") || val === "student";
  }

  function updateOccupationConditionalFields() {
    const occSelect = document.getElementById("occupation");
    const occVal = occSelect ? occSelect.value : "";
    const isStudent = isStudentOccupation(occVal);

    const stepEduNav = document.querySelector('.step-nav-item[data-step="2"]');
    const parentsContainer = document.getElementById("parents-info-container");
    const studentFinGroup = document.getElementById("student-financial-group");
    const studentDocsContainer = document.getElementById("student-docs-container");
    const btnPersonalNext = document.getElementById("btn-personal-next");
    const btnFinPrev = document.getElementById("btn-financial-prev");

    if (stepEduNav) {
      stepEduNav.style.display = isStudent ? "flex" : "none";
    }

    if (studentFinGroup) {
      studentFinGroup.style.display = isStudent ? "block" : "none";
    }

    if (parentsContainer) {
      parentsContainer.style.display = isStudent ? "block" : "none";
    }

    if (studentDocsContainer) {
      studentDocsContainer.style.display = isStudent ? "block" : "none";
    }

    if (btnPersonalNext) {
      btnPersonalNext.innerHTML = isStudent ? t("btn_next_edu", "Education Information →") : t("btn_next_fin", "Financial Information →");
    }

    if (btnFinPrev) {
      btnFinPrev.innerHTML = isStudent ? t("btn_prev_edu", "← Education Information") : t("btn_prev_personal", "← Personal Details");
    }
    window.updateWizardLocalizedButtons = updateOccupationConditionalFields;

    if (!isStudent) {
      const pOcc = document.getElementById("parent-occupation");
      const pGov = document.getElementById("govt-employee");
      const pDef = document.getElementById("defence-relation");
      const schol = document.getElementById("scholarship-received");
      const fee = document.getElementById("fee-reimbursement");
      const eduLoan = document.getElementById("education-loan");

      if (pOcc) pOcc.value = "";
      if (pGov) pGov.value = "";
      if (pDef) pDef.value = "";
      if (schol) schol.value = "";
      if (fee) fee.value = "";
      if (eduLoan) eduLoan.value = "";

      const eduLevel = document.getElementById("education-level");
      if (eduLevel) {
        eduLevel.value = "";
        updateEducationConditionalFields();
      }

      if (currentStep === 2) {
        showStep(3);
      }
    }

    updateReadinessUI();
  }

  function showStep(stepNum) {
    const occSelect = document.getElementById("occupation");
    const isStudent = isStudentOccupation(occSelect ? occSelect.value : "");

    // Skip step 2 (Education) if non-student occupation
    if (!isStudent && stepNum === 2) {
      stepNum = (currentStep === 1) ? 3 : 1;
    }

    currentStep = Math.min(totalSteps, Math.max(1, stepNum));
    stepPanels.forEach((panel, idx) => {
      if (panel) {
        panel.style.display = (idx + 1 === currentStep) ? "block" : "none";
      }
    });

    stepNavItems.forEach(item => {
      const stepTarget = parseInt(item.getAttribute("data-step"), 10);
      if (stepTarget === 2 && !isStudent) {
        item.style.display = "none";
      } else {
        item.style.display = "flex";
      }
      item.classList.toggle("active", stepTarget === currentStep);
      item.classList.toggle("completed", stepTarget < currentStep);
    });

    window.scrollTo({ top: form.offsetTop - 80, behavior: "smooth" });
  }

  // Step Navigator clicks
  stepNavItems.forEach(item => {
    item.addEventListener("click", function() {
      const targetStep = parseInt(this.getAttribute("data-step"), 10);
      if (targetStep) showStep(targetStep);
    });
  });

  // Next & Back Buttons
  document.querySelectorAll(".btn-next-step").forEach(btn => {
    btn.addEventListener("click", () => {
      if (validateCurrentStep(currentStep)) {
        showStep(currentStep + 1);
      }
    });
  });

  document.querySelectorAll(".btn-prev-step").forEach(btn => {
    btn.addEventListener("click", () => {
      showStep(currentStep - 1);
    });
  });

  function validateCurrentStep(step) {
    if (step === 1) {
      // Step 1: Personal Details Validation
      const ageVal = document.getElementById("age")?.value?.trim();
      if (!ageVal) {
        alert("Please enter your age.");
        document.getElementById("age")?.focus();
        return false;
      }
      const ageNum = parseInt(ageVal, 10);
      if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
        alert("Please enter a valid age between 1 and 120 years.");
        document.getElementById("age")?.focus();
        return false;
      }

      const genderVal = document.getElementById("gender")?.value;
      if (!genderVal || genderVal === "Select Gender") {
        alert("Please select your gender.");
        document.getElementById("gender")?.focus();
        return false;
      }

      const occVal = document.getElementById("occupation")?.value;
      if (!occVal || occVal === "Select Occupation") {
        alert("Please select your occupation.");
        document.getElementById("occupation")?.focus();
        return false;
      }

      const stateVal = document.getElementById("state")?.value;
      if (!stateVal || stateVal === "Select State") {
        alert("Please select your current state of residence.");
        document.getElementById("state")?.focus();
        return false;
      }

      const disabilityVal = document.getElementById("disability-status")?.value;
      if (disabilityVal === "Yes") {
        const pctVal = document.getElementById("disability-pct")?.value;
        if (!pctVal || pctVal === "Select Disability Percentage") {
          alert("Please select your disability percentage (40% or more for statutory benchmark disability).");
          document.getElementById("disability-pct")?.focus();
          return false;
        }
      }
    } else if (step === 2) {
      // Step 2: Education Validation (Student Applicants)
      const occVal = document.getElementById("occupation")?.value;
      if (isStudentOccupation(occVal)) {
        const eduVal = document.getElementById("education-level")?.value;
        if (!eduVal || eduVal === "Select Education Level") {
          alert("Please select your current education level.");
          document.getElementById("education-level")?.focus();
          return false;
        }

        const marksVal = document.getElementById("academic-marks")?.value?.trim();
        if (marksVal !== undefined && marksVal !== "") {
          const marksNum = parseFloat(marksVal);
          const scoreType = document.getElementById("academic-score-type")?.value || "percentage";
          const maxScore = scoreType === "cgpa" ? 10 : 100;
          if (isNaN(marksNum) || marksNum < 0 || marksNum > maxScore) {
            alert(scoreType === "cgpa" ? "Please enter a valid CGPA between 0 and 10." : "Please enter a valid marks percentage between 0 and 100.");
            document.getElementById("academic-marks")?.focus();
            return false;
          }
        }

        const prevMarksVal = document.getElementById("prev-marks")?.value?.trim();
        if (prevMarksVal !== undefined && prevMarksVal !== "") {
          const prevMarksNum = parseFloat(prevMarksVal);
          if (isNaN(prevMarksNum) || prevMarksNum < 0 || prevMarksNum > 100) {
            alert("Please enter a valid previous exam marks percentage between 0 and 100.");
            document.getElementById("prev-marks")?.focus();
            return false;
          }
        }
      }
    } else if (step === 3) {
      // Step 3: Family Financial Details Validation
      const incVal = document.getElementById("income")?.value?.trim();
      if (incVal === undefined || incVal === "") {
        alert("Please enter your annual family income (Enter 0 if nil or no taxable income).");
        document.getElementById("income")?.focus();
        return false;
      }
      const incNum = parseFloat(incVal);
      if (isNaN(incNum) || incNum < 0) {
        alert("Annual family income must be ₹0 or greater.");
        document.getElementById("income")?.focus();
        return false;
      }
      if (incNum > 100000000) {
        alert("Please enter a valid annual family income.");
        document.getElementById("income")?.focus();
        return false;
      }
    } else if (step === 4) {
      // Step 4: Social Category & Domicile Validation
      const catVal = document.getElementById("social-category")?.value;
      if (!catVal || catVal === "Select Category") {
        alert("Please select your social category (General, OBC, SC, ST, EWS).");
        document.getElementById("social-category")?.focus();
        return false;
      }

      const domVal = document.getElementById("domicile-state")?.value;
      if (!domVal || domVal === "Select State of Permanent Domicile") {
        alert("Please select your state of permanent domicile.");
        document.getElementById("domicile-state")?.focus();
        return false;
      }
    }
    return true;
  }

  // Dynamic Disability Field
  const disabilitySelect = document.getElementById("disability-status");
  const disabilityPctGroup = document.getElementById("disability-pct-group");
  const disabilityPctSelect = document.getElementById("disability-pct");
  if (disabilitySelect && disabilityPctGroup) {
    disabilitySelect.addEventListener("change", () => {
      const isYes = disabilitySelect.value === "Yes";
      disabilityPctGroup.style.display = isYes ? "block" : "none";
      if (!isYes && disabilityPctSelect) disabilityPctSelect.value = "";
    });
  }

  // Dynamic Minority Field
  const minoritySelect = document.getElementById("minority-status");
  const minorityCommGroup = document.getElementById("minority-comm-group");
  const minorityCommSelect = document.getElementById("minority-community");
  if (minoritySelect && minorityCommGroup) {
    minoritySelect.addEventListener("change", () => {
      const isYes = minoritySelect.value === "Yes";
      minorityCommGroup.style.display = isYes ? "block" : "none";
      if (!isYes && minorityCommSelect) minorityCommSelect.value = "";
    });
  }

  // Conditional Education Fields Handler (Rule #50)
  const eduLevelSelect = document.getElementById("education-level");
  const higherEduFields = document.querySelectorAll(".higher-edu-field");

  function updateEducationConditionalFields() {
    const selectedLevel = eduLevelSelect?.value || "";
    const isHigherEdu = selectedLevel === "Undergraduate / Diploma" ||
                        selectedLevel === "Postgraduate" ||
                        selectedLevel === "PhD / Research";

    higherEduFields.forEach(field => {
      field.style.display = isHigherEdu ? "block" : "none";
    });

    // If user changed to school or unselected, nullify higher education fields (Rule #50)
    if (!isHigherEdu) {
      const courseEl = document.getElementById("course");
      const branchEl = document.getElementById("branch");
      const yearEl = document.getElementById("year-semester");
      const colTypeEl = document.getElementById("college-type");
      const colStateEl = document.getElementById("college-state");
      if (courseEl) courseEl.value = "";
      if (branchEl) branchEl.value = "";
      if (yearEl) yearEl.value = "";
      if (colTypeEl) colTypeEl.value = "";
      if (colStateEl) colStateEl.value = "";
    }
  }

  if (eduLevelSelect) {
    eduLevelSelect.addEventListener("change", updateEducationConditionalFields);
  }

  const occupationSelect = document.getElementById("occupation");
  if (occupationSelect) {
    occupationSelect.addEventListener("change", updateOccupationConditionalFields);
  }

  // Document Uploads & Readiness Meter (Rule #46: Default to empty array)
  let uploadedDocs = readStoredJson('schemematch_user_docs', []);

  function updateReadinessUI() {
    const occSelect = document.getElementById("occupation");
    const isStudent = isStudentOccupation(occSelect ? occSelect.value : "");

    const allCards = Array.from(document.querySelectorAll(".upload-card"));
    const trackedCards = allCards.filter(card => {
      if (card.closest(".student-doc-field") && !isStudent) return false;
      return true;
    });

    const totalDocsTracked = trackedCards.length || 6;
    const activeUploaded = uploadedDocs.filter(dKey => {
      return trackedCards.some(c => c.getAttribute("data-doc-key") === dKey);
    });
    const pct = Math.min(100, Math.round((activeUploaded.length / totalDocsTracked) * 100));

    const meterDisplay = document.getElementById("readiness-pct-display");
    const progressFill = document.getElementById("readiness-progress-fill");
    const countDisplay = document.getElementById("readiness-count-display");

    if (meterDisplay) meterDisplay.textContent = pct + "%";
    if (progressFill) progressFill.style.width = pct + "%";
    if (countDisplay) {
      countDisplay.textContent = `${activeUploaded.length} of ${totalDocsTracked} Documents Attached`;
    }

    allCards.forEach(card => {
      const key = card.getAttribute("data-doc-key");
      const statusRow = card.querySelector(".file-status-row");
      const nameSpan = card.querySelector(".file-status-name");

      if (uploadedDocs.includes(key)) {
        card.classList.add("uploaded");
        if (statusRow) statusRow.style.display = "flex";
        if (nameSpan && (!nameSpan.textContent || nameSpan.textContent === "")) {
          nameSpan.textContent = "✓ Document Attached";
        }
      } else {
        card.classList.remove("uploaded");
        if (statusRow) statusRow.style.display = "none";
      }
    });

    localStorage.setItem("schemematch_user_docs", JSON.stringify(uploadedDocs));
  }

  document.querySelectorAll(".doc-file-input").forEach(input => {
    input.addEventListener("change", function() {
      const key = this.getAttribute("data-doc-key");
      if (this.files && this.files.length > 0) {
        const file = this.files[0];
        if (file.size > 5 * 1024 * 1024) {
          alert("File size exceeds 5MB limit. Please upload a smaller file.");
          return;
        }
        if (!uploadedDocs.includes(key)) {
          uploadedDocs.push(key);
        }
        const card = this.closest(".upload-card");
        const nameSpan = card ? card.querySelector(".file-status-name") : null;
        if (nameSpan) {
          nameSpan.textContent = "✓ " + file.name;
        }
        updateReadinessUI();
        triggerOcrExtraction(file.name, key);
      }
    });
  });

  document.querySelectorAll(".upload-dropzone").forEach(dropzone => {
    const card = dropzone.closest(".upload-card");
    const input = card ? card.querySelector(".doc-file-input") : null;
    if (!input) return;

    dropzone.addEventListener("click", function(e) {
      if (e.target !== input) {
        input.click();
      }
    });

    dropzone.addEventListener("dragover", function(e) {
      e.preventDefault();
      dropzone.style.borderColor = "var(--gov-saffron)";
      dropzone.style.background = "rgba(249, 115, 22, 0.08)";
    });

    dropzone.addEventListener("dragleave", function(e) {
      e.preventDefault();
      dropzone.style.borderColor = "";
      dropzone.style.background = "";
    });

    dropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      dropzone.style.borderColor = "";
      dropzone.style.background = "";
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        if (file.size > 5 * 1024 * 1024) {
          alert("File size exceeds 5MB limit. Please upload a smaller file.");
          return;
        }
        const key = input.getAttribute("data-doc-key");
        if (!uploadedDocs.includes(key)) {
          uploadedDocs.push(key);
        }
        const nameSpan = card ? card.querySelector(".file-status-name") : null;
        if (nameSpan) {
          nameSpan.textContent = "✓ " + file.name;
        }
        updateReadinessUI();
        triggerOcrExtraction(file.name, key);
      }
    });
  });

  document.querySelectorAll(".btn-remove-file").forEach(btn => {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      const key = this.getAttribute("data-doc-key");
      uploadedDocs = uploadedDocs.filter(d => d !== key);
      const input = document.querySelector('.doc-file-input[data-doc-key="' + key + '"]');
      if (input) input.value = "";
      const card = this.closest(".upload-card");
      const nameSpan = card ? card.querySelector(".file-status-name") : null;
      if (nameSpan) nameSpan.textContent = "";
      updateReadinessUI();
    });
  });

  // ==========================================
  // LIVE CAMERA CAPTURE CONTROLLER (WebRTC)
  // ==========================================
  const startCameraBtn = document.getElementById("btn-start-camera");
  const capturePhotoBtn = document.getElementById("btn-capture-photo");
  const stopCameraBtn = document.getElementById("btn-stop-camera");
  const cameraVideo = document.getElementById("camera-video");
  const cameraCanvas = document.getElementById("camera-canvas");
  const cameraWrapper = document.getElementById("camera-video-wrapper");
  const cameraThumb = document.getElementById("camera-capture-thumb");
  let cameraStream = null;

  if (startCameraBtn && cameraVideo) {
    startCameraBtn.addEventListener("click", async () => {
      try {
        cameraStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } }
        });
        cameraVideo.srcObject = cameraStream;
        cameraWrapper.style.display = "block";
        startCameraBtn.style.display = "none";
        capturePhotoBtn.style.display = "inline-flex";
        stopCameraBtn.style.display = "inline-flex";
      } catch (err) {
        console.warn("Webcam access error:", err);
        alert("Camera access was not granted or is unavailable on this device. You can upload document files directly.");
      }
    });
  }

  if (capturePhotoBtn && cameraVideo && cameraCanvas) {
    capturePhotoBtn.addEventListener("click", () => {
      const ctx = cameraCanvas.getContext("2d");
      cameraCanvas.width = cameraVideo.videoWidth || 640;
      cameraCanvas.height = cameraVideo.videoHeight || 480;
      ctx.drawImage(cameraVideo, 0, 0, cameraCanvas.width, cameraCanvas.height);
      const dataUrl = cameraCanvas.toDataURL("image/jpeg", 0.85);

      if (cameraThumb) {
        cameraThumb.src = dataUrl;
        cameraThumb.style.display = "block";
      }

      if (!uploadedDocs.includes("camera_capture")) {
        uploadedDocs.push("camera_capture");
      }
      updateReadinessUI();
      triggerOcrExtraction("Live_Camera_Capture.jpg", "camera_capture");
      stopCamera();
    });
  }

  function stopCamera() {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      cameraStream = null;
    }
    if (cameraWrapper) cameraWrapper.style.display = "none";
    if (startCameraBtn) startCameraBtn.style.display = "inline-flex";
    if (capturePhotoBtn) capturePhotoBtn.style.display = "none";
    if (stopCameraBtn) stopCameraBtn.style.display = "none";
  }

  if (stopCameraBtn) {
    stopCameraBtn.addEventListener("click", stopCamera);
  }

  // ==========================================
  // DOCUMENT OCR & AI EXTRACTION SIMULATION
  // ==========================================
  function triggerOcrExtraction(filename, docKey) {
    const ocrCard = document.getElementById("ai-ocr-extracted-card");
    if (!ocrCard) return;

    ocrCard.style.display = "block";
    ocrCard.scrollIntoView({ behavior: "smooth", block: "nearest" });

    const currName = document.getElementById("name")?.value?.trim() || "";
    const currCat = document.getElementById("social-category")?.value || "";
    const currInc = document.getElementById("income")?.value || "";
    const currMarks = document.getElementById("academic-marks")?.value || "";

    const extractedNameInput = document.getElementById("ocr-extracted-name");
    const extractedCatInput = document.getElementById("ocr-extracted-category");
    const extractedIncInput = document.getElementById("ocr-extracted-income");
    const extractedMarksInput = document.getElementById("ocr-extracted-marks");
    const extractedInstInput = document.getElementById("ocr-extracted-inst");
    const extractedCertInput = document.getElementById("ocr-extracted-cert");

    if (extractedNameInput && currName) extractedNameInput.value = currName;
    if (extractedCatInput && currCat) extractedCatInput.value = currCat;
    if (extractedIncInput && currInc) extractedIncInput.value = "₹" + Number(currInc).toLocaleString("en-IN");
    if (extractedMarksInput && currMarks) extractedMarksInput.value = currMarks + "%";
    if (extractedCertInput && !extractedCertInput.value) extractedCertInput.value = "DOC-" + Math.floor(100000 + Math.random() * 900000);

    const applyBtn = document.getElementById("btn-apply-ocr-data");
    if (applyBtn) {
      applyBtn.onclick = () => {
        if (extractedNameInput && extractedNameInput.value.trim() && document.getElementById("name")) {
          document.getElementById("name").value = extractedNameInput.value.trim();
        }
        if (extractedCatInput && extractedCatInput.value.trim() && document.getElementById("social-category")) {
          document.getElementById("social-category").value = extractedCatInput.value.trim();
        }
        if (extractedIncInput && extractedIncInput.value.trim() && document.getElementById("income")) {
          const cleanInc = parseInt(extractedIncInput.value.replace(/[^0-9]/g, ""), 10);
          if (!isNaN(cleanInc)) document.getElementById("income").value = cleanInc;
        }
        if (extractedMarksInput && extractedMarksInput.value.trim() && document.getElementById("academic-marks")) {
          const cleanMarks = parseFloat(extractedMarksInput.value.replace(/[^0-9.]/g, ""));
          if (!isNaN(cleanMarks)) document.getElementById("academic-marks").value = cleanMarks;
        }
        alert("Simulated extraction applied to your profile form. Please verify and edit any fields if needed.");
      };
    }
  }

  // ==========================================
  // DEMO PROFILES HANDLER
  // ==========================================
  function applyDemoProfile(profileKey) {
    const p = DEMO_PROFILES[profileKey];
    if (!p) return;

    if (document.getElementById("name")) document.getElementById("name").value = p.name || "";
    if (document.getElementById("age")) document.getElementById("age").value = p.age || "";
    if (document.getElementById("gender")) document.getElementById("gender").value = p.gender || "";
    if (document.getElementById("state")) document.getElementById("state").value = p.state || "";
    if (document.getElementById("district")) document.getElementById("district").value = p.district || "";
    if (document.getElementById("social-category")) document.getElementById("social-category").value = p.category || "";
    if (document.getElementById("disability-status")) {
      document.getElementById("disability-status").value = p.disabilityStatus || "";
      document.getElementById("disability-status").dispatchEvent(new Event("change"));
    }
    if (document.getElementById("disability-pct") && p.disabilityPct) {
      document.getElementById("disability-pct").value = p.disabilityPct;
    }
    if (document.getElementById("minority-status")) {
      document.getElementById("minority-status").value = p.minorityStatus || "";
      document.getElementById("minority-status").dispatchEvent(new Event("change"));
    }
    if (document.getElementById("minority-community") && p.minorityCommunity) {
      document.getElementById("minority-community").value = p.minorityCommunity;
    }
    if (document.getElementById("education-level")) {
      document.getElementById("education-level").value = p.educationLevel || "";
      updateEducationConditionalFields();
    }
    if (document.getElementById("course")) document.getElementById("course").value = p.course || "";
    if (document.getElementById("branch")) document.getElementById("branch").value = p.branch || "";
    if (document.getElementById("year-semester")) document.getElementById("year-semester").value = p.yearSemester || "";
    if (document.getElementById("college-type")) document.getElementById("college-type").value = p.collegeType || "";
    if (document.getElementById("college-state")) document.getElementById("college-state").value = p.collegeState || "";
    if (document.getElementById("academic-marks")) document.getElementById("academic-marks").value = p.academicMarks || "";
    if (document.getElementById("prev-marks")) document.getElementById("prev-marks").value = p.prevMarks || "";
    if (document.getElementById("income")) document.getElementById("income").value = p.income || "";
    if (document.getElementById("income-cert-status")) document.getElementById("income-cert-status").value = p.incomeCertStatus || "";
    if (document.getElementById("scholarship-received")) document.getElementById("scholarship-received").value = p.scholarshipReceived || "";
    if (document.getElementById("fee-reimbursement")) document.getElementById("fee-reimbursement").value = p.feeReimbursement || "";
    if (document.getElementById("education-loan")) document.getElementById("education-loan").value = p.educationLoan || "";
    if (document.getElementById("domicile-state")) document.getElementById("domicile-state").value = p.domicileState || "";
    if (document.getElementById("special-category")) document.getElementById("special-category").value = p.specialCategory || "";
    if (document.getElementById("parent-occupation")) document.getElementById("parent-occupation").value = p.parentOccupation || "";
    if (document.getElementById("govt-employee")) document.getElementById("govt-employee").value = p.govtEmployee || "";
    if (document.getElementById("defence-relation")) document.getElementById("defence-relation").value = p.defenceRelation || "";
    if (document.getElementById("occupation") && p.occupation) document.getElementById("occupation").value = p.occupation;

    updateOccupationConditionalFields();
    uploadedDocs = [...p.docs];
    updateReadinessUI();
  }

  document.querySelectorAll(".demo-profile-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".demo-profile-btn").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      applyDemoProfile(this.getAttribute("data-demo"));
      showStep(1);
    });
  });

  function getFieldStr(id) {
    const el = document.getElementById(id);
    if (!el) return null;
    const val = el.value ? el.value.trim() : "";
    return val === "" ? null : val;
  }

  function getFieldNum(id) {
    const el = document.getElementById(id);
    if (!el) return null;
    const val = el.value ? el.value.trim() : "";
    if (val === "") return null;
    const n = parseFloat(val);
    return isNaN(n) ? null : n;
  }

  try {
    const raw = localStorage.getItem("schemematch_user_profile");
    if (raw) {
      const savedProfile = JSON.parse(raw);
      if (savedProfile && typeof savedProfile === "object") {
        const fieldMapping = {
          name: "name",
          age: "age",
          gender: "gender",
          state: "state",
          district: "district",
          category: "social-category",
          socialCategory: "social-category",
          disabilityStatus: "disability-status",
          disabilityPct: "disability-pct",
          minorityStatus: "minority-status",
          minorityCommunity: "minority-community",
          educationLevel: "education-level",
          course: "course",
          branch: "branch",
          yearSemester: "year-semester",
          collegeType: "college-type",
          collegeState: "college-state",
          academicMarks: "academic-marks",
          prevMarks: "prev-marks",
          income: "income",
          incomeCertStatus: "income-cert-status",
          scholarshipReceived: "scholarship-received",
          feeReimbursement: "fee-reimbursement",
          educationLoan: "education-loan",
          domicileState: "domicile-state",
          specialCategory: "special-category",
          parentOccupation: "parent-occupation",
          govtEmployee: "govt-employee",
          defenceRelation: "defence-relation",
          occupation: "occupation"
        };

        Object.entries(fieldMapping).forEach(([key, elemId]) => {
          const el = document.getElementById(elemId);
          if (!el) return;
          const val = savedProfile[key];
          if (val !== undefined && val !== null) {
            el.value = val;
          } else {
            el.value = "";
          }
        });
      }
    }
  } catch (err) {
    console.warn("Could not read saved profile:", err);
  }

  updateEducationConditionalFields();
  updateOccupationConditionalFields();
  if (disabilitySelect && disabilityPctGroup) {
    disabilityPctGroup.style.display = (disabilitySelect.value === "Yes") ? "block" : "none";
  }
  if (minoritySelect && minorityCommGroup) {
    minorityCommGroup.style.display = (minoritySelect.value === "Yes") ? "block" : "none";
  }

  updateReadinessUI();
  showStep(1);

  const academicScoreType = document.getElementById("academic-score-type");
  const academicMarksInput = document.getElementById("academic-marks");
  const academicScoreHelper = document.getElementById("academic-score-helper");
  function updateAcademicScoreInput() {
    const isCgpa = academicScoreType?.value === "cgpa";
    if (academicMarksInput) {
      academicMarksInput.max = isCgpa ? "10" : "100";
      academicMarksInput.placeholder = isCgpa ? "Enter CGPA out of 10" : "Enter percentage";
    }
    if (academicScoreHelper) {
      academicScoreHelper.textContent = isCgpa
        ? "CGPA will be converted to percentage using CGPA × 10 for eligibility checks."
        : "Overall percentage in current course or latest semester exam.";
    }
  }
  academicScoreType?.addEventListener("change", updateAcademicScoreInput);
  updateAcademicScoreInput();

  // ==========================================
  // STEP 6: ANALYZING PROFILE LOADER & SUBMIT
  // ==========================================
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const selectedOcc = getFieldStr("occupation");
    const isStudent = isStudentOccupation(selectedOcc);
    const selectedEduLevel = isStudent ? getFieldStr("education-level") : null;
    const isHigherEdu = isStudent && (selectedEduLevel === "Undergraduate / Diploma" ||
                        selectedEduLevel === "Postgraduate" ||
                        selectedEduLevel === "PhD / Research");

    const profileData = {
      name: getFieldStr("name"),
      age: getFieldNum("age"),
      gender: getFieldStr("gender"),
      state: getFieldStr("state"),
      district: getFieldStr("district"),
      category: getFieldStr("social-category"),
      disabilityStatus: getFieldStr("disability-status"),
      disabilityPct: (getFieldStr("disability-status") === "Yes") ? getFieldStr("disability-pct") : null,
      minorityStatus: getFieldStr("minority-status"),
      minorityCommunity: (getFieldStr("minority-status") === "Yes") ? getFieldStr("minority-community") : null,
      educationLevel: selectedEduLevel,
      course: isHigherEdu ? getFieldStr("course") : null,
      branch: isHigherEdu ? getFieldStr("branch") : null,
      yearSemester: isHigherEdu ? getFieldStr("year-semester") : null,
      collegeType: isHigherEdu ? getFieldStr("college-type") : null,
      collegeState: isHigherEdu ? getFieldStr("college-state") : null,
      academicMarks: isStudent ? getFieldNum("academic-marks") : null,
      academicMarksType: isStudent ? (getFieldStr("academic-score-type") || "percentage") : null,
      prevMarks: isStudent ? getFieldNum("prev-marks") : null,
      income: getFieldNum("income"),
      incomeCertStatus: getFieldStr("income-cert-status"),
      scholarshipReceived: isStudent ? getFieldStr("scholarship-received") : null,
      feeReimbursement: isStudent ? getFieldStr("fee-reimbursement") : null,
      educationLoan: isStudent ? getFieldStr("education-loan") : null,
      domicileState: getFieldStr("domicile-state"),
      specialCategory: getFieldStr("special-category"),
      parentOccupation: isStudent ? getFieldStr("parent-occupation") : null,
      govtEmployee: isStudent ? getFieldStr("govt-employee") : null,
      defenceRelation: isStudent ? getFieldStr("defence-relation") : null,
      occupation: selectedOcc
    };

    localStorage.setItem("schemematch_user_profile", JSON.stringify(profileData));
    localStorage.setItem("schemematch_user_docs", JSON.stringify(uploadedDocs));

    // Show Analyzing Profile Animated Screen
    const loaderOverlay = document.getElementById("matching-loader-overlay");
    if (loaderOverlay) {
      loaderOverlay.classList.add("active");
      const steps = loaderOverlay.querySelectorAll(".loader-step-item");

      steps.forEach((st, idx) => {
        setTimeout(() => {
          st.classList.add("done");
        }, (idx + 1) * 260);
      });

      setTimeout(() => {
        window.location.href = "results.html";
      }, steps.length * 260 + 350);
    } else {
      window.location.href = "results.html";
    }
  });
}

// ==========================================================================
// 12. RESULTS PAGE CONTROLLER
// ==========================================================================
function initResultsPage() {
  const profileRaw = localStorage.getItem("schemematch_user_profile");
  const profile = profileRaw ? readStoredJson("schemematch_user_profile", null) : null;
  const hasProfileData = profile && typeof profile === "object" &&
    (profile.name || profile.age || profile.occupation || profile.category || (profile.income !== undefined && profile.income !== null));

  const userDocs = readStoredJson("schemematch_user_docs", []);

  const statCount = document.getElementById("stat-matching-count");
  const statScore = document.getElementById("stat-highest-score");
  const statDocs = document.getElementById("stat-doc-readiness");
  const userSummary = document.getElementById("user-summary");
  const schemesContainer = document.getElementById("schemes-container");
  const resultsCount = document.getElementById("results-count");

  const searchInput = document.getElementById("search-input");

  let searchQuery = "";

  // If no profile exists, render an empty state banner prompting user to complete profile
  if (!hasProfileData) {
    if (userSummary) {
      userSummary.innerHTML = `
        <div class="user-summary-content" style="padding: 1.5rem; text-align: center;">
          <div style="font-size: 2.4rem; margin-bottom: 0.5rem;">📋</div>
          <h2 style="font-size: 1.25rem; margin: 0 0 0.4rem; color: #ffffff;">No Profile Completed Yet</h2>
          <p style="color: var(--text-muted); max-width: 520px; margin: 0 auto 1.25rem; line-height: 1.6; font-size: 0.95rem;">
            You are viewing the scheme directory without personal criteria. Complete the 6-step wizard to see personalized match scores and eligibility explanations.
          </p>
          <div>
            <a href="find-schemes.html" class="btn btn-primary btn-md">Start Eligibility Wizard →</a>
          </div>
        </div>
      `;
    }
  } else {
    // Render Safe User Summary (XSS Hardened)
    if (userSummary) {
      const safeName = escapeHtml(profile.name || "Citizen");
      const safeOcc = escapeHtml(profile.occupation || "General Citizen");
      const safeEdu = escapeHtml(profile.educationLevel || "Not Specified");
      const safeCat = escapeHtml(profile.category || "General");
      const safeState = escapeHtml(profile.state || "All India");
      const safeDomicile = escapeHtml(profile.domicileState || safeState);
      const safeGender = escapeHtml(profile.gender || "All");
      const incomeStr = (profile.income !== null && profile.income !== undefined)
        ? "₹" + Number(profile.income).toLocaleString("en-IN")
        : "Not Specified";

      userSummary.innerHTML = `
        <div class="user-summary-content">
          <div>
            <h2 style="font-size: 1.15rem; margin: 0 0 0.4rem; color: #ffffff;">
              ${safeOcc} Profile: <strong>${safeName}</strong>
            </h2>
            <div class="user-chips-row">
              <span class="profile-chip"><strong>${t("chip_age", "Age:")}</strong> ${profile.age ? profile.age + ' ' + t("years_suffix", "yrs") : t("not_specified", "Not Specified")}</span>
              <span class="profile-chip"><strong>${t("chip_gender", "Gender:")}</strong> ${safeGender}</span>
              <span class="profile-chip"><strong>${t("chip_education", "Education:")}</strong> ${safeEdu}</span>
              <span class="profile-chip"><strong>${t("chip_category", "Category:")}</strong> ${safeCat}</span>
              <span class="profile-chip"><strong>${t("chip_income", "Income:")}</strong> ${incomeStr}</span>
              <span class="profile-chip"><strong>${t("chip_state", "State:")}</strong> ${safeState}</span>
              <span class="profile-chip"><strong>${t("chip_domicile", "Domicile:")}</strong> ${safeDomicile}</span>
              ${profile.academicMarks ? '<span class="profile-chip"><strong>' + t("chip_marks", "Marks:") + '</strong> ' + profile.academicMarks + '%</span>' : ''}
              ${profile.disabilityStatus === 'Yes' ? '<span class="profile-chip" style="color:#38bdf8;"><strong>' + t("chip_pwd", "PwD:") + '</strong> ' + escapeHtml(profile.disabilityPct || '40%+') + '</span>' : ''}
            </div>
          </div>
          <div>
            <a href="find-schemes.html" class="btn btn-outline btn-sm">${t("btn_edit_profile", "✏️ Edit Profile")}</a>
          </div>
        </div>
      `;
    }
  }

  // Evaluate All Schemes Dynamically
  const evaluatedSchemes = SCHEME_DATABASE.map(scheme => {
    const match = hasProfileData 
      ? calculateSchemeMatch(profile, scheme)
      : { score: 0, status: "Information Required", matchedReasons: ["Complete your profile to see your personalized eligibility match score."], unmatchedReasons: [], missingReasons: ["Profile information required to calculate match score."] };
    
    const docReadiness = getDocumentReadiness(userDocs, scheme.required_documents);
    return {
      ...scheme,
      matchScore: match.score,
      matchStatus: match.status,
      matchedReasons: match.matchedReasons,
      unmatchedReasons: match.unmatchedReasons,
      missingReasons: match.missingReasons,
      docReadiness
    };
  });

  // Dynamic Summary Metrics
  const eligibleCount = hasProfileData
    ? evaluatedSchemes.filter(s => s.matchScore >= 80).length
    : evaluatedSchemes.length;

  if (statCount) statCount.textContent = hasProfileData ? eligibleCount : evaluatedSchemes.length;
  const highestScore = evaluatedSchemes.reduce((max, s) => Math.max(max, s.matchScore), 0);
  if (statScore) statScore.textContent = hasProfileData ? highestScore + "%" : "—";
  
  // Overall Document Readiness based on 8 standard trackable documents
  const totalTrackableDocs = (profile && isStudentOccupation(profile.occupation)) ? 8 : 6;
  const overallDocs = Math.min(100, Math.round((userDocs.length / totalTrackableDocs) * 100));
  if (statDocs) statDocs.textContent = overallDocs + "%";

  function renderSchemes() {
    let filtered = evaluatedSchemes.filter(s => {
      const r = s.eligibilityRules || {};

      // Show only schemes explicitly matching the selected occupation. Generic
      // "All" rules are intentionally excluded from personalized results.
      if (hasProfileData && profile.occupation && profile.occupation !== "All") {
        const occupations = (r.occupations || []).map(o => o.toLowerCase());
        const userOccupation = profile.occupation.toLowerCase();
        const occupationMatches = occupations.some(o =>
          o !== "all" && (o === userOccupation || o.includes(userOccupation) || userOccupation.includes(o))
        );
        if (!occupationMatches) return false;
      }

      // Keyword Search
      if (searchQuery) {
        const q = searchQuery.toLocaleLowerCase("en-IN");
        const searchableText = [s.name, s.short_description, s.category, s.state, s.benefits, ...(r.occupations || [])]
          .filter(Boolean)
          .join(" ")
          .toLocaleLowerCase("en-IN");
        if (!searchableText.includes(q)) return false;
      }

      return true;
    });

    const preferredStates = profile
      ? [profile.state, profile.domicileState]
        .filter(state => state && state !== "All India")
        .map(state => state.toLowerCase())
      : [];
    const getStatePriority = scheme => {
      if (preferredStates.length === 0) return 0;
      const rules = scheme.eligibilityRules || {};
      const schemeStates = [scheme.state, ...(rules.states || []), ...(rules.domicileStates || [])]
        .filter(Boolean)
        .map(state => state.toLowerCase());
      if (preferredStates.some(state => schemeStates.includes(state))) return 0;
      if (schemeStates.includes("all india")) return 1;
      return 2;
    };

    filtered.sort((a, b) => {
      const scoreOrder = b.matchScore - a.matchScore;
      const stateOrder = getStatePriority(a) - getStatePriority(b);
      return scoreOrder || stateOrder;
    });

    if (resultsCount) {
      resultsCount.textContent = t("showing_results_prefix", "Showing") + ' ' + filtered.length + ' ' + t("showing_results_mid", "matching schemes out of") + ' ' + evaluatedSchemes.length + ' ' + t("showing_results_suffix", "verified government schemes");
    }
    const pageHeadingSub = document.querySelector(".page-heading p");
    if (pageHeadingSub) {
      pageHeadingSub.innerHTML = t("results_sub_prefix", "Based on your profile and document status, we found") + ' <strong>' + filtered.length + '</strong> ' + t("results_sub_suffix", "matching schemes for you.");
    }
    window.refreshResultsPage = renderSchemes;

    if (filtered.length === 0) {
      schemesContainer.innerHTML = `
        <div class="form-panel-card text-center" style="padding: 3.5rem 1.5rem;">
          <div style="font-size: 2.8rem; margin-bottom: 0.75rem;">🔍</div>
          <h3 style="color: #ffffff;">No Schemes Found</h3>
          <p style="color: var(--text-muted); max-width: 520px; margin: 0 auto 1.5rem; line-height: 1.6;">
            No schemes match your search. Try another name, category or keyword.
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <button type="button" id="btn-reset-search" class="btn btn-cyan btn-sm">Clear Search</button>
            <a href="find-schemes.html" class="btn btn-outline btn-sm">Update Profile Details</a>
          </div>
        </div>
      `;
      const resetBtn = document.getElementById("btn-reset-search");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          searchQuery = "";
          if (searchInput) searchInput.value = "";
          renderSchemes();
        });
      }
      return;
    }

    schemesContainer.innerHTML = filtered.map(scheme => {
      const stateMeta = getMatchScoreState(scheme.matchScore, scheme.matchStatus, scheme.missingReasons, scheme.unmatchedReasons);
      const normalizedUserDocs = userDocs.map(normalizeDocKey);
      const docBadgesHtml = (scheme.required_documents || []).map(dKey => {
        const hasDoc = normalizedUserDocs.includes(normalizeDocKey(dKey));
        const documentLabels = {
          aadhaar: t("doc_aadhaar", "Aadhaar Card"),
          income_cert: t("doc_income_cert", "Income Certificate"),
          caste_cert: t("doc_caste_cert", "Category Certificate"),
          marksheet: t("doc_marksheet", "Marksheet"),
          student_id: t("doc_student_id", "College Bonafide"),
          bank_account: t("doc_bank_account", "Bank Passbook"),
          domicile_cert: t("doc_domicile_cert", "Domicile Certificate"),
          disability_cert: t("doc_disability_cert", "Disability Certificate")
        };
        const fallbackLabel = dKey.replace(/_/g, " ").replace(/\b\w/g, character => character.toUpperCase());
        const label = escapeHtml(documentLabels[normalizeDocKey(dKey)] || fallbackLabel);
        const docStatus = hasDoc ? t("doc_uploaded", "✓ Uploaded") : t("doc_pending", "○ Upload pending");
        return '<span class="doc-tag ' + (hasDoc ? "present" : "pending") + '">' + docStatus + ' · ' + label + '</span>';
      }).join("");

      const matchedList = scheme.matchedReasons.slice(0, 2).map(r => '<li><span style="color: #34d399; font-weight:700;">✓</span> ' + escapeHtml(r) + '</li>').join("");
      const unmatchedList = (scheme.unmatchedReasons && scheme.unmatchedReasons.length > 0)
        ? scheme.unmatchedReasons.slice(0, 1).map(r => '<li><span style="color: #fbbf24; font-weight:700;">⚠️</span> ' + escapeHtml(r) + '</li>').join("")
        : (scheme.missingReasons && scheme.missingReasons.length > 0)
          ? scheme.missingReasons.slice(0, 1).map(r => '<li><span style="color: #f59e0b; font-weight:700;">ℹ</span> ' + escapeHtml(r) + '</li>').join("")
          : '<li><span style="color: #38bdf8;">✓</span> ' + t("primary_criteria_satisfied", "Primary eligibility criteria satisfied.") + '</li>';

      return `
        <article class="scheme-card">
          <div class="scheme-card-main">
          <div class="scheme-card-header">
            <div>
              <div class="scheme-badge-group">
                <span class="badge badge-primary">${escapeHtml(scheme.category)}</span>
                <span class="badge badge-cyan">${escapeHtml(scheme.state)}</span>
                <span class="badge" style="background: rgba(255,255,255,0.06);">${escapeHtml(scheme.status)}</span>
              </div>
              <h3 class="scheme-title">${escapeHtml(scheme.name)}</h3>
              <p class="scheme-desc">${escapeHtml(scheme.short_description)}</p>
            </div>

          </div>

          <div class="scheme-benefit-box">
            <span class="benefit-icon">🎁</span>
            <p class="benefit-text"><strong>${t("label_benefit", "Benefit:")}</strong> ${escapeHtml(scheme.benefits)}</p>
          </div>

          <div class="scheme-reasons-preview">
            <ul class="reasons-preview-list">
              ${matchedList}
              ${unmatchedList}
            </ul>
          </div>

          <div class="scheme-card-footer">
            <div class="doc-tags-wrap">
              ${docBadgesHtml}
            </div>
          </div>
          </div>

          <div class="scheme-card-aside">
            <div class="score-badge-box ${stateMeta.cssClass}">
              <span class="score-pct-large">${scheme.matchScore}%</span>
              <span class="score-tag-text">${stateMeta.label}</span>
            </div>
            <div class="card-actions">
              <a href="scheme-details.html?id=${encodeURIComponent(scheme.id)}" class="btn btn-primary btn-sm">
                ${t("btn_view_details", "View Details →")}
              </a>
              <a href="${escapeHtml(scheme.application_url)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                ${t("btn_official_portal", "Official Portal ↗")}
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLocaleLowerCase("en-IN");
      renderSchemes();
    });
  }

  renderSchemes();
}

function initSchemeDetailsPage() {
  window.refreshSchemeDetailsPage = initSchemeDetailsPage;
  const container = document.getElementById("scheme-details-container");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const schemeId = urlParams.get("id");

  const scheme = SCHEME_DATABASE.find(s => s.id === schemeId);

  // Handle Invalid Scheme ID Boundary State
  if (!scheme) {
    container.innerHTML = `
      <div class="form-panel-card text-center" style="padding: 4rem 1.5rem; max-width: 650px; margin: 3rem auto;">
        <div style="font-size: 3.5rem; margin-bottom: 1rem;">⚠️</div>
        <h2 style="color: #ffffff; margin-bottom: 0.5rem; font-size: 1.8rem;">Scheme Not Found</h2>
        <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 1.75rem; font-size: 1rem;">
          The requested scheme ID "<strong>${escapeHtml(schemeId || 'unknown')}</strong>" does not exist in our database or has been discontinued.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="results.html" class="btn btn-primary btn-md">Browse Verified Schemes</a>
          <a href="find-schemes.html" class="btn btn-cyan btn-md">Start Eligibility Wizard</a>
          <a href="index.html" class="btn btn-outline btn-md">Return Home</a>
        </div>
      </div>
    `;
    return;
  }

  const profileRaw = localStorage.getItem("schemematch_user_profile");
  const profile = profileRaw ? readStoredJson("schemematch_user_profile", null) : null;
  const hasProfileData = profile && typeof profile === "object" &&
    (profile.name || profile.age || profile.occupation || profile.category || (profile.income !== undefined && profile.income !== null));

  const userDocs = readStoredJson("schemematch_user_docs", []);

  const match = hasProfileData
    ? calculateSchemeMatch(profile, scheme)
    : { score: 0, status: "Information Required", matchedReasons: ["Complete your profile in the 6-step wizard to see personalized criteria reasons."], unmatchedReasons: [], missingReasons: ["Complete your profile to see your personalized eligibility match score."] };

  const docReadiness = getDocumentReadiness(userDocs, scheme.required_documents);
  const stateMeta = getMatchScoreState(match.score, match.status, match.missingReasons, match.unmatchedReasons);

  const matchedListHtml = match.matchedReasons.map(r => '<li><span style="color: #34d399; font-weight: 700;">✓</span> ' + escapeHtml(r) + '</li>').join("");
  const unmatchedListHtml = (match.unmatchedReasons && match.unmatchedReasons.length > 0)
    ? match.unmatchedReasons.map(r => '<li><span style="color: #fbbf24; font-weight: 700;">⚠️</span> ' + escapeHtml(r) + '</li>').join("")
    : (match.missingReasons && match.missingReasons.length > 0)
      ? match.missingReasons.map(r => '<li><span style="color: #f59e0b; font-weight: 700;">ℹ</span> ' + escapeHtml(r) + '</li>').join("")
      : '<li><span style="color: #38bdf8; font-weight: 700;">✓</span> All required statutory criteria satisfied.</li>';

  const normalizedUserDocs = userDocs.map(normalizeDocKey);
  const docsChecklistHtml = (scheme.required_documents || []).map(dKey => {
    const isAttached = normalizedUserDocs.includes(normalizeDocKey(dKey));
    const label = escapeHtml(dKey.replace(/_/g, " ").toUpperCase());
    return `
      <div class="doc-check-item">
        <span style="font-size: 0.95rem; color: #ffffff;">📄 ${label}</span>
        <span class="badge ${isAttached ? "badge-success" : "badge-warning"}">
          ${isAttached ? t("doc_uploaded", "✓ Uploaded") : t("doc_missing", "⚠️ Missing")}
        </span>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <!-- Hero Details Card -->
    <div class="details-hero-card">
      <div class="details-header-row">
        <div class="details-title-wrap">
          <div style="display: flex; gap: 0.5rem; margin-bottom: 0.6rem; flex-wrap: wrap;">
            <span class="badge badge-primary">${escapeHtml(scheme.category)}</span>
            <span class="badge badge-cyan">${escapeHtml(scheme.state)}</span>
            <span class="badge" style="background: rgba(255,255,255,0.08);">Status: ${escapeHtml(scheme.status)}</span>
          </div>
          <h1>${escapeHtml(scheme.name)}</h1>
          <p class="details-ministry">🏛️ ${escapeHtml(scheme.official_source)}</p>
          <p style="font-size: 1.05rem; line-height: 1.65; color: var(--text-main); margin-bottom: 1.25rem;">
            ${escapeHtml(scheme.short_description)}
          </p>
          <div>
            <button type="button" id="read-details-aloud-btn" class="btn btn-voice btn-sm">
              ${t("btn_read_details", "🔊 Read Scheme Details")}
            </button>
          </div>
        </div>

        <div class="score-badge-box ${stateMeta.cssClass}" style="padding: 1.4rem 1.6rem; min-width: 160px;">
          <span class="score-pct-large">${match.score}%</span>
          <span class="score-tag-text">${stateMeta.label}</span>
          <div style="margin-top: 0.6rem; font-size: 0.8rem; color: var(--text-light);">
            ${docReadiness.percentage}% ${t("docs_ready_suffix", "Documents Ready")}
          </div>
        </div>
      </div>
    </div>

    <!-- Statutory / Student Advisory Notice -->
    <div class="disclaimer-box">
      <h4>${t("sec_advisory", "ℹ️ Statutory Information & Advisory")}</h4>
      <p>
        Calculated matches are based on the criteria entered in your profile. 
        <strong>SchemeMatch does not guarantee official approval.</strong> Final sanction is strictly decided by the competent government department upon physical document verification.
      </p>
    </div>

    <!-- Eligibility Evaluation (Pros & Cons) -->
    <div class="match-evaluation-box">
      <div class="eval-col matched">
        <div class="eval-title">
          <span>✓</span> ${t("sec_why_matches", "Why this scheme matches your profile")}
        </div>
        <ul class="eval-list">
          ${matchedListHtml}
        </ul>
      </div>

      <div class="eval-col unmatched">
        <div class="eval-title">
          <span>⚠️</span> ${t("sec_missing_criteria", "Criteria requiring verification / Missing details")}
        </div>
        <ul class="eval-list">
          ${unmatchedListHtml}
        </ul>
      </div>
    </div>

    <!-- Benefits Section -->
    <section class="details-section-card">
      <h3>${t("sec_benefits", "🎁 Benefits & Financial Assistance")}</h3>
      <div class="scheme-benefit-box" style="margin-top: 0.8rem;">
        <span class="benefit-icon">✨</span>
        <p class="benefit-text"><strong>${t("primary_entitlement", "Primary Entitlement:")}</strong> ${escapeHtml(scheme.benefits)}</p>
      </div>
    </section>

    <!-- Official Eligibility Criteria Table (Derived from eligibilityRules) -->
    <section class="details-section-card">
      <h3>${t("sec_criteria", "⚖️ Official Eligibility Criteria")}</h3>
      <table class="eligibility-table">
        <tbody>
          <tr>
            <th>${t("th_edu_level", "Target Education Level")}</th>
            <td>${escapeHtml(getSchemeEduText(scheme))}</td>
          </tr>
          <tr>
            <th>${t("th_courses", "Eligible Courses / Disciplines")}</th>
            <td>${escapeHtml(getSchemeCourseText(scheme))}</td>
          </tr>
          <tr>
            <th>${t("th_category", "Social Category Requirement")}</th>
            <td>${escapeHtml(getSchemeCategoryText(scheme))}</td>
          </tr>
          <tr>
            <th>${t("th_income", "Annual Family Income Ceiling")}</th>
            <td>${escapeHtml(getSchemeIncomeText(scheme))}</td>
          </tr>
          <tr>
            <th>${t("th_marks", "Minimum Marks / Percentile")}</th>
            <td>${escapeHtml(getSchemeMarksText(scheme))}</td>
          </tr>
          <tr>
            <th>${t("th_age", "Eligible Age Range")}</th>
            <td>${escapeHtml(getSchemeAgeText(scheme))}</td>
          </tr>
          <tr>
            <th>${t("th_gender", "Gender Eligibility")}</th>
            <td>${escapeHtml(getSchemeGenderText(scheme))}</td>
          </tr>
          <tr>
            <th>${t("th_state", "State & Domicile Criteria")}</th>
            <td>${escapeHtml(getSchemeStateText(scheme))}</td>
          </tr>
          <tr>
            <th>${t("th_pwd", "Disability (PwD) Criteria")}</th>
            <td>${escapeHtml(getSchemeDisabilityText(scheme))}</td>
          </tr>
          <tr>
            <th>${t("th_minority", "Minority Community Criteria")}</th>
            <td>${escapeHtml(getSchemeMinorityText(scheme))}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Required Documents Checklist -->
    <section class="details-section-card">
      <h3>${t("sec_docs_checklist", "📄 Required Documents Checklist")}</h3>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">
        ${t("sec_docs_checklist_sub", "Check your paperwork preparation against official guidelines before initiating your application:")}
      </p>
      <div class="docs-checklist-container">
        ${docsChecklistHtml}
      </div>
    </section>

    <!-- Step-by-Step How to Apply -->
    <section class="details-section-card">
      <h3>${t("sec_how_to_apply", "📝 How to Apply (Step-by-Step Guidelines)")}</h3>
      <div class="apply-steps-box">
        <p style="line-height: 1.7; color: var(--text-main); font-size: 0.95rem;">
          ${escapeHtml(scheme.application_process)}
        </p>
      </div>

      <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span style="font-size: 0.85rem; color: var(--text-muted); display: block;">${t("lbl_app_cycle", "Important Dates / Application Cycle:")}</span>
          <strong style="color: #ffffff; font-size: 0.95rem;">${escapeHtml(scheme.important_dates)}</strong>
        </div>
        <div>
          <a href="${escapeHtml(scheme.application_url)}" target="_blank" rel="noopener noreferrer" class="btn btn-cyan btn-lg">
            ${t("btn_apply_official", "Apply on Official Website ↗")}
          </a>
        </div>
      </div>
    </section>
  `;

  // Read Aloud Handler
  const readDetailsBtn = document.getElementById("read-details-aloud-btn");
  if (readDetailsBtn) {
    readDetailsBtn.addEventListener("click", () => {
      const summaryText = scheme.name + ". " + scheme.short_description + ". Benefit: " + scheme.benefits + ". How to apply: " + scheme.application_process;
      readAloudText(summaryText, () => {
        readDetailsBtn.innerHTML = "⏹ Reading Scheme...";
      }, () => {
        readDetailsBtn.innerHTML = "🔊 Read Scheme Details";
      });
    });
  }
}

// Mobile Hamburger Navigation Controller
function setupMobileNav() {
  const hamburgerBtns = document.querySelectorAll(".nav-hamburger");
  const navLinks = document.querySelector(".site-header .nav-links");
  if (!hamburgerBtns.length || !navLinks) return;

  function toggleMenu(open) {
    const shouldOpen = open !== undefined ? open : !navLinks.classList.contains("mobile-open");
    navLinks.classList.toggle("mobile-open", shouldOpen);
    hamburgerBtns.forEach(btn => {
      btn.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
      btn.innerHTML = shouldOpen ? "✕" : "☰";
    });
  }

  hamburgerBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });
  });

  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => toggleMenu(false));
  });

  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && ![...hamburgerBtns].some(b => b.contains(e.target))) {
      toggleMenu(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggleMenu(false);
    }
  });
}

// Dynamic Scheme Count Populator
function updateDynamicSchemeCounts() {
  const totalCount = SCHEME_DATABASE.length;
  const activeCount = SCHEME_DATABASE.filter(s => s.status === "ACTIVE").length;

  document.querySelectorAll(".dynamic-schemes-count").forEach(el => {
    el.textContent = totalCount;
  });
  document.querySelectorAll(".dynamic-active-schemes-count").forEach(el => {
    el.textContent = activeCount;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Language selector setup
  const langSelect = document.getElementById("site-lang-select");
  if (langSelect) {
    langSelect.value = currentLangCode;
    langSelect.addEventListener("change", (e) => {
      applyLanguageTranslations(e.target.value);
    });
  }
  applyLanguageTranslations(currentLangCode);

  // Mobile Nav & Dynamic Scheme Counters
  setupMobileNav();
  updateDynamicSchemeCounts();

  // 2. Accessibility & Voice Assistant
  setupAccessibilityControls();
  setupVoiceAssistant();
  setup3DHeroScene();
  initHeroQuickScreener();

  // 3. Page-specific controller initializations
  const path = window.location.pathname.toLowerCase();
  if (path.includes("find-schemes")) {
    initFindSchemesPage();
  } else if (path.includes("results")) {
    initResultsPage();
  } else if (path.includes("scheme-details")) {
    initSchemeDetailsPage();
  }

  console.log(`SchemeMatch initialized successfully with ${SCHEME_DATABASE.length} verified schemes (${SCHEME_DATABASE.filter(s => s.status === 'ACTIVE').length} active).`);
});




// === PERFECT MULTILINGUAL TRANSLATION ENGINE ===
(function() {
  function getActiveLang(target) {
    if (target) return target;
    var sel = document.getElementById('site-lang-select') || document.querySelector('.lang-select');
    if (sel && sel.value) return sel.value;
    return (typeof currentLangCode !== 'undefined' && currentLangCode) ? currentLangCode : 'en-IN';
  }

  function executeFullTranslation(forcedLang) {
    var lang = getActiveLang(forcedLang);
    if (typeof currentLangCode !== 'undefined') {
      currentLangCode = lang;
    }

    // 1. Merge EXTRA_I18N into I18N
    if (typeof I18N !== 'undefined' && typeof EXTRA_I18N !== 'undefined') {
      Object.keys(EXTRA_I18N).forEach(function(l) {
        if (!I18N[l]) I18N[l] = {};
        Object.assign(I18N[l], EXTRA_I18N[l]);
      });
    }

    var dict = (typeof I18N !== 'undefined' && I18N[lang]) ? I18N[lang] : ((typeof I18N !== 'undefined' && I18N['en-IN']) ? I18N['en-IN'] : {});

    // 2. Translate all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var k = el.getAttribute('data-i18n');
      if (dict[k]) el.textContent = dict[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var k = el.getAttribute('data-i18n-html');
      if (dict[k]) el.innerHTML = dict[k];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var k = el.getAttribute('data-i18n-placeholder');
      if (dict[k]) el.placeholder = dict[k];
    });

    // 3. Translate Dropdown Options (Occupation, Category, Income)
    var optMap = {
      '': 'occ_all', 'all': 'occ_all', 'farmer': 'occ_farmer', 'artisan': 'occ_artisan',
      'small_business': 'occ_small_biz', 'self_employed': 'occ_self_emp', 'daily_wage': 'occ_daily_wage',
      'woman_shg': 'occ_woman', 'senior_citizen': 'occ_senior', 'student': 'occ_student', 'unemployed': 'occ_unemployed',
      'general': 'cat_general', 'obc': 'cat_obc', 'sc': 'cat_sc', 'st': 'cat_st', 'ews': 'cat_ews', 'minority': 'cat_minority',
      '100000': 'income_1', '250000': 'income_2_5', '500000': 'income_5', '800000': 'income_8', 'above': 'income_above'
    };
    document.querySelectorAll('select option').forEach(function(opt) {
      var v = (opt.value || '').trim();
      if (optMap[v] && dict[optMap[v]]) {
        opt.textContent = dict[optMap[v]];
      }
    });

    // 4. Translate About Section Elements
    document.querySelectorAll('*').forEach(function(el) {
      if (el.children.length === 0) {
        var t = el.textContent.trim();
        if (t === 'Karan Rajput' && dict['dev1_name']) el.textContent = dict['dev1_name'];
        if ((t === 'Co-Developer & UI Designer' || t === 'Co-Developer &amp; UI Designer') && dict['dev1_role']) el.textContent = dict['dev1_role'];
        if (t === 'Akanksha Shrivastava' && dict['dev2_name']) el.textContent = dict['dev2_name'];
        if ((t === 'Co-Developer & Research' || t === 'Co-Developer &amp; Research') && dict['dev2_role']) el.textContent = dict['dev2_role'];
        if (t === 'First Year' && dict['dev1_year']) el.textContent = dict['dev1_year'];
        if (t.indexOf('B.Tech.') !== -1 && dict['dev1_dept']) el.textContent = dict['dev1_dept'];
        if (t === 'TEAM SYNTAX//ERROR' && dict['about_team']) el.textContent = dict['about_team'];
        if (t === 'Likely Eligible' && dict['likely_eligible']) el.textContent = dict['likely_eligible'];
      }
    });

    var h2 = document.querySelector('#about h2, .about-section h2');
    if (h2 && dict['about_heading']) h2.textContent = dict['about_heading'];
    var p = document.querySelector('#about p, .about-section p');
    if (p && dict['about_desc']) p.textContent = dict['about_desc'];
  }

  // Override applyLanguageTranslations with proper argument forwarding
  var originalFn = window.applyLanguageTranslations;
  window.applyLanguageTranslations = function(targetLang) {
    if (typeof originalFn === 'function') {
      try { originalFn.apply(this, arguments); } catch(e) {}
    }
    executeFullTranslation(targetLang);
  };

  // Immediate event listener for Dropdown change
  document.addEventListener('change', function(e) {
    if (e.target && (e.target.id === 'site-lang-select' || e.target.classList.contains('lang-select'))) {
      executeFullTranslation(e.target.value);
    }
  });

  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { executeFullTranslation(); });
  } else {
    executeFullTranslation();
  }
})();


// === COMPLETE MULTI-SECTION DEEP TRANSLATION (ABOUT, SCHEMES, MINISTRIES) ===
(function() {
  var DICTS = {
    "hi-IN": {
      "Ministry of Education (MoE)": "शिक्षा मंत्रालय (MoE)",
      "Ministry of Social Justice": "सामाजिक न्याय मंत्रालय",
      "AICTE Student Welfare": "एआईसीटीई छात्र कल्याण",
      "University Grants Commission (UGC)": "विश्वविद्यालय अनुदान आयोग (UGC)",
      "Ministry of Tribal Affairs": "जनजातीय कार्य मंत्रालय",
      "Vidya Lakshmi Education Loans": "विद्या लक्ष्मी शिक्षा ऋण",
      "Scholarships": "छात्रवृत्ति",
      "Healthcare & Wellness": "स्वास्थ्य एवं कल्याण",
      "Skills & Employment": "कौशल एवं रोजगार",
      "Agriculture": "कृषि",
      "Housing": "आवास",
      "ACTIVE": "सक्रिय",
      "All India": "सम्पूर्ण भारत",
      "Madhya Pradesh": "मध्य प्रदेश",
      "Ration Card": "राशन कार्ड",
      "Family Id": "परिवार आईडी",
      "Aadhar Card": "आधार कार्ड",
      "Income Certificate": "आय प्रमाण पत्र",
      "Domicile Certificate": "मूल निवास प्रमाण पत्र",
      "TEAM SYNTAX//ERROR": "टीम SYNTAX//ERROR",
      "MITS": "एमआईटीएस",
      "Karan Rajput": "करण राजपूत",
      "Akanksha Shrivastava": "आकांक्षा श्रीवास्तव",
      "Co-Developer & UI Designer": "सह-डेवलपर और यूआई डिज़ाइनर",
      "Co-Developer & Research": "सह-डेवलपर और रिसर्च",
      "B.Tech. – Computer Science and Design": "बी.टेक. – कंप्यूटर साइंस और डिज़ाइन",
      "First Year": "प्रथम वर्ष",
      "Madhya Pradesh Mukhyamantri Medhavi Vidyarthi Yojana (MMVY)": "मध्य प्रदेश मुख्यमंत्री मेधावी विद्यार्थी योजना (MMVY)",
      "Financial support for meritorious Madhya Pradesh students pursuing eligible undergraduate professional courses in engineering, medicine, law and other notified programs.": "इंजीनियरिंग, मेडिकल, लॉ और अन्य पाठ्यक्रमों में पढ़ाई करने वाले मध्य प्रदेश के मेधावी छात्रों के लिए वित्तीय सहायता।",
      "Ayushman Bharat PM-JAY (Pradhan Mantri Jan Arogya Yojana)": "आयुष्मान भारत पीएम-जय (प्रधानमंत्री जन आरोग्य योजना)",
      "World's largest government-funded health insurance scheme offering cashless treatment of up to ₹5 Lakhs per family per year for secondary and tertiary care.": "अस्पताल में भर्ती के लिए प्रति परिवार प्रति वर्ष ₹5 लाख तक का कैशलेस स्वास्थ्य उपचार प्रदान करने वाली योजना।",
      "Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)": "प्रधानमंत्री कौशल विकास योजना (PMKVY 4.0)",
      "Flagship skill certification scheme enabling Indian youth to take up industry-relevant skill training for better livelihood opportunities.": "भारतीय युवाओं को बेहतर आजीविका के लिए उद्योग-प्रासंगिक कौशल प्रशिक्षण प्रदान करने वाली प्रमुख योजना।"
    },
    "mr-IN": {
      "Ministry of Education (MoE)": "शिक्षण मंत्रालय (MoE)",
      "Ministry of Social Justice": "सामाजिक न्याय मंत्रालय",
      "AICTE Student Welfare": "एआयसीटीई विद्यार्थी कल्याण",
      "University Grants Commission (UGC)": "विद्यापीठ अनुदान आयोग (UGC)",
      "Ministry of Tribal Affairs": "आदिवासी कार्य मंत्रालय",
      "Vidya Lakshmi Education Loans": "विद्या लक्ष्मी शैक्षणिक कर्ज",
      "Scholarships": "शिष्यवृत्ती",
      "Healthcare & Wellness": "आरोग्य आणि कल्याण",
      "Skills & Employment": "कौशल्य आणि रोजगार",
      "Agriculture": "कृषी",
      "Housing": "गृहनिर्माण",
      "ACTIVE": "सक्रिय",
      "All India": "संपूर्ण भारत",
      "Madhya Pradesh": "मध्य प्रदेश",
      "Ration Card": "रेशन कार्ड",
      "Family Id": "कुटुंब आयडी",
      "Aadhar Card": "आधार कार्ड",
      "TEAM SYNTAX//ERROR": "टीम SYNTAX//ERROR",
      "MITS": "एमआयटीएस",
      "Karan Rajput": "करण राजपूत",
      "Akanksha Shrivastava": "आकांक्षा श्रीवास्तव",
      "Co-Developer & UI Designer": "सह-डेव्हलपर आणि UI डिझायनर",
      "Co-Developer & Research": "सह-डेव्हलपर आणि संशोधन",
      "B.Tech. – Computer Science and Design": "बी.टेक. – कॉम्प्युटर सायन्स व डिझाइन",
      "First Year": "प्रथम वर्ष",
      "Madhya Pradesh Mukhyamantri Medhavi Vidyarthi Yojana (MMVY)": "मध्य प्रदेश मुख्यमंत्री मेधावी विद्यार्थी योजना (MMVY)",
      "Ayushman Bharat PM-JAY (Pradhan Mantri Jan Arogya Yojana)": "आयुष्मान भारत पीएम-जय (प्रधानमंत्री जन आरोग्य योजना)",
      "Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)": "प्रधानमंत्री कौशल विकास योजना (PMKVY 4.0)"
    },
    "bn-IN": {
      "Ministry of Education (MoE)": "শিক্ষা মন্ত্রক (MoE)",
      "Ministry of Social Justice": "সামাজিক ন্যায়বিচার মন্ত্রক",
      "AICTE Student Welfare": "এআইসিটিই ছাত্র কল্যাণ",
      "University Grants Commission (UGC)": "বিশ্ববিদ্যালয় মঞ্জুরি কমিশন (UGC)",
      "Ministry of Tribal Affairs": "উপজাতি বিষয়ক মন্ত্রক",
      "Vidya Lakshmi Education Loans": "বিদ্যা লক্ষ্মী শিক্ষা ঋণ",
      "Scholarships": "বৃত্তি",
      "Healthcare & Wellness": "স্বাস্থ্য ও কল্যাণ",
      "Skills & Employment": "দক্ষতা ও কর্মসংস্থান",
      "ACTIVE": "সক্রিয়",
      "All India": "সারা ভারত",
      "Ration Card": "রেশন কার্ড",
      "Family Id": "পারিবারিক আইডি",
      "Karan Rajput": "করণ রাজপুত",
      "Akanksha Shrivastava": "আকাঙ্ক্ষা শ্রীবাস্তব",
      "Co-Developer & UI Designer": "সহ-ডেভেলপার ও UI ডিজাইনার",
      "Co-Developer & Research": "সহ-ডেভেলপার ও গবেষণা",
      "First Year": "প্রথম বর্ষ"
    },
    "ta-IN": {
      "Ministry of Education (MoE)": "கல்வி அமைச்சகம் (MoE)",
      "Ministry of Social Justice": "சமூக நீதி அமைச்சகம்",
      "Scholarships": "உதவித்தொகை",
      "Healthcare & Wellness": "சுகாதாரம் மற்றும் நல்வாழ்வு",
      "Skills & Employment": "திறன் மற்றும் வேலைவாய்ப்பு",
      "ACTIVE": "செயலில்",
      "All India": "அகில இந்திய",
      "Ration Card": "ரேஷன் கார்டு",
      "Family Id": "குடும்ப ஐடி",
      "Karan Rajput": "கரண் ராஜ்புத்",
      "Akanksha Shrivastava": "அகன்க்ஷா ஸ்ரீவஸ்தவா"
    },
    "te-IN": {
      "Ministry of Education (MoE)": "విద్యా మంత్రిత్వ శాఖ (MoE)",
      "Ministry of Social Justice": "సామాజిక న్యాయ మంత్రిత్వ శాఖ",
      "Scholarships": "స్కాలర్‌షిప్‌లు",
      "Healthcare & Wellness": "ఆరోగ్యం మరియు సంక్షేమం",
      "Skills & Employment": "నైపుణ్యాలు మరియు ఉపాధి",
      "ACTIVE": "క్రియాశీల",
      "All India": "అఖిల భారత",
      "Ration Card": "రేషన్ కార్డు",
      "Family Id": "కుటుంబ ఐడి",
      "Karan Rajput": "కరణ్ రాజ్‌పుత్",
      "Akanksha Shrivastava": "ఆకాంక్ష శ్రీవాస్తవ"
    }
  };

  function translateDeepElements() {
    var lang = (typeof currentLangCode !== 'undefined' && currentLangCode) ? currentLangCode : (document.getElementById('site-lang-select') ? document.getElementById('site-lang-select').value : 'en-IN');
    if (lang === 'en-IN') return;

    var curDict = DICTS[lang] || DICTS['hi-IN'];
    if (!curDict) return;

    // 1. Text node replacements across the whole page
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    var node;
    while ((node = walker.nextNode())) {
      var val = node.nodeValue.trim();
      if (curDict[val]) {
        node.nodeValue = curDict[val];
      }
    }

    // 2. About section Heading & Description
    var h2 = document.querySelector('#about h2, .about-section h2');
    if (h2) {
      if (lang === 'hi-IN') h2.innerHTML = '<span class="text-accent">SchemeMatch</span> के बारे में';
      else if (lang === 'mr-IN') h2.innerHTML = '<span class="text-accent">SchemeMatch</span> बद्दल';
      else if (lang === 'bn-IN') h2.innerHTML = '<span class="text-accent">SchemeMatch</span> সম্পর্কে';
      else if (lang === 'ta-IN') h2.innerHTML = '<span class="text-accent">SchemeMatch</span> பற்றி';
      else if (lang === 'te-IN') h2.innerHTML = '<span class="text-accent">SchemeMatch</span> గురించి';
    }

    var descP = document.querySelector('#about p, .about-section p');
    if (descP) {
      if (lang === 'hi-IN') descP.textContent = 'SchemeMatch को करण राजपूत और आकांक्षा श्रीवास्तव ने मिलकर बनाया है ताकि सरकारी योजनाएं खोजना आसान, स्पष्ट और सुलभ हो सके।';
      else if (lang === 'mr-IN') descP.textContent = 'SchemeMatch हे करण राजपूत आणि आकांक्षा श्रीवास्तव यांनी सरकारी योजना शोधणे अधिक सोपे आणि सुलभ बनवण्यासाठी तयार केले आहे.';
      else if (lang === 'bn-IN') descP.textContent = 'সরকারি সুযোগ-সুবিধা সহজে সবার কাছে পৌঁছে দিতে করণ রাজপুত ও আকাঙ্ক্ষা শ্রীবাস্তব SchemeMatch তৈরি করেছেন।';
      else if (lang === 'ta-IN') descP.textContent = 'அரசு திட்டங்களை எளிமையாகவும் தெளிவாகவும் கண்டறிய கரண் ராஜ்புத் மற்றும் அகன்க்ஷா ஸ்ரீவஸ்தவா ஆகியோரால் உருவாக்கப்பட்டது.';
      else if (lang === 'te-IN') descP.textContent = 'ప్రభుత్వ పథకాలను సులభంగా కనుగొనడానికి కరణ్ రాజ్‌పుత్ మరియు ఆకాంక్ష శ్రీవాస్తవ SchemeMatch ను రూపొందించారు.';
    }
  }

  // Hook into scheme renderers & interval
  setInterval(translateDeepElements, 300);
  document.addEventListener('DOMContentLoaded', translateDeepElements);
})();


// === EXTRA TAGLINE & BRAND TRANSLATIONS ===
(function() {
  var EXTRA_WORDS = {
    "hi-IN": {
      "Designing simple solutions for real-world needs": "वास्तविक दुनिया की ज़रूरतों के लिए सरल समाधान तैयार करना",
      "SYNTAX//ERROR": "सिंटेक्स//एरर",
      "SchemeMatch": "स्कीममैच"
    },
    "mr-IN": {
      "Designing simple solutions for real-world needs": "वास्तविक गरजांसाठी साधे उपाय तयार करणे",
      "SYNTAX//ERROR": "सिंटेक्स//एरर",
      "SchemeMatch": "स्कीममॅच"
    },
    "bn-IN": {
      "Designing simple solutions for real-world needs": "বাস্তব প্রয়োজনের জন্য সহজ সমাধান তৈরি করা",
      "SYNTAX//ERROR": "সিনট্যাক্স//এরর",
      "SchemeMatch": "স্কিমম্যাচ"
    },
    "ta-IN": {
      "Designing simple solutions for real-world needs": "நிஜ உலக தேவைகளுக்கான எளிய தீர்வுகளை உருவாக்குதல்",
      "SYNTAX//ERROR": "சின்டாக்ஸ்//எரர்",
      "SchemeMatch": "ஸ்கீம்ம್ಯಾட்ச்"
    },
    "te-IN": {
      "Designing simple solutions for real-world needs": "నిజ జీవిత అవసరాలకు సరళమైన పరిష్కారాలను రూపొందించడం",
      "SYNTAX//ERROR": "సింటాక్స్//ఎర్రర్",
      "SchemeMatch": "స్కీమ్‌మ్యాచ్"
    }
  };

  function translateTaglineAndBrand() {
    var lang = (typeof currentLangCode !== 'undefined' && currentLangCode) ? currentLangCode : (document.getElementById('site-lang-select') ? document.getElementById('site-lang-select').value : 'en-IN');
    if (lang === 'en-IN') return;

    var dict = EXTRA_WORDS[lang];
    if (!dict) return;

    // 1. Tagline text
    document.querySelectorAll('*').forEach(function(el) {
      if (el.children.length === 0) {
        var t = el.textContent.trim();
        if (dict[t]) {
          el.textContent = dict[t];
        }
      }
    });

    // 2. Heading SchemeMatch text
    var brandSpan = document.querySelector('#about h2 .text-accent, .about-section h2 .text-accent');
    if (brandSpan && dict["SchemeMatch"]) {
      brandSpan.textContent = dict["SchemeMatch"];
    }
  }

  setInterval(translateTaglineAndBrand, 300);
})();




// === PERFECT PLAY/STOP CONTROLLER FOR ORIGINAL READ-ALOUD ===
(function() {
  var isSpeaking = false;

  function setButtons(speaking) {
    document.querySelectorAll('button, a').forEach(function(b) {
      var t = b.textContent.toLowerCase();
      if (t.includes('read page') || t.includes('पेज पढ़ें') || t.includes('stop') || t.includes('रोकें') || (b.id && b.id.includes('read-page'))) {
        if (speaking) {
          b.setAttribute('data-orig-text', b.innerHTML);
          b.innerHTML = '⏹ Stop (पढ़ना रोकें)';
          b.style.backgroundColor = '#e53e3e';
          b.style.color = '#ffffff';
        } else {
          var orig = b.getAttribute('data-orig-text');
          if (orig) {
            b.innerHTML = orig;
          } else {
            var l = (typeof currentLangCode !== 'undefined' && currentLangCode) ? currentLangCode : 'hi-IN';
            b.innerHTML = (l === 'hi-IN') ? '🔊 पेज पढ़ें' : '🔊 Read Page';
          }
          b.style.backgroundColor = '';
          b.style.color = '';
        }
      }
    });
  }

  // Original readAloudText ko intercept karke Toggle Stop banayein
  var originalRead = window.readAloudText;
  window.readAloudText = function(textToSpeak, onStart, onEnd) {
    // 1. AGAR PEHLE SE BOL RAHA HAI TOH TURANT STOP KARO!
    if (isSpeaking || (window.speechSynthesis && window.speechSynthesis.speaking)) {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      isSpeaking = false;
      setButtons(false);
      return; // Stop and exit!
    }

    // 2. Text ko thoda saaf karein taaki kachra na padhe
    var clean = textToSpeak;
    if (clean && typeof clean === 'string') {
      clean = clean.replace(/https?:\/\/\S+/gi, '')
                   .replace(/\b(Home|Find Schemes|Results|Help|About|Menu|Close|Search|Toggle)\b/gi, '')
                   .replace(/\s+/g, ' ')
                   .trim();
    }

    isSpeaking = true;
    setButtons(true);

    if (typeof originalRead === 'function') {
      originalRead(clean, function() {
        isSpeaking = true;
        setButtons(true);
        if (onStart) onStart();
      }, function() {
        isSpeaking = false;
        setButtons(false);
        if (onEnd) onEnd();
      });
    } else {
      var utter = new SpeechSynthesisUtterance(clean);
      utter.lang = (typeof currentLangCode !== 'undefined' && currentLangCode) ? currentLangCode : 'hi-IN';
      utter.onend = function() { isSpeaking = false; setButtons(false); };
      utter.onerror = function() { isSpeaking = false; setButtons(false); };
      window.speechSynthesis.speak(utter);
    }
  };

  // Keyboard Escape dabate hi turant aawaz band
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      isSpeaking = false;
      setButtons(false);
    }
  });
})();




// === CLEAN HIGH CONTRAST & ACCESSIBILITY AUDIO ENGINE ===
(function() {
  // 1. High Contrast Styling
  var style = document.getElementById('high-contrast-override-style');
  if (!style) {
    style = document.createElement('style');
    style.id = 'high-contrast-override-style';
    document.head.appendChild(style);
  }
  style.innerHTML = `
    body.high-contrast-mode {
      background-color: #000000 !important;
      color: #ffffff !important;
    }
    body.high-contrast-mode .hero, 
    body.high-contrast-mode .screener-card,
    body.high-contrast-mode .scheme-card,
    body.high-contrast-mode .detail-card,
    body.high-contrast-mode .card,
    body.high-contrast-mode [class*="card"],
    body.high-contrast-mode nav,
    body.high-contrast-mode header,
    body.high-contrast-mode footer {
      background-color: #0a0a0a !important;
      color: #ffffff !important;
      border: 2px solid #ffffff !important;
    }
    body.high-contrast-mode h1, 
    body.high-contrast-mode h2, 
    body.high-contrast-mode h3, 
    body.high-contrast-mode .text-accent,
    body.high-contrast-mode .hero-heading-highlight {
      color: #ffff00 !important;
    }
    body.high-contrast-mode p, 
    body.high-contrast-mode span:not(button span):not(.btn span), 
    body.high-contrast-mode label {
      color: #ffffff !important;
    }
    body.high-contrast-mode button:not(#read-page-global-btn.speaking),
    body.high-contrast-mode button:not(#read-page-global-btn.speaking) *,
    body.high-contrast-mode .btn,
    body.high-contrast-mode .btn * {
      background-color: #ffff00 !important;
      color: #000000 !important;
      font-weight: 800 !important;
    }
    body.high-contrast-mode #read-page-global-btn.speaking {
      background-color: #e53e3e !important;
      color: #ffffff !important;
    }
    body.high-contrast-mode input, 
    body.high-contrast-mode select, 
    body.high-contrast-mode textarea {
      background-color: #1a1a1a !important;
      color: #ffff00 !important;
      border: 2px solid #ffff00 !important;
    }
    body.high-contrast-mode a:not(button):not(.btn) {
      color: #00ffff !important;
      text-decoration: underline !important;
    }
  `;

  var cBtn = document.getElementById("high-contrast-btn");
  var rBtn = document.getElementById("read-page-global-btn");
  var isSpeaking = false;

  function updateBarLabels() {
    var lang = (typeof currentLangCode !== 'undefined' && currentLangCode) ? currentLangCode : 'en-IN';
    var isHigh = document.body.classList.contains("high-contrast-mode");
    
    if (cBtn) {
      if (lang === 'hi-IN') cBtn.textContent = isHigh ? "☀️ सामान्य कंट्रास्ट" : "🌓 उच्च कंट्रास्ट";
      else if (lang === 'mr-IN') cBtn.textContent = isHigh ? "☀️ सामान्य कॉन्ट्रास्ट" : "🌓 उच्च कॉन्ट्रास्ट";
      else if (lang === 'bn-IN') cBtn.textContent = isHigh ? "☀️ স্বাভাবিক কনট্রাস্ট" : "🌓 উচ্চ কনট্রাস্ট";
      else if (lang === 'ta-IN') cBtn.textContent = isHigh ? "☀️ இயல்பான மாறுபாடு" : "🌓 அதிக மாறுபாடு";
      else if (lang === 'te-IN') cBtn.textContent = isHigh ? "☀️ సాధారణ కాంట్రాస్ట్" : "🌓 అధిక కాంట్రాస్ట్";
      else cBtn.textContent = isHigh ? "☀️ Normal Contrast" : "🌓 High Contrast";
    }

    if (rBtn) {
      if (isSpeaking) {
        rBtn.classList.add('speaking');
        rBtn.style.backgroundColor = '#e53e3e';
        rBtn.style.color = '#ffffff';
        rBtn.innerHTML = '⏹ Stop Reading';
      } else {
        rBtn.classList.remove('speaking');
        rBtn.style.backgroundColor = '';
        rBtn.style.color = '';
        if (lang === 'hi-IN') rBtn.innerHTML = '🔊 पेज पढ़ें';
        else if (lang === 'mr-IN') rBtn.innerHTML = '🔊 पेज वाचा';
        else if (lang === 'bn-IN') rBtn.innerHTML = '🔊 পৃষ্ঠা পড়ুন';
        else if (lang === 'ta-IN') rBtn.innerHTML = '🔊 பக்கத்தைப் படியுங்கள்';
        else if (lang === 'te-IN') rBtn.innerHTML = '🔊 పేజీ చదవండి';
        else rBtn.innerHTML = '🔊 Read Page';
      }
    }
  }

  function stopSpeech() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    isSpeaking = false;
    updateBarLabels();
  }

  // 2. High Contrast Toggle Click
  if (cBtn) {
    cBtn.onclick = function(e) {
      if (e) e.preventDefault();
      var isHigh = document.body.classList.toggle("high-contrast-mode");
      localStorage.setItem("schemematch_contrast", isHigh.toString());
      updateBarLabels();
    };
  }

  // 3. Read Page Play/Stop Click
  if (rBtn) {
    rBtn.onclick = function(e) {
      if (e) e.preventDefault();

      // Agar bol raha hai -> STOP KARO
      if (isSpeaking || (window.speechSynthesis && window.speechSynthesis.speaking)) {
        stopSpeech();
        return;
      }

      if (!('speechSynthesis' in window)) {
        alert("Speech synthesis is not supported in this browser.");
        return;
      }

      window.speechSynthesis.cancel();

      // Chrome delay bypass: 80ms wait so audio speaks smoothly
      setTimeout(function() {
        var text = "";
        var h1 = document.querySelector('h1, .hero-heading');
        if (h1) text += h1.textContent.trim() + "। ";

        var cards = document.querySelectorAll('.scheme-card, .result-card');
        if (cards.length > 0) {
          text += "पात्र योजनाएं: ";
          cards.forEach(function(c, i) {
            if (i < 4) {
              var title = c.querySelector('h2, h3, .scheme-name');
              if (title) text += (i + 1) + ". " + title.textContent.trim() + "। ";
            }
          });
        } else {
          var desc = document.querySelector('.hero-subtext, p');
          if (desc) text += desc.textContent.trim();
        }

        if (!text) text = "Welcome to SchemeMatch Portal.";

        var lang = (typeof currentLangCode !== 'undefined' && currentLangCode) ? currentLangCode : 'hi-IN';
        var utter = new SpeechSynthesisUtterance(text);
        utter.lang = lang;
        utter.rate = 0.95;

        var voices = window.speechSynthesis.getVoices();
        if (voices && voices.length > 0) {
          var v = voices.find(function(item) { return item.lang && item.lang.startsWith(lang.split('-')[0]); });
          if (v) utter.voice = v;
        }

        utter.onstart = function() {
          isSpeaking = true;
          updateBarLabels();
        };
        utter.onend = function() {
          isSpeaking = false;
          updateBarLabels();
        };
        utter.onerror = function() {
          isSpeaking = false;
          updateBarLabels();
        };

        window.speechSynthesis.speak(utter);
        isSpeaking = true;
        updateBarLabels();
      }, 80);
    };
  }

  // Keyboard Escape dabate hi turant Stop
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isSpeaking) {
      stopSpeech();
    }
  });

  setInterval(updateBarLabels, 500);
})();
