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
    twitter: '',
	drupal: ''
  };
  if (authors[postWriter]) {
    author.name = authors[postWriter].name;
    author.slug = postWriter;
    author.twitter = authors[postWriter].twitter;
	author.drupal = authors[postWriter].drupal;
    author.bio = authors[postWriter].bio;
  } else {
    const { author: blogWriter, social } = data.site.siteMetadata;
    author.name = blogWriter;
    author.slug = 'trishul';
    author.twitter = social.twitter;
	author.drupal = social.drupal;
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
        {
          (author.twitter && author.twitter !== "") ?
          (<a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/${author.twitter}`}>
            @{author.twitter}
          </a>):
          null
		    }
        {
          (author.drupal && author.drupal !== "") ?
          (<div> Drupal Profile: <a target="_blank" rel="noopener noreferrer" href={`https://drupal.org/u/${author.drupal}`}>
              {author.drupal}</a>
          </div>):
          null
        }
      </p>
    </div>
  )
}

export default Bio
