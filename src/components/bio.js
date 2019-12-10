/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const authors = {
  trishul: {
    name: "Trishul Goel",
    twitter: "trishulgoel"
  },
  shivam: {
    name: "Shivam Singhal",
    twitter: "idkhtml"
  },
}

const Bio = ({author: postWriter = ''}) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  let author = {
    slug: '',
    name: '',
    twitter: ''
  };
  if (authors[postWriter]) {
    author.name = authors[postWriter].name;
    author.slug = postWriter;
    author.twitter = authors[postWriter].twitter;
  } else {
    const { author: blogWriter, social } = data.site.siteMetadata;
    author.name = blogWriter;
    author.slug = 'trishul';
    author.twitter = social.twitter;
  }

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <div
        style={{
          minWidth: 50,
          minHeight: 50,
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          overflow: `hidden`
        }}
      >
        <img
          alt={author.name}
          style={{
            width: 50,
            height: `auto`,
            borderRadius: `100%`,
          }}
          src={`/${author.slug}.jpg`}
        />
      </div>
      <p>
        Written by <strong>{author.name}</strong> who is a professional frontend developer; writes React code for living and volunteers for Mozilla to justify his existence.
        {` `}
        <a href={`https://twitter.com/${author.twitter}`}>
          You should follow him on Twitter.
        </a>
      </p>
    </div>
  )
}

export default Bio
