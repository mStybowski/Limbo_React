import {Text, Pane} from "evergreen-ui";
import '../../App.css';
import "./topbar.css"
import hand from "./hand.png";


function Logo() {
    return (
        <Pane
            display={"flex"}
            alignItems={"center"}>
            <img id={"hand"} src={hand} alt="Logo" />
            <Text
                fontSize={26}
                fontFamily="Limbo"
                color="#222222"
                marginLeft={"6px"}
            >
                Limbo
            </Text>

        </Pane>
    )
}

export default Logo;