export default function ProductButton({ product }) {
  if (!product) return null;
  return (
    <a className="buyButton" href={product.url} rel="sponsored nofollow">
      {product.label}
    </a>
  );
}
