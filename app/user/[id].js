import { useSearchParams } from "expo-router";
import { Text, StyleSheet } from "react-native";
import users from '../../assets/data/users'
import { useState } from "react";
import UserProfileHeader from "../../src/component/UserProfileHeader";

const ProfilePage = () => {
    const [isSubscibed, setIsSubscribed] = useState(false)
    const { id } = useSearchParams(); 

    const user = users.find(u => u.id === id);

    if (!user) {
        return <Text>User not found </Text>
    }
    return (
        <UserProfileHeader user={user}
            isSubscibed={isSubscibed} 
            setIsSubscribed={setIsSubscribed}
        />
    );
}
const styles = StyleSheet.create({
    
});
export default ProfilePage

