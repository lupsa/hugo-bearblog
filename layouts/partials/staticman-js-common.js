if (/comment-thankyou/.test(window.location.href)) {
    document.getElementById('comment-thankyou').style.display = 'block';
}else{
    document.getElementById('comment-thankyou').style.display = 'none';
}

function replyTo(parent) {
  var e = document.getElementById(parent);
  document.getElementsByName('fields[reply_to]')[0].value=parent;
  document.getElementById("resetButton").hidden = false;
}

function reset(parent) {
  var e = document.getElementById(parent);
  document.getElementsByName('fields[reply_to]')[0].value=parent;
  document.getElementById("resetButton").hidden = true;
}

function checkForm(form){

    if(form.yourname.value == ""){
        form.warningComment.style.display = 'block'; 
        form.warningComment.innerText = "Please type your name";
        return false;
    }
    else if(form.yourcomment.value == ""){
        form.warningComment.style.display = 'block'; 
        form.warningComment.innerText = "Please type a comment";
        return false;
    }
    else{
        form.submitButton.disabled = true;
        form.warningComment.style.display = 'none'; 
        form.warningComment.innerText = "";
        form.submitButton.innerText = "Sending...";
        return true;
    }
    
}