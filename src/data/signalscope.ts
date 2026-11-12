export type Sentiment = "Positive" | "Negative" | "Neutral";

export type SocialPost = {
  id: string;
  text: string;
  source: "X" | "Reddit" | "YouTube" | "Instagram";
  time: string;
  sentiment: Sentiment;
  score: number;
  topic: string;
  keywords: string[];
  hashtags: string[];
};

export const sentimentColors: Record<Sentiment, string> = {
  Positive: "var(--positive)",
  Negative: "var(--negative)",
  Neutral: "var(--neutral)",
};

export const posts: SocialPost[] = [
  { id: "p-1", text: "The new on-device AI tools are actually useful. Faster, private, and no cloud lag.", source: "X", time: "2 min ago", sentiment: "Positive", score: 0.91, topic: "AI & technology", keywords: ["AI", "privacy"], hashtags: ["#OnDeviceAI"] },
  { id: "p-2", text: "Three hours of outages and still no clear update. Not a great launch day.", source: "Reddit", time: "5 min ago", sentiment: "Negative", score: 0.88, topic: "Consumer tech", keywords: ["outage", "launch"], hashtags: ["#TechLaunch"] },
  { id: "p-3", text: "Final over was unreal. That catch completely changed the match.", source: "X", time: "8 min ago", sentiment: "Positive", score: 0.96, topic: "Cricket", keywords: ["cricket", "final"], hashtags: ["#MatchDay"] },
  { id: "p-4", text: "Reading the proposals before deciding. Both sides have some interesting points.", source: "YouTube", time: "12 min ago", sentiment: "Neutral", score: 0.63, topic: "Elections", keywords: ["policy", "election"], hashtags: ["#CivicTalk"] },
  { id: "p-5", text: "This update broke battery life on my phone. Went from a full day to barely six hours.", source: "Reddit", time: "18 min ago", sentiment: "Negative", score: 0.93, topic: "Consumer tech", keywords: ["smartphones", "battery"], hashtags: ["#PhoneUpdate"] },
  { id: "p-6", text: "Indie games keep proving you do not need a huge studio to tell a great story.", source: "Instagram", time: "24 min ago", sentiment: "Positive", score: 0.89, topic: "Gaming", keywords: ["gaming", "indie"], hashtags: ["#IndieGames"] },
  { id: "p-7", text: "The new jobs report is out. Worth looking at the participation numbers too.", source: "X", time: "31 min ago", sentiment: "Neutral", score: 0.58, topic: "Economy", keywords: ["economy", "jobs"], hashtags: ["#JobsReport"] },
  { id: "p-8", text: "Affordable internet in schools could make a real difference for students outside cities.", source: "YouTube", time: "39 min ago", sentiment: "Positive", score: 0.86, topic: "Education", keywords: ["education", "internet"], hashtags: ["#DigitalLearning"] },
  { id: "p-9", text: "Prices are up again this month, and salaries are not keeping pace.", source: "X", time: "46 min ago", sentiment: "Negative", score: 0.9, topic: "Economy", keywords: ["inflation", "prices"], hashtags: ["#CostOfLiving"] },
  { id: "p-10", text: "A surprisingly thoughtful conversation about where AI assistants are heading.", source: "YouTube", time: "52 min ago", sentiment: "Positive", score: 0.82, topic: "AI & technology", keywords: ["AI", "assistants"], hashtags: ["#FutureOfAI"] },
  { id: "p-11", text: "When does the next patch drop? Ranked queue has been rough all week.", source: "Reddit", time: "1 hr ago", sentiment: "Negative", score: 0.78, topic: "Gaming", keywords: ["gaming", "patch"], hashtags: ["#Ranked"] },
  { id: "p-12", text: "Watching how the campaigns respond to the latest debate tonight.", source: "X", time: "1 hr ago", sentiment: "Neutral", score: 0.54, topic: "Elections", keywords: ["election", "debate"], hashtags: ["#DebateNight"] },
];

export const sentimentTotals = [
  { name: "Positive", value: 52.4, count: 67388, color: sentimentColors.Positive },
  { name: "Negative", value: 28.6, count: 36758, color: sentimentColors.Negative },
  { name: "Neutral", value: 19, count: 24304, color: sentimentColors.Neutral },
];

export const sentimentTimeline = [
  { time: "00:00", Positive: 47, Negative: 32, Neutral: 21 },
  { time: "04:00", Positive: 49, Negative: 30, Neutral: 21 },
  { time: "08:00", Positive: 53, Negative: 28, Neutral: 19 },
  { time: "12:00", Positive: 50, Negative: 31, Neutral: 19 },
  { time: "16:00", Positive: 56, Negative: 26, Neutral: 18 },
  { time: "20:00", Positive: 54, Negative: 27, Neutral: 19 },
  { time: "Now", Positive: 52, Negative: 29, Neutral: 19 },
];

export const keywords = [
  { name: "Artificial intelligence", short: "AI", mentions: 18240, change: 24.8, sentiment: "Positive" as Sentiment },
  { name: "Technology", short: "Technology", mentions: 14680, change: 12.3, sentiment: "Positive" as Sentiment },
  { name: "Cricket", short: "Cricket", mentions: 12120, change: 18.6, sentiment: "Positive" as Sentiment },
  { name: "Elections", short: "Elections", mentions: 9840, change: -4.2, sentiment: "Neutral" as Sentiment },
  { name: "Gaming", short: "Gaming", mentions: 8340, change: 8.4, sentiment: "Positive" as Sentiment },
  { name: "Smartphones", short: "Smartphones", mentions: 6780, change: -6.1, sentiment: "Negative" as Sentiment },
  { name: "Economy", short: "Economy", mentions: 5920, change: 3.7, sentiment: "Negative" as Sentiment },
  { name: "Education", short: "Education", mentions: 4260, change: 11.2, sentiment: "Positive" as Sentiment },
];

