import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ContactForm = () => {
  return (
    <section className="container">
      <div className="grid h-144 max-h-144 grid-cols-12">
        {/* Endereço */}
        <div className="col-span-5 bg-black p-15">
          <p className="font-semibold text-white">Loja online</p>
          <div className="mt-15 flex gap-2">
            <MapPin className="text-p1" />
            <span className="text-c4">
              <p>Rua Ali Perto, 35</p>
              <p>rio de Janeiro - RJ</p>
              <p>Brasil</p>
            </span>
          </div>
          <div className="mt-8 flex gap-2">
            <Mail className="text-p1" />
            <span className="text-c4">
              <p>vendas@bikcraft.com</p>
              <p>assistencia@bikcraft.com</p>
            </span>
          </div>
          <div className="mt-8 flex gap-2">
            <Phone className="text-p1" />
            <p className="text-c4">+55 21 9999-9999</p>
          </div>
          <div className="mt-15 flex items-center gap-8">
            <Link href="https://www.instagram.com/bikcraft" target="_blank">
              <Image
                src="/svg/icon-instagram-p.svg"
                width={32}
                height={32}
                alt="Instagram"
              />
            </Link>
            <Link href="https://www.facebook.com/bikcraft" target="_blank">
              <Image
                src="/svg/icon-facebook-p.svg"
                width={32}
                height={32}
                alt="Facebook"
              />
            </Link>
            <Link href="https://www.youtube.com/bikcraft" target="_blank">
              <Image
                src="/svg/icon-youtube-p.svg"
                width={32}
                height={32}
                alt="YouTube"
              />
            </Link>
          </div>
        </div>
        {/* Formulário */}
        <div className="col-span-7 bg-white p-15"></div>
      </div>
    </section>
  );
};

export default ContactForm;
