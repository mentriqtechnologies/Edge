export const programs = [
  {
    slug: 'btech',
    title: 'Bachelor of Technology (B.Tech)',
    shortTitle: 'B.Tech',
    code: 'DEG-BTECH',
    level: 'Undergraduate',
    degree: 'B.Tech',
    duration: '4 Years',
    mode: 'Full-time · On-campus',
    category: 'Engineering & Technology',
    summary:
      'A 4-year engineering degree with industry specializations in artificial intelligence, cyber security, cloud and data — taught project-first by working engineers.',
    description:
      'The B.Tech program at Edge pairs a rigorous engineering core — mathematics, programming, data structures, operating systems and computer networks — with a choice of in-demand industry specializations. Whatever track you pick, you will build portfolio-grade projects, sit through pull-request style code reviews and complete embedded internships, all mentored by MentriQ\'s working engineers.',
    eligibility:
      'Class XII (10+2) with Physics, Chemistry and Mathematics, minimum 50% aggregate (45% for reserved categories). Lateral entry to year two is available for diploma holders.',
    featured: true,
    active: true,
    specializations: [
      {
        slug: 'ai-ml',
        name: 'Artificial Intelligence & Machine Learning',
        summary:
          'Core CS fundamentals fused with applied AI/ML — build, deploy and present models on real datasets and cloud infrastructure.',
        feesPerYear: 150000,
        intake: 60,
        seatsFilled: 22,
        featured: true,
        highlights: [
          'Project-first AI/ML curriculum with weekly model deployments',
          'Dedicated GPU lab for deep-learning workloads',
          'Code reviews by working industry engineers every week',
          'Two industry capstone projects before graduation',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Engineering Mathematics I', 'Programming & Problem Solving (C)', 'Discrete Structures', 'Digital Logic & Computer Architecture', 'Communication Skills'] },
          { semester: 'Sem 2', subjects: ['Engineering Mathematics II', 'Data Structures & Algorithms', 'Object-Oriented Programming (C++)', 'Computer Organisation'] },
          { semester: 'Sem 3', subjects: ['Operating Systems', 'Database Management Systems', 'Python for Data Science', 'Probability & Statistics for ML'] },
          { semester: 'Sem 4', subjects: ['Computer Networks', 'Machine Learning Foundations', 'Design & Analysis of Algorithms', 'Cloud & MLOps Foundations'] },
          { semester: 'Sem 5', subjects: ['Deep Learning', 'Natural Language Processing', 'Big Data Analytics', 'Industry Internship I'] },
          { semester: 'Sem 6', subjects: ['Generative AI & LLMs', 'Computer Vision', 'Security & Ethics in AI', 'Industry Internship II'] },
          { semester: 'Sem 7', subjects: ['Advanced NLP & Transformers', 'Scale Engineering for AI Systems', 'Capstone Project I'] },
          { semester: 'Sem 8', subjects: ['Capstone Project II', 'Professional Practice & Placements'] },
        ],
        careers: ['Machine Learning Engineer', 'Data Scientist', 'AI Product Engineer', 'Computer Vision Engineer', 'NLP Engineer'],
        skills: ['Python', 'PyTorch', 'TensorFlow', 'SQL', 'AWS', 'Docker', 'Git', 'LLM Tooling', 'Statistics'],
      },
      {
        slug: 'data-science',
        name: 'Data Science',
        summary:
          'Engineering fundamentals plus Python, statistics, machine learning pipelines and decision-grade visualisation on real datasets.',
        feesPerYear: 120000,
        intake: 60,
        seatsFilled: 18,
        featured: false,
        highlights: [
          'Every module anchored to a live industry dataset',
          'SQL and cloud analytics taught by working data teams',
          'Dashboard and storytelling skills for decision-makers',
          'Analytics capstone sponsored by real businesses',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Engineering Mathematics', 'Programming in C & Python', 'Discrete Structures', 'Database Essentials (SQL)'] },
          { semester: 'Sem 2', subjects: ['Probability & Statistics', 'Data Wrangling with Pandas', 'Linear Algebra', 'Data Visualisation'] },
          { semester: 'Sem 3', subjects: ['Machine Learning Foundations', 'Operating Systems', 'Data Warehousing', 'Time-Series Analysis'] },
          { semester: 'Sem 4', subjects: ['Supervised Learning Models', 'Feature Engineering', 'Cloud Analytics (AWS)', 'Big Data Essentials'] },
          { semester: 'Sem 5', subjects: ['Deep Learning Foundations', 'Business Analytics Case Studies', 'Industry Internship I'] },
          { semester: 'Sem 6', subjects: ['Capstone Data Engineering & Analytics', 'Industry Internship II', 'Placement Readiness'] },
        ],
        careers: ['Data Analyst', 'Business Analyst', 'Analytics Engineer', 'Junior Data Scientist', 'BI Developer'],
        skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'Tableau', 'Statistics', 'Machine Learning', 'AWS'],
      },
      {
        slug: 'cyber-security',
        name: 'Cyber Security',
        summary:
          'Network security, ethical hacking, cloud security and digital forensics — trained hands-on in realistic attack-defence labs.',
        feesPerYear: 145000,
        intake: 45,
        seatsFilled: 9,
        featured: false,
        highlights: [
          'Full attack-defence lab environment (CTF-style)',
          'Offensive + defensive training from working security specialists',
          'Preparation pathways for CEH, OSCP and CompTIA Security+',
          'Cloud security on AWS-parity environments',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Programming in C & Linux Essentials', 'Mathematics for Computing', 'Computer Networks Basics', 'Cybersecurity Fundamentals'] },
          { semester: 'Sem 2', subjects: ['Networking Deep Dive', 'Python for Security', 'Operating Systems', 'Cryptography Basics'] },
          { semester: 'Sem 3', subjects: ['Web Application Security (OWASP Top 10)', 'Network Security & Firewalls', 'Digital Forensics Basics'] },
          { semester: 'Sem 4', subjects: ['Ethical Hacking Foundations', 'Security Operations (SOC)', 'Cloud Foundations & Security'] },
          { semester: 'Sem 5', subjects: ['Penetration Testing (Active Directory & Web)', 'Incident Response & Threat Intel', 'Industry Internship I'] },
          { semester: 'Sem 6', subjects: ['Cloud Security & Zero Trust', 'Security Automation with Python', 'Industry Internship II'] },
          { semester: 'Sem 7', subjects: ['Advanced Offensive Security', 'Governance, Risk & Compliance', 'Capstone Security Project'] },
          { semester: 'Sem 8', subjects: ['Reverse Engineering Basics', 'Certification & Placement Prep'] },
        ],
        careers: ['Security Analyst', 'Penetration Tester', 'SOC Analyst', 'Cloud Security Engineer', 'Incident Responder'],
        skills: ['Linux', 'Python', 'Burp Suite', 'Kali Tools', 'Networking', 'Cloud Security', 'Forensics', 'Risk & Compliance'],
      },
      {
        slug: 'cloud-devops',
        name: 'Cloud Computing & DevOps',
        summary:
          'AWS, Docker, Kubernetes and CI/CD pipelines on real deployment environments — you leave having shipped, scaled and monitored.',
        feesPerYear: 145000,
        intake: 45,
        seatsFilled: 8,
        featured: false,
        highlights: [
          'AWS with real (sandboxed) deployments from year three',
          'Full CI/CD pipelines — build, test, deploy, monitor',
          'Kubernetes and Terraform from first principles',
          'Live deployment capstone on a production-style workload',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Programming with Python', 'Linux Essentials', 'Mathematics for Computing', 'Computer Networks'] },
          { semester: 'Sem 2', subjects: ['Data Structures', 'Shell Scripting & Automation', 'Operating Systems', 'Cloud Computing Fundamentals'] },
          { semester: 'Sem 3', subjects: ['Docker Essentials', 'CI/CD Foundations', 'AWS Core Services', 'Networking for Cloud'] },
          { semester: 'Sem 4', subjects: ['Kubernetes Essentials', 'Infrastructure as Code (Terraform)', 'Observability & Monitoring', 'AWS Advanced'] },
          { semester: 'Sem 5', subjects: ['Site Reliability Engineering', 'Security for Cloud & Delivery', 'Industry Internship I'] },
          { semester: 'Sem 6', subjects: ['Advanced Kubernetes & Service Mesh', 'Multi-cloud & Cost Optimisation', 'Industry Internship II'] },
          { semester: 'Sem 7', subjects: ['Capstone Deployment Project', 'Elective: Data Platform Engineering'] },
          { semester: 'Sem 8', subjects: ['Release Engineering', 'Certification & Placement Prep'] },
        ],
        careers: ['Cloud Engineer', 'DevOps Engineer', 'Site Reliability Engineer', 'Platform Engineer', 'DevSecOps Engineer'],
        skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Linux', 'Python', 'Monitoring', 'CI/CD'],
      },
    ],
  },
  {
    slug: 'bca',
    title: 'Bachelor of Computer Applications (BCA)',
    shortTitle: 'BCA',
    code: 'DEG-BCA',
    level: 'Undergraduate',
    degree: 'BCA',
    duration: '3 Years',
    mode: 'Full-time · On-campus',
    category: 'Computer Applications',
    summary:
      'A 3-year computer applications degree with specializations in full stack development, AI & data science, cloud and cyber security.',
    description:
      'The BCA program takes you from your very first line of code to production software. Core subjects cover programming, databases, web technologies and software engineering, while your chosen specialization shapes the projects you ship. Daily code reviews, stand-ups and a live client project in the final year make the program exactly what hiring managers look for.',
    eligibility:
      'Class XII (10+2) in any stream with minimum 45% aggregate. Mathematics / computers preferred but not mandatory.',
    featured: true,
    active: true,
    specializations: [
      {
        slug: 'full-stack-development',
        name: 'Full Stack Development',
        summary:
          'Web and app development from first principles to production — React, Node.js, MongoDB and real client work.',
        feesPerYear: 95000,
        intake: 90,
        seatsFilled: 41,
        featured: true,
        highlights: [
          'Full MERN + Next.js curriculum with production deployment',
          'Daily stand-ups and pull-request style code reviews',
          'Live client & ERP project in the final year',
          'Internship embedded inside the degree timeline',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Programming Fundamentals (C)', 'Web Foundations (HTML/CSS/JS)', 'Mathematics for IT', 'Computer Fundamentals'] },
          { semester: 'Sem 2', subjects: ['OOP with Java', 'JavaScript Deep Dive', 'Data Structures', 'Database Concepts (SQL)'] },
          { semester: 'Sem 3', subjects: ['React Fundamentals', 'Node.js & Express', 'MongoDB & Data Modelling', 'Software Engineering'] },
          { semester: 'Sem 4', subjects: ['React Advanced & Next.js', 'REST & GraphQL APIs', 'DevOps Essentials (Docker, CI/CD)', 'System Design Basics'] },
          { semester: 'Sem 5', subjects: ['Cloud Deployment (AWS)', 'Testing & Quality Engineering', 'Capstone Project I', 'Industry Internship I'] },
          { semester: 'Sem 6', subjects: ['Live Client Project', 'Capstone Project II', 'Placement Readiness'] },
        ],
        careers: ['Full Stack Developer', 'Frontend Engineer', 'Backend Engineer', 'MERN Stack Developer', 'DevOps Engineer (entry)'],
        skills: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Git', 'REST APIs'],
      },
      {
        slug: 'ai-data-science',
        name: 'AI & Data Science',
        summary:
          'Python, statistics, machine learning and analytics built around real datasets and industry case studies.',
        feesPerYear: 110000,
        intake: 60,
        seatsFilled: 26,
        featured: false,
        highlights: [
          'Applied AI modules with model deployments from year two',
          'Real datasets and business case studies throughout',
          'Tableau and Python storytelling for decision-makers',
          'Analytics capstone with real business sponsors',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Python Programming', 'Mathematics for Data', 'Computer Fundamentals', 'Database Essentials (SQL)'] },
          { semester: 'Sem 2', subjects: ['Probability & Statistics', 'Data Wrangling with Pandas', 'Web Foundations', 'Data Visualisation'] },
          { semester: 'Sem 3', subjects: ['Machine Learning Foundations', 'Linear Algebra & Calculus', 'NoSQL Databases', 'Cloud Analytics Basics'] },
          { semester: 'Sem 4', subjects: ['Supervised Learning in Practice', 'Feature Engineering', 'Time-Series Analysis', 'AI Ethics & Governance'] },
          { semester: 'Sem 5', subjects: ['Deep Learning Fundamentals', 'Generative AI Applications', 'Industry Internship I'] },
          { semester: 'Sem 6', subjects: ['Capstone Analytics Project', 'Industry Internship II', 'Placement Readiness'] },
        ],
        careers: ['Data Analyst', 'Data Scientist (entry)', 'Business Intelligence Developer', 'ML Associate', 'Analytics Engineer'],
        skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'Tableau', 'Machine Learning', 'Statistics', 'AWS'],
      },
      {
        slug: 'cloud-computing',
        name: 'Cloud Computing',
        summary:
          'Deploy, containerize and orchestrate real applications — AWS, Docker and Kubernetes for modern cloud careers.',
        feesPerYear: 100000,
        intake: 60,
        seatsFilled: 14,
        featured: false,
        highlights: [
          'AWS cloud with hands-on sandboxed deployments',
          'Docker and Kubernetes from first principles',
          'CI/CD pipelines built and run in class',
          'Cloud deployment capstone on a real workload',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Python Programming', 'Linux Essentials', 'Computer Fundamentals', 'Networking Basics'] },
          { semester: 'Sem 2', subjects: ['Database Essentials (SQL)', 'Web Technologies', 'Operating Systems', 'Cloud Fundamentals'] },
          { semester: 'Sem 3', subjects: ['Docker Essentials', 'AWS Core Services', 'CI/CD Foundations', 'Scripting & Automation'] },
          { semester: 'Sem 4', subjects: ['Kubernetes Essentials', 'Infrastructure as Code (Terraform)', 'Monitoring & Observability', 'Cloud Security'] },
          { semester: 'Sem 5', subjects: ['Site Reliability Practice', 'Industry Internship I', 'Capstone Project I'] },
          { semester: 'Sem 6', subjects: ['Multi-cloud & Cost Optimisation', 'Capstone Deployment Project', 'Certification & Placement Prep'] },
        ],
        careers: ['Cloud Support Engineer', 'Cloud Engineer', 'DevOps Engineer (entry)', 'Solutions Associate', 'Platform Engineer (entry)'],
        skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Linux', 'Python', 'CI/CD', 'Monitoring'],
      },
      {
        slug: 'cyber-security',
        name: 'Cyber Security',
        summary:
          'Web security, ethical hacking, SOC fundamentals and digital forensics in dedicated attack-defence labs.',
        feesPerYear: 105000,
        intake: 45,
        seatsFilled: 7,
        featured: false,
        highlights: [
          'CTF-style attack-defence lab environment',
          'OWASP-driven web application security training',
          'SOC and incident-response fundamentals',
          'Pathways toward CEH and Sec+ certifications',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Python Programming', 'Linux Essentials', 'Networking Fundamentals', 'Cybersecurity Basics'] },
          { semester: 'Sem 2', subjects: ['Cryptography Basics', 'Web Technologies', 'Operating Systems', 'Database Security'] },
          { semester: 'Sem 3', subjects: ['Web Application Security', 'Network Security & Firewalls', 'Ethical Hacking Foundations', 'Digital Forensics'] },
          { semester: 'Sem 4', subjects: ['Security Operations (SOC)', 'Cloud Security Basics', 'Incident Response', 'Security Automation'] },
          { semester: 'Sem 5', subjects: ['Penetration Testing Practice', 'Industry Internship I', 'Capstone Project I'] },
          { semester: 'Sem 6', subjects: ['Capstone Security Project', 'Certification & Placement Prep'] },
        ],
        careers: ['Security Analyst', 'SOC Analyst (entry)', 'Web Security Tester', 'Cloud Security Associate', 'Incident Response Analyst'],
        skills: ['Linux', 'Python', 'Burp Suite', 'Kali Tools', 'Networking', 'OWASP', 'Forensics', 'Cloud Security'],
      },
    ],
  },
  {
    slug: 'bba',
    title: 'Bachelor of Business Administration (BBA)',
    shortTitle: 'BBA',
    code: 'DEG-BBA',
    level: 'Undergraduate',
    degree: 'BBA',
    duration: '3 Years',
    mode: 'Full-time · On-campus',
    category: 'Management',
    summary:
      'A 3-year management degree with new-age specializations in business analytics, AI, digital marketing, entrepreneurship and fintech.',
    description:
      'The BBA at Edge combines core management fundamentals — accounting, marketing, finance and organisational behaviour — with modern, technology-led specializations. Expect real campaign budgets, simulated business decisions, spreadsheet modelling and venture pitches. Mentors include founders, product managers and analysts active in the industry.',
    eligibility:
      'Class XII (10+2) in any stream with minimum 45% aggregate.',
    featured: false,
    active: true,
    specializations: [
      {
        slug: 'business-analytics-ai',
        name: 'Business Analytics & AI',
        summary:
          'Business decision-making powered by data — analytics, statistics, AI tools and dashboard storytelling.',
        feesPerYear: 95000,
        intake: 60,
        seatsFilled: 21,
        featured: true,
        highlights: [
          'Analytics and AI decision-making for real business problems',
          'Excel, SQL and low-code BI tools in every semester',
          'Dashboard and presentation skills for stakeholders',
          'Analytics capstone with an actual business sponsor',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Principles of Management', 'Business Mathematics', 'Financial Accounting Basics', 'Spreadsheet Modelling'] },
          { semester: 'Sem 2', subjects: ['Statistics for Business', 'Marketing Management', 'Business Communication', 'SQL for Business'] },
          { semester: 'Sem 3', subjects: ['Business Analytics Foundations', 'Managerial Economics', 'Data Visualisation (BI Tools)', 'Organisational Behaviour'] },
          { semester: 'Sem 4', subjects: ['Predictive Modelling & AI Tools', 'Financial Management', 'Customer Analytics', 'Business Ethics & Law'] },
          { semester: 'Sem 5', subjects: ['Operations Analytics', 'Industry Internship I', 'Capstone Project I'] },
          { semester: 'Sem 6', subjects: ['AI in Business Strategy', 'Capstone Analytics Project', 'Placement Readiness'] },
        ],
        careers: ['Business Analyst', 'Data Analyst (business)', 'Product Analyst', 'Financial Analyst', 'Analytics Consultant'],
        skills: ['SQL', 'Excel', 'Power BI / Tableau', 'Statistics', 'Python for Analytics', 'Financial Modelling', 'Storytelling'],
      },
      {
        slug: 'digital-marketing',
        name: 'Digital Marketing & E-commerce',
        summary:
          'Growth marketing, paid campaigns, content, SEO and e-commerce operations — with real campaign budgets.',
        feesPerYear: 88000,
        intake: 60,
        seatsFilled: 13,
        featured: false,
        highlights: [
          'Run real paid campaigns on live budgets',
          'SEO, content and lifecycle marketing playbooks',
          'E-commerce analytics and marketplace operations',
          'Growth portfolio built across the three years',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Principles of Management', 'Marketing Fundamentals', 'Digital Literacy & Tools', 'Business Communication'] },
          { semester: 'Sem 2', subjects: ['Consumer Behaviour', 'Content & Social Media Marketing', 'Spreadsheet & Data Basics', 'Economics for Managers'] },
          { semester: 'Sem 3', subjects: ['SEO & Performance Marketing', 'Email & Lifecycle Marketing', 'Marketing Analytics', 'Brand Management'] },
          { semester: 'Sem 4', subjects: ['E-commerce Operations', 'Campaign Management (Live Budgets)', 'Customer Acquisition Strategy', 'Digital Business Law'] },
          { semester: 'Sem 5', subjects: ['Growth Experiments & CRO', 'Industry Internship I', 'Capstone Campaign'] },
          { semester: 'Sem 6', subjects: ['Capstone Growth Portfolio', 'Placement Readiness'] },
        ],
        careers: ['Growth Marketer', 'Performance Marketing Executive', 'SEO Specialist', 'Social Media Manager', 'E-commerce Executive'],
        skills: ['SEO', 'Google & Meta Ads', 'GA4 & Analytics', 'Content Strategy', 'Email Marketing', 'E-commerce Mgt', 'Excel'],
      },
      {
        slug: 'entrepreneurship',
        name: 'Technology Entrepreneurship',
        summary:
          'Business fundamentals paired with product thinking, startup execution and digital marketing — real venture pitches, real budgets.',
        feesPerYear: 88000,
        intake: 60,
        seatsFilled: 10,
        featured: false,
        highlights: [
          'Venture studio format with real pitch rounds',
          'Product management & no-code tools curriculum',
          'Digital marketing with live campaign budgets',
          'Mentorship from working founders and PM leaders',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Principles of Management', 'Business Mathematics', 'Financial Accounting Basics', 'Design Thinking'] },
          { semester: 'Sem 2', subjects: ['Marketing Management', 'Managerial Economics', 'Organisational Behaviour', 'Product Management Fundamentals'] },
          { semester: 'Sem 3', subjects: ['Financial Management', 'Sales & Distribution', 'Basics of No-Code Product Building', 'Business Law & Ethics'] },
          { semester: 'Sem 4', subjects: ['Growth & Digital Marketing', 'Startup Financials & Unit Economics', 'Customer Research & Analytics', 'Operations & Supply Chain'] },
          { semester: 'Sem 5', subjects: ['Venture Studio I', 'Industry Internship I', 'Pitching & Investor Communication'] },
          { semester: 'Sem 6', subjects: ['Venture Studio II (Go-to-Market)', 'Capstone Venture Pitch', 'Placement Readiness'] },
        ],
        careers: ['Startup Founder', 'Product Manager', 'Growth Marketer', 'Business Analyst', 'Management Trainee (Tech)'],
        skills: ['Product Management', 'No-Code Tools', 'Excel & Modelling', 'Digital Marketing', 'Pitching', 'Unit Economics'],
      },
      {
        slug: 'finance-fintech',
        name: 'Finance & Fintech',
        summary:
          'Corporate finance, banking, digital payments and financial technology — built for BFSI and fintech careers.',
        feesPerYear: 92000,
        intake: 45,
        seatsFilled: 8,
        featured: false,
        highlights: [
          'Financial modelling and valuation in Excel',
          'Payments, lending and digital banking deep dives',
          'Regulatory and risk basics for fintech',
          'Case studies from live BFSI partners',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Principles of Management', 'Financial Accounting', 'Business Mathematics', 'Business Communication'] },
          { semester: 'Sem 2', subjects: ['Managerial Accounting', 'Economics for Managers', 'Statistics for Finance', 'Spreadsheet Modelling'] },
          { semester: 'Sem 3', subjects: ['Corporate Finance', 'Financial Markets & Banking', 'Financial Modelling', 'Business Law'] },
          { semester: 'Sem 4', subjects: ['Fintech & Digital Payments', 'Risk Management & Compliance', 'Lending & Credit Basics', 'Data for Finance'] },
          { semester: 'Sem 5', subjects: ['Investment Analysis', 'Industry Internship I', 'Capstone Project I'] },
          { semester: 'Sem 6', subjects: ['Capstone Fintech Project', 'Certifications & Placement Prep'] },
        ],
        careers: ['Financial Analyst', 'Banking Professional', 'Fintech Operations Executive', 'Risk Analyst', 'Investment Associate'],
        skills: ['Financial Modelling', 'Excel', 'Payments & Banking', 'Risk & Compliance', 'Statistics', 'Data for Finance'],
      },
    ],
  },
  {
    slug: 'mca',
    title: 'Master of Computer Applications (MCA)',
    shortTitle: 'MCA',
    code: 'DEG-MCA',
    level: 'Postgraduate',
    degree: 'MCA',
    duration: '2 Years',
    mode: 'Full-time · On-campus',
    category: 'Computer Applications',
    summary:
      'A 2-year postgraduate program with advanced specializations in AI & ML, full stack engineering, cloud & DevOps and data science.',
    description:
      'The MCA is a fast, deep postgraduate program for graduates who want to level up into senior technical roles. It assumes programming fundamentals and moves quickly into advanced systems, specializations and deep project work. By the second year, students choose a specialization and complete a production-grade capstone with industry mentorship.',
    eligibility:
      'Graduation (BCA, B.Sc, B.E./B.Tech or equivalent) with minimum 50% aggregate. Mathematics at 10+2 or degree level preferred.',
    featured: false,
    active: true,
    specializations: [
      {
        slug: 'ai-ml',
        name: 'AI & Machine Learning',
        summary:
          'Advanced machine learning, deep learning and LLM engineering with production deployment practice.',
        feesPerYear: 160000,
        intake: 45,
        seatsFilled: 16,
        featured: true,
        highlights: [
          'Deep learning to LLM engineering in two years',
          'GPU lab and real cloud deployments',
          'Model serving, monitoring and MLOps practice',
          'Senior-level capstone with industry mentors',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Advanced Python & DS', 'Statistics & Probability for ML', 'Machine Learning Foundations', 'Data Structures & Algorithms'] },
          { semester: 'Sem 2', subjects: ['Deep Learning', 'NLP Fundamentals', 'MLOps & Model Serving', 'Database & Cloud Systems'] },
          { semester: 'Sem 3', subjects: ['Generative AI & LLMs', 'Computer Vision', 'Capstone Project I', 'Industry Internship I'] },
          { semester: 'Sem 4', subjects: ['Capstone Project II', 'Advanced Topics in AI', 'Placement Readiness'] },
        ],
        careers: ['Machine Learning Engineer', 'MLOps Engineer', 'AI Engineer', 'Data Scientist', 'LLM Application Engineer'],
        skills: ['Python', 'PyTorch', 'TensorFlow', 'LLMs', 'MLOps', 'AWS', 'SQL', 'Statistics'],
      },
      {
        slug: 'full-stack-development',
        name: 'Full Stack Development',
        summary:
          'Advanced web engineering — architect and ship production applications on the modern JavaScript stack.',
        feesPerYear: 140000,
        intake: 60,
        seatsFilled: 24,
        featured: false,
        highlights: [
          'Advanced React, Node.js and system design',
          'Microservices and event-driven patterns',
          'Docker, Kubernetes and cloud deployment',
          'Production-grade capstone shipped to real users',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Advanced JavaScript & TypeScript', 'Data Structures & Algorithms', 'Database Systems (SQL & NoSQL)', 'Software Architecture'] },
          { semester: 'Sem 2', subjects: ['Advanced React & Next.js', 'Node.js & Backend Engineering', 'System Design', 'REST & GraphQL APIs'] },
          { semester: 'Sem 3', subjects: ['Microservices & Event-Driven Design', 'Docker, Kubernetes, CI/CD', 'Capstone Project I', 'Industry Internship I'] },
          { semester: 'Sem 4', subjects: ['Capstone Project II', 'Performance & Security Engineering', 'Placement Readiness'] },
        ],
        careers: ['Full Stack Engineer', 'Backend Engineer', 'Frontend Lead (entry)', 'Systems Engineer', 'DevOps Engineer'],
        skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
      },
      {
        slug: 'cloud-devops',
        name: 'Cloud Computing & DevOps',
        summary:
          'Advanced cloud architecture, infrastructure-as-code and site reliability practice on real workloads.',
        feesPerYear: 145000,
        intake: 45,
        seatsFilled: 9,
        featured: false,
        highlights: [
          'AWS and multi-cloud architecture in depth',
          'Terraform, Kubernetes and service mesh',
          'SRE principles: SLIs, SLOs and incident practice',
          'Production-grade deployment capstone',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Advanced Linux & Scripting', 'Cloud Architecture (AWS)', 'Databases & Networking for Cloud', 'Python for Automation'] },
          { semester: 'Sem 2', subjects: ['Kubernetes & Containers', 'Infrastructure as Code (Terraform)', 'CI/CD at Scale', 'Observability & Monitoring'] },
          { semester: 'Sem 3', subjects: ['Site Reliability Engineering', 'Security for Cloud & Delivery', 'Capstone Project I', 'Industry Internship I'] },
          { semester: 'Sem 4', subjects: ['Capstone Project II', 'Multi-cloud & FinOps', 'Placement Readiness'] },
        ],
        careers: ['Cloud Engineer', 'DevOps Engineer', 'SRE', 'Platform Engineer', 'DevSecOps Engineer'],
        skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux', 'Python', 'Observability', 'Security'],
      },
      {
        slug: 'data-science',
        name: 'Data Science',
        summary:
          'Advanced analytics, machine learning pipelines and big data systems for data-driven organisations.',
        feesPerYear: 150000,
        intake: 45,
        seatsFilled: 11,
        featured: false,
        highlights: [
          'End-to-end ML pipelines on real data platforms',
          'Big data and streaming analytics essentials',
          'Cloud data engineering and warehousing',
          'Decision-grade analytics capstone',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Advanced Python & Statistics', 'Machine Learning Foundations', 'SQL & Data Warehousing', 'Data Engineering Basics'] },
          { semester: 'Sem 2', subjects: ['Advanced Machine Learning', 'Big Data (Spark) & Streaming', 'Cloud Analytics (AWS)', 'MLOps & Experimentation'] },
          { semester: 'Sem 3', subjects: ['Deep Learning for Data', 'Analytics Case Studies', 'Capstone Project I', 'Industry Internship I'] },
          { semester: 'Sem 4', subjects: ['Capstone Project II', 'Data Strategy & Ethics', 'Placement Readiness'] },
        ],
        careers: ['Data Scientist', 'Data Engineer', 'Analytics Engineer', 'ML Engineer', 'BI Lead (entry)'],
        skills: ['Python', 'Spark', 'SQL', 'Machine Learning', 'AWS', 'MLOps', 'Statistics', 'Storytelling'],
      },
    ],
  },
  {
    slug: 'mba',
    title: 'Master of Business Administration (MBA)',
    shortTitle: 'MBA',
    code: 'DEG-MBA',
    level: 'Postgraduate',
    degree: 'MBA',
    duration: '2 Years',
    mode: 'Full-time · On-campus',
    category: 'Management',
    summary:
      'A 2-year postgraduate management degree with specializations in business analytics, digital marketing, finance and HR.',
    description:
      'The MBA at Edge builds strong management fundamentals and leadership skills, layered with specialized tracks chosen by each student. The program is career-first: real business simulations, live industry case studies, analytics tools and mentored capstone projects with our partner network.',
    eligibility:
      'Graduation in any discipline with minimum 50% aggregate. Work experience preferred but not mandatory.',
    featured: true,
    active: true,
    specializations: [
      {
        slug: 'business-analytics',
        name: 'Business Analytics',
        summary:
          'Lead organisations with data — advanced analytics, AI tools, dashboards and decision frameworks.',
        feesPerYear: 180000,
        intake: 60,
        seatsFilled: 28,
        featured: true,
        highlights: [
          'Analytics and AI for strategic decisions',
          'SQL, BI tools and Python for business',
          'Live analytics projects with partner companies',
          'Executive communication and storytelling',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Management Fundamentals', 'Statistics & Data for Decision-Making', 'Marketing Management', 'Financial Accounting'] },
          { semester: 'Sem 2', subjects: ['Business Analytics & AI Tools', 'Managerial Economics', 'Operations & Supply Chain', 'SQL & BI for Managers'] },
          { semester: 'Sem 3', subjects: ['Predictive & Prescriptive Analytics', 'Strategic Management', 'Customer & Product Analytics', 'Capstone Project I'] },
          { semester: 'Sem 4', subjects: ['Capstone Analytics Project', 'Digital Business Strategy', 'Placement Readiness'] },
        ],
        careers: ['Business Analyst', 'Data-Driven Product Manager', 'Analytics Manager', 'Strategy Consultant', 'BI Manager'],
        skills: ['SQL', 'Python for Business', 'Power BI / Tableau', 'Statistics', 'Strategy', 'Financial Modelling', 'Storytelling'],
      },
      {
        slug: 'marketing-digital',
        name: 'Marketing & Digital Strategy',
        summary:
          'Own the customer journey — brand, growth, performance marketing and digital channels.',
        feesPerYear: 170000,
        intake: 60,
        seatsFilled: 19,
        featured: false,
        highlights: [
          'Performance marketing with live campaign budgets',
          'Brand strategy and consumer insight work',
          'Marketing analytics and attribution',
          'Growth capstone with a live brand',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Management Fundamentals', 'Marketing Management', 'Consumer Behaviour', 'Data for Marketing'] },
          { semester: 'Sem 2', subjects: ['Brand & Communication Strategy', 'Digital Marketing Foundations', 'Pricing & Revenue Management', 'Marketing Analytics'] },
          { semester: 'Sem 3', subjects: ['Performance Marketing & CRO', 'Social & Content Strategy', 'E-commerce & Omnichannel', 'Capstone Project I'] },
          { semester: 'Sem 4', subjects: ['Capstone Growth Strategy', 'International Marketing', 'Placement Readiness'] },
        ],
        careers: ['Marketing Manager', 'Growth Manager', 'Brand Manager', 'Performance Marketer', 'Digital Strategy Consultant'],
        skills: ['Marketing Strategy', 'GA4 & Attribution', 'Paid Media', 'Brand Management', 'Content Strategy', 'CRM'],
      },
      {
        slug: 'finance',
        name: 'Finance',
        summary:
          'Corporate finance, investment analysis, risk and financial modelling for BFSI and corporate careers.',
        feesPerYear: 175000,
        intake: 45,
        seatsFilled: 12,
        featured: false,
        highlights: [
          'Advanced financial modelling and valuation',
          'Investment and portfolio analysis',
          'Corporate finance and capital markets',
          'Risk and regulatory frameworks',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Management Fundamentals', 'Financial Accounting', 'Managerial Economics', 'Statistics for Finance'] },
          { semester: 'Sem 2', subjects: ['Corporate Finance', 'Financial Markets & Instruments', 'Advanced Financial Modelling', 'Taxation Essentials'] },
          { semester: 'Sem 3', subjects: ['Investment Analysis & Portfolio Mgt', 'Risk Management & Derivatives', 'Mergers, Acquisitions & Valuation', 'Capstone Project I'] },
          { semester: 'Sem 4', subjects: ['Capstone Finance Project', 'Fintech & Digital Banking', 'Placement Readiness'] },
        ],
        careers: ['Financial Analyst', 'Investment Banker (entry)', 'Corporate Finance Manager', 'Portfolio Analyst', 'Risk Manager'],
        skills: ['Financial Modelling', 'Valuation', 'Excel & VBA', 'Capital Markets', 'Risk Management', 'Corporate Finance'],
      },
      {
        slug: 'hr-people',
        name: 'HR & People Management',
        summary:
          'Talent, organisational behaviour and people analytics for modern, human-led workplaces.',
        feesPerYear: 165000,
        intake: 45,
        seatsFilled: 9,
        featured: false,
        highlights: [
          'Talent acquisition and employer branding',
          'People analytics and workforce planning',
          'Learning, engagement and culture design',
          'Capstone with an HR practice partner',
        ],
        curriculum: [
          { semester: 'Sem 1', subjects: ['Management Fundamentals', 'Organisational Behaviour', 'Business Communication', 'Employment Law Basics'] },
          { semester: 'Sem 2', subjects: ['Talent Acquisition & Employer Branding', 'Performance & Reward Systems', 'People Analytics', 'Learning & Development'] },
          { semester: 'Sem 3', subjects: ['Employee Engagement & Culture', 'HR Strategy & Workforce Planning', 'Diversity, Equity & Inclusion', 'Capstone Project I'] },
          { semester: 'Sem 4', subjects: ['Capstone HR Project', 'Global HR Practices', 'Placement Readiness'] },
        ],
        careers: ['HR Business Partner', 'Talent Acquisition Specialist', 'People Analytics Lead', 'L&D Manager', 'HR Generalist'],
        skills: ['Talent Acquisition', 'People Analytics', 'Organisational Behaviour', 'Engagement & Culture', 'Employment Law', 'HR Tech'],
      },
    ],
  },
];
export const users = [
  {
    name: 'Edge Admin',
    email: 'admin@edge.edu',
    password: 'admin123',
    role: 'admin',
  },
  {
    name: 'Admissions Desk',
    email: 'admissions@edge.edu',
    password: 'admissions123',
    role: 'editor',
  },
];

