import { FC } from "react";

interface buttonTypes {
  txt: string;
  cls?: string;
}

const DetailButton: FC<buttonTypes> = (props) => {
  return (
    <button type="button" className={props.cls}>
      {props.txt}
    </button>
  );
};

export default DetailButton;
