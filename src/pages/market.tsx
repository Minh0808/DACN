import {Background, Text, Title} from './Component/market'

const Market: React.FC = () => {
  return (
    <>
      <Background
        style={{
          backgroundImage: `url("./images/HomeIcon/OBJECTS-min.png")`,
        }}
      >
        <Text>COMING</Text>
        <Title>SOON</Title>
      </Background>
    </>
  )
}
export default Market
