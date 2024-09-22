import { memo } from "react";

const headerStyles = {
  backgroundColor: "#05203c",
  height: "250px",
  padding: "48px",
};

type HeaderProps = {
  children: any;
};

export const Header = memo(function Header({ children }: HeaderProps) {
  return <div style={headerStyles}>{children}</div>;
});
