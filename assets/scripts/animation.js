/* Author: Daiki Nomura*/

// Parallax
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".js-parallax").forEach((wrap) => {
  const y = wrap.getAttribute("data-y") || -100;

  gsap.to(wrap, {
    y: y,
    scrollTrigger: {
      trigger: wrap,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
    },
  });
});

// Chart
// プログレスバーの設定
const progressBars = document.querySelectorAll('.progressbar');

gsap.utils.toArray(progressBars).forEach((bar) => {
  gsap.to(bar, {
    scrollTrigger: {
      trigger: bar,
      start: "top bottom",
      once: true,
      onEnter: () => {
        const progress = parseFloat(bar.dataset.progress) / 100;
        const barOptions = {
          strokeWidth: 6,
          trailWidth: 6,
          trailColor: "#ddd",
          easing: "easeInOut",
          duration: 4600,

          text: {
            value: "0%",
            className: "progressbar__label",
          },
          from: {
            color: "#91caff",
          },
          to: {
            color: "#91caff",
          },
          step: (state, bar) => {
            const value = Math.round(bar.value() * 100);
            bar.setText(`${value}%`);
          },
        };
        const barObject = new ProgressBar.SemiCircle(bar, barOptions);
        barObject.animate(progress);
      },
    },
  });
});
