import Image from "next/image";
import { useEffect, useRef } from "react";
import "./SectionHomeTrustPartners.css";

const itemsTrust = [
  {
    url: "/images/accueil/logoclient/LOGO-UNIVERS-TERRASSES-BOIS-GIVI-AGENCE-DIGITALE-COMMUNICATION.png",
  },
  {
    url: "/images/accueil/logoclient/LOGO-CITY-WEED-CBD-GIVI-AGENCE-DIGITALE-COMMUNICATION.png",
  },
  {
    url: "/images/accueil/logoclient/LOGO-EXCELLIUM-NUTRITION-GIVI-AGENCE-DIGITALE-COMMUNICATION.png",
  },
  {
    url: "/images/accueil/logoclient/LOGO-IMPACT-CBD-SHOP-GIVI-AGENCE-DIGITALE-COMMUNICATION.png",
  },
  {
    url: "/images/accueil/logoclient/LOGO-PARERGA-GIVI-AGENCE-DIGITALE-COMMUNICATION.png",
  },
];

const SectionHomeTrustPartners = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerWidth = containerRef.current.scrollWidth / 2;
    containerRef.current.style.setProperty(
      "--marquee-width",
      `${containerWidth}px`
    );
  }, []);

  return (
    <section className='h-auto max-w-full'>
      <div className='flex items-center justify-center'>
        <h1 className='text-title-big pt-12 font-bold'>
          Ils nous ont fait confiance
        </h1>
      </div>
      <div className='mt-8 w-full overflow-hidden'>
        <div ref={containerRef} className='animate-marquee flex space-x-8'>
          {[...itemsTrust, ...itemsTrust].map((item, index) => (
            <div key={index} className='min-w-[200px] flex-shrink-0 px-4'>
              <Image
                src={item.url}
                alt={`Trust Partner ${index + 1}`}
                width={400}
                height={100}
                className='object-contain'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionHomeTrustPartners;
