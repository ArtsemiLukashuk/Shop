import indexHtmlTemplate from '../templates/index-html/index.js'

const rootDiv = document.querySelector('body')
export default function renderIndexHtml() {
    rootDiv.innerHTML = indexHtmlTemplate;
}

