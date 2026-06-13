/**
 * Site content — locked verbatim from http://www.aitechinc.com/
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

/** Internal app routes — single source of truth for links and redirects. */
export const routes = {
  home: '/',
  about: '/about',
  services: '/services',
  contact: '/contact',
} as const

export const navLinks = [
  { label: 'Home', path: routes.home },
  { label: 'About', path: routes.about },
  { label: 'Services', path: routes.services },
  { label: 'Contact', path: routes.contact },
] as const

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
      'Learn about AIT — test engineering services, company history, Cumming GA location, and NI Alliance Partner credentials.',
    path: '/about',
    ogImage: '/images/logo.png',
  },
  services: {
    title: 'Services | Advanced Instrument Technologies',
    description:
      'LabVIEW, TestStand, hardware, and turnkey test engineering solutions.',
    path: '/services',
    ogImage: '/images/logo.png',
  },
  contact: {
    title: 'Contact | Advanced Instrument Technologies',
    description: 'Contact AIT in Cumming, GA for test engineering needs.',
    path: '/contact',
    ogImage: '/images/logo.png',
  },
} as const

export const homeContent = {
  intro:
    'Advanced Instrument Technologies, Inc. (AIT) is an engineering services company providing custom and turnkey solutions to meet customers\u2019 test engineering challenges. AIT provides customers with services ranging from engineering support to complete solutions. AIT serves customers in numerous industries, covering research and development, manufacturing, and quality assurance testing.',
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
  whoWeAre: {
    subtitle: 'Engineering Expertise Backed by Real-World Execution',
    paragraphs: [
      'For more than two decades, AIT has helped organizations solve complex test and measurement challenges across product development, validation, and manufacturing environments.',
      'Our team combines software engineering, hardware integration, instrumentation expertise, and systems engineering to deliver solutions that work in the real world\u2014outside the lab.',
      'As an NI Alliance Partner, we leverage industry-leading technologies while remaining focused on what matters most: creating reliable, maintainable systems that provide accurate data and support long-term business goals.',
      'We work as an extension of our customers\u2019 engineering teams, bringing technical expertise, practical problem-solving, and a commitment to project success from concept through deployment.',
    ],
  },
  howItStarted: {
    title: 'How It Started',
    // Draft placeholder — replace with your story when ready.
    body: 'Our founding story will be shared here soon.',
  },
  location: homeContent.location,
  niAlliance: homeContent.niAlliance,
  niBadge: homeContent.niBadge,
} as const

export const servicesContent = {
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

export const assets = {
  logo: {
    src: '/images/logo.png',
    srcOnDark: '/images/logo-on-dark.png',
    alt: 'Advanced Instrument Technologies',
  },
  niBadge: homeContent.niBadge,
} as const
