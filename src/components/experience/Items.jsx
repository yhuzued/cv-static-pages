import PropTypes from "prop-types";
import { useAutoAnimate } from "@formkit/auto-animate/react";

Items.propTypes = {
  list: PropTypes.array.isRequired,
  setList: PropTypes.func.isRequired,
};

export default function Items({ list, setList }) {
  const [parent] = useAutoAnimate();

  return (
    <>
      <ul className="list-disc ml-12 mt-3" ref={parent}>
        <li>Yusuf</li>
      </ul>
    </>
  );
}
