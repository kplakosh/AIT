/**
 * Site content - locked verbatim from http://www.aitechinc.com/
 * Phase 0 content manifest. Do not add sections beyond the current site.
 */

export const siteConfig = {
  name: 'Advanced Instrument Technologies, Inc.',
  shortName: 'AIT',
  tagline: 'Test Engineering Services',
  copyright: 'Copyright 2026 Advanced Instrument Technologies, Inc.',
  url: 'https://www.aitechinc.com',
} as const

export const colors = {
  teal: '#49888a',
  deepTeal: '#234958',
  navyPlum: '#26274e',
  mutedRose: '#7f456d',
  warmGold: '#aa9047',
} as const

/** Internal app routes - single source of truth for links and redirects. */
export const routes = {
  home: '/',
  about: '/about',
  people: '/people',
  services: '/services',
  industries: '/industries',
  expertise: '/expertise',
  careers: '/careers',
  sustainability: '/sustainability',
  contact: '/contact',
} as const

export type NavItemLink = {
  type: 'link'
  label: string
  path: string
}

export type NavItemGroup = {
  type: 'group'
  label: string
  items: readonly { label: string; path: string }[]
}

export type NavItem = NavItemLink | NavItemGroup

export const navItems: readonly NavItem[] = [
  {
    type: 'group',
    label: 'About',
    items: [
      { label: 'About', path: routes.about },
      { label: 'Our People', path: routes.people },
      { label: 'Sustainability', path: routes.sustainability },
    ],
  },
  {
    type: 'group',
    label: 'Services',
    items: [
      { label: 'Services', path: routes.services },
      { label: 'Industries', path: routes.industries },
      { label: 'Expertise', path: routes.expertise },
    ],
  },
  { type: 'link', label: 'Careers', path: routes.careers },
  { type: 'link', label: 'Contact', path: routes.contact },
]

export const pageMeta = {
  home: {
    title: 'Advanced Instrument Technologies | Test Engineering Services',
    description:
      'LabVIEW and TestStand test engineering and integration services. Turnkey solutions and development.',
    path: '/',
    ogImage: '/images/logo.png',
  },
  about: {
    title: 'About Us | Advanced Instrument Technologies',
    description:
      'AIT vision, mission, and values. Test engineering partner in Cumming, GA. NI Alliance Partner serving customers globally.',
    path: '/about',
    ogImage: '/images/logo.png',
  },
  services: {
    title: 'Services | Advanced Instrument Technologies',
    description:
      'LabVIEW, TestStand, hardware, and turnkey test engineering from concept through deployment and support.',
    path: '/services',
    ogImage: '/images/logo.png',
  },
  industries: {
    title: 'Industries We Serve | Advanced Instrument Technologies',
    description:
      'Test engineering for semiconductor, automotive, aerospace, industrial, materials, and energy sectors.',
    path: '/industries',
    ogImage: '/images/logo.png',
  },
  expertise: {
    title: 'Technical Expertise | Advanced Instrument Technologies',
    description:
      'LabVIEW, TestStand, production test, hardware integration, V&V, and NI Alliance engineering specialization.',
    path: '/expertise',
    ogImage: '/images/logo.png',
  },
  contact: {
    title: 'Contact | Advanced Instrument Technologies',
    description: 'Contact AIT in Cumming, GA for test engineering needs.',
    path: '/contact',
    ogImage: '/images/logo.png',
  },
  careers: {
    title: 'Careers | Advanced Instrument Technologies',
    description:
      'Join AIT in Cumming, GA. View open positions in test engineering, LabVIEW, and TestStand development.',
    path: '/careers',
    ogImage: '/images/logo.png',
  },
  people: {
    title: 'Our People | Advanced Instrument Technologies',
    description:
      'Meet the culture behind AIT: collaborative test engineering teams, professional growth, and values in practice.',
    path: '/people',
    ogImage: '/images/logo.png',
  },
  sustainability: {
    title: 'Sustainability | Advanced Instrument Technologies',
    description:
      'AIT commitment to responsible engineering: environment, people, community, and governance in test and measurement.',
    path: '/sustainability',
    ogImage: '/images/logo.png',
  },
} as const

