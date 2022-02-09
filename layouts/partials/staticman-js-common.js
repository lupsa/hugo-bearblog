if (/comment-thankyou/.test(window.location.href)) {
    document.getElementById('comment-thankyou').style.display = 'block';
}else{
    document.getElementById('comment-thankyou').style.display = 'none';
}

function replyTo(parent, name, commentID) {
  var e = document.getElementById(parent),
      z = document.getElementById('comment-' + commentID),
      f = document.getElementById('comment-form'),
      h = document.getElementById('comment-form-header');

  h.innerHTML = 'Reply to ' + name;
  z.parentNode.insertBefore(f, z.nextSibling);
  document.getElementsByName('fields[reply_to]')[0].value=parent;
  document.getElementById("resetButton").hidden = false;
}

function reset(parent) {
  var a = document.getElementById('comment-thankyou'),
      f = document.getElementById('comment-form'),
      h = document.getElementById('comment-form-header');

  h.innerHTML = 'Your thoughts?';
  a.parentNode.insertBefore(f, a.previousSibling);
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