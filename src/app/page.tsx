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
    parentsLine1,
    parentsLine2,
    daughterOf,
    brideGroomMessage,
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
          parentsLine1={parentsLine1}
          parentsLine2={parentsLine2}
        />
        <Lamp>
          <InviteBlock
            partner1Name={partner1Name}
            partner2Name={partner2Name}
            daughterOf={daughterOf}
          />
        </Lamp>
        <Events />
        <BrideGroom message={brideGroomMessage} />
        <Rsvp calendarEvent={calendarEvent} />
        <ThingsToKnow mapEmbedUrl={mapEmbedUrl} mapUrl={mapUrl} />
        <Follow instagramUrl={instagramUrl} />
        <Countdown targetDate={countdownTargetDate} />
      </main>
    </>
  );
}
