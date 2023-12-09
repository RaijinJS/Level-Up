import Nav from "../../components/Nav/Nav"
export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Nav/>
      <div className="mx-auto px-4 mt-0 block">{children}</div>
    </div>
  );
}
