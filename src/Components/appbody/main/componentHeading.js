import {Pane, Text, Heading} from "evergreen-ui"

function ComponentHeading(props){
    return(
        <Pane
            width={"100%"}
            height={30}
            backgroundColor={"#eeeeee"}
            paddingX={"15px"}
            paddingTop={"4px"}
            verticalAlign={"middle"}
        >
            <Heading size={400}>
                {props.name}
            </Heading>
        </Pane>
    )
}

export default ComponentHeading;