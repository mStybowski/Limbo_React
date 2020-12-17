import {Text, Pane, Label} from "evergreen-ui";
import ComponentHeading from "./componentHeading";

function Terminal(){
    return(
        <Pane
            minWidth={"400px"}
            height={"100%"}
            border={"default"}
        >
            <ComponentHeading name={"Terminal"}/>

        </Pane>
    )
}

export default Terminal;