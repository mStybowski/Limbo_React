import {Pane, Button} from "evergreen-ui";
import BrokerSettingsPopover from "./popover";

function ControlPanel() {
    return(
        <Pane
            display= "flex"
            flexDirection="row"
            alignItems="center"
        >
            <BrokerSettingsPopover/>
            <Button marginRight={16} appearance="primary" intent="success">Connect to Broker</Button>
        </Pane>
    )
}

export default ControlPanel;