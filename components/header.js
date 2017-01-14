import logo from "./distill-logo.svg";

const html = `
<style>
dt-header {
  display: block;
  position: relative;
  height: 60px;
  background-color: hsl(223, 9%, 25%);
  width: 100%;
  box-sizing: border-box;
  z-index: 2;
  color: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
}
dt-header .content {
  height: 70px;
}
dt-header a {
  font-size: 16px;
  height: 60px;
  line-height: 60px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
}
dt-header svg {
  width: 24px;
  position: relative;
  top: 4px;
  margin-right: 2px;
}

@media(min-width: 1080px) {
  dt-header {
    height: 70px;
  }
  dt-header a {
    height: 70px;
    line-height: 70px;
  }
}

dt-header svg path {
  fill: none;
  stroke: rgba(255, 255, 255, 0.8);
  stroke-width: 3px;
}
dt-header .logo {
  font-size: 13px;
  font-weight: 300;
  text-transform: uppercase;
  padding: 28px 0;
}
dt-header .nav {
  float: right;
  font-weight: 300;
}
dt-header .nav a {
  font-size: 14px;
}
</style>

<div class="content l-page">
  <a href="/" class="logo">
    ${logo}
    Distill
  </a>
  <div class="nav">
    <a href="/faq">About</a>
    <!-- https://twitter.com/distillpub -->
  </div>
</div>
`

export default function(dom, data) {
  let el = dom.querySelector("dt-header");
  if(el) {
    el.innerHTML = html;
  } else {
    let header = dom.createElement("dt-header");
    header.innerHTML = html;
    let b = dom.querySelector("body");
    b.insertBefore(header, b.firstChild);
  }
}
