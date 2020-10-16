const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Robbie Hughes | Full Stack Developer',
    description: 'My portfolio project',
    link: 'http://mysite.com/example"',
  },
  plugins: [
    'gatsby-plugin-graphql-codegen',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
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
