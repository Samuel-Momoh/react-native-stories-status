import React, {useState, useEffect, useRef} from 'react';
import {
    Animated,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,
    ActivityIndicator,
    View,
    Platform,
    SafeAreaView
} from "react-native";
import type {IUserStoryItem} from "./interfaces/IUserStory";
import {usePrevious} from "./helpers/StateHelpers";
import {isNullOrWhitespace} from "./helpers/ValidationHelpers";
import GestureRecognizer from 'react-native-swipe-gestures';

const {width, height} = Dimensions.get('window');

type Props = {
    duration?: number,
    onFinish?: function,
    key: number,
    stories: IUserStoryItem[]
};

export const StoryList = (props: Props) => {
    const stories = props.stories;
console.log(JSON.stringify(stories,0,2), "Stories props")
    const [load, setLoad] = useState(true);
    const [pressed, setPressed] = useState(false);
    const [content, setContent] = useState(
        stories.map((x) => {
            return {
                image: x.story_image,
                finish: 0
            }
        }));

    const [current, setCurrent] = useState(0);

    const progress = useRef(new Animated.Value(0)).current;

    const prevCurrentPage = usePrevious(props.currentPage);

    useEffect(() => {
        let isPrevious = prevCurrentPage > props.currentPage;
        if (isPrevious) {
            setCurrent(content.length - 1);
        } else {
            setCurrent(0);
        }

        let data = [...content];
        data.map((x, i) => {
            if (isPrevious) {
                x.finish = 1;
                if (i == content.length - 1) {
                    x.finish = 0;
                }
            } else {
                x.finish = 0;
            }

        })
        setContent(data)
        start();
    }, [props.currentPage]);

    const prevCurrent = usePrevious(current);

    useEffect(() => {
        if (!isNullOrWhitespace(prevCurrent)) {
            if (current > prevCurrent && content[current - 1].image == content[current].image) {
                start();
            } else if (current < prevCurrent && content[current + 1].image == content[current].image) {
                start();
            }
        }

    }, [current]);

    function start() {
        setLoad(false);
        progress.setValue(0);
        startAnimation();
    }

    function startAnimation() {
        Animated.timing(progress, {
            toValue: 1,
            duration: props.duration,
            useNativeDriver: false
        }).start(({finished}) => {
            if (finished) {
                next();
            }
        });
    }

    // function onSwipeUp() {
    //     if (props.onClosePress) {
    //         props.onClosePress();
    //     }
    //     if (content[current].onPress) {
    //         content[current].onPress();
    //     }
    // }

    // function onSwipeDown() {
    //     props?.onClosePress();
    // }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    function next() {
        // check if the next content is not empty
        setLoad(true);
        if (current !== content.length - 1) {
            let data = [...content];
            data[current].finish = 1;
            setContent(data);
            setCurrent(current + 1);
            progress.setValue(0);
        } else {
            // the next content is empty
            close('next');
        }
    }

    function previous() {
        // checking if the previous content is not empty
        setLoad(true);
        if (current - 1 >= 0) {
            let data = [...content];
            data[current].finish = 0;
            setContent(data);
            setCurrent(current - 1);
            progress.setValue(0);
        } else {
            // the previous content is empty
            close('previous');
        }
    }

    function close(state) {
        let data = [...content];
        data.map(x => x.finish = 0);
        setContent(data);
        setCurrent(0);
        progress.setValue(0);
        if (props.currentPage == props.index) {
            if (props.onFinish) {
                props.onFinish(state);
            }
        }
    }



    return (
        <GestureRecognizer
            onSwipeUp={(state) => onSwipeUp(state)}
            onSwipeDown={(state) => onSwipeDown(state)}
            config={config}
            style={{
                flex: 1,
                // backgroundColor: 'black',
            }}
        >
        
            {/* <SafeAreaView>
                <View style={styles.backgroundContainer}>
                    <Image onLoadEnd={() => start()}
                           source={{uri: content[current].image}}
                           style={styles.image}
                    />
                    {load && <View style={styles.spinnerContainer}>
                        <ActivityIndicator size="large" color={'white'}/>
                    </View>}
                </View>
            </SafeAreaView> */}
            <View style={{flexDirection: 'column', flex: 1,}}>
                <View style={styles.animationBarContainer}>
                    {content.map((index, key) => {
                        return (
                            <View key={key} style={styles.animationBackground}>
                                <Animated.View
                                    style={{
                                        flex: current == key ? progress : content[key].finish,
                                        height: 2,
                                        backgroundColor: '#2667B1',
                                    }}
                                />
                            </View>
                        );
                    })}
                </View>

                <View style={styles.backgroundContainer}>
                    <Image onLoadEnd={() => start()}
                           source={{uri: content[current].image}}
                           style={styles.image}
                    />
                    {load && <View style={styles.spinnerContainer}>
                        <ActivityIndicator size="large" color={'white'}/>
                    </View>}
                </View>

                <View style={styles.pressContainer}>
                    <TouchableWithoutFeedback
                        onPressIn={() => progress.stopAnimation()}
                        onLongPress={() => setPressed(true)}
                        onPressOut={() => {
                            setPressed(false);
                            startAnimation();
                        }}
                        onPress={() => {
                            if (!pressed && !load) {
                                previous()
                            }
                        }}
                        style={{flex: 1}}
                    >
                        <View style={{flex: 1}}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPressIn={() => progress.stopAnimation()}
                                              onLongPress={() => setPressed(true)}
                                              onPressOut={() => {
                                                  setPressed(false);
                                                  startAnimation();
                                              }}
                                              onPress={() => {
                                                  if (!pressed && !load) {
                                                      next()
                                                  }
                                              }}
                                              style={{flex: 1}}
                                              >
                        <View style={{flex: 1}}/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </GestureRecognizer>
    )
}


export default StoryList;

StoryList.defaultProps = {
    duration: 10000
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    image: {
        flex: 1,
        // width: width,
        // height: height / 2,
        resizeMode: 'cover'
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    spinnerContainer: {
        flex: 1,
        zIndex: -100,
        // position: "absolute",
        justifyContent: 'center',
        backgroundColor: 'black',
        alignSelf: 'center',
        // width: width,
        // height: height,
    },
    animationBarContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingHorizontal: 10,
        zIndex: 999
    },
    animationBackground: {
        height: 2,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: 2,
        zIndex: 99
    },
    userContainer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    avatarImage: {
        height: 30,
        width: 30,
        borderRadius: 100
    },
    avatarText: {
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 10,
    },
    closeIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        paddingHorizontal: 15,
    },
    pressContainer: {
        flex: 1,
        flexDirection: 'row',
        // zIndex: 9999
    },
    swipeUpBtn: {
        position: 'absolute',
        right: 0,
        left: 0,
        alignItems: 'center',
        bottom: Platform.OS == 'ios' ? 20 : 50
    }
});
