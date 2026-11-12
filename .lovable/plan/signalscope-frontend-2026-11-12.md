# SignalScope frontend

## Build
- Replace the starter home page with a polished dark analytics workspace for SignalScope, including responsive navigation, a collapsible sidebar, page-specific headings, global search and filters.
- Add the requested dashboard, sentiment, trend, keyword/hashtag, topic, live feed, historical, pipeline, data sources, and settings screens with charts and working frontend-only controls.
- Keep realistic, consistent mock records and analytics in a central data module; label all streaming and pipeline information as simulated.

## Technical approach
- Use the existing TanStack Start file-based routing, React, Tailwind v4 design tokens, shadcn controls, Lucide icons, and Recharts. Keep shared layout and analytics views reusable, with one content route per screen and page-specific metadata.
- Avoid backend integrations and persistence; use local React state and centralized mock data so API replacement remains straightforward.

## Validation
- Run the existing route test, inspect the current preview build log, and verify the dashboard plus a secondary page and key interactive states in the browser.
