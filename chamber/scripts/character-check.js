function titleCheck() {
    var regexp = /^[a-zA-Z- ]*$/;
    var check = document.getElementById('title').value;
    if (check.search(regexp) === -1)
        { document.getElementById('title').value = check.slice(0, -1);}
    else
        { document.getElementById('title').value = check}
}