export const testimonials = [
  {
    name: 'Ananya Sharma',
    program: 'BCA — Full Stack Development, 2021-24 batch',
    role: 'Associate Software Engineer',
    company: 'A leading fintech firm',
    quote:
      'The daily stand-ups and review culture are what made the difference. By my final year I had shipped a real client project and walked into placements with a portfolio instead of just a transcript.',
    rating: 5,
    featured: true,
  },
  {
    name: 'Rohit Verma',
    program: 'B.Tech CS & AI, 2020-24 batch',
    role: 'Data Analyst',
    company: 'e-commerce platform',
    quote:
      'I built, deployed and presented two ML projects before I even graduated. Interviewers spent more time on my GitHub than on my degree — and that got me the offer.',
    rating: 5,
    featured: true,
  },
  {
    name: 'Sneha Patel',
    program: 'B.Sc Data Science, 2021-24 batch',
    role: 'Business Analyst',
    company: 'Global consulting firm',
    quote:
      'The business analytics case studies with real company data were exactly what my interviews asked about. The mentorship team helped me convert my capstone into a talking point recruiters loved.',
    rating: 5,
    featured: true,
  },
  {
    name: 'Arjun Mehta',
    program: 'B.Tech Cyber Security, 2020-24 batch',
    role: 'Security Operations Trainee',
    company: 'Managed security services provider',
    quote:
      'The attack-defence labs were the whole program for me. Sitting in a real SOC during my internship, I realised I had already seen most of the scenarios in our lab environment.',
    rating: 5,
    featured: false,
  },
  {
    name: 'Kavita Rao',
    program: 'BBA Tech Entrepreneurship, 2021-24 batch',
    role: 'Growth Associate',
    company: 'D2C startup',
    quote:
      'We pitched three ventures during the degree and actually ran paid campaigns with real budgets. That practical exposure made my transition from campus to startup completely smooth.',
    rating: 4,
    featured: false,
  },
  {
    name: "Devansh Gupta",
    program: 'B.Tech Cloud & DevOps, 2020-24 batch',
    role: 'DevOps Engineer',
    company: 'SaaS company',
    quote:
      'Terraform, Kubernetes, CI/CD — nobody taught me these from a textbook. We ran actual pipelines and deployments in class. My first day on the job felt like a normal lab session.',
    rating: 5,
    featured: false,
  },
];

