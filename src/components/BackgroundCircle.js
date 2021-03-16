function BackgroundCircle(props) {
  return (
    <div id={"div-background-ellipse"} key={props.number} style={{
      width: props.size,
      height: props.size,
      left: props.left,
      top: props.top,
    }}>
    </div>
  );
}

export default BackgroundCircle;
