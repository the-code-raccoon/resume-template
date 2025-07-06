import "./styles.css"

export const Header = ({ children }: React.PropsWithChildren) => (
  <h1 className="header">{children}</h1>
);

export const Row = ({ children }: React.PropsWithChildren) => (
  <div className="row">{children}</div>
);

export const Content = ({ children }: React.PropsWithChildren) => (
  <div className="content">{children}</div>
);
