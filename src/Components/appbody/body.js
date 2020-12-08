import {Label, Pane, Textarea} from "evergreen-ui";
import { useState, useEffect} from "react";
import Dashboard from "../dashboard";
import Main from "./main/main"
import Learning from "../Learning"

function AppBody(){

    let initialDashboardState = [
        {
            name: "MQTT",
            value: "DISABLED",
            details: "MQTT Broker is running properly"
        },
        {
            name: "Data",
            value: "DISABLED",
            details: "MQTT Broker is running properly"
        },
        {
            name: "ONLINE",
            value: "DISABLED",
            details: "MQTT Broker is running properly"
        },
        {
            name: "Learning",
            value: "DISABLED",
            details: "MQTT Broker is running properly"
        }
    ]

    const [DashboardState, setDasboardState] = useState(initialDashboardState);

    return(
        <Pane
        display={"flex"}
        flexDirection={"column"}
        margin={"auto"}
        width={"1200px"}
        justifyContent={"space-between"}
        >

            <Dashboard elements={DashboardState}/>
            <Main/>
            <Learning />

        </Pane>
    )
}

export default AppBody;