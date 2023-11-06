import Button from "~/components/button";

export default function Premium() {
  return (
    <section className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)] py-3 px-4 flex flex-col gap-2.5">
      <h6 className="text-xl font-extrabold leading-6">Subscribe to Premium</h6>
      <p className="leading-5 text-[15px] font-bold">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <div className="self-start">
        <Button>Subscribe</Button>
      </div>
    </section>
  );
}
