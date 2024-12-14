export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [

  // {
  //   id: 1,
  //   name: 'Emily Johnson',
  //   position: 'Marketing Director at GreenLeaf',
  //   img: 'assets/review1.png',
  //   review:
  //     'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  // },
  // {
  //   id: 2,
  //   name: 'Mark Rogers',
  //   position: 'Founder of TechGear Shop',
  //   img: 'assets/review2.png',
  //   review:
  //     'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  // },
  // {
  //   id: 3,
  //   name: 'John Dohsas',
  //   position: 'Project Manager at UrbanTech ',
  //   img: 'assets/review3.png',
  //   review:
  //     'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  // },
  // {
  //   id: 4,
  //   name: 'Ether Smith',
  //   position: 'CEO of BrightStar Enterprises',
  //   img: 'assets/review4.png',
  //   review:
  //     'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  // },
];

export const myProjects = [
  {
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Comprehensive Financial Analysis and Valuation of NVIDIA',
    desc: 'Conducted an extensive financial analysis of NVIDIA to assess its intrinsic stock value using the Discounted Cash Flow (DCF) methodology. Analyzed historical data (CY 2014–2023), projected future performance (CY 2024–2029), calculated Weighted Average Cost of Capital (WACC), and developed automated Excel models. Provided actionable investment insights by estimating the implied stock price.',
    subdesc:
      'Developed automated Excel models to calculate an implied stock price, offering actionable investment guidance.',
    href: '',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Nvidia',
        path: '/assets/icons8-nvidia.svg',
      },
      {
        id: 2,
        name: 'Excel',
        path: 'assets/icons8-excel.svg',
      },
      {
        id: 3,
        name: 'Calculator',
        path: '/assets/icons8-calculator.svg',
      },
      {
        id: 4,
        name: 'Stock Market',
        path: '/assets/stock.png',
      },
    ],
  },
  {
    title: 'Quantitative Value Strategy',
    desc: 'Performed data cleaning, calculated key financial ratios, and executed backtesting to uncover undervalued stocks with strong return potential. Utilized Python, Jupyter Notebook, Pandas, Matplotlib, and Excel for comprehensive analysis and visualization, affirming the efficacy of value-based investment strategies.',
    subdesc:
      'Designed and validated a systematic approach to identifying undervalued stocks using advanced financial metrics, rigorous backtesting, and analytical tools.',

    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'Jupyter',
        path: '/assets/icons8-jupyter.svg',
      },
      {
        id: 3,
        name: 'Graph',
        path: '/assets/growth.png',
      },
      {
        id: 4,
        name: 'Bloomberg',
        path: '/assets/bloomberg.svg',
      },
    ],
  },
  {
    title: 'Efficient Data Validation and Repair for Knowledge Graphs',
    desc: 'Implemented advanced validation techniques for Knowledge Graphs using SHACL shapes and the Parker technique to enforce constraints and optimize runtime efficiency. Recorded data violations with SHACL shapes and repaired invalid data points using the Parker technique, which proved to be four times more efficient than traditional methods, ensuring high accuracy and streamlined data validation.',
    subdesc:
      'Enhanced Knowledge Graph data integrity through efficient validation and repair using SHACL shapes and the Parker technique.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'JAVA',
        path: '/assets/java.svg',
      },
      {
        id: 2,
        name: 'Python1',
        path: 'assets/python.png',
      },
      {
        id: 3,
        name: 'Knowledge Graph',
        path: '/assets/knowledge-graph.png',
      },
      {
        id: 4,
        name: 'Git',
        path: '/assets/icons8-git.svg',
      },
    ],
  },
  {
    title: 'Sentiments: Predictor or Reflector of Stock Market Performance',
    desc: 'Developed an advanced sentiment analysis model using BERT to analyze social media and financial news outlets, capturing the impact of public sentiment on stock price movements. Predicted stock prices leveraging key variables through the LLM-Text model and compared its performance against traditional models like ARIMA and LSTM, providing a comprehensive evaluation of predictive accuracy and effectiveness.',
    subdesc:
      'Built and compared sentiment-based stock price prediction models using BERT, LLM-Text, ARIMA, and LSTM, delivering insights into sentiment-driven market dynamics.',
    href: '',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'ChatGPT',
        path: '/assets/icons8-chatgpt.svg',
      },
      {
        id: 2,
        name: 'Google',
        path: 'assets/icons8-google.svg',
      },
      {
        id: 3,
        name: 'X',
        path: '/assets/icons8-x-64.png',
      },
      {
        id: 4,
        name: 'Bloomberg1',
        path: '/assets/bloomberg.svg',
      },
    ],
  },
  {
    title: 'Parts of Speech Tagging with Large Language Models',
    desc: 'Trained a Large Language Model (LLM) on an extensive corpus for parts of speech tagging, leveraging its contextual understanding for linguistic analysis. Evaluated the model’s performance using one-shot and few-shot learning strategies, calculating accuracy for each approach to assess the model’s effectiveness and adaptability.',
    subdesc:
      'Implemented and evaluated parts of speech tagging using LLMs, comparing the accuracy of one-shot and few-shot learning techniques.',
    href: '',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'ChatGPT1',
        path: '/assets/icons8-chatgpt.svg',
      },
      {
        id: 2,
        name: 'NLP',
        path: 'assets/icons8-nlp-64.png',
      },
      {
        id: 3,
        name: 'Google1',
        path: '/assets/icons8-google.svg',
      },
      {
        id: 4,
        name: 'LLM',
        path: '/assets/big data.png',
      },
    ],
  },
  {
    title: 'Reinforcement Learning-Based Autonomous Navigation for Duckiebot',
    desc: 'Designed and implemented a Reinforcement Learning (RL) framework to enable advanced autonomous navigation capabilities for the Duckiebot. Developed a custom RL environment with functionalities like lane following, dynamic lane merging, emergency stopping, and automated parking. Trained the RL agent using PPO and fine-tuned reward functions to optimize performance in both simulated and real-world settings.',
    subdesc:
      'Created and deployed an RL-powered navigation system for Duckiebot, leveraging PPO and custom environments to achieve robust lane following, parking, and emergency response capabilities.',
    href: '',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Duckie',
        path: '/assets/Rubber Duckie.png',
      },
      {
        id: 2,
        name: 'RL',
        path: 'assets/learning.png',
      },
      {
        id: 3,
        name: 'Robot',
        path: '/assets/ai.png',
      },
      {
        id: 4,
        name: 'Linux',
        path: '/assets/icons8-linux-48.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  // {
  //   id: 1,
  //   name: 'Framer',
  //   pos: 'Lead Web Developer',
  //   duration: '2022 - Present',
  //   title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
  //   icon: '/assets/framer.svg',
  //   animation: 'victory',
  // },
  {
    id: 2,
    name: 'BOSCH',
    pos: 'PEP Consultant',
    duration: '2023 - 2024',
    title: ['Consulted on establishing innovative product engineering processes across Bosch divisions.',
    ' Managed projects with a focus on compliance and risk management.',
    ' Assessed product compliance and risk, making data-driven decisions.',
    ' Developed a Market Introduction Gate strategy to streamline product launches.',
    ' Conducted competitive analysis to articulate value outcomes and drive organizational success.'],
    icon: '/assets/bosch.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Recaro Aircraft Seating',
    pos: 'Global Order Management',
    duration: 'Aug-2023 - Oct-2023',
    title: [
      'Monitored revenue metrics to identify growth drivers and optimization opportunities.',
      ' Utilized skills in inventory management, dashboard creation, and KPI tracking.',
      ' Streamlined processes and fostered collaboration to enhance efficiency.',
      ' Improved client interactions through effective process enhancements.'
    ],
    icon: '/assets/recaro_aircraft_seating_logo.jpeg',
    animation: 'salute',
  },
];
