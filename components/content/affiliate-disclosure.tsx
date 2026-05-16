type AffiliateDisclosureProps = {
  text?: string;
};

const defaultDisclosure =
  "This page may contain affiliate links. If you purchase through them, we may earn a commission at no extra cost to you.";

export function AffiliateDisclosure({
  text = defaultDisclosure,
}: AffiliateDisclosureProps) {
  return (
    <p className="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-xs leading-6 text-slate-700">
      {text}
    </p>
  );
}
