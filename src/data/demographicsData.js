// ILLUSTRATIVE — replace with live Supabase aggregations when fielded data reaches N≥400
// Option labels match the actual quiz items in 26-item-catalog-LCA.md

export const DEMOGRAPHIC_VARIABLES = [
  {
    id: 'DM-A',
    label: 'Political Self-Identification',
    options: ['Progressive', 'Lean Left', 'Moderate', 'Lean Right', 'Conservative', 'Apolitical'],
  },
  {
    id: 'REP-A',
    label: 'Age',
    options: ['18–29', '30–44', '45–59', '60–74', '75+'],
  },
  {
    id: 'REP-E',
    label: 'Educational Attainment',
    options: ['Less than HS', 'HS diploma', 'Some college', "Bachelor's", 'Graduate degree'],
  },
  {
    id: 'REP-D',
    label: 'Race / Ethnicity',
    options: ['White', 'Black', 'Hispanic', 'Asian', 'Native American', 'Multiracial', 'Other / Prefer not'],
  },
  {
    id: 'REP-B',
    label: 'Gender',
    options: ['Man', 'Woman', 'Non-binary / Other', 'Prefer not to say'],
  },
  {
    id: 'DM-B',
    label: 'Student Loan Debt Status',
    // Options match quiz DM-B: never attended / no debt / paid off / under $25k / $25k–$75k / $75k+
    options: ['Never attended', 'No debt incurred', 'Debt paid off', 'Under $25k remaining', '$25k–$75k remaining', '$75k+ remaining'],
  },
  {
    id: 'DM-C',
    label: 'First-Generation Status',
    // Quiz asks "Did either parent complete a four-year degree?" A=yes(parent attended), B=no(first gen)
    options: ['Parent(s) attended college', 'First in family'],
  },
  {
    id: 'DM-E',
    label: 'Observed Financial Outcomes (Personal Network)',
    // Options match quiz DM-E: mostly better / mixed positive / mixed negative / mostly worse
    options: ['Mostly better', 'Mixed — mostly positive', 'Mixed — mostly negative', 'Mostly worse'],
  },
  {
    id: 'DM-F',
    label: 'Trusted News and Information Sources',
    // Options match quiz DM-F 8 media-environment categories
    options: [
      'Left-center establishment',
      'Rigorous + skeptical',
      'Mixed + social media',
      'Local + casual',
      'Balanced (both sides)',
      'Right + alternative',
      'Conservative + faith',
      'Far-right + talk radio',
    ],
  },
  {
    id: 'REP-C',
    label: 'Region',
    // Derived from quiz REP-C (ZIP code) collapsed to Census regions
    options: ['Northeast', 'Midwest', 'South', 'West'],
  },
]

// National prevalence-weighted averages across all 7 classes
export const NATIONAL_DEMOGRAPHIC_AVERAGES = {
  'DM-A': { 'Progressive': 0.13, 'Lean Left': 0.18, 'Moderate': 0.22, 'Lean Right': 0.17, 'Conservative': 0.20, 'Apolitical': 0.10 },
  'REP-A': { '18–29': 0.18, '30–44': 0.26, '45–59': 0.24, '60–74': 0.23, '75+': 0.09 },
  'REP-E': { 'Less than HS': 0.08, 'HS diploma': 0.22, 'Some college': 0.26, "Bachelor's": 0.26, 'Graduate degree': 0.18 },
  'REP-D': { 'White': 0.58, 'Black': 0.13, 'Hispanic': 0.14, 'Asian': 0.06, 'Native American': 0.02, 'Multiracial': 0.05, 'Other / Prefer not': 0.02 },
  'REP-B': { 'Man': 0.48, 'Woman': 0.48, 'Non-binary / Other': 0.03, 'Prefer not to say': 0.01 },
  'DM-B': { 'Never attended': 0.15, 'No debt incurred': 0.22, 'Debt paid off': 0.13, 'Under $25k remaining': 0.17, '$25k–$75k remaining': 0.19, '$75k+ remaining': 0.14 },
  'DM-C': { 'Parent(s) attended college': 0.62, 'First in family': 0.38 },
  'DM-E': { 'Mostly better': 0.22, 'Mixed — mostly positive': 0.33, 'Mixed — mostly negative': 0.27, 'Mostly worse': 0.18 },
  'DM-F': { 'Left-center establishment': 0.13, 'Rigorous + skeptical': 0.10, 'Mixed + social media': 0.14, 'Local + casual': 0.14, 'Balanced (both sides)': 0.12, 'Right + alternative': 0.14, 'Conservative + faith': 0.12, 'Far-right + talk radio': 0.11 },
  'REP-C': { 'Northeast': 0.20, 'Midwest': 0.22, 'South': 0.37, 'West': 0.21 },
}

