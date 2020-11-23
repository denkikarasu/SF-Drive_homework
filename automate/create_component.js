const yargs = require("yargs");
const fs = require("fs").promises;
const path = require("path");

const argv = yargs
    .option("path", { alias: "p", string: true, default: "../src/components/", describe: "Specify file path (optional)"})
    .option("type", {alias: "t", string: true, default: "f", choices: ["f", "s"], describe: "Specify component type: f - functional (default), s - statefull"})
    .command(["create [componentName]", "c"], "Creates a new component", {
        // path: {
        //     alias: "p",
        //     default: "../src/components/",
        //     string: true
        // },
    }, (argv) => {
     
        if(argv.componentName) {
            componentName = argv.componentName;
            filename = argv.componentName + ".js";
        } else {
            componentName = "NewComponent";
            filename = "NewComponent.js";
        }

        const filepath = path.resolve(argv.path, filename);
        let content = "";

        if(argv.type === "f") {
            console.log("type f");
            content = 
`import React from "react";

function ${componentName} () {
    return (
        <p>${componentName} contents</p>
    );
}

export default ${componentName};`;
        } else if (argv.type === "s") {
            content = 
`import React, {useState} from "react";

function ${componentName} (props) {
    const [state, changeState] = useState(false);

    return (
        <div>  
            <p>${componentName} contents</p>
            { state ? 
                <button onClick={() => changeState(true)}>Change state</button> : <button onClick={() => changeState(false)}>Change state</button> 
            }
        </div>
    );
}

export default ${componentName};`;
        
        }

        fs.writeFile(filepath, content)
            .then(() => console.log("The component has been created."))
            .catch(err => console.log("Error: ", err));
    })
    .demandCommand(1, " Please enter the command \"create\" to create component.\n Use flag --path (-p) to specify path. \n Use flag --type (-t) to specify component type: f - functional (stateless), s - statefull.")
    .argv;