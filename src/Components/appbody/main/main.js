import {Pane} from "evergreen-ui"
import Terminal from "./terminal"
import Stats from "./stats"
import Recognizing from "./recognizing"
import Files from "./files"

function LeftMain(){
    return(
        <Pane
            width={"100%"}
            height={"300px"}
            marginRight={"10px"}
        >

            <Stats/>

            <Pane
                display={"flex"}
                width={"100%"}
                marginTop={"10px"}
            >

                <Files/>
                <Recognizing/>

            </Pane>

        </Pane>
    )
}

function Main(){
    return(
        <Pane
            display={"flex"}
            width={"100%"}
            height={"500px"}
        >
            <LeftMain />
            <Terminal />

        </Pane>
    )
}

export default Main;

