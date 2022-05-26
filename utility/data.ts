interface ContributorsProps {
  name: string;
  github: string;
  avatar: string;
}

interface HeaderProps {
  homepage: string;
  title: string;
}

interface AboutProps {
  resume: string;
  name: string;
  role: string;
  description: string;
  social: {
    linkedin: string;
    github: string;
  };
}

interface ProjectsProps {
  name: string;
  description: string;
  stack: string[];
  sourceCode: string;
  livePreview: string;
}

interface ContactProps {
  whatsapp: string;
}

const header: HeaderProps = {
  homepage: 'https://github.com/CyberMakers-Network',
  title: 'CN.',
};

const about: AboutProps = {
  resume: '',
  name: 'CyberMakers Network',
  role: 'Cooperative Organization',
  description:
    'Our goals are to be a non-financial and open-source cooperative organization.',
  social: {
    linkedin: '',
    github: 'https://github.com/CyberMakers-Network',
  },
};

const projects: ProjectsProps[] = [
  {
    name: 'Cyber Logger',
    description: 'A simple log for corporate and community use',
    stack: ['Typescript'],
    sourceCode: 'https://github.com/CyberMakers-Network/cyber-logger',
    livePreview: 'https://www.npmjs.com/package/cyber-logger',
  },
  {
    name: 'Git Ranking Commits',
    description: 'API to ranking the commits of contributors',
    stack: ['Kotlin', 'Spring Framework'],
    sourceCode: 'https://github.com/CyberMakers-Network/git-ranking-commits',
    livePreview: '',
  },
];

const contributors: ContributorsProps[] = [];

const contact: ContactProps = {
  whatsapp: 'https://chat.whatsapp.com/DlNzb7TEMRtCClPrybDLio',
};

export { header, about, projects, contributors, contact };
