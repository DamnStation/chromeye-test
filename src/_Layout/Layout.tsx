import Navbar from "./Navbar/Navbar";

type Props = {
  children?: JSX.Element | JSX.Element[];
};
function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-col items-center justify-center">
        <Navbar />
      </header>
      <main className="flex flex-col items-center justify-center">
        {children}
      </main>
      <footer className="absolute self-center bottom-3 opacity-75 flex flex-col items-center justify-center   ">
        <p className="m-auto text-center">
          Radoslav Marinov © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default Layout;
