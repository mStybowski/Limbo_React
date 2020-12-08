import {Pane, Paragraph, Strong} from "evergreen-ui";
import "./footer.css"

function Footer(){
    return(
        <Pane
            width="100%"
            height={60}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            position={"absolute"}
            bottom={"0"}
            left={"0"}
            border="default"
        >
            <Paragraph size={300}>
                © 2020 created by M. Stybowski
            </Paragraph>
            <Strong size={300}>
                This web-based project is a part of an <a target={"blank"} className={"footerLink"} href={"https://github.com/mStybowski/Limbo_SaaS"}>Engineering Thesis.</a>
            </Strong>
        </Pane>
    )
}

export default Footer;