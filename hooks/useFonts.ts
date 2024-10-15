import { useFonts } from "expo-font";

const useCustomFonts = () => {
    const [ fontsLoaded ] = useFonts({
        "Bebas-Neue-Regular": require("../assets/fonts/BebasNeue-Regular.ttf"),
        "Mont-Serrat": require("@/assets/fonts/Montserrat-VariableFont_wght.ttf"),
    })

    return fontsLoaded
}

export default useCustomFonts;
