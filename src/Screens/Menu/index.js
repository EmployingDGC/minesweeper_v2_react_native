import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
} from "react-native";

import backgroundMenu from "../../../assets/images/menu.fw.png";
import styles from "./styles";

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // umaPropriedade: this.props.umaPropriedade,
        }
    }

    render() {
        return (
            <ImageBackground source={backgroundMenu} style={[styles.container]}>
                <View style={[styles.containerMenu]}>
                    <Text style={[styles.tittle]}>Campo Minado</Text>
                    
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Game")}
                        activeOpacity={.6}
                    >
                        <Text style={[styles.subtittle]}>Jogar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Records")}
                        activeOpacity={.6}
                    >
                        <Text style={[styles.subtittle, {marginBottom: 0}]}>Recordes</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    };
}

export default Menu;
