import { CameraView, useCameraPermissions } from 'expo-camera'
import { useState, useRef } from "react";
import { NormalButton } from '../../components/button';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FlashMode } from 'expo-camera/build/legacy/Camera.types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const Camera = ({ navigation }) => {

    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [flash, setFlash] = useState(FlashMode.off)
    const camRef = useRef(null)


    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {

        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center' }}>Nós precisamos da sua permisão para utilizar a camera.</Text>
                <NormalButton onPress={requestPermission} title="Dar a permissão" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }


    function flashActive() {
        setFlash(current => (current === FlashMode.on ? FlashMode.off : FlashMode.on));
        console.log(flash)
    }

    async function takePicture() {
        if (camRef) {
            const data = await camRef.current.takePictureAsync();
        }
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing}>
                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                        <MaterialIcons name="flip-camera-android" size={50} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={takePicture}>
                        <Ionicons name="camera" size={50} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={flashActive}>
                        <MaterialCommunityIcons name="flash" size={50} color="white" />
                    </TouchableOpacity>

                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});