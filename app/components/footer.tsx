import Link from "next/link";

type FooterLinkProps = {
  text: string;
  url: string;
};

function FooterLink(props: FooterLinkProps) {
  let { text, url } = props;
  return (
    <Link className="transtion hover:text-tal-500" href={url}>
      {text}
    </Link>
  );
}
export default function Footer() {
  return (
    <>
      <footer className="pt-4 px-8 pb-16 border-t-2 mt-6">
        <div
          className="flex justify-between gap-6"
          role="navigation"
          aria-label="Footer"
        >
          <div className="flex gap-6 text-sm font-medium text-zinc-600">
            <FooterLink text="Home" url="/" />
            <FooterLink text="Projects" url="/projects" />
            <FooterLink text="About" url="/about" />
          </div>
          <p className="text-sm text-zinc-400">
            &copy; 2024 Basim Aljazaeri. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
