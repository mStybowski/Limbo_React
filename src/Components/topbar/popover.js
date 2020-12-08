import {Button, Pane, Popover} from "evergreen-ui";

function BrokerSettingsPopover() {
    return(
    <Popover
        content={({close}) => (
            <Pane
                width={260}
                height={320}
                paddingX={40}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
            >
                <Button onClick={close}>Close</Button>
            </Pane>
        )}
        shouldCloseOnExternalClick={true}
    >
        <Button>Settings</Button>
    </Popover>
    )
}

export default BrokerSettingsPopover;