import React from "react";
import axios from "axios";
import {
  Alert,
  FlatList,
  View,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Product } from "../components/Product";
import { Loading } from "../components/Loading";

export const HomeScreen = ({ navigation }) => {
  const [items, setItems] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchProducts = () => {
    setIsLoading(true);
    axios
      .get("https://644e50a31b4567f4d5849813.mockapi.io/api/v1/products")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Продукты недоступны");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchProducts, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchProducts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProductInfo', { id: item.id, title: item.title})}>
            <Product
              title={item.title}
              imagePath={require("../src/doc3.jpg")}
              description={item.description}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
