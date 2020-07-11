import React from "react"
import Main from "./Main"
import Contact from "./Contact"
import resume from "./resume.json"
import { Layout, SEO } from "../"

const Resume = () => (
  <Layout
    title={resume.basics.name}
    footer={
      <Contact
        name={resume.basics.name}
        enname={resume.basics.enname}
        email={resume.basics.email}
        linkedin={resume.basics.linkedin}
      />
    }
  >
    <SEO title={resume.basics.title} description={resume.basics.description} />
    <Main
      description={resume.basics.description}
      skills={resume.skills}
      milestone={resume.milestone}
    />
  </Layout>
)

export default Resume
