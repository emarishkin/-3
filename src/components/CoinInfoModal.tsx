import { Divider, Flex, Image, Tag, Typography } from "antd";
import type { FC } from "react";

interface CoinInfoModalProps{
    coin:any
}

export const CoinInfoModal:FC<CoinInfoModalProps> = ({coin}) => {
    return (
        <>
        <Flex>
            <Image src={coin.icon} />
            <Typography.Title style={{margin:0}} level={2}>{coin.name}</Typography.Title>
        </Flex>
        <Divider />
        <Typography.Paragraph>
         <Typography.Text>
            1 hour: <Tag color={coin.priceChange1h > 0 ? 'green' : 'red' }>{coin.priceChange1h}%</Tag>
         </Typography.Text>
         <Typography.Text>
            1 day: <Tag color={coin.priceChange1d > 0 ? 'green' : 'red' }>{coin.priceChange1d}%</Tag>
         </Typography.Text>
         <Typography.Text>
            1 week: <Tag color={coin.priceChange1w > 0 ? 'green' : 'red' }>{coin.priceChange1w}%</Tag>
         </Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>Price:  {coin.price.toFixed(2)}$</Typography.Paragraph>
      <Typography.Paragraph>Market Cap:  {(coin.marketCap/1000000).toFixed(0)}млн$</Typography.Paragraph>
      <Typography.Paragraph>Smart contract:  {coin.contractAddress ? coin.contractAddress : 'Нет адрес контракта'}</Typography.Paragraph>
        </>
    )
}