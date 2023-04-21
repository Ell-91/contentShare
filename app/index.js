import { StyleSheet, View, FlatList } from "react-native";
import { Link } from "expo-router";
import users from '../assets/data/users';
import UserCard from '../src/component/UserCard'


export default function Page() {
  return (
    // dynamically render all the users data: array of things we want to render  renderItems: function to specify how we should render the data
    <View style={styles.container}>
      <Link href={'/newPost'}>New post</Link>
      <FlatList
        data={users} 
        renderItem={({item}) => <UserCard user={item}/> }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 75,
  },
});
