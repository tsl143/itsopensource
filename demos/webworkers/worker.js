self.addEventListener(
  "message",
  ({ data: { delay = 1000 } }) => {
    let counter = 0
    let time = Date.now();
    while (Date.now() - time <= delay) {
      counter += 1
    }
    self.postMessage(counter)
  },
  false
)
