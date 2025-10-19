export default function SocialShare({ promo }) {
  const urls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${promo.link}`,
    twitter: `https://twitter.com/intent/tweet?url=${promo.link}&text=${promo.title}`,
    whatsapp: `https://api.whatsapp.com/send?text=${promo.title} ${promo.link}`
  };

  return (
    <div className="flex gap-4">
      <a href={urls.facebook} target="_blank" className="bg-blue-600 p-2 rounded text-white">Facebook</a>
      <a href={urls.twitter} target="_blank" className="bg-blue-400 p-2 rounded text-white">Twitter</a>
      <a href={urls.whatsapp} target="_blank" className="bg-green-500 p-2 rounded text-white">WhatsApp</a>
    </div>
  );
}
