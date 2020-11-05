window.onload = function () {

    let collapsible = document.getElementsByClassName("collapsible");
    let i: number;
  
    for (i = 0; i < collapsible.length; i++) {
      collapsible.item(i).addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        content.classList.toggle("open");
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  };
  