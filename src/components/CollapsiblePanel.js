import React, {Fragment, useState} from "react";

function CollapsiblePanel (props) {
    const [open, changeOpen] = useState(false);

    return (
        <>  
            { open ? 
                <button type="button" className="collapsible active" onClick={() => changeOpen(false)}> 
                    {props.panel.question}<span className="collapsible_icon icon-chevron-down"></span>
                </button> : 
                <button type="button" className="collapsible" onClick={() => changeOpen(true)}>
                    {props.panel.question}<span className="collapsible_icon icon-chevron-down"></span>
                </button>
            }

            <div className={open ? "content open" : "content"}>
                <p>{props.panel.answer}</p>
            </div>
        </>
    );
}

export default CollapsiblePanel;