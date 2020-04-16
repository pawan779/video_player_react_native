import {DarkTheme,DefaultTheme} from '@react-navigation/native'

export const CustomDarkTheme={

    ...DarkTheme,colors:{
      ...DarkTheme.colors,
      headerColor:"#212121",
      iconColor:"#ff0000",
      text:"#fff",
      subIcon:"#fff"
    }
  
}

export const CustomDefaultTheme={

  ...DefaultTheme,colors:{
    ...DefaultTheme.colors,
    headerColor:"#fff",
    iconColor:"#ff0000",
    text:"#212121",
    subIcon:"#000"
   
  }

}