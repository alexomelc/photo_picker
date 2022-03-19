import localization from "../../services/localization";
import { StyledHeader, StyledWrapper } from "./styles";
import Divider from "../Divider";

const Header = () => {
  return (
    <>
      <StyledWrapper>
        <StyledHeader>{localization.header}</StyledHeader>
      </StyledWrapper>
      <Divider />
    </>
  );
};

export default Header;
