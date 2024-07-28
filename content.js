document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.removeAttribute('lang')
  document.querySelectorAll('[lang]').forEach(element => {
    element.removeAttribute('lang')
  })

  const fontUrl = chrome.runtime.getURL('/LXGWWenKai-Regular.ttf')
  const style = document.createElement('style')

  style.textContent = `
    @font-face {
      font-family: 'LXGWWenKai-Regular-Font';
      src: url(${fontUrl}) format('truetype');
    }
    * {
      font-family: 'LXGWWenKai-Regular-Font' !important;
    }
  `

  document.head.appendChild(style)
})
