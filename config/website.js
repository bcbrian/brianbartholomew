const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Brian Bartholomew - Web App Guru', // Navigation and Site Title
  siteTitleAlt: 'Brian Bartholomew', // Alternative Site title for SEO
  siteTitleShort: 'Brian B', // short_name for manifest
  siteHeadline: 'Trying not to break the interwebs', // Headline for schema.org JSONLD
  siteUrl: 'https://brianbartholomew.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Hi I\'m Brian. I specialize in React web apps and React trainings',
  author: 'bcbrian', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@thebcbrian', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language
  // googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
