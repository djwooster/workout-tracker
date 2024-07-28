function LeftNavMenu() {
  return (
    <div className="left-nav-menu">
      <LeftNavMenuItem />
      <LeftNavMenuItem />
      <LeftNavMenuItem />
      <LeftNavMenuItem />
    </div>
  );
}

function LeftNavMenuItem({ icon }) {
  return <div className="left-nav-item"></div>;
}

export default LeftNavMenu;
