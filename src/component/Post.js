import { View, Text, Image } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign, FontAwesome } from '@expo/vector-icons';


 const Post = ({ post }) => {
    return (
        <View style={{marginVertical: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                <Image src={post.User.avatar} style={{width: 50, aspectRatio: 1, borderRadius: 50, marginRight: 10}}/>
                <View>
                    <Text style={{fontWeight: '600', marginBottom: 3, fontSize: 16}}>{post.User.name}</Text>
                    <Text style={{marginRight: 5, color: 'gray'}}>@{post.User.handle}</Text>
                </View>
                <View style={{marginLeft: 'auto', flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{marginRight: 5, color: 'gray'}}>3 hours ago </Text>
                    <Entypo name="dots-three-horizontal" size={18} color="gray" />
                </View>

            </View>
            <Text style={{margin: 10, lineHeight: 18}}>{post.text}</Text>
            <Image src={post.image} style={{width: '100%', aspectRatio:1 }}/>
            <View style={{margin: 10, flexDirection: 'row', marginRight: 10}}>
                <AntDesign name="hearto" size={22} color="gray" style={{marginRight: 10}} />
                <FontAwesome name="dollar" size={20} color="gray" style={{marginRight: 10}}/>
                
            </View >
            <Text style={{fontWeight: '600', marginHorizontal: 10}}>{post.likes} Likes</Text>
        </View>
    )
};

export default Post;