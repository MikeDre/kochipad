/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '#',
    icon: 'FormsIcon',
    name: 'Launchpads',
  },
  {
    path: '#',
    icon: 'CardsIcon',
    name: 'Airdrop',
  },
  {
    path: '#',
    icon: 'ChartsIcon',
    name: 'Incubator',
  },
  {
    path: '#',
    icon: 'ButtonsIcon',
    name: 'Past Projects Performance',
  },
  {
    path: '#',
    icon: 'ModalsIcon',
    name: 'Ecosystem',
  },
  {
    path: '#',
    icon: 'TablesIcon',
    name: 'Documentation',
  },
  {
    icon: 'PagesIcon',
    name: 'Dropdown Example',
    routes: [
      // submenu
      {
        path: '#',
        name: 'Page',
      },
      {
        path: '#',
        name: 'Page',
      },
      {
        path: '#',
        name: 'Page',
      },
      {
        path: '/app/404',
        name: '404',
      },
      {
        path: '/app/blank',
        name: 'Blank',
      },
    ],
  },
]

export default routes
