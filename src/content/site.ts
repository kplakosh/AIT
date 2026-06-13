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

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
] as const

export const pageMeta = {
  home: {
    title: 'Advanced Instrument Technologies | Test Engineering Services',
    description:
      'LabVIEW and TestStand test engineering and integration services. Turnkey solutions and development.',
    path: '/',
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
