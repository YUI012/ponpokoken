import Header from "../components/Header";
import { certifications } from "../data/certifications";

export default function Home() {
  const visible = certifications.filter((cert) => cert.enabled);

  return (
    <main>
      <Header />
      <section className="hero shell">
        <p className="overline">IT CERTIFICATION SHORTEST GUIDE</p>
        <h1>IT資格を、<br />最短で。</h1>
        <p className="heroText">資格ごとに、最短ルート・教材・問題演習・検証記事だけをまとめています。</p>
      </section>

      <section className="shell listSection">
        <p className="sectionTitle">資格を選ぶ</p>
        <div className="certList">
          {visible.map((cert) => (
            <a className="certRow" href={`/${cert.slug}`} key={cert.slug}>
              <div>
                <strong>{cert.name}</strong>
                <span>{cert.category}</span>
              </div>
              <div className="rightMeta">
                <span>{cert.shortest}</span>
                <b>→</b>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="shell noteBlock">
        <p className="label">このサイトの役割</p>
        <p>ここでは結論だけ。詳しい根拠・合格体験記・比較はnoteに分けます。</p>
      </section>

      <footer className="footer shell">PRを含みます / © 2026 ponpokoken.com</footer>
    </main>
  );
}
