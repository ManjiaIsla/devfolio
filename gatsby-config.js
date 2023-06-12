module.exports = {
  siteMetadata: {
// Site URL for when it goes live
siteUrl: `https://manjiaisla.github.io/`,
// Your Name
name: 'Manjia(Lyn) LIN',
// Main Site Title
title: `Manjia(Lyn) LIN | Algorithm Engineer`,
// Description that goes under your name in main bio
description: `Mail: manjialin1@gmail`,
// Optional: Twitter account handle
author: `@LynLIN17424271`,
// Optional: Github account URL
github: `https://github.com/ManjiaIsla`,
// Optional: LinkedIn account URL
linkedin: `https://www.linkedin.com/in/manjia/`,
    // Content of the About Me section
    about: `I am actively seeking opportunities to pursue a Ph.D. in academia. I am passionate about AI for social good and have expertise in areas such as graph learning, multi-task learning, self-supervised learning and reinforcement learning.`,
    // Optional: List your education, they must have `name` and `description`. `link` is optional.
    education: [
      {
        name: 'Hong Kong University of Science and Technology',
        description: '2019 - 2020 · Master of Science in Data-driven Modeling',
        link: '',
      },
      {
        name: 'Guangdong University of Finance and Economics',
        description: '2015 - 2019 · Dual Bachelor with Distinction(ranking 1/115), Financial Engineering and statistics.',
        link: '',
      }      
    ],
    // Optional: List your publications, they must have `name` and `description`. `link` is optional.
    publications: [
      {
        name: 'J. Zheng, M. LIN, R. Hu, "Study on Task Pricing Model in Space Crowdsourcing Environment," Quantitative Economics, vol 37, no 2, pp. 104-110, Jun 2020',
        description:
          'My undergraduate thesis, supervised by Prof. Zheng Jun',
        link: 'https://caod.oriprobe.com/articles/59069265/Study_on_Task_Pricing_Model_in_Space_Crowdsourcing.htm',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Machine Learning engineer at Meituan',
        description: '2021 - Current · My work in the field of recommender systems includes the acceleration of deep learning, optimization of multi-task learning, representation learning (including user multi-interests and price-aware recommendation), adversarial learning, and reinforcement learning.',
        link: '',
      },
      {
        name: 'Natural Language Engineer Intern at Ping An Technology',
        description: 'Jul 2020- Aug 2020 · Developed name entity recogition model and reading comprehension model. Our team developed the first financial QA system in China and applied it to finance, especially in financial policy planning',
        link: '',
      },
      {
        name: 'Data Intern at ByteDance',
        description: 'May 2020- Jul 2020 ·  My experience includes tackling big data in the industry on the largest commercial advertising platform in China. I have also devised a tool to automatically monitor business processes, alert for issues, and push advertisement briefs.',
        link: '',
      },
    ],  
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, Scala, Java, R, Matlab, TensorFlow, Keras, PyTorch',
      },
      {
        name: 'Data Processing',
        description: 'Hive, Spark, Tableau, Excel, Redis, Linux text processing',
      }
    ],
      // Optional: List your honors and awards, they must have `name` and `description`. `link` is optional.
  honorsandawards: [
    {
      name: 'China Merchants Bank Fintech Competition: Predictive Modeling of Credit Default Users',
      description:
        'May 2020 · Ranking top 1%; Won both honor and award; Issued by China Merchants Bank',
      link: '',
    },
    {
      name: 'Outstanding Graduates',
      description:
        'Apr 2019 · Issued by Guangdong University of Finance and Economics (GDUFE)',
      link: '',
    },
    {
      name: 'Dean Scholarships',
      description:
        'Mar 2019 · Issued by GDUFE',
      link: '',
    },
    {
      name: 'Principal Scholarships',
      description:
        'Mar 2019 · One of the top 5 students in Dept.Finance; Issued by GDUFE',
      link: '',
    },
    {
      name: 'Academic Research Award',
      description:
        'Feb 2019 · Rank No. 1 in major level; Issued by GDUFE',
      link: '',
    },
    {
      name: 'Academic Excellence Award',
      description:
        '2017 - 2018 · Obtained for two consecutive academic years; Issued by GDUFE ',
      link: '',
    },
    {
      name: 'Distinguished Student Leader',
      description:
        'Sep 2018 · Issued by GDUFE',
      link: '',
    },
    {
      name: 'Second prize of Contemporary Undergraduate Mathematical Contest in Modeling (CUMCM)',
      description:
        'Nov 2017 · Issued by China Industry Association, China Applied Mathematics Association and Mathematical Modeling Committee',
      link: '',
    },
    {
      name: 'National Inspirational Scholarship',
      description:
        'Nov 2017 · Issued by Guangdong Education Bureau ',
      link: '',
    },
  ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
