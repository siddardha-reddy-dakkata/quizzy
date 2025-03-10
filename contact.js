function clearAll() {
    var myMail = document.getElementsByClassName("contact_email")[0].value;
    var isEmail = false;
    for (let i = 0; i < myMail.length; i++) {
        if (myMail[i] == '@') isEmail = true;
    }

    if (!isEmail) {
        window.alert("Enter proper email");
    }
    else {
        document.getElementsByClassName("contact_email")[0].value = "";
        document.getElementsByClassName("contact_name")[0].value = "";
        document.getElementsByClassName("contact_address")[0].innerHTML = "";
    }
} 