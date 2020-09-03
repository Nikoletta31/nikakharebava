function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
  }




  function menu() {
    let menu = document.getElementById("myTopnav");
  menu.classList.toggle('toggleCls');
    }
  

    $(function () {
        $('[data-toggle="tooltip"]').tooltip({'delay': { show: 1, hide: 3000 }
    });   
});

 


