import Shape from "../shape/shape";

function CardHeader(props) {
  return <header>{props.children}</header>;
}

function CardFooter(props) {
  return <footer>{props.children}</footer>;
}

function CardContent(props) {
  return <Shape>{props.children}</Shape>;
}

CardContent.Header = CardHeader;
CardContent.Footer = CardFooter;

export default CardContent;
