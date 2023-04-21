import { SafeAreaView, TextInput, Button, View, Image, Text} from "react-native";
import { useState } from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import * as ImagePicker from 'expo-image-picker';

const NewPost = () => {
    const [text, setText] = useState('')
    const [image, setImage] = useState('')
    const router = useRouter()


    const onPost = () => {
        console.warn("Post  ", text)
        setText('')
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    // listen to onChangeText, whenever it happenss we need to update the change in our text
    return (
        <SafeAreaView style={{margin:30}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                <Ionicons 
                    onPress ={() => {router.back()}} 
                    name="arrow-back" 
                    size={28} 
                    color="black" 
                    style={{marginRight: 10}}
                />
                <Text style={{fontWeight: '500', fontSize: 20}}>New post</Text>
            </View>

            <TextInput 
                placeholder="Compose new post..."
                value={text}
                onChangeText={setText}
                numberOfLines={3}
                multiline
            />


            <View style={{ marginVertical: 15 }}>
             <Feather name="image" size={24} color="gray" onPress={pickImage}/>
            </View>

            {image && <Image src={image} style={{width: '100%', aspectRatio: 1}}/>}
            <Button 
                title="Post" 
                onPress={onPost}
            />
        </SafeAreaView>
    )
};

export default NewPost