import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { Input } from "@/components/Input";
import { Item } from "@/components/Item";
import { FilterStatus } from "@/types/FiltertStatus";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PEDING, FilterStatus.DONE];
const ITENS = [
  { id: "1", status: FilterStatus.DONE, description: "1 pacote de café" },
  {
    id: "2",
    status: FilterStatus.PEDING,
    description: "3 pacotes de macarrão",
  },
  { id: "3", status: FilterStatus.PEDING, description: "3 cebolas" },
];

export function Home() {
  const [filter, setFilter] = useState(FilterStatus.PEDING);

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter
              key={status}
              status={status}
              isActive={status === filter}
              onPress={() => setFilter(status)}
            />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ITENS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => console.log("muda status")}
              onRemove={() => console.log("remover")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Nenhum item adicionado</Text>
          )}
        />
      </View>
    </View>
  );
}
