export const themeData = JSON.parse("{\"logo\":\"https://vuepress.vuejs.org/images/hero.png\",\"navbar\":[\"/\",\"/dev-log/dev-log-front.md\",\"/fwc-hr/fwc-hr.md\"],\"sidebar\":{\"/\":[{\"text\":\"首页\",\"children\":[\"/README.md\"]}],\"/dev-log/\":[{\"text\":\"技术选型\",\"children\":[\"/dev-log/tech-docs.md\",\"/dev-log/tech-front.md\",\"/dev-log/tech-back.md\"]},{\"text\":\"开发日志\",\"children\":[\"/dev-log/dev-log-front.md\",\"/dev-log/dev-log-backend.md\"]}],\"/fwc-hr/\":[{\"text\":\"HR系统\",\"children\":[\"/fwc-hr/fwc-hr.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
