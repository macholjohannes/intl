import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: 'title_home' })}
        keywords={[`debt collection`, `debt collector`]}
      />
      <div className='mt-6 md:m-10 md:p-10 m-4 p-4 text-center border border-gray-600 border-1 rounded-lg'>
        We no longer actively service consumer accounts. Payments scheduled to
        be processed after November 30th will no longer be processed. A
        successor relationship manager will contact you soon to arrange your
        future payments and needs. If you need to pay sooner or if this is an
        emergency, please call us. Main Line: 303-830-0075 or Toll Free:
        1-866-729-3328.
      </div>
    </Layout>
  )
}

export default IndexPage
