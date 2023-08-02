import { Button } from "../ui/button";

const ButtonGroup = () => {
  return (
    <div className="hidden items-center justify-center gap-6 md:flex">
      <Button variant="link">Promo</Button>
      <Button variant="ghost">Log In</Button>
    </div>
  );
};

export default ButtonGroup;
