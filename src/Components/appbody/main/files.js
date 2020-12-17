import {Pane, Text, Heading} from "evergreen-ui"
import PythonLogo from './python.svg';
import "./files.css"

import ComponentHeading from "./componentHeading";

let items = [

    {
        name: "someOtherScript.py",
        correct: true,
        size: "74.7kB"
    },
    {
        name: "superScript.py",
        correct: false,
        size: "4.7kB"
    },
    {
        name: "superScript.py",
        correct: false,
        size: "4.7kB"
    },{
        name: "superScript.py",
        correct: false,
        size: "4.7kB"
    },{
        name: "superScript.py",
        correct: false,
        size: "4.7kB"
    },{
        name: "superScript.py",
        correct: false,
        size: "4.7kB"
    },
]

function Item(props){

    return(
        <Pane
            width={"100%"}
            border={"default"}
            height={"50px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            paddingX={"10px"}
            marginBottom={"5px"}
            borderRadius={"4px"}
        >
            <img alt="" src={PythonLogo} width={"36px"} height={"36px"}/>
            <Pane>
                <Text>{props.name}</Text>
                <Text>{props.size}</Text>
            </Pane>
        </Pane>
    )
}

function Files(props){

    const MyFiles = items.map((el) => {
            return <Item name={el.name} correct={el.correct} size={el.size}/>
        }
    );

    return(
        <Pane
            flexBasis={"50%"}
            height={"410px"}
            width={"390px"}
            border={"default"}
            marginRight={"5px"}

        >
            <ComponentHeading name={"Files"}/>
            <Pane
                height={"93%"}
                overflowY={"auto"}
                margin={"10px"}
            >
                {MyFiles}
            </Pane>

        </Pane>
    )
}


export default Files;