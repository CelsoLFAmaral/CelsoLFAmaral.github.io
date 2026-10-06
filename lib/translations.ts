export type Lang = 'pt' | 'en'

export const t = {
  pt: {
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      education: 'Formação',
      skills: 'Competências',
      portfolio: 'Portfólio',
    },
    hero: {
      title: 'Desenvolvedor Full Stack',
      bio: 'Desenvolvedor Full Stack com 7+ anos de experiência em plataformas web e mobile escaláveis — de e-learning e aplicativos de vídeo a sistemas corporativos de alta performance. Atuação full-stack de ponta a ponta com React, Next.js, Node.js e Laravel, com foco em arquitetura de serviços e performance em produção. Desenvolvimento assistido por IA no dia a dia, com harness próprio de skills, subagentes e hooks para orquestrar fluxos multiagente.',
      scrollLabel: 'Portfólio',
    },
    sections: {
      experience: { number: '01', label: 'Experiência' },
      education: { number: '02', label: 'Formação' },
      skills: { number: '03', label: 'Competências' },
      portfolio: { number: '04', label: 'Portfólio' },
    },
    ui: {
      present: 'Presente',
      viewProject: 'Ver projeto',
      downloadCv: 'Baixar currículo',
      cvFile: '/cv/Celso_Ferraz_FullStack_2026.pdf',
      inProgress: 'Em andamento',
    },
    skillGroups: ['Frontend', 'Backend', 'Banco de Dados', 'CMS', 'Integrações', 'Ferramentas', 'IA', 'Idiomas'],
    experience: [
      {
        role: 'Desenvolvedor Full Stack',
        company: 'Escola do Caos',
        companyFull: '',
        period: '2022 — Presente',
        items: [
          'Criação de páginas web para cursos corporativos utilizando React, React Native, Node.js e bancos NoSQL.',
          'Desenvolvimento e manutenção de plataforma e-learning com mais de 3.000 usuários ativos, garantindo escalabilidade e eficiência.',
          'Suporte a aplicativo de vídeos curtos, implementando novas funcionalidades e correções.',
          'Colaboração com times de design, marketing e produto para alinhar requisitos técnicos e de negócio.',
          'Novo site institucional em React + Supabase, com captura de leads integrada ao RD Station e ao Apollo via API REST.',
          'Uso de Claude Code, Cursor e Lovable para acelerar desenvolvimento, refatoração e testes.',
        ],
      },
      {
        role: 'Desenvolvedor Freelancer',
        company: 'Diversos clientes',
        companyFull: '',
        period: '2019 — Presente',
        items: [
          '80+ projetos entregues entre sistemas web, sites institucionais e landing pages para empresas de diversos segmentos.',
          'Delas Network: plataforma de gestão de influenciadoras e diretório de fornecedores em Laravel, React + TypeScript e PostgreSQL.',
          'Alucinados por Guitarra: marketplace de instrumentos e cursos em Next.js, Payload CMS e PostgreSQL.',
          'Integrações com CRMs e APIs (HubSpot, RD Station, Apollo, Omie) e meios de pagamento (PagSeguro, DocSign).',
          'Temas e plugins WordPress customizados com foco em performance e SEO.',
        ],
      },
      {
        role: 'Desenvolvedor Front-End',
        company: 'SBPNL',
        companyFull: 'Sociedade Brasileira de Programação Neurolinguística',
        period: '2018 — 2022',
        items: [
          'Responsável por todo o ecossistema web da empresa — desenvolvimento, manutenção e evolução do site WordPress, landing pages e plataforma de serviços.',
          'Gestão completa de back-end e front-end da plataforma (PHP, MySQL), garantindo integração eficiente, escalabilidade e segurança.',
          'Integração com ferramentas de marketing e CRM, incluindo RD Station.',
          'Desenvolvimento do PNL Play — plataforma de cursos online com integração de pagamentos via PagSeguro e DocSign.',
        ],
      },
    ],
    education: [
      {
        course: 'Bacharelado em Engenharia de Software',
        detail: 'Em andamento',
        institution: 'Uninter',
        period: '2026 — Presente',
      },
      {
        course: 'Informática com ênfase em Programação',
        detail: 'Centro Paula Souza',
        institution: 'Centro Paula Souza',
        period: '2011',
      },
    ],
    portfolio: [
      {
        title: 'Delas Network',
        description: 'Plataforma de cadastro e gestão de influenciadoras, marcas, agências e eventos, com o Creators Crew: diretório curado de fornecedores com cadastro em etapas e aprovação manual.',
      },
      {
        title: 'Alucinados por Guitarra',
        description: 'Marketplace de instrumentos musicais, cursos e serviços de luthier, com busca e filtros, painel de anunciantes e negociação via WhatsApp.',
      },
      {
        title: 'SuperApp Escola do Caos',
        description: 'Plataforma e-learning desenvolvida em equipe com painel administrativo completo — gerenciamento de usuários, vídeos, landing pages de cursos, player SCORM e controle de acesso. Inclui administração do aplicativo mobile da escola.',
      },
      {
        title: 'PNL Play',
        description: 'Plataforma de cursos online desenvolvida na SBPNL, com integração de pagamentos via PagSeguro e DocSign, e estrutura de controle de acesso ao conteúdo.',
      },
      {
        title: 'Festival Casa Moda',
        description: 'Site oficial do Festival Casa Moda com painel de gerenciamento de leads integrado ao HubSpot e Omie dentro do WordPress.',
      },
      {
        title: 'Salão Casa Noivas',
        description: 'Site do salão de noivas do Grupo Casa Moda, com painel de gerenciamento de leads integrado ao HubSpot e Omie dentro do WordPress.',
      },
      {
        title: 'Escola do Caos',
        description: 'Site institucional com foco em cultura, liderança e aprendizagem corporativa, com captura de leads integrada ao RD Station e ao Apollo via API REST.',
      },
      {
        title: 'CONSAG Engenharia',
        description: 'Site institucional multilíngue para empresa de engenharia, com plugin de tradução e CSS avançado.',
      },
    ],
    footer: {
      rights: 'Todos os direitos reservados.',
    },
  },

  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      portfolio: 'Portfolio',
    },
    hero: {
      title: 'Full Stack Developer',
      bio: 'Full Stack Developer with 7+ years of experience in scalable web and mobile platforms — from e-learning and video apps to high-performance corporate systems. End-to-end full-stack work with React, Next.js, Node.js, and Laravel, focused on service architecture and production performance. AI-assisted development as a daily practice, with a personal harness of skills, subagents, and hooks to orchestrate multi-agent workflows.',
      scrollLabel: 'Portfolio',
    },
    sections: {
      experience: { number: '01', label: 'Experience' },
      education: { number: '02', label: 'Education' },
      skills: { number: '03', label: 'Skills' },
      portfolio: { number: '04', label: 'Portfolio' },
    },
    ui: {
      present: 'Present',
      viewProject: 'View project',
      downloadCv: 'Download résumé',
      cvFile: '/cv/Celso_Ferraz_FullStack_Engineer_2026.pdf',
      inProgress: 'In progress',
    },
    skillGroups: ['Frontend', 'Backend', 'Database', 'CMS', 'Integrations', 'Tools', 'AI', 'Languages'],
    experience: [
      {
        role: 'Full Stack Developer',
        company: 'Escola do Caos',
        companyFull: '',
        period: '2022 — Present',
        items: [
          'Built web pages for corporate training courses using React, React Native, Node.js, and NoSQL databases.',
          'Developed and maintained an e-learning platform with 3,000+ active users, ensuring scalability and efficiency.',
          'Supported a short-video mobile app, implementing new features and bug fixes.',
          'Collaborated with design, marketing, and product teams to align technical and business requirements.',
          'Built the new institutional website with React + Supabase, with lead capture integrated with RD Station and Apollo via REST API.',
          'Used Claude Code, Cursor, and Lovable to accelerate development, refactoring, and testing.',
        ],
      },
      {
        role: 'Freelance Developer',
        company: 'Various clients',
        companyFull: '',
        period: '2019 — Present',
        items: [
          '80+ projects delivered including web systems, institutional websites, and landing pages across various industries.',
          'Delas Network: influencer management platform and supplier directory built with Laravel, React + TypeScript, and PostgreSQL.',
          'Alucinados por Guitarra: marketplace for instruments and courses built with Next.js, Payload CMS, and PostgreSQL.',
          'Integrated CRMs and APIs (HubSpot, RD Station, Apollo, Omie) and payment gateways (PagSeguro, DocSign).',
          'Custom WordPress themes and plugins focused on performance and SEO.',
        ],
      },
      {
        role: 'Front-End Developer',
        company: 'SBPNL',
        companyFull: 'Brazilian Society of Neurolinguistic Programming',
        period: '2018 — 2022',
        items: [
          'Owned the full web ecosystem — development, maintenance, and evolution of the WordPress site, landing pages, and services platform.',
          'Managed full back-end and front-end of the platform (PHP, MySQL), ensuring efficient integration, scalability, and security.',
          'Integrated marketing and CRM tools, including RD Station.',
          'Developed PNL Play — an online course platform with payment integration via PagSeguro and DocSign.',
        ],
      },
    ],
    education: [
      {
        course: 'Bachelor in Software Engineering',
        detail: 'In progress',
        institution: 'Uninter',
        period: '2026 — Present',
      },
      {
        course: 'Computer Science — Programming',
        detail: 'Centro Paula Souza',
        institution: 'Centro Paula Souza',
        period: '2011',
      },
    ],
    portfolio: [
      {
        title: 'Delas Network',
        description: 'Platform for registering and managing influencers, brands, agencies and events, including Creators Crew: a curated supplier directory with multi-step sign-up and manual approval.',
      },
      {
        title: 'Alucinados por Guitarra',
        description: 'Marketplace for musical instruments, courses and luthier services, with search and filters, an advertiser dashboard and deals closed via WhatsApp.',
      },
      {
        title: 'SuperApp Escola do Caos',
        description: 'E-learning platform built with a team, featuring a full admin panel — user management, videos, course landing pages, SCORM player, and access control. Includes administration of the school\'s mobile app.',
      },
      {
        title: 'PNL Play',
        description: 'Online course platform developed at SBPNL, with payment integration via PagSeguro and DocSign, and content access control.',
      },
      {
        title: 'Festival Casa Moda',
        description: 'Official website for Festival Casa Moda with a lead management panel integrated with HubSpot and Omie inside WordPress.',
      },
      {
        title: 'Salão Casa Noivas',
        description: 'Bridal salon website for the Casa Moda Group, with a lead management panel integrated with HubSpot and Omie inside WordPress.',
      },
      {
        title: 'Escola do Caos',
        description: 'Institutional website focused on corporate culture, leadership, and learning, with lead capture integrated with RD Station and Apollo via REST API.',
      },
      {
        title: 'CONSAG Engenharia',
        description: 'Multilingual institutional website for an engineering company, with translation plugin and advanced CSS.',
      },
    ],
    footer: {
      rights: 'All rights reserved.',
    },
  },
}
