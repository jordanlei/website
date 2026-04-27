import Image from "next/image";

const LINKS = [
  {
    src: "/images/experience/linkedin.png",
    href: "https://www.linkedin.com/in/jordan-lei-782890130/",
  },
  {
    src: "/images/experience/instagram.png",
    href: "https://www.instagram.com/leijordanart/",
  },
  { src: "/images/experience/twitter.png", href: "https://twitter.com/NeuroLei" },
  { src: "/images/experience/medium.png", href: "https://jordanlei.medium.com/" },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="banner">
        <h1>Contact</h1>
        <div className="frostedCard">
          <p>
            Let&apos;s get in touch! Email me at jordanlei dot work at gmail dot com.
            <br />
            <br />
          </p>
          <div className="flex-row">
            {LINKS.map(({ src, href }) => (
              <div key={href} className="contact-icon col-md-3">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={src}
                    width={80}
                    height={80}
                    className="defaultImage"
                    alt=""
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}