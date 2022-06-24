interface IProps {
  text: string;
}

const PageTitle = ({ text }: IProps) => <h3>{text}</h3>;

export default PageTitle;
