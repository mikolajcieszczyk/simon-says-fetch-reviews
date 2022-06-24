import { PageTitleWrapper } from "./Components.styled";
interface IProps {
  text: string;
}

const PageTitle = ({ text }: IProps) => (
  <PageTitleWrapper>{text}</PageTitleWrapper>
);

export default PageTitle;
