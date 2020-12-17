import {Pane, Text} from "evergreen-ui"
import ComponentHeading from "./componentHeading";

function Stats(){
    return(
        <Pane
            width={"100%"}
            height={"80px"}
            border={"default"}
        >
            <ComponentHeading name={"Stats"}/>

        </Pane>
    )
}

export default Stats;