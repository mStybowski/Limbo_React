import {Pane, Text} from "evergreen-ui"
import ComponentHeading from "./appbody/main/componentHeading";

function Learning(){
    return(
        <Pane
            width={"100%"}
            height={"100px"}
            border={"default"}
            marginY={"40px"}
        >
            <ComponentHeading name={"Learning process"}/>

        </Pane>
    )
}

export default Learning;