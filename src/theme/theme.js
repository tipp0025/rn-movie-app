import { fonts } from "./fonts";

export default {
  lightColors: {
    primary: "#922C40",
    secondary: "#1E2640",
    tertiary: "#F3EAC0",
    text: "#000000",
  },
  darkColors: {
    primary: "#1E2640",
    secondary: "#922C40",
    tertiary: "#F3EAC0",
    text: "#ffffff",
  },
  components: {
    Screen: {
      container: {
        flex: 1,
        backgroundColor: "#1E2640",
        padding: 16,
      },
      listContainer: {
        paddingVertical: 16,
      },
    },
    Text: {
      style: {
        color: "#F3EAC0",
        fontSize: 16,
        textAlign: "center",
        fontFamily: fonts.regular,
      },
      h4Style: {
        color: "#F3EAC0",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        fontFamily: fonts.bold,
      },
    },
    Dialog: {
      containerStyle: {
        padding: 20,
        borderRadius: 8,
      },
      contentStyle: {
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        marginVertical: 10,
      },
      contentTextStyle: {
        color: "#F3EAC0",
        textAlign: "center",
        fontSize: 16,
        marginBottom: 15,
      },
      titleStyle: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
      },
      overlayStyle: {
        backgroundColor: "#922C40",
      },
      dividerStyle: {
        marginVertical: 10,
      },
      actionsContainerStyle: {
        padding: 8,
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 8,
      },
      dialogButtonStyle: {
        minWidth: 120,
        marginHorizontal: 5,
      },
    },
    Input: {
      inputStyle: {
        color: "#ffffff",
      },
      placeholderTextColor: "#CCCCCC",
      inputContainerStyle: {
        borderColor: "#F3EAC0",
      },
    },
    Button: {
      buttonStyle: {
        backgroundColor: "#1E2640",
        borderRadius: 4,
        borderColor: "#F3EAC0",
        borderWidth: 1,
      },
      titleStyle: {
        color: "#FFFFFF",
      },
    },
    FAB: {
      containerStyle: {
        position: "absolute",
        bottom: 16,
        right: 16,
        margin: 16,
      },
      buttonStyle: {
        backgroundColor: "#922C40",
        borderColor: "#F3EAC0",
        borderWidth: 2,
        borderRadius: 32,
      },
    },
    Card: {
      containerStyle: {
        backgroundColor: "#922C40",
        borderColor: "#F3EAC0",
        borderWidth: 1,
        borderRadius: 8,
        padding: 15,
        margin: 10,
      },
      wrapperStyle: {
        backgroundColor: "#922C40",
      },
      imageWrapperStyle: {
        borderRadius: 8,
        overflow: "hidden",
        marginVertical: 8,
        alignItems: "center",
        justifyContent: "center",
      },
      imageStyle: {
        height: 300,
        width: 200,
        alignSelf: "center",
      },
    },
    //WatchScreen Settings
    VideoScreen: {
      container: {
        flex: 1,
        backgroundColor: "#1E2640",
        padding: 16,
      },
      fullscreen: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
      },
      video: {
        width: "100%",
        height: 300,
        marginVertical: 20,
      },
      fullscreenVideo: {
        flex: 1,
        width: "100%",
        height: "100%",
      },
      title: {
        color: "#F3EAC0",
        fontSize: 24,
        textAlign: "center",
        marginVertical: 16,
      },
      buttonContainer: {
        margin: 20,
      },
      buttonStyle: {
        backgroundColor: "#922C40",
        borderColor: "#F3EAC0",
        borderWidth: 1,
        borderRadius: 4,
      },
    },
    Header: {
      containerStyle: {
        backgroundColor: "#922C40",
        borderBottomWidth: 1,
        borderBottomColor: "#F3EAC0",
      },
      centerComponentStyle: {
        color: "#F3EAC0",
        fontSize: 20,
        fontFamily: fonts.bold,
      },
      rightComponentStyle: {
        color: "#F3EAC0",
        fontSize: 16,
        fontFamily: fonts.regular,
        marginRight: 10,
      },
    },
  },
};
