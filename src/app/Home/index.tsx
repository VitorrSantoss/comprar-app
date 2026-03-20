import { Text, View } from "react-native";
import { estilos } from "./styles";

export function Home() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.text}>Olá, Mundo!</Text>
    </View>
  );
}
