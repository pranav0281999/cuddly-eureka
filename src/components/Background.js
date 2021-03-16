import BackgroundCircle from "./BackgroundCircle";

function Background(props) {
  return (
    <div className={"div-background"}>
      {props.children}

      {[...Array(10).keys()].map(number => {
        const size = Math.random() * 400;
        return (
          <BackgroundCircle
            key={number}
            size={`${size}px`}
            left={`${Math.random() * 90 - 10}%`}
            top={`${Math.random() * 90 - 10}%`}
          />
        );
      })}
    </div>
  );
}

export default Background;
