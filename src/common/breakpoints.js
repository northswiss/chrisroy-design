const size = {
  phone: `320px`,
  tablet: `768px`,
  laptop: `1280px`,
  desktop: `1440px`,
}
const device = {
  phone: `(min-width: ${size.phone})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
}
export default { size, device }
