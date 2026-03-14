import { BgmPlayer } from "@/components/bgm-player";
import {
  HeroWithCar,
  InviteBlock,
  Events,
  BrideGroom,
  Rsvp,
  ThingsToKnow,
  Follow,
  Countdown,
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
    mapEmbedUrl,
    mapUrl,
    instagramUrl,
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
        <Events />
        <BrideGroom partner1Name={partner1Name} partner2Name={partner2Name} />
        <Rsvp calendarEvent={calendarEvent} />
        <ThingsToKnow mapEmbedUrl={mapEmbedUrl} mapUrl={mapUrl} />
        <Follow instagramUrl={instagramUrl} />
        <Countdown targetDate={countdownTargetDate} />
      </main>
    </>
  );
}
