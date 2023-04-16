import { useSearchParams } from "expo-router";
import { Text, StyleSheet, FlatList, View } from "react-native";
import users from '../../assets/data/users'
import { useState } from "react";
import UserProfileHeader from "../../src/component/UserProfileHeader";
import posts from '../../assets/data/posts';
import  Post from '../../src/component/Post';

const ProfilePage = () => {
    const [isSubscibed, setIsSubscribed] = useState(false)
    const { id } = useSearchParams(); 

    const user = users.find(u => u.id === id);

    if (!user) {
        return <Text>User not found </Text>
    }

    if(!isSubscibed) {
        return (
        <UserProfileHeader 
            user={user}
            isSubscibed={isSubscibed}
            setIsSubscribed={setIsSubscribed}
        />
        
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

