type LoginButtonProps = {
  onClick: () => void;
};

export const LoginButton = ({ onClick }: LoginButtonProps) => (
  <button onClick={onClick}>Login</button>
);
