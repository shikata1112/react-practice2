export const ColorfulMessage = (props) => {
  const { color, children } = props;

  const style = {
    color,
    fontSize: "20px"
  };

  return <p style={style}>{children}</p>;
};
