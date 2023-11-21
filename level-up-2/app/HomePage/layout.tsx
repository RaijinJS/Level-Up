import Nav from "../../components/Nav/Nav"
export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
  {/* TODO: DONE - Make nav bar it's own component and add conditionals to determine display*/}
      <Nav/>
      <div className="mx-auto px-4 mt-0 block">{children}</div>
    </div>
  );
}
