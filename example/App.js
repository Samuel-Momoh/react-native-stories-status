import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import InstaStory from 'react-native-insta-story';

const data = [
    {
        user_id: 1,
        user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
        user_name: "Ahmet Çağlar Durmuş",
        stories: [
            {
                story_id: 1,
                story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
                swipeText: 'Custom swipe text for this story',
                text:{
                    heading: "Inspirational quote",
                    dsc: "Everybody needs the wisdom of God to excel in life. This wisdom is accessed by worship. Wisdom is the benefit of true worshipers. Wisdom flows in the direction of worship"
                },
                onPress: (props) => console.log('story 1 swiped',props),
            },
            {
                story_id: 2,
                story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
                swipeText: 'Custom swipe text for this story',
                text:{
                    heading: "Inspirational quote",
                    dsc: "Don’t kill yourself when it looks like the prophecy on your life is too slow in coming to pass! Don’t ruin yourself when it looks like the expectations that you have of yourself, or that God or people have of you is too slow in coming to pass! God does not manufacture greatness hurriedly! He does not manufacture great things in a hurry!"
                },
                onPress: (props) => console.log('story 2 swiped',props),
            },
            {
                story_id: 3,
                story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                swipeText: 'Custom swipe text for this story',
                text:{
                    heading: "Inspirational quote",
                    dsc: "Please understand that God created you to be powerful and to be more powerful than every other thing He created. Look with me at God’s provision for power to His children… which includes you!"
                },
                onPress: (props) => console.log('story 1 swiped',props),
            }]
    },
    {
        user_id: 2,
        user_image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        user_name: "Test User",
        stories: [
            {
                story_id: 1,
                story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
                swipeText: 'Custom swipe text for this story',
                text:{
                    heading: "Inspirational quote",
                    dsc: "God’s plan for His people is a plan of power. Nothing weak describes God and if we are members of His body, then we carry the same genetics of power."
                },
                onPress: (props) => console.log('story 1 swiped',props),
            },
            {
                story_id: 2,
                story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
                swipeText: 'Custom swipe text for this story',
                text:{
                    heading: "Inspirational quote",
                    dsc: "Dear sisters, you are better off marrying someone with similar vision and passion as you. Please, insist on marrying a born-again child of God."
                },
                onPress: (props) => console.log('story 2 swiped',props),
            },
            {
                story_id: 3,
                story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                swipeText: 'Custom swipe text for this story',
                text:{
                    heading: "Inspirational quote",
                    dsc: "Your future is somebody’s past. Your destiny is somebody’s history. That thing that you are looking forward to in life, somebody has already left it behind."
                },
                onPress: (props) => console.log('story 1 swiped',props),
            }]
    },
    {
        user_id: 3,
        user_image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        user_name: "Test User",
        stories: [
            {
                story_id: 1,
                story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
                swipeText: 'Custom swipe text for this story',
                text:{
                    heading: "Inspirational quote",
                    dsc: "You are not a failure and you can never be one. The fact that you survived your mother’s womb and the many hostilities that have come against you shows that there is a fighter inside you."
                },
                onPress: (props) => console.log('story 1 swiped',props),
            },
            {
                story_id: 2,
                story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
                swipeText: 'Custom swipe text for this story',
                text:{
                    heading: "Inspirational quote",
                    dsc: "The word is the vehicle of God’s power and He uses it to hold things up. The word can hold up your life, marriage and destiny and they will not fall."
                },
                onPress: (props) => console.log('story 2 swiped',props),
            },
            {
                story_id: 3,
                story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                swipeText: 'Custom swipe text for this story',
                text:{
                    heading: "Inspirational quote",
                    dsc: "Whatever you are striving to achieve in life is already a past event for somebody else; it has already been achieved. Whenever you connect with people, you save yourself some unnecessary twists and turns of the journey of life and destiny."
                },
                onPress: (props) => console.log('story 1 swiped',props),
            }]
    }];

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <InstaStory data={data}
                        duration={10}
                        customSwipeUpComponent={<View>
                            <Text style={{color:'#000'}}>Share</Text>
                        </View>}

                        style={{marginTop: 30}}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
