const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Robbie Hughes | Full Stack Developer',
    description: 'My portfolio project',
    link: 'http://mysite.com/example"',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    'gatsby-plugin-graphql-codegen',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: path.join(__dirname, 'src', 'data'),
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': 'src/components',
          '@hooks': 'src/hooks',
          '@styles': 'src/styles',
          '@images': 'src/images',
          '@pages': 'src/pages',
          '@utils': 'src/utils',
          '@types': 'src/types',
        },
      },
      extensions: ['js', 'ts', 'tsx'],
    },
  ],
}
