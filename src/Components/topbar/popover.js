import {Button, Pane, Popover, Text, Autocomplete, TextInput, TextInputField, ArrowRightIcon, CrossIcon, SmallTickIcon, LinkIcon, Checkbox} from "evergreen-ui";
import {CogIcon} from "evergreen-ui"
import { useEffect, useState} from 'react'
import "./topbar.css"

function ClientSettingsPopover(props) {

    let notConnectedText = "Not connected to MQTT Broker";
    let connectedText = "You are connected to MQTT Broker";
    let displayedIPAddress = "";

    const panelState = {
        brokerIPAddress: "",
        mqttClientID: "GUI",
        protocol: "mqtt",
        testMessage: "Test message from GUI",
        testMessageTopic: "TESTS"
    }

    const [brokerIP, setInputBrokerIP] = useState('localhost');
    const [clientId, setInputClientId] = useState('GUI_Client');
    const [port, setInputPort] = useState("8083");
    const [inputSSL, setInputSSL] = useState({checked:false});
    const [inputSth, setInputSth] = useState({checked:false});


    return(
        <Popover

            shouldCloseOnExternalClick={true}
            content={({close}) => (

                <Pane
                    paddingX={20}
                    paddingY={20}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                >

                    <Pane
                        display={"flex"}


                    >
                        <TextInputField
                            label="Broker IP"
                            placeholder="e.g. 192.168.1.170"
                            marginRight={"10px"}
                            width={"210px"}
                            marginY={10}
                            value={brokerIP}
                            onChange={(e)=> {setInputBrokerIP(e.target.value)}}
                        />

                        <TextInputField
                            label="Port"
                            width={"100px"}
                            placeholder="e.g. 8083"
                            value={port}
                            marginY={10}
                            onChange={(e)=> {setInputPort(e.target.value)}}
                        />
                    </Pane>

                    <TextInputField
                        label="Client ID"
                        hint="This needs to be an unique identifier."
                        placeholder="For example: GUI_Client"
                        alignSelf={"flex-start"}
                        width={"100%"}
                        marginY={10}
                        value={clientId}
                        onChange={(e)=> {setInputClientId(e.target.value)}}
                    />


                    <Pane
                        display={"flex"}
                        justifyContent={"space-between"}
                        width={"100%"}
                        marginY={"5px"}
                    >
                        <Checkbox
                            marginY={10}
                            alignSelf={"flex-start"}
                            label="Use Secure Sockets Layer (SSL)"
                            checked={inputSSL.checked}

                            onChange={e => setInputSSL({ checked: e.target.checked })}
                        />

                        <Checkbox
                            marginY={10}
                            alignSelf={"flex-start"}
                            checked={inputSth.checked}
                            label="Use sth"
                            onChange={e => setInputSth({ checked: e.target.checked })}
                        />
                    </Pane>


                    <Button
                        appearance="primary"
                        onClick={props.connectToBroker}
                        intent="success"
                        textAlign={"center"}
                        onClick={close}
                        iconAfter={LinkIcon}
                        marginY={10}
                    >
                        Connect
                    </Button>

                </Pane>
            )}
            shouldCloseOnExternalClick={false}
        >
            <Button
                iconAfter={CogIcon}
                marginLeft={10}
            >
                MQTT Broker Settings
            </Button>

        </Popover>
    )
}

export default ClientSettingsPopover;