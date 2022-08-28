
import { defineSchema, defineConfig } from 'tinacms'
import { client } from './__generated__/client'

const schema = defineSchema({
  config: {
    token: '<Your Read Only Token>', // generated on app.tina.io,
    clientId: '<Your Client ID>', // generated on app.tina.io
    branch: 'main'
  },
  collections: [
    {
      label: 'Pages',
      name: 'page',
      path: 'src/pages',
      format: 'md',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
          isTitle: true,
          required: true
        },
        {
          type: 'rich-text',
          label: 'Body',
          name: 'body',
          isBody: true
        }
      ]
    }
  ]
})

export default schema

export const tinaConfig = defineConfig({
  client,
  schema,
  cmsCallback: (cms) => {
    import('tinacms').then(({ RouteMappingPlugin }) => {
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        return undefined
      })
      cms.plugins.add(RouteMapping)
    })

    return cms
  }
})
