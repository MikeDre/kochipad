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
    icon: 'ChartsIcon',
    name: 'Presales',
    routes: [
      {
        path: '#',
        name: 'Launch presale',
      },
      {
        path: '#',
        name: 'Browse Presales',
      }
    ],
  },
  {
    path: '#',
    icon: 'CardsIcon',
    name: 'Airdrop',
  },
  {
    path: '#',
    icon: 'ButtonsIcon',
    name: 'Past Projects Performance',
  },
  {
    path: '#',
    icon: 'ModalsIcon',
    name: 'Staking',
  },
  {
    path: '#',
    icon: 'TablesIcon',
    name: 'Documentation',
  }
]

export default routes
