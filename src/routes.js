export const homeRoutes = {
  name: 'Home',
  to: '/',
  exact: true,
  icon: 'chart-pie',
  children: [{ to: '/', name: 'Dashboard', exact: true }, { to: '/landing', name: 'Landing' }]
};

export const pageRoutes = {
  name: 'Pages',
  to: '/pages',
  icon: 'copy',
  children: [
    { to: '/pages/activity', name: 'Activity' },
    { to: '/pages/associations', name: 'Associations' },
    { to: '/pages/billing', name: 'Billing' },
    { to: '/pages/customer-details', name: 'Customer details' },
    { to: '/pages/event-detail', name: 'Event detail' },
    { to: '/pages/event-create', name: 'Event create' },
    { to: '/pages/events', name: 'Events' },
    { to: '/pages/faq', name: 'Faq' },
    { to: '/pages/invoice', name: 'Invoice' },
    { to: '/pages/invite-people', name: 'Invite people' },
    { to: '/pages/notifications', name: 'Notifications' },
    { to: '/pages/people', name: 'People' },
    { to: '/pages/pricing', name: 'Pricing' },
    { to: '/pages/pricing-alt', name: 'Pricing alt' },
    { to: '/pages/profile', name: 'Profile' },
    { to: '/pages/settings', name: 'Settings' },
    { to: '/pages/starter', name: 'Starter' },
    {
      to: '/errors',
      name: 'Errors',
      children: [{ to: '/errors/404', name: '404' }, { to: '/errors/500', name: '500' }]
    }
  ]
};

export const documentationRoutes = {
  name: 'Documentation',
  to: '/documentation',
  exact: true,
  icon: 'book'
};

export const componentRoutes = {
  name: 'Components',
  to: '/components',
  icon: 'puzzle-piece',
  children: [
    { to: '/components/alerts', name: 'Alerts' },
    { to: '/components/accordions', name: 'Accordions' },
    { to: '/components/avatar', name: 'Avatar' },
    { to: '/components/badges', name: 'Badges' },
    { to: '/components/backgrounds', name: 'Backgrounds' },
    { to: '/components/breadcrumb', name: 'Breadcrumb' },
    { to: '/components/buttons', name: 'Buttons' },
    { to: '/components/cards', name: 'Cards' },
    { to: '/components/collapses', name: 'Collapses' },
    { to: '/components/dropdowns', name: 'Dropdowns' },
    { to: '/components/forms', name: 'Forms' },
    { to: '/components/listgroups', name: 'List groups' },
    { to: '/components/modals', name: 'Modals' },
    { to: '/components/navs', name: 'Navs' },
    { to: '/components/navbars', name: 'Navbars' },
    { to: '/components/pageheaders', name: 'Page headers' },
    { to: '/components/paginations', name: 'Paginations' },
    { to: '/components/popovers', name: 'Popovers' },
    { to: '/components/progress', name: 'Progress' },
    { to: '/components/tables', name: 'Tables' },
    { to: '/components/tooltips', name: 'Tooltips' }
  ]
};

export const pluginRoutes = {
  name: 'Plugins',
  to: '/plugins',
  icon: 'plug',
  children: [
    { to: '/plugins/typed', name: 'Typed' },
    { to: '/plugins/image-lightbox', name: 'Image lightbox' },
    { to: '/plugins/google-map', name: 'Google map' },
    { to: '/plugins/chart', name: 'Chart' },
    { to: '/plugins/countup', name: 'Countup' },
    { to: '/plugins/datetime', name: 'Datetime' },
    { to: '/plugins/fontawesome', name: 'Fontawesome' },
    { to: '/plugins/echarts', name: 'Echarts' },
    { to: '/plugins/toastify', name: 'Toastify' },
    { to: '/plugins/select', name: 'Select' }
  ]
};

export const utilityRoutes = {
  name: 'Utilities',
  to: '/utilities',
  icon: ['fab', 'hotjar'],
  children: [
    { to: '/utilities/borders', name: 'Borders' },
    { to: '/utilities/clearfix', name: 'Clearfix' },
    { to: '/utilities/closeIcon', name: 'Close icon' },
    { to: '/utilities/colors', name: 'Colors' },
    { to: '/utilities/display', name: 'Display' },
    { to: '/utilities/embed', name: 'Embed' },
    { to: '/utilities/figures', name: 'Figures' },
    { to: '/utilities/flex', name: 'Flex' },
    { to: '/utilities/grid', name: 'Grid' },
    { to: '/utilities/sizing', name: 'Sizing' },
    { to: '/utilities/spacing', name: 'Spacing' },
    { to: '/utilities/stretchedLink', name: 'Stretched link' },
    { to: '/utilities/typography', name: 'Typography' },
    { to: '/utilities/verticalAlign', name: 'Vertical align' },
    { to: '/utilities/visibility', name: 'Visibility' }
  ]
};

export default [homeRoutes, pageRoutes, componentRoutes, utilityRoutes, pluginRoutes, documentationRoutes];
