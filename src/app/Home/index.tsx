import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { Input } from "@/components/Input";
import { FilterStatus } from "@/types/FiltertStatus";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PEDING, FilterStatus.DONE];

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => {
            return <Filter key={status} status={status} isActive={true} />;
          })}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
