import { StyledWrapper, StyledImage } from "./styles";
import Divider from "../Divider";
import GetImage from "../GetImage";

interface Props {
  imageUrl: string;
  loading: boolean;
}

const Picker = (props: Props) => {
  const { imageUrl } = props;

  return (
    <>
      <StyledWrapper>
        {imageUrl ? (
          <StyledImage data-testid="picker" url={imageUrl} />
        ) : (
          <GetImage width="100%" height="400px" />
        )}
      </StyledWrapper>
      <Divider />
    </>
  );
};

export default Picker;
