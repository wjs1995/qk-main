import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "qk-micro-vue2",
    entry: "//localhost:8081",
    container: "#container",
    activeRule: "/app-vue2",
  },
]);
// 启动 qiankun
start();
