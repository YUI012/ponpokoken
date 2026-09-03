import { notFound } from "next/navigation";
import Header from "../../components/Header";
import ProductButton from "../../components/ProductButton";
import CareerAd from "../../components/CareerAd";
import { certBySlug, certifications } from "../../data/certifications";
import { products } from "../../data/products";
import { articles } from "../../data/articles";

export function generateStaticParams() {
  return certifications.filter((cert) => cert.enabled).map((cert) => ({ slug: cert.slug }));
}

export default async function CertificationPage({ params }) {
  const { slug } = await params;
  const cert = certBySlug[slug];
  if (!cert || !cert.enabled) return notFound();

  return (
    <main>
      <Header />
      <section className="hero compact shell">
        <a className="back" href="/">← 資格一覧</a>
        <p className="overline">{cert.category}</p>
        <h1>{cert.name}<br />最短合格</h1>
        <p className="shortest">{cert.shortest}</p>
        <p className="heroText">{cert.summary}</p>
      </section>

      <section className="shell routeSection">
        <p className="sectionTitle">最短ルート</p>
        <div className="steps">
          {cert.steps.length === 0 && (
            <div className="empty">教材・詳細を追加するだけで、このページに自動表示されます。</div>
          )}
          {cert.steps.map((step, index) => {
            if (step.type === "product") {
              const product = products[step.productId];
              return (
                <article className="step" key={`${step.productId}-${index}`}>
                  <span className="stepNo">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="label">{step.title}</p>
                    <h2>{product?.name}</h2>
                    <p>{product?.reason}</p>
                    <ProductButton product={product} />
                  </div>
                </article>
              );
            }

            return (
              <article className="step" key={`${step.name}-${index}`}>
                <span className="stepNo">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="label">{step.title}</p>
                  <h2>{step.name}</h2>
                  <p>{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {cert.articleIds.length > 0 && (
        <section className="shell detailSection">
          <p className="sectionTitle">詳しく見る</p>
          <div className="articleList">
            {cert.articleIds.map((id) => {
              const article = articles[id];
              if (!article) return null;
              return (
                <a href={article.url} className="articleRow" target="_blank" rel="noreferrer" key={id}>
                  <span>{article.title}</span><b>↗</b>
                </a>
              );
            })}
          </div>
        </section>
      )}

      {cert.nextCerts.length > 0 && (
        <section className="shell nextSection">
          <p className="sectionTitle">次に取るなら</p>
          {cert.nextCerts.map((nextSlug) => {
            const next = certBySlug[nextSlug];
            if (!next) return null;
            return (
              <a className="nextRow" href={`/${next.slug}`} key={next.slug}>
                <span>{next.name}</span><span>{next.shortest} →</span>
              </a>
            );
          })}
        </section>
      )}

      {cert.showCareerAd && <div className="shell"><CareerAd /></div>}

      <section className="shell disclosure">
        <strong>PR</strong>
        <p>このページにはアフィリエイト広告が含まれます。UdemyはImpact等で発行した正規リンク、転職案件は各ASPの規約に従った広告素材を利用してください。</p>
      </section>

      <footer className="footer shell">© 2026 ponpokoken.com</footer>
    </main>
  );
}
