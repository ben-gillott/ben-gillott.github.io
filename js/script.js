function copyMail() {
    const el = document.createElement('textarea');
    el.value = "bg357@cornell.edu";
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Copied bg357@cornell.edu to clipboard");
  }
