/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { rhythm } from "../utils/typography"

import { authors } from "../globals"

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
    author.bio = authors[postWriter].bio;
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
      <Link
        to={`/author/${author.slug}`}
        style={{
          minWidth: 50,
          minHeight: 50,
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          overflow: `hidden`,
          boxShadow: 'none'
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
      </Link>
      <p>
        <strong>{author.name}</strong> {author.bio}.
        <br/>
        <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/${author.twitter}`}>
          @{author.twitter}
        </a>
      </p>
    </div>
  )
}

export default Bio
