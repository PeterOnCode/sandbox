import { createI18n } from 'vue-i18n'

const loadLocaleMessages = () => {
  const locales = require.context( '../locales', true,
    /[A-Za-z0-9-_,\s]+\.json$/i )
  const messages = {}
  locales.keys().forEach( key => {
    const matched = key.match( /([A-Za-z0-9-_]+)\./i )
    if ( matched && matched.length > 1 ) {
      const locale = matched[ 1 ]
      messages[ locale ] = locales( key )
    }
  } )
  return messages
}

// export const selectedLanguage = localStorage.getItem( 'language' ) || 'hu'

const options = {
  locale : 'hu' || 'en',
  fallbackLocale : 'en',
  messages : loadLocaleMessages(),
  silentTranslationWarn : true,
  legacy : false
}
export const i18n = createI18n( options )
