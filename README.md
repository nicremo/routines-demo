# routines-demo

Demo repository for the YouTube video "Claude Code Routines: Jetzt arbeitet Claude 24/7 für dich".

This repo is used to demonstrate three Claude Code Routines:

1. **Daily AI News Scraper** (Schedule trigger, 8:00 Europe/Berlin)
2. **Auto PR Review Deutsch** (GitHub pull_request.opened)
3. **On-Demand Content Research** (API trigger via curl)

See `CLAUDE.md` for team rules that the PR review routine checks against.

## Structure

- `src/components/` - React components used as review targets
- `reports/` - Generated markdown by the news scraper
- `research/` - Generated markdown by the research routine

## Notes

Do not commit secrets. All API keys belong into the Claude Cloud Environment variables, not into the repo.