export const faqs = [
  {
    question: 'How does the Edge Institute of Technology degree actually work?',
    answer:
      'Edge Institute of Technology is our training and delivery centre. You enrol here, and on completion you receive a degree conferred by one of our recognized partner campuses. Every class, lab, project and placement activity is delivered by MentriQ Technologies\' industry mentors.',
    category: 'Admissions',
    order: 1,
  },
  {
    question: 'Are the degrees recognized in India?',
    answer:
      'Yes. Our degree-granting partners are recognized UGC campuses, which means the degree is valid for higher studies, government examinations and employment across India. The partner campus for each intake is confirmed and published before admissions close.',
    category: 'Admissions',
    order: 2,
  },
  {
    question: 'What is the eligibility for the programs?',
    answer:
      'For engineering programs (B.Tech) you need Class XII with Physics, Chemistry and Mathematics at a minimum of 50% aggregate (45% for reserved categories). For BCA, B.Sc and BBA programs, a minimum of 45% aggregate in any stream is required. Each program page lists its exact eligibility.',
    category: 'Admissions',
    order: 3,
  },
  {
    question: 'How does MentriQ mentor students differently from a normal college?',
    answer:
      'MentriQ\'s mentors are working engineers, data scientists and product people. Teaching happens through daily classes, live client projects, pull-request style code reviews and internships — the same model MentriQ already runs for thousands of technology learners.',
    category: 'Programs',
    order: 4,
  },
  {
    question: 'Are internships guaranteed?',
    answer:
      'Yes. An internship track is baked into the curriculum of every program. The final year includes a structured industry internship, and our placement cell actively works with 1400+ hiring partners to place students.',
    category: 'Placements',
    order: 5,
  },
  {
    question: 'How much does the program cost, and is financing available?',
    answer:
      'Tuition varies by program — from about ₹88,000 to ₹1,50,000 per year depending on the degree. We support students with campus scholarships, merit discounts and J&K / EWS benefits where applicable. Our counselling team will walk you through the full fee structure before you enrol.',
    category: 'Fees',
    order: 6,
  },
  {
    question: 'Can I visit the campus before applying?',
    answer:
      'Absolutely. We run guided campus visits almost every week at our Sanganer, Jaipur centre. You can see the labs, meet mentors and speak with current students before making a decision.',
    category: 'Admissions',
    order: 7,
  },
  {
    question: 'What placement support will I receive?',
    answer:
      'From your first semester, our placement cell works with you on resume building, aptitude and mock interviews, personal branding and a portfolio strategy. We organise company visits, hackathons and direct interview opportunities through MentriQ\'s hiring partner network.',
    category: 'Placements',
    order: 8,
  },
];

