import { useSearchParams } from "expo-router";
import { Text, StyleSheet, FlatList, View } from "react-native";
import { useState, useEffect } from "react";
import UserProfileHeader from "../../src/component/UserProfileHeader";
import posts from '../../assets/data/posts';
import  Post from '../../src/component/Post';
import { FontAwesome5 } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify';
import { User } from '../../src/models'

const ProfilePage = () => {
    const [user, setUser] = useState();
    const [isSubscibed, setIsSubscribed] = useState(false)
    
    const { id } = useSearchParams(); 

    //when id changes we need to query a new user
    useEffect(() => {
        //fetch users
        DataStore.query(User, id).then(setUser);
      }, [id])
    // const user = users.find(u => u.id === id);

    if (!user) {
        return <Text>User not found </Text>
    }

    if(!isSubscibed) {
        return (
            <View>
                <UserProfileHeader 
                    user={user}
                    isSubscibed={isSubscibed}
                    setIsSubscribed={setIsSubscribed}
                />
                <View style={{backgroundColor: 'gainsboro', alignItems: 'center', padding: 20}}>
                    <FontAwesome5 name="lock" size={50} color="gray" />
                    <Text 
                        style={{
                            backgroundColor: 'royalblue', 
                            height: 50, 
                            borderRadius: 25, 
                            overflow: 'hidden',
                            padding: 15,
                            color: 'white',
                            margin: 20
                            }}
                    >
                        Subscribe to see user's posts
                    </Text>
                </View>
            </View>
        )}
    return (

            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item}/>} 
                ListHeaderComponent={() => (            
                    <UserProfileHeader 
                        user={user}
                        isSubscibed={isSubscibed}
                        setIsSubscribed={setIsSubscribed}
                    />
                )}
            />
    );
}
const styles = StyleSheet.create({
    
});
export default ProfilePage

