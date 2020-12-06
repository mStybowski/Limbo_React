import {Pane, Text, Button} from 'evergreen-ui'
import {InfoSignIcon, EndorsedIcon} from 'evergreen-ui'
import './App.css';

function App() {
  return (
    <Pane 
      width="100%"
      height={50}
      border="default"
      display= "flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX="150px"
    >
      <Text 
        fontSize={26}
        fontFamily="Limbo"
        color="#222222"
      >
        Limbo
      </Text>

      <Pane
        display= "flex"
        flexDirection="row"
        alignItems="center"
        paddingX="15px"
      >
        <InfoSignIcon color="info" marginRight="12px"/>
        <Text color="info">
          Not connected to MQTT Broker
        </Text>
      </Pane>
 
      <Button appearance="primary" intent="success">Połącz z serwerem!</Button>
    </Pane>
  )
}

export default App;
