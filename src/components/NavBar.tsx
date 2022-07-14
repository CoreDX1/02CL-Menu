import './NavBar.scss';

interface Menu {
  name: string;
  link: string;
}

const NavBar = () => {
  const listMenu: Menu[] = [
    {
      name: "Armor",
      link: "#armor",
    },
    {
      name: "Classes",
      link: "#classes",
    },
    {
      name : 'Events',
      link : '#events',
    },
    {
      name: "Monster",
      link: "#moster",
    },
    {
      name: "Weapons",
      link: "#weapons",
    },
  ];

  const renderMenu = (): JSX.Element[] => {
    return listMenu.map((menu: Menu) => {
      return (
        <li key={menu.name}>
          <a href={menu.link}>{menu.name}</a>
        </li>
      );
    });
  };

  return (
    <>
      <section className="container">
        <header className="header">
          <nav className="navbar">
            <h1 className="title">Wikipedia</h1>
            <ul className="nav">
              <li><a className='active' href="/">Home</a></li>
              {renderMenu()}
              </ul>
          </nav>
        </header>
      </section>
    </>
  );
};

export default NavBar;
