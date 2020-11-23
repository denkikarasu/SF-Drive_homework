import React, {Fragment, useState} from "react";

function handleClick() {
    changeOpen(true);
    collapsibleScript();
  };

function collapsibleScript () {

    let collapsible = document.getElementsByClassName("collapsible");
    let i;
  
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
}


function CollapsiblePanel (props) {
    const [open, changeOpen] = useState(false);

    return (
        <>  
            <button type="button" className={open ? "collapsible active" : "collapsible"} onClick={() => handleClick()}>
                {props.panel.question}<span className="collapsible_icon icon-chevron-down"></span>
            </button>

            <div className={open ? "content open" : "content"}>
                <p>{props.panel.answer}</p>
            </div>

            {/* <button type="button" className="collapsible">
                {props.panel.question}<span className="collapsible_icon icon-chevron-down"></span>
            </button>
            
            <div className="content">
                <p>{props.panel.answer}</p>
            </div> */}

            {/* <button type="button" className={open ? "collapsible active" : "collapsible"} onClick={() => changeOpen(true)}>
                {props.panel.question}<span className="collapsible_icon icon-chevron-down"></span>
            </button>

            <div className={open ? "content open" : "content"}>
                <p>{props.panel.answer}</p>
            </div> */}
        </>
    );
}

export default CollapsiblePanel;