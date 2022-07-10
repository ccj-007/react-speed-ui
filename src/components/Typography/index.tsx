import Title from './Title'
import Text from './Text'
import OriginTypography from './Typography'

export type TypographyProps = {
  Text: typeof Text;
  Title: typeof Title;
};

const Typography = OriginTypography as unknown as TypographyProps;
Typography.Text = Text;
Typography.Title = Title;

export default Typography;