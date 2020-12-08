import {Textarea, Pane, Label} from "evergreen-ui";


function Terminal(){
    return(
        <Pane>
            <Label
                htmlFor="textarea-2"
                marginBottom={4}
                display="block"
            >
                Label
            </Label>
            <Textarea
                id="textarea-2"
                placeholder="Textarea placeholder..."
                width={"400px"}
                height={"500px"}
            />
        </Pane>
    )
}

export default Terminal;