// P(response_option | type) for each class × each variable. Values sum to 1.0 per variable per class.
export const CLASS_DEMOGRAPHICS = {
  'institutional-faithful': {
    'DM-A': { 'Progressive': 0.28, 'Lean Left': 0.32, 'Moderate': 0.20, 'Lean Right': 0.09, 'Conservative': 0.06, 'Apolitical': 0.05 },
    'REP-A': { '18–29': 0.10, '30–44': 0.22, '45–59': 0.28, '60–74': 0.30, '75+': 0.10 },
    'REP-E': { 'Less than HS': 0.02, 'HS diploma': 0.08, 'Some college': 0.14, "Bachelor's": 0.36, 'Graduate degree': 0.40 },
    'REP-D': { 'White': 0.62, 'Black': 0.12, 'Hispanic': 0.10, 'Asian': 0.09, 'Native American': 0.01, 'Multiracial': 0.04, 'Other / Prefer not': 0.02 },
    'REP-B': { 'Man': 0.44, 'Woman': 0.53, 'Non-binary / Other': 0.03, 'Prefer not to say': 0.00 },
    'DM-B': { 'Never attended': 0.04, 'No debt incurred': 0.20, 'Debt paid off': 0.18, 'Under $25k remaining': 0.18, '$25k–$75k remaining': 0.26, '$75k+ remaining': 0.14 },
    'DM-C': { 'Parent(s) attended college': 0.74, 'First in family': 0.26 },
    'DM-E': { 'Mostly better': 0.42, 'Mixed — mostly positive': 0.38, 'Mixed — mostly negative': 0.14, 'Mostly worse': 0.06 },
    'DM-F': { 'Left-center establishment': 0.26, 'Rigorous + skeptical': 0.20, 'Mixed + social media': 0.14, 'Local + casual': 0.09, 'Balanced (both sides)': 0.08, 'Right + alternative': 0.08, 'Conservative + faith': 0.08, 'Far-right + talk radio': 0.07 },
    'REP-C': { 'Northeast': 0.30, 'Midwest': 0.20, 'South': 0.24, 'West': 0.26 },
  },
  'critical-believers': {
    'DM-A': { 'Progressive': 0.24, 'Lean Left': 0.30, 'Moderate': 0.22, 'Lean Right': 0.12, 'Conservative': 0.08, 'Apolitical': 0.04 },
    'REP-A': { '18–29': 0.16, '30–44': 0.30, '45–59': 0.26, '60–74': 0.20, '75+': 0.08 },
    'REP-E': { 'Less than HS': 0.03, 'HS diploma': 0.10, 'Some college': 0.18, "Bachelor's": 0.32, 'Graduate degree': 0.37 },
    'REP-D': { 'White': 0.52, 'Black': 0.16, 'Hispanic': 0.14, 'Asian': 0.10, 'Native American': 0.01, 'Multiracial': 0.05, 'Other / Prefer not': 0.02 },
    'REP-B': { 'Man': 0.42, 'Woman': 0.54, 'Non-binary / Other': 0.04, 'Prefer not to say': 0.00 },
    'DM-B': { 'Never attended': 0.05, 'No debt incurred': 0.22, 'Debt paid off': 0.12, 'Under $25k remaining': 0.18, '$25k–$75k remaining': 0.24, '$75k+ remaining': 0.19 },
    'DM-C': { 'Parent(s) attended college': 0.66, 'First in family': 0.34 },
    'DM-E': { 'Mostly better': 0.24, 'Mixed — mostly positive': 0.36, 'Mixed — mostly negative': 0.26, 'Mostly worse': 0.14 },
    'DM-F': { 'Left-center establishment': 0.22, 'Rigorous + skeptical': 0.28, 'Mixed + social media': 0.16, 'Local + casual': 0.08, 'Balanced (both sides)': 0.08, 'Right + alternative': 0.07, 'Conservative + faith': 0.05, 'Far-right + talk radio': 0.06 },
    'REP-C': { 'Northeast': 0.26, 'Midwest': 0.20, 'South': 0.26, 'West': 0.28 },
  },
  'community-meritocrats': {
    'DM-A': { 'Progressive': 0.08, 'Lean Left': 0.16, 'Moderate': 0.34, 'Lean Right': 0.22, 'Conservative': 0.14, 'Apolitical': 0.06 },
    'REP-A': { '18–29': 0.16, '30–44': 0.28, '45–59': 0.26, '60–74': 0.22, '75+': 0.08 },
    'REP-E': { 'Less than HS': 0.06, 'HS diploma': 0.18, 'Some college': 0.30, "Bachelor's": 0.30, 'Graduate degree': 0.16 },
    'REP-D': { 'White': 0.60, 'Black': 0.14, 'Hispanic': 0.13, 'Asian': 0.06, 'Native American': 0.02, 'Multiracial': 0.04, 'Other / Prefer not': 0.01 },
    'REP-B': { 'Man': 0.48, 'Woman': 0.49, 'Non-binary / Other': 0.02, 'Prefer not to say': 0.01 },
    'DM-B': { 'Never attended': 0.14, 'No debt incurred': 0.28, 'Debt paid off': 0.14, 'Under $25k remaining': 0.18, '$25k–$75k remaining': 0.16, '$75k+ remaining': 0.10 },
    'DM-C': { 'Parent(s) attended college': 0.64, 'First in family': 0.36 },
    'DM-E': { 'Mostly better': 0.28, 'Mixed — mostly positive': 0.38, 'Mixed — mostly negative': 0.24, 'Mostly worse': 0.10 },
    'DM-F': { 'Left-center establishment': 0.10, 'Rigorous + skeptical': 0.07, 'Mixed + social media': 0.16, 'Local + casual': 0.20, 'Balanced (both sides)': 0.18, 'Right + alternative': 0.14, 'Conservative + faith': 0.10, 'Far-right + talk radio': 0.05 },
    'REP-C': { 'Northeast': 0.16, 'Midwest': 0.28, 'South': 0.34, 'West': 0.22 },
  },
  'faith-rooted-skeptics': {
    'DM-A': { 'Progressive': 0.04, 'Lean Left': 0.08, 'Moderate': 0.18, 'Lean Right': 0.24, 'Conservative': 0.38, 'Apolitical': 0.08 },
    'REP-A': { '18–29': 0.14, '30–44': 0.24, '45–59': 0.26, '60–74': 0.26, '75+': 0.10 },
    'REP-E': { 'Less than HS': 0.08, 'HS diploma': 0.24, 'Some college': 0.30, "Bachelor's": 0.24, 'Graduate degree': 0.14 },
    'REP-D': { 'White': 0.66, 'Black': 0.10, 'Hispanic': 0.12, 'Asian': 0.04, 'Native American': 0.02, 'Multiracial': 0.04, 'Other / Prefer not': 0.02 },
    'REP-B': { 'Man': 0.50, 'Woman': 0.47, 'Non-binary / Other': 0.01, 'Prefer not to say': 0.02 },
    'DM-B': { 'Never attended': 0.22, 'No debt incurred': 0.26, 'Debt paid off': 0.14, 'Under $25k remaining': 0.16, '$25k–$75k remaining': 0.14, '$75k+ remaining': 0.08 },
    'DM-C': { 'Parent(s) attended college': 0.60, 'First in family': 0.40 },
    'DM-E': { 'Mostly better': 0.18, 'Mixed — mostly positive': 0.30, 'Mixed — mostly negative': 0.30, 'Mostly worse': 0.22 },
    'DM-F': { 'Left-center establishment': 0.03, 'Rigorous + skeptical': 0.02, 'Mixed + social media': 0.10, 'Local + casual': 0.12, 'Balanced (both sides)': 0.12, 'Right + alternative': 0.16, 'Conservative + faith': 0.27, 'Far-right + talk radio': 0.18 },
    'REP-C': { 'Northeast': 0.10, 'Midwest': 0.22, 'South': 0.44, 'West': 0.24 },
  },
  'economically-dispossessed-left': {
    'DM-A': { 'Progressive': 0.22, 'Lean Left': 0.28, 'Moderate': 0.20, 'Lean Right': 0.12, 'Conservative': 0.08, 'Apolitical': 0.10 },
    'REP-A': { '18–29': 0.24, '30–44': 0.28, '45–59': 0.22, '60–74': 0.18, '75+': 0.08 },
    'REP-E': { 'Less than HS': 0.12, 'HS diploma': 0.26, 'Some college': 0.32, "Bachelor's": 0.20, 'Graduate degree': 0.10 },
    'REP-D': { 'White': 0.46, 'Black': 0.22, 'Hispanic': 0.18, 'Asian': 0.04, 'Native American': 0.03, 'Multiracial': 0.05, 'Other / Prefer not': 0.02 },
    'REP-B': { 'Man': 0.44, 'Woman': 0.52, 'Non-binary / Other': 0.04, 'Prefer not to say': 0.00 },
    'DM-B': { 'Never attended': 0.14, 'No debt incurred': 0.18, 'Debt paid off': 0.08, 'Under $25k remaining': 0.16, '$25k–$75k remaining': 0.24, '$75k+ remaining': 0.20 },
    'DM-C': { 'Parent(s) attended college': 0.48, 'First in family': 0.52 },
    'DM-E': { 'Mostly better': 0.08, 'Mixed — mostly positive': 0.22, 'Mixed — mostly negative': 0.32, 'Mostly worse': 0.38 },
    'DM-F': { 'Left-center establishment': 0.16, 'Rigorous + skeptical': 0.12, 'Mixed + social media': 0.18, 'Local + casual': 0.16, 'Balanced (both sides)': 0.12, 'Right + alternative': 0.12, 'Conservative + faith': 0.07, 'Far-right + talk radio': 0.07 },
    'REP-C': { 'Northeast': 0.18, 'Midwest': 0.26, 'South': 0.38, 'West': 0.18 },
  },
  'populist-antagonists': {
    'DM-A': { 'Progressive': 0.04, 'Lean Left': 0.06, 'Moderate': 0.16, 'Lean Right': 0.26, 'Conservative': 0.38, 'Apolitical': 0.10 },
    'REP-A': { '18–29': 0.16, '30–44': 0.26, '45–59': 0.26, '60–74': 0.24, '75+': 0.08 },
    'REP-E': { 'Less than HS': 0.12, 'HS diploma': 0.30, 'Some college': 0.32, "Bachelor's": 0.18, 'Graduate degree': 0.08 },
    'REP-D': { 'White': 0.68, 'Black': 0.08, 'Hispanic': 0.12, 'Asian': 0.03, 'Native American': 0.02, 'Multiracial': 0.05, 'Other / Prefer not': 0.02 },
    'REP-B': { 'Man': 0.54, 'Woman': 0.43, 'Non-binary / Other': 0.01, 'Prefer not to say': 0.02 },
    'DM-B': { 'Never attended': 0.24, 'No debt incurred': 0.24, 'Debt paid off': 0.12, 'Under $25k remaining': 0.16, '$25k–$75k remaining': 0.14, '$75k+ remaining': 0.10 },
    'DM-C': { 'Parent(s) attended college': 0.56, 'First in family': 0.44 },
    'DM-E': { 'Mostly better': 0.10, 'Mixed — mostly positive': 0.24, 'Mixed — mostly negative': 0.30, 'Mostly worse': 0.36 },
    'DM-F': { 'Left-center establishment': 0.02, 'Rigorous + skeptical': 0.01, 'Mixed + social media': 0.09, 'Local + casual': 0.12, 'Balanced (both sides)': 0.12, 'Right + alternative': 0.22, 'Conservative + faith': 0.15, 'Far-right + talk radio': 0.27 },
    'REP-C': { 'Northeast': 0.12, 'Midwest': 0.24, 'South': 0.42, 'West': 0.22 },
  },
  'indifferent-skeptics': {
    'DM-A': { 'Progressive': 0.10, 'Lean Left': 0.14, 'Moderate': 0.26, 'Lean Right': 0.16, 'Conservative': 0.14, 'Apolitical': 0.20 },
    'REP-A': { '18–29': 0.28, '30–44': 0.26, '45–59': 0.22, '60–74': 0.16, '75+': 0.08 },
    'REP-E': { 'Less than HS': 0.10, 'HS diploma': 0.24, 'Some college': 0.34, "Bachelor's": 0.22, 'Graduate degree': 0.10 },
    'REP-D': { 'White': 0.54, 'Black': 0.14, 'Hispanic': 0.16, 'Asian': 0.06, 'Native American': 0.02, 'Multiracial': 0.06, 'Other / Prefer not': 0.02 },
    'REP-B': { 'Man': 0.50, 'Woman': 0.46, 'Non-binary / Other': 0.04, 'Prefer not to say': 0.00 },
    'DM-B': { 'Never attended': 0.22, 'No debt incurred': 0.26, 'Debt paid off': 0.12, 'Under $25k remaining': 0.18, '$25k–$75k remaining': 0.14, '$75k+ remaining': 0.08 },
    'DM-C': { 'Parent(s) attended college': 0.60, 'First in family': 0.40 },
    'DM-E': { 'Mostly better': 0.16, 'Mixed — mostly positive': 0.30, 'Mixed — mostly negative': 0.34, 'Mostly worse': 0.20 },
    'DM-F': { 'Left-center establishment': 0.08, 'Rigorous + skeptical': 0.05, 'Mixed + social media': 0.20, 'Local + casual': 0.24, 'Balanced (both sides)': 0.14, 'Right + alternative': 0.14, 'Conservative + faith': 0.09, 'Far-right + talk radio': 0.06 },
    'REP-C': { 'Northeast': 0.18, 'Midwest': 0.22, 'South': 0.36, 'West': 0.24 },
  },
}
