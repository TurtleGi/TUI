export default {
    title: 'TUI',
    description: 'Just playing around.',
    lang: 'en-US',
      // Theme related configurations.
      lastUpdated: true,
      ignoreDeadLinks: true,
      base: "",
  themeConfig: {
    logo: '/logo.svg',
    nav: [
        { text: 'Github', link: 'https://github.com/TurtleGi/TUI' },
        // {
        //   text: 'Dropdown Menu',
        //   items: [
        //     { text: 'Item A', link: '/item-1' },
        //     { text: 'Item B', link: '/item-2' },
        //     { text: 'Item C', link: '/item-3' }
        //   ]
        // }
      ],
      markdown: {
        config: (md) => {
        const { demoBlockPlugin } = require('vitepress-theme-demoblock')
        md.use(demoBlockPlugin)
        }
        },
      sidebar: [
        {
          text: '指引',
          items: [
            { text: '介绍', link: '/introduce/' },
            { text: '安装', link: '/download/' },
            { text: '快速开始', link: '/begin/' },
            { text: '开发', link: '/dev/' },
          ],
          
        },
        {
            text: '组件',
            items: [
              { text: 'avatar', link: '/avatar/' },
              { text: 'button', link: '/button/' },
              { text: 'breadcrumb', link: '/breadcrumb/' },
              { text: 'dropdown', link: '/dropdown/' },
              { text: 'form', link: '/form/' },
              { text: 'grid', link: '/grid/' },
              { text: 'icon', link: '/icon/' },
              { text: 'layout', link: '/layout/' },
              { text: 'list', link: '/list/' },
              { text: 'menu', link: '/menu/' },
              { text: 'progress', link: '/progress/' },
              { text: 'switch', link: '/switch/' },
              { text: 'table', link: '/table/' },
              { text: 'timepick', link: '/timepick/' },
              { text: 'upload', link: '/upload/' },



            ],
            
          }
      ]
  }
  }
  