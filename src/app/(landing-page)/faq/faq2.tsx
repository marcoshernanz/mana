import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function Faq2() {
  const faq = {
    "What is MANA and how does it work?": "A",
    "How does MANA personalize my experience?": "B",
    "What productivity tools can MANA integrate with?": "C",
    "In which countries is MANA available?": "D",
    "How can I get started with MANA?": "E",
    "What makes MANA different from other life management platforms?": "F",
    "Is my data secure with MANA?": "G",
    "How can I get support if I need help with MANA?": "H",
    "What types of goals can MANA help me achieve?": "I",
    "Does MANA offer any training or tutorials?": "J",
    "Can MANA be used by teams or is it only for individual use?": "K",
    "Are there any subscription plans or costs associated with using MANA?":
      "L",
  };
  return (
    <div className="flex max-w-screen-sm flex-col pb-3">
      <div>
        {Object.entries(faq).map(([question, answer], index) => (
          <div key={index}>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <div className="flex">
                  <AccordionTrigger>{question}</AccordionTrigger>
                </div>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
