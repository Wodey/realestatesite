import React,{useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  height: calc(750px - 140px);
  align-items: center;
`;

const Table = styled.div`
  width: 40%;
  display: grid;
  padding: 10px 0;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px 50px;
  margin-bottom: 15px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  height: 65px;
  justify-content: space-between;
`;
const ItemTitle = styled.label`
  font-size: 1.2rem;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 2rem;
  padding: 10px;
  margin-bottom: 25px;

`;
const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
  border: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
  outline: none;
  border-bottom: 1px solid black;
`;

const Files = styled(Input)`
  display: none;
`;

const FilesTitle = styled(ItemTitle)`
  color: red;
`;
const Extra = styled.span`
  font-size: 1rem;
`;
const Button = styled.button`
  font-size: 1.3rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: black;
  position: absolute;
  bottom: 100px;
  color: white;
  width: 100px;
  height: 50px;
  &:hover {
    color: black;
    background: white;
    border: 1px solid black;
  }
`;
const SquareBathBedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MiniInput = styled(Input)`
  width: 20%;
  padding: 0;
`;
const Icon = styled.img`
  width: 10%;
`;

const Type = styled.select`
  border: none;
  padding: 5px;
  font-size: 1.2rem;
  outline: none;
  border-bottom: 1px solid black;
`;
const TypeItem = styled.option`
`;

export default () => {
  const [title, setTitle] = useState("");
  const [address,setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [bathrooms, setBathrooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [square, setSquare] = useState(0);
  const [price, setPrice] = useState(0);
  const [number, setNumber] = useState("");
  const [tags, setTags] = useState([]);
  const [type, setType] = useState("buy");

  return (
    <Wrapper>
      <Title>Sell own Real Estate</Title>
      <Table>
        <Item>
          <ItemTitle>Title</ItemTitle>
          <Input value={title} onChange={e => setTitle(e.target.value)} />
        </Item>
        <Item>
          <ItemTitle>Address</ItemTitle>
          <Input value={address} onChange={e => setAddress(e.target.value)}/>
        </Item>
        <Item>
          <ItemTitle>Description</ItemTitle>
          <Input value={description} onChange={e => setDescription(e.target.value)}/>
        </Item>
        <Item>
          <ItemTitle>Bathrooms. Bedrooms. Square</ItemTitle>
          <SquareBathBedWrapper>
            <Icon src="/bathroom.svg" />
            <MiniInput value={bathrooms} type="number" onChange={e => setBathrooms(e.target.value)}/>
            <Icon src="/bedroom.svg" />
            <MiniInput value={bedrooms} type="number" onChange={e => setBedrooms(e.target.value)}/>
            <Icon src="/square.svg" />
            <MiniInput value={square} type="number" onChange={e => setSquare(e.target.value)}/>
          </SquareBathBedWrapper>
        </Item>
        <Item>
          <ItemTitle>Price</ItemTitle>
          <Input value={price} type="number" onChange={e => setPrice(e.target.value)}/>
        </Item>
        <Item>
          <ItemTitle>Your Number</ItemTitle>
          <Input value={number} onChange={e => setNumber(e.target.value)}/>
        </Item>
        <Item>
          <ItemTitle>Tags</ItemTitle>
          <Input value={tags} onChange={e => setTags(e.target.value.split(' '))}/>
        </Item>
        <Item>
          <ItemTitle>Type</ItemTitle>
          <Type value={type} onChange={e => setType(e.target.value)}>
            <TypeItem>Buy</TypeItem>
            <TypeItem>Rent</TypeItem>
          </Type>
        </Item>
        <Item>
          <FilesTitle for="loadfile">Add photos</FilesTitle>
          <Files id="loadfile" type="file" />
          <Extra>(First photo will be used as thumbnail)</Extra>
        </Item>
      </Table>
      <Button>Add</Button>
    </Wrapper>
  )
}
