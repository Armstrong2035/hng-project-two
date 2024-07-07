import ProductList from "@/components/Products/ProductList";

export default function Home() {
  return (
    <main>
      <div style={{ diisplay: "flex", alignItems: "center" }}>
        <ProductList />
      </div>
    </main>
  );
}
