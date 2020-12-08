import {Button, Pane, Popover} from "evergreen-ui";
import Logo from "./logo"
import ControlPanel from "./controlPanel";

function Topbar() {
    return(
        <Pane
            width="100%"
            height={50}
            border="default"
            paddingX="50px"
        >
            <Pane
                margin="auto"
                maxWidth="1200px"

                height="100%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Logo />

                <ControlPanel/>
            </Pane>

        </Pane>
    )
}

export default Topbar;