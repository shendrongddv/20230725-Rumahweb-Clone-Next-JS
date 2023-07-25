import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Content
import { dataFAQ } from "@/content";

const FAQAccordion = () => {
  const items = dataFAQ;

  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="rounded-2xl border px-3"
        >
          <AccordionTrigger className="items-start py-2 text-start font-display font-semibold text-primary-foreground hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-start font-body text-base">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
