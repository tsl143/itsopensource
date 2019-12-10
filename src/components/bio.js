/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"

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
      avatar: file(absolutePath: { regex: "/trishul.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
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

  let author, twitter;
  if (authors[postWriter]) {
    author = authors[postWriter].name;
    twitter = authors[postWriter].twitter;
  } else {
    const { author: blogWriter, social } = data.site.siteMetadata;
    author = blogWriter;
    twitter = social.twitter;
  }

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      {
        /*
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        */
      }
      <p>
        Written by <strong>{author}</strong> who is a professional frontend developer; writes React code for living and volunteers for Mozilla to justify his existence.
        {` `}
        <a href={`https://twitter.com/${twitter}`}>
          You should follow him on Twitter.
        </a>
      </p>
    </div>
  )
}

export default Bio
