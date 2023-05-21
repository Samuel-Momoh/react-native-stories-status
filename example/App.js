import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView, Dimensions} from 'react-native';
import {StoryList} from 'react-native-insta-story';

const {height, width} = Dimensions.get("screen");

const stories = [
    {
      "story_id": 1,
      "story_image": "https://bespoke-image.s3.ap-southeast-2.amazonaws.com/testimage/img1.png",
    },
    {
      "story_id": 2,
      "story_image": "https://bespoke-image.s3.ap-southeast-2.amazonaws.com/testimage/img2.png",
    },
    {
      "story_id": 3,
      "story_image": "https://bespoke-image.s3.ap-southeast-2.amazonaws.com/testimage/img3.png",
    },
    {
        "story_id": 3,
        "story_image": "https://bespoke-image.s3.ap-southeast-2.amazonaws.com/testimage/img4.png",
      }
  ]
export default function App() {
    const duration = 3
    return (
        <SafeAreaView style={styles.container}>
<View style={{ height: height / 2, width: width - 20, paddingHorizontal: 10 }}>
<StoryList duration={duration * 1000}
                               key={1}
                               stories={stories}
                            //    onFinish={onStoryFinish}
                               />
</View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:"center"
    },
});
