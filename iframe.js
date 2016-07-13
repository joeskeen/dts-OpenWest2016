var iframe = document.createElement('iframe');
iframe.style.width = 1;
iframe.style.height = 1;
iframe.onload = () => { iframe.contentWindow.document.body.innerText };
iframe.src = '';
document.body.appendChild(iframe);