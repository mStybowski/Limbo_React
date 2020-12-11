import {useState, useEffect} from "react";

import Topbar from "./Components/topbar/topbar"
import AppBody from "./Components/appbody/body"
import Footer from "./Components/footer"
import "./App.css"
import {MqttClient} from "mqtt";

const mqtt = require("mqtt")

const initialServerState = {
    connectedToBroker: false,
    brokerIP: "mqtt://192.168.2.179:8083/mqtt",
    clientID: "ReactApp",
    MQTTclient: null
}

function App() {

    const [serverSettings, setServerSettings] = useState(initialServerState);

    function connectToBroker(){
        var client = mqtt.connect(serverSettings.brokerIP);

        client.on('connect', function () {
            client.subscribe('presence', function (err) {
                if (!err) {
                    client.publish('presence', 'Hello mqtt')

                }

            })
            setServerSettings((prevState) => {
                return { ...prevState, connectedToBroker: true }
            })
            client.on("message", (topic, message) => {
                console.log(message.toString());
            })
        })
    }

  return (
      <div className={"wrapper"}>
        <Topbar serverState={serverSettings} cn={connectToBroker} setSettings={setServerSettings}/>
        <AppBody/>
        <Footer/>
      </div>

  )
}

export default App;