export const partners = [
  { name: 'Infotech Systems Ltd', kind: 'recruiter', tagline: 'Product engineering', description: 'Product development and enterprise software partner.', tags: ['Product Engineering', 'Java / React'] },
  { name: 'Nimbus CloudWorks', kind: 'recruiter', tagline: 'Cloud and DevOps', description: 'Cloud consulting firm hiring cloud and DevOps talent.', tags: ['Cloud', 'DevOps'] },
  { name: 'DataVista Analytics', kind: 'recruiter', tagline: 'Data and analytics', description: 'Analytics consultancy working with retail and BFSI clients.', tags: ['Data Science', 'BI'] },
  { name: 'SecureNet Solutions', kind: 'recruiter', tagline: 'Cyber security', description: 'Managed security operations and penetration testing firm.', tags: ['CyberSec', 'SOC'] },
  { name: 'Pulse Media Pvt Ltd', kind: 'recruiter', tagline: 'Digital products', description: 'D2C and media company hiring full-stack and growth talent.', tags: ['Full Stack', 'Growth'] },
  { name: 'Vertex Fintech', kind: 'recruiter', tagline: 'Fintech', description: 'Payments startup hiring engineering and product management talent.', tags: ['Fintech', 'Product'] },
  { name: 'Rajasthan IT & ITeS Association', kind: 'collaboration', tagline: 'Industry body', description: 'Collaborator supporting internships and industry connects.', tags: ['Industry', 'Internships'] },
];

