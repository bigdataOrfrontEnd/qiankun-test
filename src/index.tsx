import React from "react";
import { createRoot, Root } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./public-path"; //这个是解决静态资源加载的问题
import App from "./App";

let root: Root;
/** 不是qiankun 聚合的时候进行的加载 */
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

/** 根据参数判断从哪儿获取值  basename={(window as any).__POWERED_BY_QIANKUN__ ? "/app-test" : "/"}*/
function render(props: any) {
  const { container } = props;
  const dom = container
    ? container.querySelector("#rootR")
    : document.getElementById("rootR");
  root = createRoot(dom);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap(props: any) {
  console.log("bootstrap", props);
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: any) {
  console.log("mount", props);
  // props.onGlobalStateChange((state: any, prev: any) => {
  //   // state: 变更后的状态; prev 变更前的状态
  //   console.log("子项目----start");
  //   console.log(state, prev);
  //   console.log("子项目----end");
  // });
  // props.setGlobalState(state);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props: any) {
  root.unmount();
}

// 增加 update 钩子以便主应用手动更新微应用
export async function update(props: any) {}
