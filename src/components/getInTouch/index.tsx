import { GetInTouchProps } from "@/types";
import Button from "../button/page";

const GetInTouch: React.FC<GetInTouchProps> = ({ content, name }) => {
  return (
    <div className="flex md:flex-wrap md:gap-5 items-center justify-between md:justify-center">
      <h5 className="md:text-center">{content}</h5>
      <Button btnName={name} />
    </div>
  );
};

export default GetInTouch;
