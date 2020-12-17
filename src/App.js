import {Component, useState, useEffect} from "react";

import Topbar from "./Components/topbar/topbar"
import AppBody from "./Components/appbody/body"
import Footer from "./Components/footer"
import "./App.css"
import {MqttClient} from "mqtt";

const mqtt = require("mqtt")

function createMQTTConnection(ip, clientID, SSL) {
    const options = {
        protocol: (SSL)?'mqtts':'mqtt',
        clientId: clientID,
        reconnectPeriod: 0
    };
    const innerClient  = mqtt.connect(ip, options);
    innerClient.on('connect', function () {
        console.log("connected!!");
        innerClient.subscribe('presence', function (err) {
            if (!err) {
                innerClient.publish('presence', 'GUI_Client')
                innerClient.publish('guiRequests/state', '')
            }
        })

        innerClient.on("message", (topic, message) => {
            console.log(message.toString());
        })
    })
    console.log(innerClient);
    return innerClient;
}

class App extends Component{

    constructor(props){
        super(props);
        this.sendTestMessage = this.sendTestMessage.bind(this);
        this.connect = this.connect.bind(this);
        this.disconnect = this.disconnect.bind(this);

        this.state = {
            connected: false,
            brokerIP: "ws://localhost:8083/mqtt",
            clientID: "GUI_Client",
            state: "NotConnected",
            SSL: false
        };
    }

    disconnect(){
        if(this.state.connected){
            this.state.client.end(true);
            this.setState({client: null, connected: false, state: "NotConnected", brokerIP: "", clientID: "", SSL:false});
            console.log("Disconnected");
        }
        else{
            console.log("You aren't even connected!");
        }
    }
    sendTestMessage(topic, message){
        if(this.state.connected)
            this.state.client.publish(topic, message);

        else
            console.log("Not connected")
        console.log(this.state)
    }

    connect(url, id, ssl = false){
        if(!this.state.connected){
            let client = createMQTTConnection(url, id, ssl);
            setTimeout(() => {
                if(client.connected)
                    this.setState({client: client, connected: true, state: "Connected", brokerIP: url, clientID: id, SSL:ssl});
                else{
                    console.log("Couldnt connect. Try again")
                }
            }, 500)

        }
        else{
            if(this.state.connected)
                console.log("You are already connected")
            else{
                console.log("Something went wrong. Restart the page");
            }
        }
    }

    render(){
        return (
            <div className={"wrapper"}>
                <Topbar dc={this.disconnect} serverState={this.state} cn={this.connect} sendTestMessage={this.sendTestMessage}/>
                <AppBody/>
                <Footer/>
            </div>
        )
    }
}

export default App;
