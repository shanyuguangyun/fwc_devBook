import comp from "D:/FWC/fwc_devBook/docs/.vuepress/.temp/pages/dev-log/dev-log-backend.html.vue"
const data = JSON.parse("{\"path\":\"/dev-log/dev-log-backend.html\",\"title\":\"开发日志-houduan\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"dev-log/dev-log-backend.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
