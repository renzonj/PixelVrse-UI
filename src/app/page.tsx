import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PiCurrencyCircleDollarFill, PiLinkSimpleHorizontalBold } from "react-icons/pi";
import { RiSwordFill } from "react-icons/ri";
import { MdOutlineTrendingUp } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import Earn from "./(Tabs)/earn/page";
import Invite from "./(Tabs)/invite/page";
import Top from "./(Tabs)/tap/page";
import Rewards from "./(Tabs)/rewards/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans items-center justify-between px-5 py-3">
      <div className="flex-col-center z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

        <Tabs defaultValue="earn" className="flex flex-col w-full">
          <div className="fixed bottom-0 left-0 flex w-full items-end justify-center lg:static lg:size-auto lg:bg-none">
            <TabsList>
              <TabsTrigger value="earn">
                <PiCurrencyCircleDollarFill size="20" />
                Earn
              </TabsTrigger>
              <TabsTrigger value="invite">
                <PiLinkSimpleHorizontalBold size="20" />
                Invite
              </TabsTrigger>
              <TabsTrigger value="arena">
                <RiSwordFill size="20" />
                Arena
              </TabsTrigger>
              <TabsTrigger value="tap">
                <MdOutlineTrendingUp size="20" />
                Top
              </TabsTrigger>
              <TabsTrigger value="rewards">
                <FaAward size="20" />
                Rewards
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="flex flex-col w-full mb-20 z-0">
            <TabsContent value="earn">
              <Earn />
            </TabsContent>
            <TabsContent value="invite">
              <Invite />
            </TabsContent>
            <TabsContent value="arena">
              Arena
            </TabsContent>
            <TabsContent value="tap">
              <Top />
            </TabsContent>
            <TabsContent value="rewards">
              <Rewards />
            </TabsContent>
          </div>
        </Tabs>

      </div>
    </main>
  );
}