export const homeContent = {
  intro:
    'Advanced Instrument Technologies, Inc. (AIT) is an engineering services company providing custom and turnkey solutions to meet customers\u2019 test engineering challenges. AIT provides customers with services ranging from engineering support to complete solutions. AIT serves customers in numerous industries, covering research and development, manufacturing, and quality assurance testing.',
  trustedPartner: {
    eyebrow: 'Trusted Engineering Partner',
    title: 'Engineering Expertise. Practical Solutions.',
    body: 'For more than two decades, AIT has partnered with engineering teams to deliver LabVIEW, TestStand, and integrated hardware solutions that perform in real production environments. As a National Instruments Alliance Partner, we combine certified platform expertise with a practical, hands-on approach from requirements through deployment and support.',
    highlights: [
      { label: '20+ Years of Experience' },
      { label: 'NI Alliance Partner' },
      { label: 'Custom Test & Automation Solutions' },
      { label: 'From Concept to Deployment' },
    ],
  },
  coreServices: {
    heading: 'Core Services',
    services: [
      {
        id: 'automated-test-systems',
        title: 'Automated Test Systems',
        description: 'Custom test platforms for validation and production',
      },
      {
        id: 'labview-development',
        title: 'LabVIEW Development',
        description: 'Custom software for measurement and automation',
      },
      {
        id: 'teststand-solutions',
        title: 'TestStand Solutions',
        description: 'Scalable production test architectures',
      },
      {
        id: 'hardware-integration',
        title: 'Hardware Integration',
        description: 'Instruments, DAQ, controls, and custom electronics',
      },
      {
        id: 'engineering-consulting',
        title: 'Engineering Consulting',
        description: 'Technical expertise for complex projects',
      },
    ],
    ctaLabel: 'View All Services',
  },
  industriesWeServe: {
    eyebrow: 'Industries We Serve',
    title: 'Supporting Diverse Engineering Challenges',
    body: 'AIT brings test engineering experience across sectors where validation, quality, and reliability matter. Whatever your industry, we partner with teams solving problems similar to yours.',
    industries: [
      { id: 'aerospace-defense', label: 'Aerospace & Defense' },
      { id: 'medical-devices', label: 'Medical Devices' },
      { id: 'manufacturing', label: 'Manufacturing' },
      { id: 'industrial-automation', label: 'Industrial Automation' },
      { id: 'research-development', label: 'Research & Development' },
      { id: 'telecommunications', label: 'Telecommunications' },
    ],
    ctaLabel: 'Explore Industries We Serve',
  },
  whyChooseAit: {
    heading: 'Why Engineering Teams Choose AIT',
    pillars: [
      {
        title: 'Technical Depth',
        description: 'Experienced engineers specializing in test and measurement.',
      },
      {
        title: 'Turnkey Delivery',
        description: 'From requirements to deployment.',
      },
      {
        title: 'Scalable Solutions',
        description: 'Built for growth and long-term maintainability.',
      },
      {
        title: 'Dedicated Support',
        description: 'Partnership beyond project completion.',
      },
    ],
  },
  solutionsWeDeliver: {
    heading: 'Solutions We Deliver',
    intro:
      'AIT develops custom solutions that help engineering and manufacturing teams improve testing efficiency, measurement accuracy, and product quality.',
    solutions: [
      'Automated Test Systems',
      'Production Test Stations',
      'Data Acquisition Systems',
      'Measurement & Validation Platforms',
      'Instrument Control Applications',
      'Manufacturing Test Solutions',
      'Custom Hardware & Software Integration',
    ],
    closing:
      'Every solution is designed around the unique technical and operational requirements of the customer.',
    solutionsListHeading: 'Solution capabilities',
  },
  finalCta: {
    headline: 'Ready to Solve Your Next Test Engineering Challenge?',
    body: 'Whether you need a custom test application, hardware integration, or a complete turnkey system, our engineering team is ready to help.',
    primaryLabel: 'Schedule a Consultation',
    secondaryLabel: 'Contact Us',
  },
  location:
    'AIT is located in Cumming, GA, a northern suburb of Atlanta. But, AIT\u2019s customers can be found around the globe. AIT has served customers in numerous industries, covering research and development, manufacturing, and quality assurance testing.',
  niAlliance:
    'AIT is a National Instruments Certified Alliance Partner, with NI certified developers on staff. Our customers can be confident that AIT will provide the quality and knowledge necessary for their demanding requirements.',
  niBadge: {
    src: '/images/ni-alliance-partner.png',
    alt: 'NI Partner System Integration',
    width: 500,
    height: 308,
  },
} as const

