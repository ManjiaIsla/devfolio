module.exports = {
  siteMetadata: {
// Site URL for when it goes live
siteUrl: `https://manjiaisla.github.io/`,
// Your Name
name: 'Manjia(Lyn) LIN',
// Main Site Title
title: `Manjia(Lyn) LIN | Algorithm Engineer`,
// Description that goes under your name in main bio
description: `Extensive research in AI, #Data Mining #ML #DL #RL - practice in commodity retail and financial technology`,
// Optional: Twitter account handle
author: `@LynLIN17424271`,
// Optional: Github account URL
github: `https://github.com/ManjiaIsla`,
// Optional: LinkedIn account URL
linkedin: `https://www.linkedin.com/in/manjia/`,
    // Content of the About Me section
    about: `After implementing tons of black-boxs SOTA Algorithm at 996 factory for almost 2 years,the un-solved problem why some works fine in particular area while another does not, drive me crazy everyday and I decide to start the new journey. Give it a shot to explore the mechanism behind it instead of getting the business outcome with looking fine algorithm`,
    // Optional: List your education, they must have `name` and `description`. `link` is optional.
    education: [
      {
        name: '2019 - 2020,         Hong Kong University of Science and Technology',
        description: 'Master of Science in Data-driven Modeling',
        link: '',
      },
      {
        name: '2015 - 2019,         Guangdong University of Finance and Economics',
        description: 'Bachelor of Science in Applied Statistics;  Bachelor of Economics in Financial Engineering',
        link: '',
      }      
    ],
    // Optional: List your publications, they must have `name` and `description`. `link` is optional.
    publications: [
      {
        name: 'May 2020,            Research on Task Pricing Model in Spatial Crowdsourcing Environment',
        description:
          'My undergraduate thesis supervised by Zheng Jun and public in Journal of Quantitative Economics',
        link: 'https://caod.oriprobe.com/articles/59069265/Study_on_Task_Pricing_Model_in_Space_Crowdsourcing.htm',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: '2021 - Current,      Algorithm engineer at Meituan',
        description: 'Practice in Group Recommender system and my work includes deep learning acceleration, multi-task learning optimization, representation learning (user multi-interests, price-aware recommendation), adversarial learning and reinforcement learning',
        link: '',
      },
      {
        name: 'Jul - Aug, 2020               Natural Language Engineer Intern at Ping An Technology',
        description: 'Funny things I did here Intrigued my curiosity in Chatbot and Our team developed the first financial QA system in China and applied it to finance, especially in financial policy planning',
        link: '',
      },
      {
        name: 'May - Jul, 2020               Data Analyst Intern at ByteDance',
        description: 'biggest Commercial Advertising Platform on china give me opportunity to play with big data and devise a tool to automately monitor business process,alerting issue and push advertisement briefs',
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
      name: 'China Merchants Bank fintech Competition - Predictive Modeling of Credit Default Users',
      description:
        'May 2020 · Ranking Top 1%; Won both honor and Award; Issued by China Merchants Bank',
      link: '',
    },
    {
      name: 'Second Prize of Contemporary Undergraduate Mathematical Contest in Modeling (CUMCM)',
      description:
        'Issued by China Industry Association, China Applied Mathematics Association and Mathematical Modeling Committee · Nov 2017',
      link: '',
    },
    {
      name: 'National Inspirational Scholarship',
      description:
        'Issued by Guangdong Education Bureau · Nov 2017',
      link: '',
    },
    {
      name: 'outstanding graduates',
      description:
        'Issued by Guangdong University of Finance and Economics(GDUFE) · Apr 2019',
      link: '',
    },
    {
      name: 'dean scholarships',
      description:
        'Issued by GDUFE · Mar 2019',
      link: '',
    },
    {
      name: 'principal scholarships',
      description:
        'one of the top 5 students in Dept.Finance, Issued by GDUFE · Mar 2019',
      link: '',
    },
    {
      name: 'Academic Research Award',
      description:
        'Rank No.1 in major level, Issued by GDUFE · Feb 2019',
      link: '',
    },
    {
      name: 'Academic Excellence Award',
      description:
        'Obtained for two consecutive academic years; Issued by GDUFE · Nov 2017 - Nov 2018',
      link: '',
    },
    {
      name: 'outstanding student leaders of the school',
      description:
        'Issued by GDUFE · Sep 2018',
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
