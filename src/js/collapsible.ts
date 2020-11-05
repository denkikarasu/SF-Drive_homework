window.onload = function () {

    const collapsible = document.getElementsByClassName('collapsible');
    let i: number;
  
    for (i = 0; i < collapsible.length; i++) {
      collapsible.item(i).addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        content.classList.toggle('open');
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  };
  