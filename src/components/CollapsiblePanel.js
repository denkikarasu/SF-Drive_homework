import React, {Fragment} from "react";

function CollapsiblePanel (props) {
    // const [open, changeOpen] = useState(false);

    return (
        <>
            <button type="button" className="collapsible">
                {props.panel.question}<span className="collapsible_icon icon-chevron-down"></span>
            </button>
            <div className="content">
                <p>{props.panel.answer}</p>
            </div>
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