export const aboutContent = {
  pageSubtitle:
    'Engineering services and turnkey test solutions for research, manufacturing, and quality assurance.',
  vision: {
    title: 'Vision',
    body: 'To help every customer bring reliable products to market through test and measurement systems that perform with confidence in the real world.',
  },
  mission: {
    title: 'Mission',
    body: 'To be our customers\u2019 trusted test engineering partner, delivering LabVIEW, TestStand, hardware integration, and turnkey solutions from concept through deployment, with the quality and support their programs demand.',
  },
  purpose: {
    title: 'Purpose',
    body: 'We exist to turn complex test requirements into systems that deliver accurate data, reduce risk, and support long-term manufacturing and quality goals.',
  },
  guidesHeading: 'What Guides Us',
  guidesSubtitle:
    'Our vision, mission, and purpose shape how we partner with customers on every test engineering challenge.',
  valuesHeading: 'Our Values',
  values: [
    {
      title: 'Integrity',
      description:
        'Honest communication, accountable delivery, and engineering practices our customers can trust.',
    },
    {
      title: 'Customer Commitment',
      description:
        'We measure success by our customers\u2019 program outcomes, from requirements through deployment and support.',
    },
    {
      title: 'Technical Ingenuity',
      description:
        'Practical problem-solving with LabVIEW, TestStand, and integrated hardware, turning complex requirements into maintainable systems.',
    },
    {
      title: 'Quality & Reliability',
      description:
        'Systems built for accurate data, repeatable results, and long-term operation in real production environments.',
    },
    {
      title: 'Partnership',
      description:
        'We work as an extension of our customers\u2019 teams, collaborating openly from concept through validation.',
    },
  ],
  howItStarted: {
    title: 'How It Started',
    body: 'Advanced Instrument Technologies was founded to meet a practical need: organizations required test and measurement systems that worked reliably beyond the lab, in manufacturing, quality assurance, and production environments. From our base in Cumming, Georgia, AIT grew by partnering closely with engineering teams, combining LabVIEW and TestStand expertise with hardware integration and turnkey delivery. After more than two decades of project work across industries, we continue to build on that same foundation, solving real-world test challenges for customers around the world.',
  },
  whoWeAre: {
    subtitle: 'Engineering Expertise Backed by Real-World Execution',
    paragraphs: [
      'For more than two decades, AIT has helped organizations solve complex test and measurement challenges across product development, validation, and manufacturing environments.',
      'Our team combines software engineering, hardware integration, instrumentation expertise, and systems engineering to deliver solutions that work in the real world, outside the lab.',
      'As an NI Alliance Partner, we leverage industry-leading technologies while remaining focused on what matters most: creating reliable, maintainable systems that provide accurate data and support long-term business goals.',
      'We work as an extension of our customers\u2019 engineering teams, bringing technical expertise, practical problem-solving, and a commitment to project success from concept through deployment.',
    ],
  },
  closingCta: {
    headline: 'Your Vision is our Mission',
    subline:
      'Partner with AIT for LabVIEW, TestStand, hardware integration, and turnkey test solutions from concept through deployment.',
  },
  reachHeading: 'Reach',
  location: homeContent.location,
  niAlliance: homeContent.niAlliance,
  niBadge: homeContent.niBadge,
} as const

