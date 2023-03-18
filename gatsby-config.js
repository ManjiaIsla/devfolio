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
    about: `A self-motivated technology enthusiast with proven skills and in depth knowledge in programming and algorithm. Have extensive research in AI and good at machine learning and deep learning. Proficient in using data-driven methods to design and monitor learning effects, identify bottlenecks and continue to optimize, practice in the fields of commodity retail and financial technology`,
    // Optional: List your education, they must have `name` and `description`. `link` is optional.
    education: [
      {
        name: '2019.09 - 2020.11   Hong Kong University of Science and Technology',
        description: 'Master of Science in Data-driven Modeling',
        link: '',
      },
      {
        name: '2015.09 - 2019.06   Guangdong University of Finance and Economics',
        description: 'Bachelor of Science in Applied Statistics and  Bachelor of Economics in Financial Engineering',
        link: '',
      }      
    ],
    // Optional: List your publications, they must have `name` and `description`. `link` is optional.
    publications: [
      {
        name: 'Research on Task Pricing Model in Spatial Crowdsourcing Environment',
        description:
          'My undergraduate thesis supervised by Zheng Jun and public in Journal of Quantitative Economics, Vol.37,No.2,Jun 2020',
        link: 'https://caod.oriprobe.com/articles/59069265/Study_on_Task_Pricing_Model_in_Space_Crowdsourcing.htm',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Recommender System | System R&D Department | Meituan',
        description: 'Algorithm Developer, May 2021 - Current',
        link: '',
      },
      {
        name: 'smart QA system | AI Center | Ping An Technology',
        description: 'Algorithm Developer, Jul 2020 - Nov 2020',
        link: '',
      },
      {
        name: 'Hooli',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your project, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Recommender System | System R&D Department | Meituan',
        description: 'Algorithm Developer, May 2021 - Current',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
      // Optional: List your honors and awards, they must have `name` and `description`. `link` is optional.
  honorsandawards: [
    {
      name: 'Outstanding Graduates',
      description:
        '',
      link: '',
    },
    {
      name: 'Principal/Dean scholarships',
      description:
        '',
      link: '',
    },
    {
      name: 'Second Prize at CUMCM (Contemporary Undergraduate Mathematical Contest in Modeling)',
      description:
        '',
      link: '',
    },
    {
      name: 'Second Prize at CUMCM (Contemporary Undergraduate Mathematical Contest in Modeling)',
      description:
        '',
      link: '',
    },
    {
      name: 'Outstanding Student Leaders of the School',
      description:
        '',
      link: '',
    },
    {
      name: 'Academic Excellence Awards',
      description:
        '',
      link: '',
    },
    {
      name: 'Academic Research Awards',
      description:
        '',
      link: '',
    },
    {
      name: 'Student Awards of Merit',
      description:
        '',
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
