import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  es: "Español",
}

const Language = () => {
  return (
    <div className="px-4 py-2 mb-2 border rounded text-black border-grayoutline font-medium hover:text-white hover:border-white transition duration-300 ease-in-out">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `black` : `black`,
                display: currentLocale === language ? `none` : `block`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
