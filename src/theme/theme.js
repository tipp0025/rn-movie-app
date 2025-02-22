export default {
  lightColors: {
    primary: "purple",
    secondary: "green",
    background: "#121212",
    text: "#ffffff",
  },
  components: {
    Text: {
      style: {
        color: "#ffffff",
        fontSize: 16,
      },
      h4Style: {
        textAlign: "center",
        padding: 15,
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
      },
    },
    Screen: {
      container: {
        flex: 1,
        position: "relative",
        backgroundColor: "#121212",
      },
      listContainer: {
        paddingBottom: 80,
      },
    },
    Button: {
      raised: true,
      buttonStyle: {
        backgroundColor: "purple",
      },
      titleStyle: {
        color: "#ffffff",
      },
      containerStyle: {
        marginVertical: 10,
      },
    },
    FAB: {
      containerStyle: {
        position: "absolute",
        bottom: 16,
        right: 16,
        margin: 16,
      },
    },
    Dialog: {
      containerStyle: {
        backgroundColor: "#1E1E1E",
        borderRadius: 8,
        padding: 20,
      },
      overlayStyle: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      },
      titleStyle: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
      },
      contentStyle: {
        color: "#ffffff",
        textAlign: "center",
        marginBottom: 10,
      },
    },
    Card: {
      containerStyle: {
        marginBottom: 20,
        backgroundColor: "#1E1E1E",
        borderRadius: 8,
        padding: 15,
      },
      imageStyle: {
        height: 200,
        borderRadius: 8,
      },
      wrapperStyle: {
        backgroundColor: "#1E1E1E",
      },
      titleStyle: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
      },
      featuredTitleStyle: {
        color: "#ffffff",
      },
    },
    Input: {
      inputStyle: {
        color: "#ffffff",
      },
    },
    VideoScreen: {
      container: {
        flex: 1,
        backgroundColor: "#121212",
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
        textAlign: "center",
        padding: 20,
        color: "#ffffff",
      },
      buttonContainer: {
        margin: 20,
      },
    },
  },
};
