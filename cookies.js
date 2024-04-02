const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  // 如果 cookie 包含 "angitiabio",则不执行后续操作
  if (document.cookie.includes("angitiabio")) return;

  // 显示弹窗
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // 隐藏弹窗
      cookieBox.classList.remove("show");

      // 如果按钮ID为 "acceptBtn"
      if (button.id == "acceptBtn") {
        // 设置 cookie,有效期为 6 个月
        document.cookie = "cookieBy= angitiabio; max-age=" + 60 * 60 * 24 * 180;
      }
    });
  });
};

// 在页面加载时执行 executeCodes 函数
window.addEventListener("load", executeCodes);