import comp from "D:/FWC/fwc_devBook/docs/.vuepress/.temp/pages/dev-log/tech-back.html.vue"
const data = JSON.parse("{\"path\":\"/dev-log/tech-back.html\",\"title\":\"后端选型\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"dev-log/tech-back.md\"}")
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
