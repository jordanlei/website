import Link from "next/link";
import Image from "next/image";

/**
 * A styled external-link button with the site's standard arrow icon.
 * Props:
 *   href    – destination URL
 *   label   – button text
 *   style   – optional additional inline styles on the Link
 */
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
