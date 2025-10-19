import SocialShare from '../components/SocialShare';

export default function Integracoes() {
  const promo = {
    title: "Promoção FitPlay!",
    link: "https://fitplay.com/promocao"
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Compartilhar Promoções</h2>
      <SocialShare promo={promo} />
    </div>
  );
}
