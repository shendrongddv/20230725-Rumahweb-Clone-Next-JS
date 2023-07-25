import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Content
import { dataForYouWhoWant } from "@/content";
import Image from "next/image";

const ForYou = () => {
  const items = dataForYouWhoWant;

  return (
    <Tabs defaultValue="1" className="w-full">
      <TabsList className="flex items-center justify-between">
        {items.map((item) => (
          <TabsTrigger
            key={item.id}
            value={item.id.toString()}
            className="flex-1"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {items.map((item) => (
        <TabsContent key={item.id} value={item.id.toString()}>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="md:w-1/3">
              <Image
                src={`/${item.img}`}
                alt={item.title}
                width={400}
                height={300}
                className="h-auto w-full"
              />
            </div>
            <div className="space-y-3 md:w-2/3">
              {item.desc.map((subitem) => {
                return <p key={subitem}>{subitem}</p>;
              })}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ForYou;
