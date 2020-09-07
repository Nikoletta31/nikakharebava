function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
  }




  function menu() {
    let menu = document.getElementById("myTopnav");
  menu.classList.toggle('toggleCls');
    }
  

    
    tippy('#myButton', {
      content: 'Click to copy my email',
     
    });

    tippy('#myButton', {
      content: 'My e-mail has been copied :)',
      trigger: 'click',
    });

 


