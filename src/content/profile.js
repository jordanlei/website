export const hero = {
  name: 'welcome-banner',
  background: 'var(--background-color)',
  backgroundDepth: -0.3,
  layers: [
    { image: '/images/profile/profile_cyan.png', yDepth: -1, xDepth: -0.4, className: 'screen layer-one' },
    { image: '/images/profile/profile_magenta.png', yDepth: -1, xDepth: 0.2, className: 'screen layer-two' },
    { image: '/images/profile/profile_yellow.png', yDepth: -1, xDepth: 0.4, className: 'screen layer-three' },
  ],
}

export const socialLinks = [
  { image: '/images/experience/linkedin.png', label: 'LinkedIn', href: 'https://www.linkedin.com/in/jordan-lei-782890130/' },
  { image: '/images/experience/instagram.png', label: 'Instagram', href: 'https://www.instagram.com/leijordanart/' },
  { image: '/images/experience/twitter.png', label: 'X', href: 'https://twitter.com/NeuroLei' },
  { image: '/images/experience/medium.png', label: 'Medium', href: 'https://jordanlei.medium.com/' },
]
