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
    Dialog: {
      containerStyle: {
        padding: 20,
        borderRadius: 8,
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
    //Video Settings
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
  },
};
