import { BgmPlayer } from "@/components/bgm-player";
import {
  HeroWithCar,
  InviteBlock,
  BrideGroom,
  Rsvp,
  Countdown,
  Footer,
} from "@/components/invite";
import { Lamp } from "@/components/ui/lamp";
import { inviteData } from "@/data/invite";

export default function Home() {
  const {
    partner1Name,
    partner2Name,
    sanskritLine,
    engagementDate,
    calendarEvent,
    countdownTargetDate,
  } = inviteData;

  return (
    <>
      <BgmPlayer />
      <main className="min-h-screen bg-page">
        <HeroWithCar
          partner1Name={partner1Name}
          partner2Name={partner2Name}
          sanskritLine={sanskritLine}
          engagementDate={engagementDate}
        />
        <Lamp>
          <InviteBlock
            partner1Name={partner1Name}
            partner2Name={partner2Name}
          />
        </Lamp>
        <BrideGroom partner1Name={partner1Name} partner2Name={partner2Name} />
        <Rsvp calendarEvent={calendarEvent} />
        <Countdown targetDate={countdownTargetDate} />
        <Footer />
      </main>
    </>
  );
}
