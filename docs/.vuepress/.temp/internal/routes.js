export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/FWC/fwc_devBook/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"系统架构"} }],
  ["/dev-log/dev-log-backend.html", { loader: () => import(/* webpackChunkName: "dev-log_dev-log-backend.html" */"D:/FWC/fwc_devBook/docs/.vuepress/.temp/pages/dev-log/dev-log-backend.html.js"), meta: {"title":"开发日志-houduan"} }],
  ["/dev-log/dev-log-front.html", { loader: () => import(/* webpackChunkName: "dev-log_dev-log-front.html" */"D:/FWC/fwc_devBook/docs/.vuepress/.temp/pages/dev-log/dev-log-front.html.js"), meta: {"title":"权限设计"} }],
  ["/dev-log/tech-back.html", { loader: () => import(/* webpackChunkName: "dev-log_tech-back.html" */"D:/FWC/fwc_devBook/docs/.vuepress/.temp/pages/dev-log/tech-back.html.js"), meta: {"title":"后端选型"} }],
  ["/dev-log/tech-docs.html", { loader: () => import(/* webpackChunkName: "dev-log_tech-docs.html" */"D:/FWC/fwc_devBook/docs/.vuepress/.temp/pages/dev-log/tech-docs.html.js"), meta: {"title":"文档记录"} }],
  ["/dev-log/tech-front.html", { loader: () => import(/* webpackChunkName: "dev-log_tech-front.html" */"D:/FWC/fwc_devBook/docs/.vuepress/.temp/pages/dev-log/tech-front.html.js"), meta: {"title":"前端选型"} }],
  ["/fwc-hr/fwc-hr.html", { loader: () => import(/* webpackChunkName: "fwc-hr_fwc-hr.html" */"D:/FWC/fwc_devBook/docs/.vuepress/.temp/pages/fwc-hr/fwc-hr.html.js"), meta: {"title":"人事系统"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/FWC/fwc_devBook/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
