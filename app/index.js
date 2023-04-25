import { StyleSheet, View, FlatList, Text } from "react-native";
import { Link } from "expo-router";
import UserCard from '../src/component/UserCard'
import { useAuthenticator } from "@aws-amplify/ui-react-core";
import { DataStore } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { User } from '../src/models'


export default function Page() {

  const { signOut } = useAuthenticator();
  const [users, setUsers] = useState([])

  //queries our users when this page/component mounts
  //if we give empty dependency array to useEffect is only called once when the component mounts
  useEffect(() => {
    //fetch users
    DataStore.query(User).then(setUsers);
  }, [])

  return (
    // dynamically render all the users data: array of things we want to render  renderItems: function to specify how we should render the data
    <View style={styles.container}>
      <Link href={'/newPost'}>New post</Link>
      <Text onPress={() => signOut()}>Sign Out</Text>
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