export const news = [
  {
    slug: 'edge-announces-founding-batch',
    title: 'Edge Institute of Technology announces its founding batch for 2026-27',
    excerpt:
      'Applications open for six industry-first specializations — AI & Machine Learning, AI & Data Science, cyber security, cloud & DevOps, full stack development and entrepreneurship.',
    content:
      `Introduction
Founding admissions are now open at Edge Institute of Technology. The institute — the degree delivery arm of MentriQ Technologies — will accept its first cohort in the 2026-27 academic session across six specializations: B.Tech in AI & Machine Learning, B.Tech in AI & Data Science, B.Tech in Cyber Security & Ethical Hacking, B.Tech in DevOps & Cloud Computing, BCA in Full Stack Development and BBA in Entrepreneurship.

How admission works
Students apply online, attend a counselling session with the admissions team, and complete a merit-and-interest review. No donation culture, no opaque fee structures — the full cost sheet is shared before you enrol.

What makes this batch special
Founding-batch students receive priority access to mentors, early internship slots and a dedicated placement-focussed portfolio coach. Seats are limited to 60 per engineering track and 90 for BCA, and several tracks are already filling.

Next steps
Book a free counselling session from the Admissions page or visit the Sanganer, Jaipur centre for a guided campus tour.`,
    category: 'Announcements',
    author: 'Admissions Office',
    readMinutes: 3,
    publishDate: '2026-08-10',
    tags: ['admissions', 'founding batch'],
  },
  {
    slug: 'why-project-first-learning-wins',
    title: 'Why project-first learning beats lecture-first classrooms',
    excerpt:
      'Employers rarely ask what you know — they ask what you have built. Here is why every program at Edge is constructed around shipping real work.',
    content:
      `The hiring signal
Traditional degrees measure memory. Project-first programs measure delivery. When our placement partners evaluate graduates, the strongest signal is a candidate's portfolio: what they built, how they debugged it, how they made decisions under constraints.

How Edge structures learning
Every semester ends with a project milestone. In year one you ship a working application; by year three you are deploying projects into cloud environments and presenting them to industry judges. Code reviews, pull requests, stand-ups and retros are part of the timetable because they are part of the job.

The result
Our students graduate with a transcript and a portfolio. They have practised interviews, presented to real stakeholders and learned to recover from broken builds — skills lectures cannot teach.`,
    category: 'Learning',
    author: 'Curriculum Team',
    readMinutes: 4,
    publishDate: '2026-07-22',
    tags: ['learning', 'methodology'],
  },
  {
    slug: 'inside-a-day-at-edge-lab',
    title: 'Inside a day at the Edge lab: stand-ups, breakouts and shipping',
    excerpt:
      'A look at how a normal day runs at our Sanganer centre — from morning stand-ups to evening code reviews.',
    content:
      `Morning stand-up
Each cohort starts the day with a 15-minute stand-up. Students report what they built yesterday, what they are blocked on, and what they plan to ship today. It sounds like industry practice because it is industry practice.

Deep work blocks
Mornings are reserved for focused lab time. Most students work in pairs on a live project — an ERP module, a dashboard, an analytics pipeline — while mentors circulate and review.

Breakouts and reviews
Afternoons host breakout sessions on frameworks and tools, followed by pull-request style code reviews. Every line of code a student writes is seen by a working engineer before it merges.

Wrap
The day closes with a short retro. The goal is simple: every single day, a student's work one step closer to production-ready.`,
    category: 'Stories',
    author: 'MentriQ Team',
    readMinutes: 4,
    publishDate: '2026-06-30',
    tags: ['culture', 'labs'],
  },
  {
    slug: 'careers-in-ai-2026-what-students-should-know',
    title: 'Careers in AI in 2026: what aspirants should actually prepare',
    excerpt:
      'The AI job market has matured. Here is a grounded look at the roles forming, the skills that matter and why fundamentals still win.',
    content:
      `The market has matured
The era of vague "AI jobs" is over. Companies now hire for specific roles: machine learning engineers who can deploy models, data engineers who can move and clean data, and product engineers who can build AI-powered features responsibly.

Skills that still matter
Foundations dominate. Statistics, data structures, SQL and software engineering discipline matter more than memorising model architectures. The students who thrive are the ones who can instrument an experiment, diagnose a failure and communicate results.

How to prepare
Build. Deploy. Document. A portfolio of well-engineered ML projects — each with a problem statement, experiments and evaluation — beats a long list of frameworks on a resume every time.

What we are doing about it
Our B.Tech in AI & Machine Learning and AI & Data Science specializations include deployment, MLOps and communication training alongside model-building, because that is where real careers are made.`,
    category: 'Careers',
    author: 'Curriculum Team',
    readMinutes: 5,
    publishDate: '2026-05-18',
    tags: ['AI', 'careers'],
  },
];

export const inquiries = [
  {
    type: 'admission',
    name: 'Aisha Khan',
    email: 'aisha.khan@example.com',
    phone: '+91 98765 43210',
    state: 'Rajasthan',
    city: 'Jaipur',
    program: 'BCA in Full Stack Development',
    level: 'Undergraduate',
    message: 'Please send the fee structure and counselling availability.',
    status: 'new',
  },
  {
    type: 'callback',
    name: 'Manish Jain',
    email: 'manish.jain@example.com',
    phone: '+91 98654 32100',
    state: 'Delhi NCR',
    city: 'Gurugram',
    program: 'B.Tech in Computer Science & Artificial Intelligence',
    level: 'Undergraduate',
    message: 'Interested in scholarship options for engineering.',
    status: 'contacted',
  },
  {
    type: 'contact',
    name: 'Priya Nair',
    email: 'priya.nair@example.com',
    phone: '+91 97531 24680',
    state: 'Kerala',
    city: 'Kochi',
    program: '',
    level: '',
    message: 'Do you offer hostels or tie up with nearby accommodation?',
    status: 'new',
  },
];
