import {Pane, Button, Badge} from "evergreen-ui";
import ClientSettingsPopover from "./popover";
import {useState, useEffect} from "react";


let badgeStates = {
    NotConnected: {
        color: "neutral",
        text: "Not Connected"
    },
    Connected: {
        color: "green",
        text: "Connected"
    }
    ,
    Error: {
        color: "red",
        text: "Error"
    }
}



function ControlPanel(props) {
    const [connectionStateBadge, setConnectionStateBadge] = useState(badgeStates.NotConnected);

    useEffect(()=>{
        setConnectionStateBadge(badgeStates[props.settings.state]);
    })

    return (
        <Pane
            display="flex"
            justifyContent={"space-between"}
            alignItems={"center"}
        >

            <Badge
                color={connectionStateBadge.color}
            >
                {connectionStateBadge.text}
            </Badge>

            <ClientSettingsPopover disconnectFromBroker={props.disconnectFromBroker} connectToBroker={props.connectToBroker} clientState={props.settings} />
            <Button onClick={() => {props.sendTestMessage("guiCommands", "TEST")}}/>


        </Pane>
    )
}

export default ControlPanel;