export const servicesContent = {
  pageSubtitle:
    'Your trusted test engineering partner from concept through deployment, with the quality and support your programs demand.',
  lifecycleHeading: 'Partner at Every Phase',
  lifecycleIntro:
    'AIT supports test programs across the full engineering lifecycle. Whether you need targeted expertise or a turnkey solution, we meet you where your program is today.',
  lifecyclePhases: [
    {
      title: 'Concept',
      body: 'Define requirements, test strategy, and feasibility for LabVIEW, TestStand, and integrated hardware architectures.',
    },
    {
      title: 'Build',
      body: 'Develop applications, design fixtures, integrate instrumentation, and verify systems in lab environments.',
    },
    {
      title: 'Deploy',
      body: 'Deliver onsite installation, operator interfaces, validation, and handoff to production and quality teams.',
    },
    {
      title: 'Support',
      body: 'Provide continued engineering support, updates, and optimization as products evolve and volumes grow.',
    },
  ],
  industriesTeaser:
    'AIT serves customers across semiconductor, automotive, aerospace, industrial, materials, and energy sectors.',
  industriesLinkLabel: 'Explore industries we serve',
  sections: [
    {
      id: 'labview-teststand',
      title: 'LabVIEW and TestStand',
      intro: 'AIT helps its customers...',
      bullets: [
        'turn napkin sketches into reality.',
        'develop integrated testing solutions.',
        'determine testing requirements.',
        'migrate from R&D and test code to production and customer quality code.',
        'lead/assist its engineers in development efforts.',
      ],
    },
    {
      id: 'hardware',
      title: 'Hardware',
      intro: 'AIT helps its customers...',
      bullets: [
        'specify proper hardware for testing services.',
        'build complete test stations.',
        'design custom hardware for their testing needs.',
      ],
    },
    {
      id: 'total-solutions',
      title: 'Total Solutions',
      body: 'AIT provides its customers turnkey solutions for their testing needs. AIT can assist with test requirements, then develop those requirements into a hardware and software system. AIT can provide onsite installation and setup, verification and validation services, and continued support.',
    },
    {
      id: 'how-can-we-help',
      title: 'How can we help?',
      body: 'Whether you need some extra help, or need the total solution, AIT can help. AIT solutions have tested dirt, wood, soda, radios, and Class II medical devices, among others. We can provide R&D support, QA support, and manufacturing support. AIT is dedicated to making your project succeed.',
    },
    {
      id: 'let-us-help-you',
      title: 'Let us help you',
      body: 'Please contact us and tell us about your opportunity.',
    },
  ],
} as const

export const contactContent = {
  welcome:
    'We welcome you to contact us for further information or to discuss your test engineering needs.',
  company: 'Advanced Instrument Technologies, Inc.',
  address: {
    street: '5845 Steeplechase Blvd.',
    suite: 'Suite H',
    city: 'Cumming, GA 30040',
  },
  phone: '770-672-0543',
  email: 'info@aitechinc.com',
  map: {
    embedUrl:
      'https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=5845+Steeplechase+Boulevard,+Cumming,+GA&aq=0&oq=5845+Steeplechase+Blvd.,+Cumming&sll=37.0625,-95.677068&sspn=67.42243,93.251953&t=m&ie=UTF8&hq=&hnear=5845+Steeplechase+Blvd,+Cumming,+Georgia+30040&z=14&iwloc=A&ll=34.169683,-84.182364&output=embed&iwloc=near',
    viewLargerUrl:
      'https://maps.google.com/maps?f=q&source=embed&hl=en&geocode=&q=5845+Steeplechase+Boulevard,+Cumming,+GA&aq=0&oq=5845+Steeplechase+Blvd.,+Cumming&sll=37.0625,-95.677068&sspn=67.42243,93.251953&t=m&ie=UTF8&hq=&hnear=5845+Steeplechase+Blvd,+Cumming,+Georgia+30040&z=14&iwloc=A&ll=34.169683,-84.182364',
    title: 'Advanced Instrument Technologies office location in Cumming, GA',
  },
} as const

export type JobOpening = {
  id: string
  title: string
  location: string
  employmentType: string
  status: 'open' | 'closed'
  summary: string
  responsibilities: readonly string[]
  qualifications: readonly string[]
  preferred?: readonly string[]
}

export const careersContent = {
  pageSubtitle:
    'Build test and measurement systems that work in the real world, from R&D through production.',
  cultureHeading: 'Why work at AIT',
  cultureBody:
    'At AIT, we believe great careers are built through challenging work, continuous learning, and opportunities to make a real impact. Our team members are encouraged to expand their skills, take on new responsibilities, and grow alongside experienced professionals. We foster a collaborative environment where innovation is valued, achievements are recognized, and professional development is part of everyday work.',
  openingsHeading: 'Open positions',
  noOpeningsMessage: 'There are no open positions at this time. Check back soon or contact us to express your interest.',
  applyHeading: 'Apply for this position',
  applySuccessMessage:
    'Thank you for your application. We have received your submission and will be in touch if your qualifications are a match for this role.',
  applyEmailSubject: 'Job Application',
  openings: [
    {
      id: 'test-engineer-labview-teststand',
      title: 'Test Engineer, LabVIEW & TestStand',
      location: 'Cumming, GA (on-site)',
      employmentType: 'Full-time',
      status: 'open',
      summary:
        'AIT is seeking a test engineer to develop and maintain LabVIEW and TestStand applications for customer test systems, from requirements through deployment and production support.',
      responsibilities: [
        'Develop, debug, and maintain LabVIEW and TestStand test sequences and operator interfaces',
        'Integrate instrumentation, motion, and custom hardware into automated test stations',
        'Support migration of test code from R&D environments to production-ready systems',
        'Participate in requirements review, verification, and validation activities',
        'Document test architectures, configurations, and deployment procedures for customers',
        'Collaborate with AIT engineers and customer teams on site and remotely as needed',
      ],
      qualifications: [
        'Bachelor\u2019s degree in engineering, computer science, or equivalent practical experience',
        'Hands-on experience with LabVIEW; TestStand experience strongly preferred',
        'Understanding of automated test concepts, data acquisition, and instrument control',
        'Ability to troubleshoot hardware/software integration issues in lab or production settings',
        'Strong communication skills and attention to detail',
        'Eligible to work in the United States',
      ],
      preferred: [
        'NI Certified LabVIEW Developer (CLD) or Certified TestStand Developer (CTD)',
        'Experience with PXI, SCPI instruments, or custom fixture design',
        'Familiarity with regulated or high-volume manufacturing test environments',
      ],
    },
  ] satisfies readonly JobOpening[],
  closingCta: {
    headline: 'Explore Life at AIT',
    subline: 'Meet the people behind our work and learn what guides our engineering partnerships.',
  },
} as const

