import { Card, CardContainer, CardTitle } from "./HomeCard.style";
function HomeCard({ title }) {
  return (
    <>
      <CardContainer>
        <Card>
          <CardTitle>{title}</CardTitle>
        </Card>
      </CardContainer>
    </>
  );
}
export default HomeCard;