export const hashtags = [
  { name: "#FutureOfAI", mentions: 8640, change: 32.4, sentiment: "Positive" as Sentiment },
  { name: "#MatchDay", mentions: 7820, change: 26.1, sentiment: "Positive" as Sentiment },
  { name: "#TechLaunch", mentions: 6540, change: 18.2, sentiment: "Neutral" as Sentiment },
  { name: "#CostOfLiving", mentions: 5260, change: 12.8, sentiment: "Negative" as Sentiment },
  { name: "#IndieGames", mentions: 3910, change: 9.7, sentiment: "Positive" as Sentiment },
  { name: "#DigitalLearning", mentions: 2840, change: 7.1, sentiment: "Positive" as Sentiment },
];

export const topics = [
  { name: "AI & technology", mentions: "32.8k", change: 24.8, sentiment: "Positive" as Sentiment, description: "Public response to new AI releases, workplace adoption, and digital privacy.", keywords: ["AI", "privacy", "automation"], firstSeen: "Today, 06:14", score: 94 },
  { name: "Cricket", mentions: "24.2k", change: 18.6, sentiment: "Positive" as Sentiment, description: "Match-day reactions, standout performances, and tournament predictions.", keywords: ["cricket", "final", "match"], firstSeen: "Today, 08:32", score: 89 },
  { name: "Consumer tech", mentions: "18.7k", change: 11.2, sentiment: "Negative" as Sentiment, description: "Product launch conversations, device reviews, and customer issues.", keywords: ["smartphones", "battery", "launch"], firstSeen: "Today, 09:05", score: 82 },
  { name: "Elections", mentions: "15.4k", change: 7.1, sentiment: "Neutral" as Sentiment, description: "Campaign coverage, policy discussions, and debate reactions.", keywords: ["election", "policy", "debate"], firstSeen: "Today, 07:48", score: 76 },
  { name: "Gaming", mentions: "12.6k", change: 5.2, sentiment: "Positive" as Sentiment, description: "Player response to updates, new releases, and independent games.", keywords: ["gaming", "patch", "indie"], firstSeen: "Today, 10:12", score: 71 },
  { name: "Economy", mentions: "9.8k", change: -2.4, sentiment: "Negative" as Sentiment, description: "Discussion of jobs data, household costs, and economic outlook.", keywords: ["economy", "jobs", "prices"], firstSeen: "Today, 05:26", score: 58 },
];

export const hashtagChart = hashtags.slice(0, 5).map((tag) => ({ name: tag.name, Mentions: Math.round(tag.mentions / 100) }));

export const pipelineStages = [
  { name: "Data sources", detail: "Social platforms & datasets", status: "Simulated", events: "128.4k", latency: "—", rate: "—", responsibility: "Collects public posts and uploaded sample datasets." },
  { name: "Data producer", detail: "Event ingestion", status: "Simulated", events: "128.4k", latency: "18 ms", rate: "245/s", responsibility: "Normalizes incoming source events and publishes them downstream." },
  { name: "Apache Kafka", detail: "Event streaming", status: "Simulated", events: "128.4k", latency: "12 ms", rate: "245/s", responsibility: "Buffers and distributes events across processing consumers." },
  { name: "Spark streaming", detail: "Structured streaming", status: "Simulated", events: "126.9k", latency: "340 ms", rate: "238/s", responsibility: "Processes event windows and prepares structured records." },
  { name: "NLP processing", detail: "Text enrichment", status: "Simulated", events: "126.8k", latency: "46 ms", rate: "236/s", responsibility: "Cleans text and extracts useful linguistic signals." },
  { name: "Analytics", detail: "Sentiment & trends", status: "Simulated", events: "126.8k", latency: "28 ms", rate: "236/s", responsibility: "Assigns sentiment and aggregates topic and trend signals." },
  { name: "Data store", detail: "Historical records", status: "Simulated", events: "126.8k", latency: "9 ms", rate: "—", responsibility: "Stores enriched records for historical analysis." },
  { name: "REST API", detail: "Spring Boot services", status: "Simulated", events: "—", latency: "24 ms", rate: "—", responsibility: "Serves analytics and monitoring data to client applications." },
  { name: "Dashboard", detail: "SignalScope interface", status: "Preview", events: "—", latency: "—", rate: "—", responsibility: "Presents analysis through searchable tables and visualizations." },
];

export const sources = [
  { name: "X / Twitter", status: "Not connected", last: "—", records: "—", mark: "𝕏" },
  { name: "Reddit", status: "Not connected", last: "—", records: "—", mark: "r" },
  { name: "YouTube", status: "Not connected", last: "—", records: "—", mark: "▶" },
  { name: "Instagram", status: "Not connected", last: "—", records: "—", mark: "◎" },
  { name: "Uploaded datasets", status: "Ready for upload", last: "—", records: "—", mark: "↑" },
  { name: "Simulated stream", status: "Demo data", last: "Just now", records: "128,450", mark: "∿" },
];

export const historicalTimeline = [
  { time: "Nov 06", Positive: 48, Negative: 31, Neutral: 21 },
  { time: "Nov 07", Positive: 49, Negative: 30, Neutral: 21 },
  { time: "Nov 08", Positive: 47, Negative: 33, Neutral: 20 },
  { time: "Nov 09", Positive: 51, Negative: 29, Neutral: 20 },
  { time: "Nov 10", Positive: 50, Negative: 30, Neutral: 20 },
  { time: "Nov 11", Positive: 54, Negative: 27, Neutral: 19 },
  { time: "Nov 12", Positive: 52, Negative: 29, Neutral: 19 },
];