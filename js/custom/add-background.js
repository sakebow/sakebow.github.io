// add our custom dynamic background image
(function addBackgroundImageDiv () {
  // create dom element for background images
  // ----------------------------------------
  const opacityMask = document.createElement("div");
  opacityMask.style.background = "linear-gradient(#fff, #ffced9, #fff)";
  opacityMask.style.position = "fixed";
  opacityMask.style.top = "0";
  opacityMask.style.left = "0";
  opacityMask.style.content = "";
  opacityMask.style.width = "100%";
  opacityMask.style.height = "100%";
  opacityMask.style.opacity = "0.8";
  opacityMask.style.zIndex = "-2";
  const imageContainer = document.createElement("div");
  imageContainer.style.position = "fixed";
  imageContainer.style.top = "0";
  imageContainer.style.left = "0";
  imageContainer.style.content = "";
  imageContainer.style.width = "100%";
  imageContainer.style.height = "100%";
  imageContainer.style.zIndex = "-3";
  const imageScroller = document.createElement("div");
  imageScroller.id = "image-scroller";
  imageScroller.style.position = "fixed";
  imageScroller.style.top = "0";
  imageScroller.style.left = "0";
  imageScroller.style.content = "";
  imageScroller.style.width = "400%";
  imageScroller.style.height = "100%";
  imageScroller.style.display = "flex";
  imageContainer.style.justifyContent = "space-around";
  imageContainer.style.alignContent = "center";
  imageContainer.style.alignItems = "center";
  imageScroller.style.zIndex = "-4";
  document.body.appendChild(opacityMask);
  document.body.appendChild(imageContainer);
  document.body.appendChild(imageScroller);
  // well done! basic frames established!

  // url for background images
  // -------------------------
  const BASE_URL = 'http://images.sakebow.cn/bgimage/'
  const DEVICES = ['pc']
  const imgWindowUrl = { 'pc': [
    '/race-miku.jpg', '/masuri-miku.jpg', '/planet-miku.jpg', '/4mikus.jpg'
  ] };
  for (const imgUrlItem of imgWindowUrl['pc']) {
    const imageFrameItemContainer = document.createElement("div");
    imageFrameItemContainer.style.width = imageContainer.style.width;
    imageFrameItemContainer.style.height = "100%";
    imageFrameItemContainer.innerHTML = "<img" +
      " src='" + BASE_URL + DEVICES[0] + imgUrlItem + "'" +
      " style='width: 100%; height: 100%;'" +
      " alt='network broken?' />";
    imageScroller.appendChild(imageFrameItemContainer);
  }
  // well done! all images ready!

  // keyframe to roll images
  // -------------------------------
  // create style element
  const imageRollStyle = document.createElement('style');
  // set animation time for all
  const EPOCH_TIME = 64;
  // set animation style for all
  const ANIMATION_DEFAULT_SETTINGS = "s linear infinite running ";
  // set keyframes into style element
  imageRollStyle.innerHTML = `@keyframes image-roll {
    0%  { left: 0; } 24% { left: 0; } 25% { left: -100%; } 49% { left: -100%; } 50% { left: -200%; }
    74% { left: -200%; } 75% { left: -300%; } 99% { left: -300%; } 100%{ left: 0; }
  }@-webkit-keyframes image-roll {
    0%  { left: 0; } 24% { left: 0; } 25% { left: -100%; } 49% { left: -100%; } 50% { left: -200%; }
    74% { left: -200%; } 75% { left: -300%; } 99% { left: -300%; } 100%{ left: 0; }
  }@-moz-keyframes image-roll {
    0%  { left: 0; } 24% { left: 0; } 25% { left: -100%; } 49% { left: -100%; } 50% { left: -200%; }
    74% { left: -200%; } 75% { left: -300%; } 99% { left: -300%; } 100%{ left: 0; }
  }@-khtml-keyframes image-roll {
    0%  { left: 0; } 24% { left: 0; } 25% { left: -100%; } 49% { left: -100%; } 50% { left: -200%; }
    74% { left: -200%; } 75% { left: -300%; } 99% { left: -300%; } 100%{ left: 0; }
  }@-o-keyframes image-roll {
    0%  { left: 0; } 24% { left: 0; } 25% { left: -100%; } 49% { left: -100%; } 50% { left: -200%; }
    74% { left: -200%; } 75% { left: -300%; } 99% { left: -300%; } 100%{ left: 0; }
  }@keyframes image-translate-child-1 {
    0%  { scale: 1; opacity: 0 } 2% { scale: 1; opacity: 1; } 23% { scale: 1.1; } 25%, 100% { scale: 1.1; opacity: 0; }
  }@-webkit-keyframes image-translate-child-1 {
    0%  { scale: 1; opacity: 0 } 2% { scale: 1; opacity: 1; } 23% { scale: 1.1; } 25%, 100% { scale: 1.1; opacity: 0; }
  }@-moz-keyframes image-translate-child-1 {
    0%  { scale: 1; opacity: 0 } 2% { scale: 1; opacity: 1; } 23% { scale: 1.1; } 25%, 100% { scale: 1.1; opacity: 0; }
  }@-khtml-keyframes image-translate-child-1 {
    0%  { scale: 1; opacity: 0 } 2% { scale: 1; opacity: 1; } 23% { scale: 1.1; } 25%, 100% { scale: 1.1; opacity: 0; }
  }@-o-keyframes image-translate-child-1 {
    0%  { scale: 1; opacity: 0 } 2% { scale: 1; opacity: 1; } 23% { scale: 1.1; } 25%, 100% { scale: 1.1; opacity: 0; }
  }
  #image-scroller>div:nth-child(1) {
    animation: ${EPOCH_TIME + ANIMATION_DEFAULT_SETTINGS} image-translate-child-1;
  }@keyframes image-translate-child-2 {
    0%, 25%  { scale: 1; opacity: 0 } 27% { scale: 1; opacity: 1; } 48% { scale: 1.1; } 50%, 100% { scale: 1.1; opacity: 0; }
  }@-webkit-keyframes image-translate-child-2 {
    0%, 25%  { scale: 1; opacity: 0 } 27% { scale: 1; opacity: 1; } 48% { scale: 1.1; } 50%, 100% { scale: 1.1; opacity: 0; }
  }@-moz-keyframes image-translate-child-2 {
    0%, 25%  { scale: 1; opacity: 0 } 27% { scale: 1; opacity: 1; } 48% { scale: 1.1; } 50%, 100% { scale: 1.1; opacity: 0; }
  }@-khtml-keyframes image-translate-child-2 {
    0%, 25%  { scale: 1; opacity: 0 } 27% { scale: 1; opacity: 1; } 48% { scale: 1.1; } 50%, 100% { scale: 1.1; opacity: 0; }
  }@-o-keyframes image-translate-child-2 {
    0%, 25%  { scale: 1; opacity: 0 } 27% { scale: 1; opacity: 1; } 48% { scale: 1.1; } 50%, 100% { scale: 1.1; opacity: 0; }
  }
  #image-scroller>div:nth-child(2) {
    animation: ${EPOCH_TIME + ANIMATION_DEFAULT_SETTINGS} image-translate-child-2;
  }@keyframes image-translate-child-3 {
    0%, 50%  { scale: 1; opacity: 0 } 52% { scale: 1; opacity: 1; } 73% { scale: 1.1; } 75%, 100% { scale: 1.1; opacity: 0; }
  }@-webkit-keyframes image-translate-child-3 {
    0%, 50%  { scale: 1; opacity: 0 } 52% { scale: 1; opacity: 1; } 73% { scale: 1.1; } 75%, 100% { scale: 1.1; opacity: 0; }
  }@-moz-keyframes image-translate-child-3 {
    0%, 50%  { scale: 1; opacity: 0 } 52% { scale: 1; opacity: 1; } 73% { scale: 1.1; } 75%, 100% { scale: 1.1; opacity: 0; }
  }@-khtml-keyframes image-translate-child-3 {
    0%, 50%  { scale: 1; opacity: 0 } 52% { scale: 1; opacity: 1; } 73% { scale: 1.1; } 75%, 100% { scale: 1.1; opacity: 0; }
  }@-o-keyframes image-translate-child-3 {
    0%, 50%  { scale: 1; opacity: 0 } 52% { scale: 1; opacity: 1; } 73% { scale: 1.1; } 75%, 100% { scale: 1.1; opacity: 0; }
  }
  #image-scroller>div:nth-child(3) {
    animation: ${EPOCH_TIME + ANIMATION_DEFAULT_SETTINGS} image-translate-child-3;
  }@keyframes image-translate-child-4 {
    0%, 75%  { scale: 1; opacity: 0 } 77% { scale: 1; opacity: 1; } 98% { scale: 1.1; } 100% { scale: 1.1; opacity: 0; }
  }@-webkit-keyframes image-translate-child-4 {
    0%, 75%  { scale: 1; opacity: 0 } 77% { scale: 1; opacity: 1; } 98% { scale: 1.1; } 100% { scale: 1.1; opacity: 0; }
  }@-moz-keyframes image-translate-child-4 {
    0%, 75%  { scale: 1; opacity: 0 } 77% { scale: 1; opacity: 1; } 98% { scale: 1.1; } 100% { scale: 1.1; opacity: 0; }
  }@-khtml-keyframes image-translate-child-4 {
    0%, 75%  { scale: 1; opacity: 0 } 77% { scale: 1; opacity: 1; } 98% { scale: 1.1; } 100% { scale: 1.1; opacity: 0; }
  }@-o-keyframes image-translate-child-4 {
    0%, 75%  { scale: 1; opacity: 0 } 77% { scale: 1; opacity: 1; } 98% { scale: 1.1; } 100% { scale: 1.1; opacity: 0; }
  }
  #image-scroller>div:nth-child(4) {
    animation: ${EPOCH_TIME + ANIMATION_DEFAULT_SETTINGS} image-translate-child-4;
  }`;
  // well done! now images can be rolling with fadeIn and fadeOut style, as well as scale 1.1x slowly

  // 将style样式存放到head标签
  // ----------------------
  document.getElementsByTagName('head')[0].appendChild(imageRollStyle);
  imageScroller.style.animation = `${EPOCH_TIME + ANIMATION_DEFAULT_SETTINGS} image-roll`;
  // well done! keyframes in effect!

  // set background image url after rolling
  // --------------------------------------
  let count = 0, updateIndex = 0;
  const imgUrls = { 'pc': [
    'race-miku.jpg', 'masuri-miku.jpg', 'planet-miku.jpg', '4mikus.jpg', '84672028_p0.jpg', '84932457_p0.png',
    'touhou-red.jpg', 'shojo-white.jpg', 'reimu-christmas.jpg', '2020-miku.jpg', 'yae-chiyapao.jpg'
  ] }
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      let imgChangeInterval = null;
      let imageChangeTimeOut = setTimeout(function () {
        if (imgChangeInterval != null) {
          clearInterval(imgChangeInterval);
          imgChangeInterval = null;
        }
        imgChangeInterval = setInterval(function () {
          updateIndex = (count + 2) % 4
          const imageDivElement = document.getElementById("image-scroller").children[updateIndex];
          let sampleImg = Math.floor(Math.random() * imgUrls[DEVICES[0]].length);
          imageDivElement.innerHTML = "<img" +
            " src='" + BASE_URL + DEVICES[0] + '/' + imgUrls[DEVICES[0]][sampleImg] + "'" +
            " style='width: 100%; height: 100%;'" +
            " alt='network broken?' />";
          count = (count + 1) % 4;
        }, 64000 / 4);
        clearTimeout(imageChangeTimeOut);
      }, 2000);
    }
  }
  // well done! now images can be updated!
})()