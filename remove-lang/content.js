document.addEventListener('DOMContentLoaded', function() {
    const htmlElement = document.documentElement
    if (htmlElement.hasAttribute('lang')) {
        htmlElement.removeAttribute('lang')
    }
})
