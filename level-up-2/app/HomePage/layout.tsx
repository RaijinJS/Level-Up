import Nav from "../../components/Nav/Nav"
export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
  {/* TODO: DONE - Make nav bar it's own component to be used on profile page too with conditional home/profile button + add logout option on home page*/}
      <Nav/>
      <div className="mx-auto px-4 mt-0 block">{children}</div>
    </div>
  );
}
