export default defineAppConfig({
  docus: {
    title: 'Narrative I/O, Inc Employee Handbook',
    description: 'The Employee Handbook.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'narrative_io',
      github: 'narrative-io/narrative-handbook'
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: true
    },
    footer: {
      iconLinks: [
        {
          href: 'https://www.narrative.io/',
          icon: 'simple-icons:nuxtdotjs'
        }
      ]
    }
  }
})
