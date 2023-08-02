import { StyleSheet } from 'react-native';

const OnboardingStyles = StyleSheet.create({
    //For the main image "box"
    imageContainer: {
        backgroundColor: 'light-gray'
      },
    
    //For the image (also in the OnboardingImg.js file)
      image: {
        width: 414,
        height: 487,
        flexShrink: 0
      },
    
    //For the little blue rectangle
      blueRectangle: {
        width: 24,
        height: 8,
        borderRadius: 24,
        marginRight: 8,
        backgroundColor: 'rgba(1, 167, 190, 1)'
      },
    
    //For the gray circle next to the blue rectangle
      grayCircle: {
        width: 8,
        height: 8,
        borderRadius: 24,
        opacity: 0.30000001192092896,
        backgroundColor: 'rgba(0, 0, 0, 1)'
      },
    
    //For the frame containing the rectangle and circle  
      rectangleFrame: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 60
      },
    
    //For the text in the title box  
      titleContent: {
        color: 'rgba(0, 0, 0, 1)',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 19,
        fontStyle: 'normal',
        fontWeight: 700
      },
    
    //For the title box as a whole  
      titleBox: {
        marginRight: 44,
        paddingTop: 41,
        alignItems: 'center'
      },
    
    //For the text in the description
      textContent: {
        color: 'rgba(130, 130, 130, 1)',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: 400
      },
    
    //For the description text box
      textDescription: {
        //marginLeft: 37,
        width: 340,
        height: 44,
        alignItems: 'center',
        marginTop: 24
      },
    
    //For the text on the button
      buttonText: {
        //marginLeft: '35',
        //paddingBottom: '14',
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 600,
        paddingTop: 15
      },
    
    //For the button style  
      buttonStyle: {
        width: 165,
        height: 51,
        flexShrink: 0,
        borderRadius: 7,
        backgroundColor: 'rgba(1, 167, 190, 1)'
      },
    
    //For the whole button
      startButton: {
        //marginLeft: 124,
        //marginRight: 125,
        marginTop: 49,
        alignItems: 'center'
      },
    
    //For the blue rectangle in the footer  
      containFooter: {
        width: 124,
        height: 6,
        flexShrink: 0,
        borderRadius: 17,
        paddingLeft: 147,
        marginTop: 52,
        marginBottom: 28,
        backgroundColor: 'rgba(1, 167, 190, 1)'
      },
    
    //For the whole screen
      container: {
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        height: '100%'
      }
});

export default OnboardingStyles;