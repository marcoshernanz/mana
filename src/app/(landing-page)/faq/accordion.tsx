import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqAccordionProps {
  trigger: string;
  content: string;
}

export default function FaqAccordion({ trigger, content }: FaqAccordionProps) {
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>{trigger}</AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  </Accordion>;
}
