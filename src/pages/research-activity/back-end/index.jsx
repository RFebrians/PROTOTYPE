import * as React from 'react'
import { Link } from 'gatsby'
import { Parallax } from '@react-spring/parallax'
import { Themed } from 'theme-ui'
import Layout from '@lekoarts/gatsby-theme-cara/src/components/layout'
import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider'
import { UpDown, UpDownWide } from '@lekoarts/gatsby-theme-cara/src/styles/animations'
import Svg from '@lekoarts/gatsby-theme-cara/src/components/svg'
import Seo from '@lekoarts/gatsby-theme-cara/src/components/seo'
import Content from '@lekoarts/gatsby-theme-cara/src/elements/content'
import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner'

const BlogSitePage = () => (
  <Layout>
    <Seo title="BlogSite " />
    <Parallax pages={2}>
      <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0} factor={1}>
        <Inner>
          <Themed.h1>Welcome to Back-end Section</Themed.h1>
          <Themed.h4>This is a Backend</Themed.h4>
        </Inner>
      </Content>
    </Parallax>
  </Layout>
)

export default BlogSitePage
