document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style')

  style.textContent = `
    @import("https://chinese-fonts-cdn.deno.dev/packages/lxgwwenkai/dist/LXGWWenKai-Regular/result.css")
    
    @font-face {
      font-family: 'LXGW WenKai' !important;
    }
    * {
      font-family: 'LXGW WenKai' !important;
    }
  `

  document.head.appendChild(style)
})
