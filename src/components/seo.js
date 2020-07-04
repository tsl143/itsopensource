/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { authors } from "../globals"

function SEO({ description, lang, meta, title, titleTemplate, slug = "", author = "trishul", featuredImg }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author,
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const ogURL = site.siteMetadata.siteUrl + slug;

  if (title === site.siteMetadata.title) titleTemplate = `%s`
  else titleTemplate = `%s | ${site.siteMetadata.title}`

  let ogImg = `${site.siteMetadata.siteUrl}/opensource_512.png`;
  try {
    let fImg = featuredImg && featuredImg.split("/").pop();
    if (fImg) ogImg = `${site.siteMetadata.siteUrl}/featured-images/${fImg}`;
  } catch(e) {
    console.error(`Featured image meta error : ${e}`)
  }

  return (
    <>
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
      link={[
        { rel: 'icon', type: 'image/png', sizes: "24x24", href: `/opensource_24.png` },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: `/opensource_32.png` },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: ogURL,
        },
        {
          property: `og:image`,
          content: ogImg,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@${authors[author].twitter}`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: ogImg,
        }
      ].concat(meta)}
    />
    {
      // This is a check for uploading images in static/featured-images for meta
      (process.env.NODE_ENV === "development") &&
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <img alt="metaImg check" width="1" height="1" style={{display: 'none'}} src={ogImg} onError={() => alert(`${ogImg} not uploaded`)} />
    }
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
