import Link from "next/link";
import Image from "next/image";

/** External site link styled as a button, with the small arrow icon. */
export default function ExternalLink({ href, label, style }) {
  return (
    <Link
      className="button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
    >
      {label}
      <Image
        className="externallinkimage"
        src="/images/external-link.svg"
        width={15}
        height={15}
        alt=""
      />
    </Link>
  );
}
