import React from "react";
import axios from "axios";
import styled from "styled-components";
import { View } from "react-native";
import { Loading } from "../components/Loading";

const ProductInfoImage = styled.Image`
  border-radius: 10px;
  width: 300px;
  height: 250px;
  margin-bottom: 20px;
`;

const ProductInfoText = styled.Text`
  font-size: 12px;
  line-height: 14px;
`;

export const ProductInfoScreen = ({ route, navigation }) => {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const { id, title } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title,
    });

    axios
      .get("https://644e50a31b4567f4d5849813.mockapi.io/api/v1/products/" + id)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Продукт недоступен");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={{ padding: 20 }}>
      <ProductInfoImage source={require("../src/main2.png")} />
      <ProductInfoText>{data.description}</ProductInfoText>
    </View>
  );
};