export const sustainabilityContent = {
  pageSubtitle:
    'Responsible engineering practices that support our people, communities, and the environments where we work.',
  commitmentHeading: 'Our Commitment',
  commitmentBody:
    'Advanced Instrument Technologies is committed to conducting business with integrity and accountability. We recognize that sustainable practices extend beyond environmental stewardship to include how we support our employees, engage with our communities, and deliver reliable engineering outcomes for our customers.',
  pillarsHeading: 'Four Pillars',
  pillars: [
    {
      title: 'Environment',
      description:
        'We reduce waste in our engineering processes, design durable test systems built for long service life, and use resources responsibly in our facilities and project work.',
    },
    {
      title: 'Our People',
      description:
        'We invest in a safe, respectful workplace where engineers can grow their skills, pursue NI certifications, and build meaningful careers in test and measurement.',
    },
    {
      title: 'Community',
      description:
        'We support the communities where we live and work through local engagement, STEM outreach, and partnerships that strengthen the engineering workforce.',
    },
    {
      title: 'Governance',
      description:
        'We operate with transparency, ethical business practices, and a commitment to quality that earns the trust of customers and partners.',
    },
  ],
  qualityHeading: 'Quality & Engineering Integrity',
  qualityBody:
    'As a National Instruments Alliance Partner, AIT aligns sustainable engineering with rigorous quality practices. Reliable test systems reduce rework, support efficient manufacturing, and help customers bring products to market with confidence. Outcomes that benefit both business performance and responsible operations.',
  closingCta: {
    headline: 'Engineering with Purpose',
    subline: 'Learn how our people and culture drive the quality behind every AIT solution.',
  },
} as const

export type EmployeeSpotlight = {
  id: string
  name: string
  role: string
  quote: string
}

export const peopleContent = {
  pageSubtitle:
    'The engineers, problem-solvers, and collaborators who bring AIT\u2019s test solutions to life.',
  cultureHeading: 'Our Culture',
  cultureBody:
    'AIT is built on technical excellence and genuine partnership with customers and with each other. Our team thrives on challenging engineering problems, hands-on learning, and the satisfaction of seeing test systems perform reliably in real production environments.',
  howWeWorkHeading: 'How We Work',
  howWeWorkBody:
    'We collaborate closely across software, hardware, and systems engineering disciplines. Projects range from targeted engineering support to full turnkey test stations, and team members regularly work alongside customer engineers on site and remotely. Clear communication, practical problem-solving, and respect for every contributor are central to how we operate.',
  valuesInPracticeHeading: 'Values in Practice',
  valuesInPractice: [
    {
      title: 'Collaboration',
      description:
        'We share knowledge openly, support each other on complex integrations, and celebrate team wins alongside individual growth.',
    },
    {
      title: 'Continuous Learning',
      description:
        'NI certification paths, mentorship, and exposure to diverse industries keep our engineers at the forefront of test technology.',
    },
    {
      title: 'Accountability',
      description:
        'We take ownership of requirements, documentation, and delivery, because our customers depend on systems that work beyond the lab.',
    },
  ],
  growthHeading: 'Growth & Development',
  growthBody:
    'AIT encourages professional development through NI Alliance training, project diversity across industries, and opportunities to lead customer engagements from concept through deployment. Whether you are deepening LabVIEW expertise or expanding into hardware integration, we support career paths that match your ambitions.',
  spotlightsHeading: 'Team Voices',
  spotlightsNote:
    'Spotlight profiles and photography will be added as our team grows. The voices below reflect the culture our engineers experience every day.',
  spotlights: [
    {
      id: 'spotlight-engineering',
      name: 'Senior Test Engineer',
      role: 'LabVIEW & TestStand Development',
      quote:
        'What I value most is the variety: one month I\u2019m in the lab prototyping, the next I\u2019m on a production floor making sure a system runs flawlessly for the customer.',
    },
    {
      id: 'spotlight-integration',
      name: 'Hardware Integration Lead',
      role: 'Systems & Instrumentation',
      quote:
        'AIT gives you room to solve real problems. You are not just writing code. You are building something the customer will rely on for years.',
    },
    {
      id: 'spotlight-project',
      name: 'Project Engineer',
      role: 'Customer Programs',
      quote:
        'The team culture here is collaborative. When a customer has a tough deadline, everyone pitches in with the expertise they bring.',
    },
  ] satisfies readonly EmployeeSpotlight[],
  closingCta: {
    headline: 'Join Our Team',
    subline: 'Explore open positions and bring your test engineering skills to AIT.',
  },
} as const

