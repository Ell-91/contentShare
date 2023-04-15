import { useRouter, useSearchParams } from "expo-router";
import { View, Text, StyleSheet  } from "react-native";
import users from '../../assets/data/users'

const ProfilePage = () => {
    const router = useRouter()
    const { id } = useSearchParams(); 

    const user = users.find(u => u.id === id);

    if (!user) {
        return <Text>User not found </Text>
    }
    return (
        <View style={{marginTop: 100}}>
            <Text>Profile Page: {user.name}</Text>
            <Text onPress ={() => {router.back()}}>Go back</Text>
        </View>
    )
}
// const styles = style.StyleSheet {
//     marginTop: {

//     }
// }
export default ProfilePage

