import { useState } from "react";

import FavoritesIcon from "../../icons/FavoritesIcon";
import FavoritesIconAdded from "../../icons/FavoritesIconAdded";

import "./Header.css";

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const [isAdded, setIsAdded] = useState(false);

  const { title } = props;

  const toggleAdd = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className="Header">
      <div className="Header__title">
        <span className="Header__label">Lido: </span>
        {title}

        <button className="Header__bookmarks" onClick={toggleAdd}>
          {isAdded ? <FavoritesIconAdded /> : <FavoritesIcon />}
        </button>
      </div>
      <div className="Header__report">Report an error</div>
    </div>
  );
}