export type IndustryVertical = {
  id: string
  title: string
  description: string | readonly string[]
  systems?: readonly string[]
  challenges: readonly string[]
  closing?: string
  image: {
    src?: string
    alt: string
  }
}

export const industriesContent = {
  pageSubtitle:
    'For more than two decades, AIT has supported engineering teams in demanding production and R&D environments. We describe our experience by industry vertical, using generic language only and without customer names on this site.',
  verticalsHeading: 'Industries We Serve',
  verticals: [
    {
      id: 'semiconductor-electronics',
      title: 'Semiconductor Equipment & Electronics Manufacturing',
      description: [
        'Modern semiconductor and electronics manufacturing depends on reliable test, measurement, and validation systems. AIT supports organizations developing and producing complex equipment, electronic assemblies, instrumentation, and manufacturing subsystems where accuracy, repeatability, and uptime are critical.',
        'Our experience spans engineering environments ranging from research and development through full-scale production, helping teams transition test processes from prototype validation to manufacturing deployment.',
      ],
      systems: [
        'Automated production test stations',
        'Electronic subsystem validation platforms',
        'Instrument control and data acquisition systems',
        'Manufacturing process monitoring solutions',
        'Hardware-in-the-loop and functional test systems',
        'Custom operator interfaces and reporting tools',
      ],
      challenges: [
        'Improving test repeatability and measurement consistency',
        'Increasing throughput while maintaining quality standards',
        'Integrating multiple instruments and hardware platforms',
        'Migrating development test processes into production environments',
        'Creating scalable software architectures for long-term maintainability',
      ],
      closing:
        'By combining software development, hardware integration, and systems engineering expertise, AIT helps manufacturers build robust testing environments that support product quality, operational efficiency, and continuous improvement.',
      image: {
        alt: 'Semiconductor equipment and electronics manufacturing test engineering',
      },
    },
    {
      id: 'automotive-transportation',
      title: 'Automotive & Transportation Systems',
      description:
        'Production and QA test for automotive subsystems, mobility products, thermal management, and power components.',
      challenges: [
        'End-of-line and functional test for complex assemblies',
        'Environmental and durability validation workflows',
        'Traceable data collection for quality programs',
      ],
      image: {
        alt: 'Automotive and transportation systems test engineering',
      },
    },
    {
      id: 'aerospace-defense',
      title: 'Aerospace & Defense',
      description:
        'Rugged, traceable test systems for defense integrators, aerospace suppliers, lasers, and RF/microwave components.',
      challenges: [
        'Documented V&V processes and configuration control',
        'RF, microwave, and precision measurement integration',
        'Systems built for long service life in demanding environments',
      ],
      image: {
        alt: 'Aerospace and defense test engineering',
      },
    },
    {
      id: 'industrial-manufacturing',
      title: 'Industrial Manufacturing & Equipment',
      description:
        'Turnkey and production test for industrial machinery, HVAC, pumps, building products, and commercial equipment.',
      challenges: [
        'Custom fixture design for large or complex products',
        'Operator-friendly interfaces for production staff',
        'Scaling test stations as product lines expand',
      ],
      image: {
        alt: 'Industrial manufacturing and equipment test engineering',
      },
    },
    {
      id: 'materials-chemicals',
      title: 'Materials, Chemicals & Process Industries',
      description:
        'Process monitoring, materials characterization, and QA systems for chemicals, polymers, pulp/cellulose, and specialty materials.',
      challenges: [
        'Sensor and instrumentation integration for process data',
        'Lab and production QA with consistent reporting',
        'Systems that adapt as formulations or specs change',
      ],
      image: {
        alt: 'Materials, chemicals, and process industries test engineering',
      },
    },
    {
      id: 'infrastructure-energy',
      title: 'Infrastructure, Energy & Critical Systems',
      description:
        'Instrumentation and test for utilities, geotechnical monitoring, geosynthetics labs, and critical power/thermal infrastructure.',
      challenges: [
        'Long-term monitoring and data acquisition architectures',
        'Field-ready and lab-based validation workflows',
        'Reliable systems for safety-critical infrastructure',
      ],
      image: {
        alt: 'Infrastructure, energy, and critical systems test engineering',
      },
    },
  ] satisfies readonly IndustryVertical[],
  closingCta: {
    headline: 'Discuss Your Industry Needs',
    subline: 'Tell us about your test challenges and we will help you scope the right engineering approach.',
  },
} as const

