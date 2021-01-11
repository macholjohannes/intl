import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { ExternalLink } from "react-external-link"
import ImageMain from "./imagemain"


const CenterHeader = () => (
<div className="relative">
      <div className="">
        <ImageMain />
      </div>
      <div className="absolute bottom-10 left-0 max-w-xl">
        <div className="ml-6 md:ml-10 p-4 py-2 rounded bg-grayfront">
          <div className="text-white font-medium text-4xl mb-2">
          <FormattedMessage id="headline" />
          </div>
          <div className="text-white ">
          <FormattedMessage id="headline2" />
          </div>
        </div>
        <div className="bg-yellowbutton font-bold text-xl uppercase ml-6 md:ml-10 mt-4 p-2 pl-6 rounded-md w-60">
        <ExternalLink href="https://mjfirm.payweb360.com/">
        <FormattedMessage id="button1" />&nbsp;&raquo;
        </ExternalLink>
        </div>
      </div>
    </div>
)
export default CenterHeader