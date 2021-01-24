import {StyleSheet} from 'react-native';

const css = StyleSheet.create({
    homeContent: {
        backgroundColor: "#000",
        color: '#fff',
        margin: 20,
        padding: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#DBECE9'
    },  
    viewContainer: {
      borderWidth: 1,
      margin: 10,
      borderRadius: 25,
      alignItems: 'center',
      backgroundColor: '#DBECE9',
      marginTop: 5,
    },
    img: {
      width: 100,
      height: 100,
      margin: 20,
    },
    img_Login: {
      width: 100,
      height: 100,
      margin: 20,
      alignSelf: 'flex-start',
    },
    img_Rastreio: {
      width: 100,
      height: 100,
      margin: 20,
    },
    darkBg: {
    },
    login_msg: (text = 'none') => ({
      fontWeight: 'bold',
      fontSize: 22,
      color: 'red',
      marginTop: 0,
      marginBottom: 15,
      display: text,
    }),
    login_form: {
      width: '80%',
    },
    login_logo: {
      marginBottom: 10,
    },  
    input: {
      backgroundColor: '#fff',
      fontSize: 19,
      padding: 7,
      marginBottom: 15,
    },
    btn: {
      padding: 12,
      backgroundColor: '#00A859',
      alignSelf: 'center',
      borderRadius: 5,
    },  
    btnText: {
      color: '#DBECE9',
      fontWeight: 'bold',
      fontSize: 22,
    },
    containerTop: {
      justifyContent: 'flex-start',
      backgroundColor: '#fff',
    },
    area_Tab: {
      backgroundColor: '#00A859',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
    area_menu: {
      flexDirection: 'row',
      paddingTop: 18,
      paddingBottom: 10,
      width: '100%',
      backgroundColor: '#00A859',
      alignItems: 'center',
      justifyContent: 'center'

    },
    btn_home: {
      textAlign: 'left'
    },
    area_title: {
      width: '80%',
      fontWeight: 'bold',
      fontSize: 20,
      color: '#fff',
      textAlign: 'center',
    },
    btn_logout: {

    },
  });
  export {css};