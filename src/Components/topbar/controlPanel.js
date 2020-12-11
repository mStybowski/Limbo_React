import {Pane, Button, Badge} from "evergreen-ui";
import ClientSettingsPopover from "./popover";
import {useState} from "react";

function ControlPanel(props) {

    let intent = "warning";
    const [connectionStateBadge, setConnectionStateBadge] = useState({color: "neutral", text:"Not connected"});
    (props.connectToBroker)?intent="success":intent="warning";


    return(
        <Pane
            display= "flex"
            justifyContent={"space-between"}
            alignItems={"center"}
        >

            <Badge
                color={connectionStateBadge.color}
            >
                {connectionStateBadge.text}
            </Badge>
            <ClientSettingsPopover connectToBroker={props.connectToBroker} clientState={props.settings}/>


        </Pane>
    )
}

export default ControlPanel;