import { memo } from "react";

const Navbar = ({ adjective, getAdjective }) => {
  console.log("navbar is rendered");
  return (
    <div>
      <p>
        <b>useCallback + useMemo</b>
      </p>
      I am a {adjective} Navbar
      <button onClick={getAdjective()}>{getAdjective()}</button>
    </div>
  );
};

export default memo(Navbar);
