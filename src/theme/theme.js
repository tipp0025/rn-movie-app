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
      },
      imageStyle: {
        height: 200,
      },
      wrapperStyle: {
        backgroundColor: "#1E1E1E",
      },
      Title: {
        style: {
          color: "#ffffff",
          fontSize: 18,
          fontWeight: "bold",
        },
      },
      textStyle: {
        marginVertical: 10,
        textAlign: "center",
        color: "#ffffff",
      },
    },
    Input: {
      inputStyle: {
        color: "#ffffff",
      },
    },
  },
};
