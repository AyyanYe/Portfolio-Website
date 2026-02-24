import { useEffect } from "react";

const DEFAULT_DESCRIPTION =
  "Ayyan Ahmed – Full Stack Web Developer. MERN, Django, Web3. Open to working student roles in Germany.";

/**
 * Sets document title and meta description (and optional og tags) for the current page.
 * Call once per page (e.g. in Blog, BlogPost) so crawlers and shares get the right title/description.
 */
export function usePageMeta(title, description = DEFAULT_DESCRIPTION, canonicalUrl = null) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `${title} | Ayyan Ahmed` : "Ayyan Ahmed | Full Stack Developer";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    const prevContent = metaDesc.getAttribute("content");
    metaDesc.setAttribute("content", description || DEFAULT_DESCRIPTION);

    const updateOg = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    updateOg("og:title", document.title);
    updateOg("og:description", description || DEFAULT_DESCRIPTION);
    if (canonicalUrl) updateOg("og:url", canonicalUrl);

    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute("content", prevContent || "");
    };
  }, [title, description, canonicalUrl]);
}
