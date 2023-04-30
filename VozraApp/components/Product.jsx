import styled from "styled-components";

const ProductView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const ProductImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 12px;
`;

const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

const ProductDescription = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const ProductDetails = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const truncateStr = (str) => {
  const lengthAllowed = 40;
  if (str.length >= lengthAllowed) {
    return str.substring(0, lengthAllowed) + '...';
  }
  return str;
};

export const Product = ({ title, imagePath, description }) => {
  return (
    <ProductView>
      <ProductImage source={imagePath} />
      <ProductDetails>
        <ProductTitle>{truncateStr(title)}</ProductTitle>
        <ProductDescription>{truncateStr(description)}</ProductDescription>
      </ProductDetails>
    </ProductView>
  );
};

//source={require('../src/doc1.jpg')}
