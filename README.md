# allst-pwa

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## PWA
``` text
🍎 PWA相关概念介绍
🍒 Progressive Web App, 简称PWA, 是提升 Web App 的体验的一种新方法，能给用户原生应用的体验
    PWA是渐进式Web开发技术
    PWA同时具备了web应用与原生应用的优点
    PWA 能做到原生应用的体验不是靠特指某一项技术，而是经过应用一些新技术进行改进，在安全、性能和体验三个方面都有很大提升，PWA 本质上是 Web App，借助一些新技术也具备了 Native App 的一些特性，兼具 Web App 和 Native App 的优点。

🍒 PWA演变过程
    从Hybrid到PWA，从封闭到开放

🍒 PWA特征
    🍑 渐进增强
    🍑 响应式用户界面
    🍑 不依赖网络连接
    🍑 类原生应用
    🍑 持续更新
    🍑 安全
    🍑 可发现
    🍑 再次访问
    🍑 可安装
    🍑 可连接性

🍎 PWA相关技术介绍
🍒 Web App Manifest
🍒 Service Worker
    🍓 Service Worker 简介
    背景：如何让网页的用户体验做到极致
    随着 Web 的快速发展，用户对站点的体验期望值越来越高，想要让自己的产品在无数产品中脱颖而出，就必须提升产品的性能和体验。
    前端工程师有很多性能优化的手段，包括 CDN、CSS Sprite、文件的合并压缩、异步加载、资源缓存等等。
    什么是 Service Worker ?
    W3C 组织早在 2014 年 5 月就提出过 Service Worker 这样的一个 HTML5 API ，主要用来做持久的离线缓存。
    Service Worker 有以下功能和特性：
    🥝 一个独立的 worker 线程，独立于当前网页进程，有自己独立的 worker context。
    🥝 一旦被 install，就永远存在，除非被手动 unregister
    🥝 用到的时候可以直接唤醒，不用的时候自动睡眠
    🥝 可编程拦截代理请求和返回，缓存文件，缓存的文件可以被网页进程取到（包括网络离线状态）
    🥝 离线内容开发者可控
    🥝 能向客户端推送消息
    🥝 不能直接操作 DOM
    🥝 必须在 HTTPS 环境下才能工作
    🥝 异步实现，内部大都是通过 Promise 实现
    🍓 怎么使用Service Worker
    🍇 前提条件
    Service Worker 出于安全性和其实现原理，在使用的时候有一定的前提条件。
    🥝 由于 Service Worker 要求 HTTPS 的环境，我们通常可以借助于 github page 进行学习调试。当然一般浏览器允许调试 Service Worker 的时候 host 为 localhost 或者 127.0.0.1 也是 ok 的。
    🥝 Service Worker 的缓存机制是依赖 Cache API 实现的
    🥝 依赖 HTML5 fetch API
    🥝 依赖 Promise 实现
    🍇 注册
    要安装 Service Worker， 我们需要通过在 js 主线程（常规的页面里的 js ）注册 Service Worker 来启动安装，这个过程将会通知浏览器我们的 Service Worker 线程的 javaScript 文件在什么地方呆着。
    🍌 查看是否注册成功
    如果你很困惑，我的 Service Worker 到底注册成功没有呢？注册成功是什么样子呢？
    可以在 PC 上打开我们的好伙伴 chrome 浏览器, 输入 chrome://inspect/#service-workers
    🍌 注册失败的原因
    为啥会导致 Service Worker 注册失败呢？原因基本就是以下几种情况：
    不是 HTTPS 环境，不是 localhost 或 127.0.0.1。
    Service Worker 文件的地址没有写对，需要相对于 origin。
    Service Worker 文件在不同的 origin 下而不是你的 App 的，这是不被允许的。
    🍇 安装
    在你的 Service Worker 注册成功之后呢，我们的浏览器中已经有了一个属于你自己 web App 的 worker context 啦， 在此时，浏览器就会马不停蹄的尝试为你的站点里面的页面安装并激活它，并且在这里可以把静态资源的缓存给办了。
    install 事件我们会绑定在 Service Worker 文件中，在 Service Worker 安装成功后，install 事件被触发。
    install 事件一般是被用来填充你的浏览器的离线缓存能力。为了达成这个目的，我们使用了 Service Worker 新的标志性的存储 cache API — 一个 Service Worker 上的全局对象，它使我们可以存储网络响应发来的资源，并且根据它们的请求来生成key。这个 API 和浏览器的标准的缓存工作原理很相似，但是是只对应你的站点的域的。它会一直持久存在，直到你告诉它不再存储，你拥有全部的控制权。
    
🍒 Push Notification
🍒 相关Other API

```