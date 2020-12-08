import {Pane, Button} from "evergreen-ui";
import BrokerSettingsPopover from "./popover";

function ControlPanel() {
    return(
        <Pane
            display= "flex"
            minWidth={"220px"}
            justifyContent={"space-between"}
        >

            <BrokerSettingsPopover/>
            <Button appearance="primary" intent="success">Connect to Broker</Button>
        </Pane>
    )
}

export default ControlPanel;