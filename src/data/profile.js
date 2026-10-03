// All biographical statements are grounded in the supplied resume.
export const profile = {
  name: 'Kinshuk Goel',
  email: 'kinshuk09@gmail.com',
  location: 'Noida, India',
  linkedin: 'https://www.linkedin.com/in/kinshuk-goel-654a2544/',
  resume: '/Kinshuk_Goel_Resume.pdf',
  role: 'Marketing Technology Consultant',
};
export const navigation = [
  ['home', 'Home'],
  ['expertise', 'Expertise'],
  ['experience', 'Experience'],
  ['architecture', 'Architecture'],
  ['certifications', 'Certifications'],
  ['contact', 'Contact'],
];
export const expertise = [
  {
    id: 'platforms',
    icon: 'Layers3',
    title: 'Marketing platforms',
    subtitle: 'The platforms behind the experience.',
    tags: ['Adobe Campaign Classic', 'Adobe Journey Optimizer', 'Braze', 'Iterable'],
    description:
      'Enterprise Adobe Campaign implementation, AJO pilot collaboration, and hands-on Braze and Iterable platform evaluation.',
  },
  {
    id: 'activation',
    icon: 'Workflow',
    title: 'Customer activation',
    subtitle: 'Relevant journeys. Connected channels.',
    tags: [
      'Audience Segmentation',
      'Journey Orchestration',
      'Braze Canvas',
      'Real-Time Triggers',
      'Email',
      'SMS',
      'Push Notifications',
    ],
    description:
      'Translate marketing use cases into audience selection, channel routing, journey decisions and event-driven activation.',
  },
  {
    id: 'integration',
    icon: 'Network',
    title: 'Data & integration',
    subtitle: 'Make customer data actionable.',
    tags: [
      'Braze Cloud Data Ingestion',
      'Hightouch',
      'Iterable Smart Ingest',
      'Iterable Data Sync',
      'Braze Currents',
      'Microsoft Fabric',
      'Databricks',
      'Amazon S3',
      'REST APIs',
      'Webhooks',
    ],
    description:
      'Map customer attributes and behavioral events, configure ingestion, and connect engagement data to downstream reporting.',
  },
  {
    id: 'engineering',
    icon: 'Code2',
    title: 'Engineering & infrastructure',
    subtitle: 'Build it. Connect it. Keep it running.',
    tags: [
      'JavaScript',
      'SQL',
      'Shell scripting',
      'HTML/CSS',
      'AWS',
      'Linux',
      'On-premises ACC administration',
      'Troubleshooting',
      'Performance tuning',
      'Mobile SDK integration',
      'Event tracking',
    ],
    description:
      'Combine implementation with server administration, secure connectivity, debugging and platform performance management.',
  },
];
export const experiences = [
  {
    id: 'wipro',
    company: 'Wipro',
    monogram: 'W',
    role: 'Lead Consultant – Marketing Technology',
    date: 'December 2025 – Present',
    period: '2025 — NOW',
    context: 'Client: Lebara',
    theme: 'Marketing platform transformation',
    intro:
      'Connecting enterprise customer data to platform evaluation, multichannel journeys and real-time activation.',
    bullets: [
      'Manage on-premises Adobe Campaign Classic configuration, troubleshooting and performance with infrastructure teams.',
      'Design Iterable journeys and Braze Canvases for platform evaluation, including segmentation, email, SMS, push and real-time triggers.',
      'Map customer attributes, consent and behavioral events; configure Braze CDI and Hightouch-powered Iterable Smart Ingest using Microsoft Fabric and Databricks source data.',
      'Partner with mobile teams on SDK integration, push enablement and engagement event tracking; configure Iterable Data Sync and Braze Currents exports for reporting.',
      'Validate APIs and webhooks, including asynchronous SMS callbacks, retries and timeouts; present PoC results, constraints and dependencies to architects and stakeholders.',
    ],
    tags: [
      'Adobe Campaign Classic',
      'Braze',
      'Iterable',
      'Hightouch',
      'Microsoft Fabric',
      'Databricks',
      'APIs',
      'Webhooks',
      'SDK Integration',
      'Data Activation',
    ],
  },
  {
    id: 'adobe',
    company: 'Adobe',
    monogram: 'A',
    role: 'Senior Consultant',
    date: 'April 2020 – December 2025',
    period: '2020 — 2025',
    context: 'Noida, India',
    theme: 'Enterprise marketing technology',
    intro:
      'From solution design to implementation: turning enterprise marketing requirements into connected Adobe Campaign experiences.',
    bullets: [
      'Led enterprise Adobe Campaign Classic solution design and implementation across workflows, delivery configurations and integrations.',
      'Spent more than one year on the Adobe Journey Optimizer pilot team, collaborating with clients and engineering on journeys, integrations and product feedback.',
      'Integrated CRM systems and data warehouses for targeting and activation, designed custom channels including WhatsApp, and managed mobile SDK integrations.',
      'Supported AWS VPN onboarding and optimized Adobe Campaign instances on AWS; advised clients on implementation, deliverability and troubleshooting.',
    ],
    tags: [
      'Adobe Campaign Classic',
      'Adobe Journey Optimizer',
      'Solution Architecture',
      'AWS',
      'CRM / Data Warehouse',
      'WhatsApp',
      'Mobile SDK',
      'Campaign Implementation',
    ],
  },
  {
    id: 'taboola',
    company: 'Taboola',
    monogram: 't',
    role: 'Publisher Engineer',
    date: 'May 2019 – April 2020',
    period: '2019 — 2020',
    context: 'Gurgaon, India',
    theme: 'Web integration & advertising technology',
    intro: 'Bringing advertising and content recommendation technology into publisher websites.',
    bullets: [
      'Partnered with publishers to implement Taboola website integrations.',
      'Troubleshot UI and recommendation issues and shared technical feedback with engineering teams to support product improvements.',
    ],
    tags: [
      'Website Integration',
      'Technical Troubleshooting',
      'Advertising Technology',
      'Engineering Collaboration',
    ],
  },
  {
    id: 'genpact',
    company: 'Genpact Headstrong',
    fullCompany: 'Genpact Headstrong Capital Markets',
    monogram: 'G',
    role: 'Consultant',
    date: 'July 2015 – May 2019',
    period: '2015 — 2019',
    context: 'Client: Crédit Agricole CIB',
    theme: 'Enterprise application consulting',
    intro:
      'A foundation in enterprise systems, investment banking applications and close client collaboration.',
    bullets: [
      'Served as technical consultant for Crédit Agricole CIB, supporting investment banking back-office applications.',
      'Acted as subject matter expert for a confirmation-matching application supporting trade settlements.',
      'Collaborated on-site with business users at the client’s Paris headquarters to gather requirements and improve workflows.',
    ],
    tags: [
      'Enterprise Applications',
      'Confirmation Matching',
      'Requirements Gathering',
      'Client Collaboration',
      'Paris On-site',
    ],
  },
];
export const certifications = [
  {
    issuer: 'Adobe',
    level: 'Certified Master',
    title: 'Adobe Campaign Classic Architect',
    icon: 'Fingerprint',
  },
  {
    issuer: 'Adobe',
    level: 'Certified Expert',
    title: 'Adobe Campaign Classic Developer',
    icon: 'Code2',
  },
  {
    issuer: 'Adobe',
    level: 'Certified Expert',
    title: 'Adobe Campaign Classic Business Practitioner',
    icon: 'Workflow',
  },
  { issuer: 'AWS', level: 'Certified', title: 'Cloud Practitioner', icon: 'Cloud' },
];
export const solutions = [
  {
    title: 'Customer data to marketing activation',
    icon: 'Database',
    text: 'Turn source data into usable audiences.',
    detail:
      'Define customer attributes, consent and behavioral events with business and data teams. Map and synchronize that information into engagement platforms for segmentation.',
    tags: ['Data mapping', 'CDI / Smart Ingest', 'Segmentation'],
  },
  {
    title: 'Journey & campaign orchestration',
    icon: 'Route',
    text: 'Connect each event to a relevant next step.',
    detail:
      'Translate marketing requirements into audiences, channel routing and journey logic. Design activation across email, SMS and push, including real-time customer events.',
    tags: ['Journey logic', 'Real-time triggers', 'Multichannel'],
  },
  {
    title: 'MarTech platform integration',
    icon: 'Cable',
    text: 'Make platforms work together.',
    detail:
      'Connect systems through REST APIs, webhooks and mobile SDKs. Validate event tracking and asynchronous SMS callbacks, including retries and timeout behavior.',
    tags: ['APIs & webhooks', 'SDKs', 'Async callbacks'],
  },
  {
    title: 'Platform evaluation & migration',
    icon: 'ScanLine',
    text: 'Make architecture decisions with evidence.',
    detail:
      'Test platform capabilities against business use cases, identify data dependencies, and communicate PoC findings, integration constraints and migration considerations to stakeholders.',
    tags: ['Platform evaluation', 'Proof of concept', 'Migration planning'],
  },
];
