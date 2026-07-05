import useWindowStore from "#store/window";

const WindowControlls = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <button
        type="button"
        className="close"
        aria-label="Close window"
        onClick={() => closeWindow(target)}
      />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
};

export default WindowControlls;
