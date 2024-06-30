import {
  AnotherParagraph,
  Icon,
  IconDiv,
  TransitionDiv,
  TransitionParagraph,
  TextDiv,
  ParagraphText,
} from "./TransitionPage.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faLocationDot,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

function TransitionPage() {
  return (
    <>
      <TransitionDiv>
        <TransitionParagraph>
          Evenimentele la care abia astepti sa ajungi
        </TransitionParagraph>
        <AnotherParagraph>
          Cele mai noi evenimente in materie de: muzica, teatru, sport si
          altele!
        </AnotherParagraph>
        <IconDiv>
          <Icon>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faLocationDot} />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faMusic} />
          </Icon>
        </IconDiv>
        <TextDiv>
          <ParagraphText>Alege data dorita</ParagraphText>
          <ParagraphText>Alege orasul preferat</ParagraphText>
          <ParagraphText>Alege tipul evenimentului</ParagraphText>
        </TextDiv>
      </TransitionDiv>
    </>
  );
}

export default TransitionPage;
