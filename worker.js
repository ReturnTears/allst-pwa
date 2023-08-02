self.onmessage = e => {
    console.log("收到 index.html 消息", e.data);
    if (e.data.type === "send") {
        self.postMessage("received")
    }
}