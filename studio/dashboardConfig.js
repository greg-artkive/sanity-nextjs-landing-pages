export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6057bfa956c36454dbe21a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-s6uaemsc',
                  apiId: '2133b280-cc11-4841-b2b3-20b8b664f7ac'
                },
                {
                  buildHookId: '5f6057c0a956c3624bdbe237',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fy1p41zb',
                  apiId: 'b54ec51f-eb74-45f1-bcea-6961bcc837c5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/greg-artkive/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fy1p41zb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
