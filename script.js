var pageTitleElement = document.getElementById("fill-me")
var pageBoxElements = document.getElementsByClassName("change-all-of-me")
var pageHeadings = document.getElementsByTagName("h1")
// innerHTML()
var pageTitleElementsContent = pageTitleElement.innerHTML;
console.log('isi <div id="container"> :' + pageTitleElementsContent)
var pageBoxElementsContent = pageBoxElements.innerHTML;
console.log('isi <div class="change-all-of-me"> :' + pageBoxElementsContent);