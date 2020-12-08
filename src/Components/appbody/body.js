import {Label, Pane, Textarea} from "evergreen-ui";
import Terminal from "./main/terminal"


function AppBody(){
    return(
        <Pane
        display={"flex"}
        margin={"auto"}
        width={"1200px"}
        justifyContent={"space-between"}
        >
            <Pane
                width={"550px"}
            >

            </Pane>
            <Pane>
                <Terminal/>
            </Pane>
        </Pane>
    )
}

export default AppBody;