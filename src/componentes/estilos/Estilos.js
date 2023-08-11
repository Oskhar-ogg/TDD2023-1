import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = {
  container: {
    alignItems: 'center',
    backgroundColor: '#022534', // Cambia el color de fondo
    height: '100%', // Ocupar el 100% del alto de la pantalla
  },
  
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  appName: {
    fontSize: 22,
    color: '#fff',
  },
  login: {
    fontSize: 18,
    color: '#fff',
  },
  TopContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.67,
    width: 355,
    height: 225,
    borderRadius: 17,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor : '#fff',
    resizeMode: 'cover',
  },

  BottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Agrega espacio en la parte superior
    backgroundColor: '#022534', // Cambia el color de fondo
  },
  
  Text: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Text2: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  TextCard: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'top',
  },
  TextCardBottom: {
    color: 'green',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  TextCardBottom2: {
    color: 'red',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  textContainer: {
    position: 'relative',
    bottom: -30,
    left: 0,
    right: 0,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Color de fondo semi-transparente
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#08546c',
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%', // Asegura que la barra ocupe todo el ancho
  },
  
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonInit:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 3, // Ancho del borde
    borderColor: '#000000', //
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  roundButton1: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: '#033342',
    borderColor: '#fff',
    borderWidth: 2,
  },
  CenterContainer: {
    flex: screenWidth * 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Card: {
    width: screenWidth * 0.9,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  Cardinit: {
    width: screenWidth * 1,
    height: screenHeight * 0.45,
    margin: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#033342',
    borderRadius: 0,
    borderColor: '#022534',
    borderWidth: 15,
  },
  input: {
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    width: screenWidth * 0.8,
    marginVertical: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  OptionsContainer: {
    flex: 1,
    width: screenWidth * 1,
    alignItems: 'left',
    backgroundColor: '#ffffff',
  },
};

export default styles;
