

## Connect Program Section to Supabase `event_schedule` Table

### Overview
Replace the hardcoded schedule data in the Program section with live data fetched from the Supabase `event_schedule` table. The existing tab-based UI will be preserved, but dates and events will come dynamically from the database.

### What Will Change

**1. Update `src/lib/supabase.ts`** -- Add a TypeScript interface for the `event_schedule` table:
- `id` (string)
- `event_date` (string) -- used for tab filtering (e.g., "12 January")
- `time_range` (string) -- displayed in the left column
- `title` (string) -- main bold text
- `speaker` (string or null) -- displayed below the title
- `is_break` (boolean) -- controls highlight styling (breaks vs regular sessions)
- `sort_order` or rely on `time_range` for sorting

**2. Rewrite `src/components/ProgramSection.tsx`**
- Remove all hardcoded `programData`.
- Add a `useEffect` hook to fetch all rows from `event_schedule`, ordered by time.
- Extract unique `event_date` values to dynamically generate the day tabs.
- Filter displayed items by the currently selected tab (`activeDay`).
- Update the timeline row layout:
  - **Left column**: Show `time_range` (instead of separate start/end fields).
  - **Title**: Display `title` in bold.
  - **Speaker**: Show `speaker` below the title (if not null).
  - **Highlight**: Use `is_break` to apply the accent/italic styling for breaks.
- Add loading skeletons (consistent with the Latest News section pattern).
- Add error state handling.

### UI Behavior (Unchanged)
- Pill-style day tabs at the top to switch between dates.
- Vertical timeline with colored dots (primary for sessions, accent for breaks).
- Smooth hover transitions on each row.
- Responsive layout with time displayed on the right on desktop.

### Technical Details

```text
Supabase Query:
  supabase
    .from("event_schedule")
    .select("id, event_date, time_range, title, speaker, is_break")
    .order("time_range", { ascending: true })

Data Flow:
  Fetch all rows --> Extract unique dates for tabs
                 --> Filter by activeDay for display
                 --> Sort by time_range within each day
```

### Files Modified
| File | Change |
|------|--------|
| `src/lib/supabase.ts` | Add `EventSchedule` interface |
| `src/components/ProgramSection.tsx` | Replace hardcoded data with Supabase fetch, add speaker line, loading/error states |

### Assumptions
- The `event_schedule` table already exists in the Supabase database with columns: `event_date`, `time_range`, `title`, `speaker`, and `is_break` (or similar).
- RLS on the table allows public read access (same as `blog_posts`).
- `event_date` stores human-readable strings like "12 January" (matching the current tab labels).

