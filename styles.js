import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginHorizontal: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      marginTop: 55,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    intup:{
      width: '80%',
      borderBottomWidth: 1,
      borderBottomColor: '#457B9D',
      color: '#212121',
  
    },
    listContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginVertical: 20,
    },
    itemContainer: {
        height: 80,
        justifyContent: 'center',
        backgroundColor: '#1D3557',
        borderRadius: 5,
        marginVertical: 5,
    },
    item: {
        marginHorizontal: 10, 
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }, 
  });
  