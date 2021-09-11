import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Container from "../components/layout/Container"
import Header from "../components/Header"
import LinkExternal from "../components/LinkExternal"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Header />
        <p>
          Helping to solve last mile logistics as a{" "}
          <strong>Head of Product Design</strong>{" "}
          <LinkExternal url="https://stuart.com" title="Visit the Stuart company website">
            @Stuart
          </LinkExternal>
          .
          <br />I also host the{" "}
          <LinkExternal
            url="https://www.meetup.com/product-design-barcelona/"
            title="Product Design Barcelona Meetup Group"
          >
            @Product Design Barcelona Meetup
          </LinkExternal>
          .
        </p>
      </Container>
    </Layout>
  )
}

export default IndexPage
