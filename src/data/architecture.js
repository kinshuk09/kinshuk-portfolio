// Illustrative patterns, not claims of a single client deployment.
export const lifecycle = [
  {
    id: 'sources',
    title: 'Data sources',
    icon: 'Database',
    short: 'Where the context begins.',
    technologies: ['Microsoft Fabric', 'Databricks', 'CRM / Data Warehouse', 'Amazon S3'],
    detail:
      'Customer profiles, consent and behavioral information begin in enterprise data systems. The first step is understanding the source and the attributes a campaign actually needs.',
    focus: 'Customer attributes · Source mapping · Consent',
  },
  {
    id: 'integration',
    title: 'Activation & integration',
    icon: 'Network',
    short: 'Connect data to action.',
    technologies: ['Braze CDI', 'Hightouch', 'Iterable Smart Ingest', 'REST APIs', 'Webhooks'],
    detail:
      'Map and synchronize source data into engagement profiles. Select ingestion and integration patterns around platform capabilities, data dependencies and activation requirements.',
    focus: 'Data ingestion · Attribute mapping · API contracts',
  },
  {
    id: 'platforms',
    title: 'Marketing platforms',
    icon: 'Layers3',
    short: 'The engines of engagement.',
    technologies: ['Adobe Campaign Classic', 'Adobe Journey Optimizer', 'Braze', 'Iterable'],
    detail:
      'Translate the business use case into platform-specific workflows and configurations, with hands-on implementation, pilot work and platform evaluation experience.',
    focus: 'Platform configuration · Workflows · Evaluation',
  },
  {
    id: 'orchestration',
    title: 'Orchestration',
    icon: 'Workflow',
    short: 'The right next step.',
    technologies: ['Audience Segmentation', 'Real-Time Events', 'Journey Logic', 'Personalization'],
    detail:
      'Use customer attributes and incoming events to define audiences, journey decisions and channel routing. Bring marketing requirements into executable campaign logic.',
    focus: 'Audience rules · Event triggers · Journey decisions',
  },
  {
    id: 'channels',
    title: 'Channels',
    icon: 'Send',
    short: 'Meet the customer.',
    technologies: ['Email', 'SMS', 'Push', 'Mobile'],
    detail:
      'Connect journey decisions to customer touchpoints. Coordinate channel activation and mobile SDK integration, and validate asynchronous SMS callbacks, retries and timeouts.',
    focus: 'Multichannel activation · SDK integration · Callbacks',
  },
  {
    id: 'measurement',
    title: 'Measurement',
    icon: 'BarChart3',
    short: 'Bring the signals back.',
    technologies: [
      'Braze Currents',
      'Iterable Data Sync',
      'Event Tracking',
      'Engagement Reporting',
    ],
    detail:
      'Export engagement signals for downstream reporting. Check that available events cover business reporting requirements, including mobile engagement, opens and clicks.',
    focus: 'Engagement events · Data exports · Reporting coverage',
  },
];
export const scenarios = [
  {
    id: 'customer-data',
    title: 'Customer Data Integration',
    short: 'Data integration',
    icon: 'Database',
    headline: 'Turn enterprise data into usable audiences.',
    description:
      'Map source attributes and consent into customer profiles, then use synchronized data to define activation-ready segments.',
    nodes: [
      ['Enterprise data', 'Fabric / Databricks', 'Database'],
      ['Ingestion', 'CDI / Smart Ingest', 'Network'],
      ['Customer profile', 'Braze / Iterable', 'Users'],
      ['Audience rules', 'Segmentation', 'GitBranch'],
      ['Journey entry', 'Campaign activation', 'Workflow'],
    ],
    considerations: [
      [
        'Source mapping',
        'Agree on customer attributes, consent fields and behavioral events with data and business teams.',
      ],
      [
        'Platform dependencies',
        'Evaluate ingestion capabilities and source requirements before choosing a synchronization pattern.',
      ],
      [
        'Audience readiness',
        'Check that mapped attributes support the segmentation and activation use case.',
      ],
    ],
    note: 'CDI → Braze and Hightouch-powered Smart Ingest → Iterable are alternative ingestion routes.',
  },
  {
    id: 'real-time',
    title: 'Real-Time Journey',
    short: 'Real-time journey',
    icon: 'Zap',
    headline: 'Connect the event to the next experience.',
    description:
      'A customer event becomes a journey decision, a channel action and a measurable engagement signal.',
    nodes: [
      ['Customer event', 'Behavioral signal', 'Zap'],
      ['API / data platform', 'Event ingestion', 'Network'],
      ['Braze / Iterable', 'Engagement platform', 'Layers3'],
      ['Journey decision', 'Audience + logic', 'GitBranch'],
      ['Email / SMS / Push', 'Channel activation', 'Send'],
      ['Engagement event', 'Opens / clicks', 'Radio'],
      ['Currents / Data Sync', 'Event export', 'Database'],
      ['Analytics', 'Downstream reporting', 'BarChart3'],
    ],
    considerations: [
      [
        'Event context',
        'Identify which customer attributes and behavioral events are needed to drive the journey.',
      ],
      [
        'Journey behavior',
        'Translate the use case into audience rules, routing and channel activation.',
      ],
      ['Measurement', 'Assess event coverage against the business reporting requirements.'],
    ],
    note: 'Braze with Currents, or Iterable with Data Sync: shown as alternative platform patterns.',
  },
  {
    id: 'sms',
    title: 'SMS Integration',
    short: 'SMS integration',
    icon: 'Mail',
    headline: 'Design for what happens after “send”.',
    description:
      'Asynchronous messaging needs a clear path from journey activation to provider response and delivery feedback.',
    nodes: [
      ['Journey trigger', 'Campaign decision', 'Workflow'],
      ['REST API / webhook', 'Outbound request', 'Braces'],
      ['SMS channel', 'Message delivery', 'Mail'],
      ['Async callback', 'Delivery feedback', 'Radio'],
      ['Platform update', 'Status / event', 'Layers3'],
      ['Reporting', 'Engagement data', 'BarChart3'],
    ],
    considerations: [
      [
        'Integration contract',
        'Validate request and callback behavior against the platform’s integration capabilities.',
      ],
      ['Failure handling', 'Test retry and timeout behavior as part of the proof of concept.'],
      [
        'Stakeholder clarity',
        'Communicate constraints and dependencies before implementation decisions.',
      ],
    ],
    note: 'A simplified integration pattern reflecting REST API and asynchronous SMS callback validation.',
  },
  {
    id: 'push',
    title: 'Mobile Push',
    short: 'Mobile push',
    icon: 'Smartphone',
    headline: 'Bridge the app and the customer journey.',
    description:
      'Mobile SDK integration connects app events, push activation and engagement tracking with the marketing platform.',
    nodes: [
      ['Mobile application', 'Customer interaction', 'Smartphone'],
      ['Mobile SDK', 'Event tracking', 'Code2'],
      ['Engagement platform', 'Customer profile', 'Layers3'],
      ['Journey logic', 'Push activation', 'Workflow'],
      ['Push notification', 'Mobile channel', 'Send'],
      ['Engagement event', 'Opens / clicks', 'Radio'],
    ],
    considerations: [
      [
        'App collaboration',
        'Work with mobile application teams on SDK integration and push enablement.',
      ],
      ['Event requirements', 'Define and validate the engagement events needed for the use case.'],
      ['Journey connection', 'Connect platform audiences and triggers to the mobile experience.'],
    ],
    note: 'An illustrative mobile integration flow based on SDK collaboration and push enablement experience.',
  },
  {
    id: 'reporting',
    title: 'Reporting Pipeline',
    short: 'Reporting pipeline',
    icon: 'BarChart3',
    headline: 'Close the loop with engagement data.',
    description:
      'Bring platform engagement events into downstream reporting and evaluate whether the available signals answer business questions.',
    nodes: [
      ['Channel engagement', 'Email / SMS / Push', 'Send'],
      ['Platform events', 'Engagement tracking', 'Radio'],
      ['Currents / Data Sync', 'Data export', 'Network'],
      ['Reporting destination', 'Downstream data', 'Database'],
      ['Engagement reporting', 'Business requirements', 'BarChart3'],
    ],
    considerations: [
      ['Event coverage', 'Compare available platform events with business reporting needs.'],
      [
        'Export configuration',
        'Configure Braze Currents or Iterable Data Sync for downstream reporting.',
      ],
      ['Data interpretation', 'Map exported signals to the customer engagement context.'],
    ],
    note: 'Currents and Data Sync are platform-specific export alternatives; no particular client analytics stack is implied.',
  },
];