export type ExpertiseArea = {
  id: string
  title: string
  description: string
  highlights: readonly string[]
}

export const expertiseContent = {
  pageSubtitle:
    'Services describe what we deliver. Expertise describes how we specialize: the platforms, disciplines, and engineering practices that make complex test programs succeed.',
  areasHeading: 'Areas of Expertise',
  areas: [
    {
      id: 'labview-teststand',
      title: 'LabVIEW & TestStand Development',
      description:
        'Application and sequence development for automated test, data acquisition, and operator workflows using National Instruments platforms.',
      highlights: [
        'Modular architectures for maintainable codebases',
        'TestStand process models and deployment configurations',
        'Debugging and performance tuning in production environments',
      ],
    },
    {
      id: 'production-test-qa',
      title: 'Production Test & QA Systems',
      description:
        'Engineering focused on manufacturing throughput, repeatability, and quality data for high-volume and regulated production lines.',
      highlights: [
        'End-of-line and in-circuit test strategies',
        'Pass/fail reporting and manufacturing data integration',
        'Reducing cycle time without sacrificing measurement integrity',
      ],
    },
    {
      id: 'hardware-integration',
      title: 'Hardware Integration & Custom Fixtures',
      description:
        'Specification, design, and integration of instruments, motion, PXI, and custom hardware into complete test stations.',
      highlights: [
        'Instrument selection and SCPI/PXI control',
        'Custom fixture and interconnect design',
        'Lab-to-floor hardware reliability',
      ],
    },
    {
      id: 'requirements-vv',
      title: 'Requirements & V&V',
      description:
        'Structured requirements, verification planning, and validation support so test systems meet customer and regulatory expectations.',
      highlights: [
        'Requirements traceability from spec to test coverage',
        'Verification protocols and documented results',
        'Support for customer and third-party audits',
      ],
    },
    {
      id: 'ni-alliance',
      title: 'NI Platform & Alliance Partner',
      description:
        'Certified NI Alliance Partner expertise across LabVIEW, TestStand, and NI hardware ecosystems.',
      highlights: [
        'NI certified developers on staff',
        'Best practices aligned with NI platform roadmaps',
        'Efficient use of PXI, DAQ, and industry-standard drivers',
      ],
    },
    {
      id: 'rd-to-production',
      title: 'Migration: R&D to Production',
      description:
        'Moving test code and architectures from engineering labs into production-ready systems customers rely on for years.',
      highlights: [
        'Refactoring R&D code for operator use and maintainability',
        'Standardizing configurations across multiple test stations',
        'Deployment support and production troubleshooting',
      ],
    },
  ] satisfies readonly ExpertiseArea[],
  closingCta: {
    headline: 'Put Our Expertise to Work',
    subline: 'Connect with AIT to scope your next LabVIEW, TestStand, or turnkey test project.',
  },
} as const

export const assets = {
  logo: {
    src: '/images/logo.png',
    srcOnDark: '/images/logo-on-dark.png',
    alt: 'Advanced Instrument Technologies',
  },
  niBadge: homeContent.niBadge,
} as const
