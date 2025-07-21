import { Avatar, Button, Card, Divider, Flex, Skeleton } from "antd";
import { useState, type FC } from "react";
import type { ICalcCard } from "../types/ICalcCard";
import '../styles/SiderCards.css'
import { ModalCalcIMT } from "./Modals/ModalCalcIMT";

interface SiderCardsProps {
  cards: ICalcCard[];
  ClickCalcBTN: (path: string) => void;
  loading:boolean
}

export const SiderCard: FC<SiderCardsProps> = ({ cards, ClickCalcBTN,loading}) => {
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   
 
  const handleButtonClick  = (path:string) => {
    ClickCalcBTN(path)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
  setIsModalOpen(false);
  };
   
  if (loading) {
    return (
      <Flex gap="middle" align="start" vertical className="app-sider-content">
        {[...Array(7)].map((_, index) => (
          <Card key={`skeleton-${index}`} className="sider-card">
            <Skeleton active avatar paragraph={{ rows: 2 }} />
          </Card>
        ))}
      </Flex>
    );
  }

  return (
    <Flex gap="middle" align="start" vertical className="app-sider-content">
      {cards.map((card) => (
        <Card style={{ backgroundColor: card.color }} key={card.path} className="sider-card">
          <Card.Meta
            avatar={<Avatar src={card.src} />}
            title={<h3 className="sider-card-title">{card.title}</h3>}
            description={
              <div className="sider-card-description">
                <p>{card.description}</p>
              </div>
            }
          />
          <Divider />
          <Button className="sider-calc-button" onClick={() => handleButtonClick(card.path)}>
            Рассчитать
          </Button>
        </Card>
      ))}

      <ModalCalcIMT 
        open={isModalOpen}
        onCancel={handleModalClose}
      />

    </Flex>
  );
};