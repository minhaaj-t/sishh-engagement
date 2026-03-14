import type { EventItem, ThingItem } from "@/components/invite";

export const inviteData = {
  partner1Name: "Sishaj",
  partner2Name: "Athulya",
  sanskritLine: "ॐ श्री गणेशाय नम",
  parentsLine1: "Smt. Lata Devi & Sm. Kamal Kapoor",
  parentsLine2: "Mrs. Reena & Mr. Rajiv Kapoor",
  daughterOf: "Mrs. Shalini & Mr. Aakash Mittal",
  events: [
    { title: "Mehendi", date: "Friday, March 9th 2026", venue: "Rambagh, Jaipur", time: "6pm Onwards" },
    { title: "Haldi", date: "Friday, March 10th 2026", venue: "Rambagh, Jaipur", time: "6pm Onwards" },
    { title: "Cocktail", date: "Friday, March 10th 2026", venue: "Rambagh, Jaipur", time: "6pm Onwards" },
    { title: "Engagement", date: "Friday, March 11th 2026", venue: "Rambagh, Jaipur", time: "6pm Onwards" },
    { title: "Shaadi", date: "Friday, March 12th 2026", venue: "Rambagh, Jaipur", time: "6pm Onwards" },
    { title: "Reception", date: "Friday, March 17th 2026", venue: "Rambagh, Jaipur", time: "6pm Onwards" },
  ] as EventItem[],
  mapUrl: "https://www.google.com/maps/place/Kannur,+Kerala,+India",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31236.39582305075!2d75.34957854491479!3d11.8667766047777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba422b9b2aca753%3A0x380605a11ce24f6c!2sKannur%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sqa!4v1773509963866!5m2!1sen!2sqa",
  brideGroomMessage:
    "We are both so delighted that you are able to join us in celebrating what we hope will be one of the happiest days of our lives. The affection shown to us by so many people since our roka has been incredibly moving, and has touched us both deeply. We would like to take this opportunity to thank everyone most sincerely for their kindness. We are looking forward to see you at our engagement.",
  whatsappUrl: "https://wa.me/919876543210",
  thingsToKnow: [
    { title: "Hashtag", description: "While posting photos on social media please use the hashtag - #sishath" },
    { title: "Weather", description: "It will be mostly sunny with temperature reaching up to 28 degrees at the venue" },
    { title: "Staff", description: "We recommend the nearby hotel called Bhola Bhawan near the venue for the staff members" },
    { title: "Parking", description: "Valet parking for all our guests will be available at the venue" },
  ] as ThingItem[],
  instagramUrl: "https://www.instagram.com/sishaj__/",
  countdownTargetDate: new Date("2026-03-23T00:00:00"),
  engagementDate: "Monday, 23 March 2026",
  calendarEvent: {
    name: "Sishaj & Athulya Engagement",
    description: "You're invited to celebrate our engagement!",
    location: "Kannur, Kerala, India",
    startDate: "2026-03-23",
    endDate: "2026-03-23",
    startTime: "18:00",
    endTime: "23:00",
    timeZone: "Asia/Kolkata",
  },
};
