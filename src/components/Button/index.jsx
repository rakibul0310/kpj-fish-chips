import Link from "next/link";

const Button = ({ name, path }) => {
  return (
    <Link href={path} passHref>
      <span>
        <button type="button" className="custom_button">
          {name}
        </button>
      </span>
    </Link>
  );
};

export default Button;
