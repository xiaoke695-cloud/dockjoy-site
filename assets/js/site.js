// DockJoy 静态官网交互：移动导航、内嵌视频播放
(function () {
  const nav = document.querySelector(".nav");
  const toggle = document.getElementById("navToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const player = document.getElementById("demoPlayer");
  const video = player ? player.querySelector("video") : null;

  function play(seconds) {
    if (!player || !video) return;
    player.classList.add("playing");
    if (typeof seconds === "number") video.currentTime = seconds;
    video.play().catch(() => {});
  }

  if (player) {
    player.addEventListener("click", (e) => {
      if (e.target.tagName === "VIDEO") return;
      play();
    });
    player.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        play();
      }
    });
  }

  document.querySelectorAll("[data-play]").forEach((btn) => {
    btn.addEventListener("click", () => play());
  });

  document.querySelectorAll("[data-video-jump]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const t = Number(btn.getAttribute("data-video-jump"));
      play(Number.isFinite(t) ? t : 0);
      if (player) player.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  });

  if (video) {
    const source = video.querySelector("source");
    if (source) {
      source.addEventListener("error", () => {
        if (!player) return;
        player.classList.add("playing");
        video.style.display = "none";
        if (!player.querySelector(".video-fallback")) {
          const box = document.createElement("div");
          box.className = "video-fallback";
          box.style.cssText =
            "padding:72px 24px;text-align:center;color:#A3A39D;font-size:14px;line-height:1.8";
          box.innerHTML = "演示视频加载失败。<br />刷新页面，或直接申请试用。";
          player.appendChild(box);
        }
      });
    }
  }
})();
