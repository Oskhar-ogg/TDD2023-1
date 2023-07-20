const styles = {
  container: {
    flex: 1,
    alignContent: 'center',
  },
  logo: {
    fontSize: 20,
    alignContent: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  appName: {
    fontSize: 18,
    alignItems: 'center',
  },
  login: {
    fontSize: 16,
  },
  TopContainer:{
    flex: 1,  
    backgroundColor: '#022534',
    alignContent: 'center',
    justifyContent: 'center',
    
  },
  imageContainer:{
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'stretch',
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

  BottomContainer:{
    flex: 1,
    backgroundColor: '#022534',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  Text:{  
    color: '#FFFFFF',
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Text2:{  
    color: '#fff',
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  TextCard:{  
    color: '#FFFFFF',
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'top',
  },
  TextCardBottom:{  
    color: 'green',
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  TextCardBottom2:{  
    color: 'red',
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Color de fondo semi-transparente
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#08546c',
    height: 50,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

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
    padding: 5,
    borderRadius: 40,
    backgroundColor: '#033342',
    borderColor: '#fff',
    borderWidth: 2,
  },
  CenterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Card: {
    width: '150%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,  
  },
  map:{
    width: '100%',
    height: '100%',
  }
};

export default styles;