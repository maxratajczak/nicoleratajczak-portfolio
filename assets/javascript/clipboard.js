var copyClip = new ClipboardJS('#emailCpyBtn');
copyClip.on("success", copyEmailAction);

// Changes "EMAIL" title to "COPIED TO CLIPBOARD" to notify user //
function copyEmailAction (){
    var title = document.getElementById("emailTitle");
    title.style.color = "green";
    title.innerHTML = "COPIED TO CLIPBOARD";
    setTimeout(revertTitle, 1500);
}

// Reverts "EMAIL" title to original state //
function revertTitle(){
    var title = document.getElementById("emailTitle");
    title.style.color = "var(--font-color)";
    title.innerHTML = "EMAIL";
}