import { site } from "@/content/portfolio";

/** Closing call to action: the email address is the headline. */
export function ContactCta() {
  return (
    <section aria-labelledby="contact-cta" className="shell mt-32 md:mt-48">
      <h2 id="contact-cta" className="max-w-[28ch] text-lg text-muted-foreground font-sans">
        {site.availability}. The quickest way to reach me is email.
      </h2>
      <a
        href={`mailto:${site.email}`}
        className="display link-draw mt-6 inline-block pb-2 text-[clamp(2.5rem,9vw,8.5rem)] break-all transition-colors hover:text-brand sm:break-normal"
      >
        {site.email}
      </a>
    </section>
  );
}
