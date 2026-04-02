// const openWindow = document.querySelector(".hidden");
// const item = document.querySelectorAll("a.content");
// const closeWindow = document.querySelector(".closed");

// closeWindow.addEventListener("click", (e) => {
//   openWindow.classList.remove("display");
// });
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     openWindow.classList.remove("display");
//   }
// });

// item[0].addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target);
//   openWindow.children[0].classList.add("display");
//   // openWindow.classList.add("display");
// });

// item[1].addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target);
//   openWindow[1].classList.add("display");
// });

const items = document.querySelectorAll("a.content");
const allWindows = document.querySelectorAll(".hidden");
const closeBtns = document.querySelectorAll(".closed");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    // 取得按鈕設定的目標 ID (例如 "c1")
    const targetId = item.getAttribute("data-target");
    const targetWindow = document.getElementById(targetId);

    if (targetWindow) {
      targetWindow.classList.add("display");
    }
  });
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 找到該按鈕往上層最近的 .hidden 視窗並關閉
    const parentWindow = btn.closest(".hidden");
    parentWindow.classList.remove("display");
  });
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    allWindows.forEach((win) => win.classList.remove("display"));
  }
});
allWindows.forEach((win) => {
  win.addEventListener("click", (e) => {
    if (e.target === win) {
      win.classList.remove("display");
    }
  });
});
