import comp from "D:/FWC/fwc_devBook/docs/.vuepress/.temp/pages/fwc-hr/fwc-hr.html.vue"
const data = JSON.parse("{\"path\":\"/fwc-hr/fwc-hr.html\",\"title\":\"人事系统\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"fwc-hr/fwc-hr.md\"}")
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
