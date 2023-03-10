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
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Research on Task Pricing Model in Spatial Crowdsourcing Environment',
        description:
          'my undergraduate thesis supervised by Zheng Jun and publish on Peking University Core "Economic Mathematics',
        link: 'https://www.cnki.com.cn/Article/CJFDTotal-JJSX202002014.htm',
      },
      {
        name: 'Personalized and Adaptive Multi-Objective Scoring Fusion Network [Inprogress]',
        description:
          'Proposed an efficient way to transform the paradigm in the recall layer of recommender system into multi-task learning. Get verified on video recommender in Tencent and public dataset in Alibaba.',
        link: '',
      },
      {
        name: 'Recommendation Engine',
        description:
          'Build a Recommendation System; Skills: TensorFlow · Algorithm and methogology · Data exploration',
        link: 'https://github.com/ManjiaIsla/proj_v_recom',
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
