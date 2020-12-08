import {Pane, Text, Popover, Label} from "evergreen-ui";
import {TickCircleIcon, DeleteIcon} from "evergreen-ui"


function Item(props){


        return(
            <Popover
                bringFocusInside
                trigger={"hover"}
                content={
                    <Pane
                        height={40}
                        paddingX={10}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                    >
                        <Text>some text</Text>
                    </Pane>
                }
            >
                <Pane
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    {(props.value === "OK")?
                        <TickCircleIcon color={"success"} size={"20px"}/>:
                        <DeleteIcon color={"danger"} size={"20px"}/>
                    }

                    <Text
                        fontWeight={"900"}
                        textTransform={"uppercase"}
                        marginLeft={"10px"}
                    >
                        {props.text}
                    </Text>

                </Pane>
            </Popover>

        )
    }


function Dashboard(props){

    let elements = [
        {
            name: "MQTT",
            value: "OK",
            details: "MQTT Broker is running properly"
        },
        {
            name: "Data",
            value: "OK",
            details: "MQTT Broker is running properly"
        },
        {
            name: "ONLINE",
            value: "OK",
            details: "MQTT Broker is running properly"
        },
        {
            name: "Learning",
            value: "DISABLED",
            details: "MQTT Broker is running properly"
        }
    ]


    const MYItems = props.elements.map((elmnt) => {
            return <Item text={elmnt.name} value={elmnt.value} details={elmnt.details}/>
        }
    );

    return(
        <Pane
            width={"100%"}
            height={"60px"}
            border={"default"}
            display={"flex"}
            justifyContent={"space-between"}
            paddingX={"50px"}
            marginY={"40px"}
        >

            {MYItems}
        </Pane>
    )

}

export default Dashboard;
