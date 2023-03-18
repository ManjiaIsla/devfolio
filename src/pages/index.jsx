import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
import SectionEducation from '../components/section-education';
import SectionProjects from '../components/section-projects';
import sectionPublications from '../components/section-publications';
import SectionHonorsAndAwards from '../components/section-honorsandawards';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const education = get(data, 'site.siteMetadata.education', false);
  const publications = get(data, 'site.siteMetadata.publications', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const honorsandawards = get(data, 'site.siteMetadata.honorsandawards', false);
  const posts = data.allMarkdownRemark.edges;
  const noBlog = !posts || !posts.length;

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {about && <SectionAbout about={about} />}
      {education && education.length && (
        <SectionEducation education={education} />
      )}
      {publications && publications.length && (
        <SectionPublications publications={publications} />
      )}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {!noBlog && <SectionBlog posts={posts} />}
      {skills && skills.length && <SectionSkills skills={skills} />}
      {honorsandawards && honorsandawards.length && (
        <SectionHonorsAndAwards honorsandawards={honorsandawards} />
      )}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        education {
          name
          description
          link
        }
        publications {
          name
          description
          link
        }
        experience {
          name
          description
          link
        }
        projects {
          name
          description
          link
        }
        skills {
          name
          description
        }
        honorsandawards {
          name
          description
          link
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
