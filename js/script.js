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

    // var copyText = "bg357@cornell.edu";

    // /* Select the text field */
    // // copyText.select();
    // // copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    // /* Copy the text inside the text field */
    // document.execCommand("copy");
    // /* Alert the copied text */
    alert("Copied bg357@cornell.edu");
  }