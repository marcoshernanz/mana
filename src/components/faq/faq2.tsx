import Badge from "../../../old ui/Badge";

export default function Faq2() {
  return (
    <div className="flex max-w-screen-sm flex-col pb-3">
      <div>
        <button className="flex w-full gap-5 py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
          {" "}
          What is MANA and how does it work?
          <Badge type="support" size="small" className="justify-end" />
        </button>
        <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
      </div>
      <div>
        {" "}
        <button className="flex gap-5 py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
          How does MANA personalize my experience?
          <Badge type="general" size="small" />
        </button>
        <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
      </div>
      <div>
        <button className="flex gap-5 py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
          What productivity tools can MANA integrate with?
          <Badge type="new" size="small" />
        </button>
        <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
      </div>
      <div>
        <button className="flex gap-5 py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
          In which countries is MANA available?
          <Badge type="updated" size="small" />
        </button>
        <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
      </div>
      <div>
        <button className="flex gap-5 py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
          How can I get started with MANA?
          {/* <Badge type="billing" size="small" /> */}
          <Badge type="HowTo" size="small" />
        </button>
        <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
      </div>
      <div>
        <button className="flex gap-5 py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
          What makes MANA different from other life management platforms?
          <Badge type="advanced" size="small" />
        </button>
        <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
      </div>
      <div>
        <button className="flex gap-5 py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
          Is my data secure with MANA?
          <Badge type="seccurity" size="small" />
        </button>
        <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
      </div>
      <div>
        <button className="flex gap-5 py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
          How can I get support if I need help with MANA?
          {/* <Badge type="important" size="small" /> */}
          <Badge type="ProTip" size="small" />
        </button>
        <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
      </div>
      <div>
        <button className="flex gap-5 py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
          What types of goals can MANA help me achieve?
          <Badge type="popular" size="small" />
        </button>
        <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
      </div>
      <div>
        <button className="flex gap-5 py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
          Does MANA offer any training or tutorials to help me get the most out
          of the platform?
          <Badge type="video" size="small" />
        </button>
        <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
      </div>
      <div>
        <button className="flex gap-5 py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
          Can MANA be used by teams or is it only for individual use?
          {/* <Badge type="technical" size="small" /> */}
          <Badge type="community" size="small" />
        </button>
        <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
      </div>
      <div>
        <button className="flex gap-5 py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
          Are there any subscription plans or costs associated with using MANA?
          <Badge type="account" size="small" />
        </button>
        <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
      </div>
    </div>
  );
}
