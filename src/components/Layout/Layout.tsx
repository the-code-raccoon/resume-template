import "./styles.css";

export const Header = ({ children }: React.PropsWithChildren) => (
  <h1 className="header">{children}</h1>
);

export const RowRightItem = ({ children }: React.PropsWithChildren) => (
  <span className="extraInfo">{children}</span>
);

type RowProps = React.PropsWithChildren & {
  spacing?: "space-between" | "flex-start";
};

export const Row = ({ spacing = 'space-between', children }: RowProps) => (
  <div className={`row ${spacing}`}>{children}</div>
);

export const Content = ({ children }: React.PropsWithChildren) => (
  <div className="content">{children}</div>
);

type RootProps = React.HTMLAttributes<HTMLDivElement> & React.PropsWithChildren;

export const Root = ({ className, children }: RootProps) => (
  <div className={className}>{children}</div>
);
