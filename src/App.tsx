import { useEffect, useState } from "react";
import { ItemListContainer } from "./components/Item/ItemListContainer";
import NavBar from "./components/Navbar/NavBar";
interface ListWeapons {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
}

interface AppWeapons {
  wpns: ListWeapons[];
}

const weapons = [
  {
    id: 0,
    name: "Lions Bane",
    img: "https://i.pinimg.com/originals/9e/3a/af/9e3aaf91b50eadd9321c084b58349296.png",
    price: 200,
    quantity: 5,
  },
  {
    id: 1,
    name: "Arco de Hiero",
    img: "https://www.conqhub.com/images/seasons/highlanders/seasonal-weapon-skins/longbow.png",
    price: 250,
    quantity: 8,
  },
  {
    id: 2,
    name: "Mazo",
    img: "https://whatsyourtagblog.files.wordpress.com/2013/04/weapon187.png",
    price: 100,
    quantity: 4,
  },
  {
    id: 3,
    name: "Alatreon Longword",
    img: "https://www.nicepng.com/png/full/276-2765192_any-weapon-that-looks-like-a-scythe-monster.png",
    price: 300,
    quantity: 6,
  },
  {
    id: 4,
    name: "Dual Weapons",
    img: "https://whatsyourtagblog.files.wordpress.com/2013/04/weapon072.png",
    price: 150,
    quantity: 14,
  },
  {
    id: 5,
    name: "Dual Weapons V2",
    img: "https://whatsyourtagblog.files.wordpress.com/2013/04/weapon136.png",
    price: 180,
    quantity: 20,
  },
];

function App() {
  const [listWeapons, setListWeapons] = useState<AppWeapons["wpns"]>([]);

  useEffect(() => {
    setListWeapons(weapons);
  }, []);

  return (
    <>
      <NavBar />
      <ItemListContainer wpns={listWeapons}/>
    </>
  );
}

export default App;
