# Project Structure

This document outlines the current structure of the AIDE project. It is regularly updated to reflect changes in the project organization.

```
AIDE/
├── .ai/
│   ├── codex/
│   ├── session/
│   └── blueprints/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── ollama/
│   │   │       └── chat.ts
│   │   ├── flux/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── components/
│   │   └── OllamaAssistant.tsx
│   ├── lib/
│   │   ├── firebase/
│   │   │   └── utils.ts
│   │   ├── contexts/
│   │   │   └── AuthContext.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── replicate.ts
│   │   └── types.ts
│   ├── actions/
│   │   └── replicate-actions.ts
│   └── styles/
│       └── globals.css
├── db/
│   ├── schema/
│   ├── queries/
│   └── db.ts
├── claudeDev_docs/
│   ├── aide-start-session.md
│   ├── aide-end-session.md
│   ├── ai_rules_and_templates.md
│   ├── currentTask.md
│   ├── devNotes.md
│   ├── llm_config.md
│   ├── onboarding.md
│   ├── projectMetrics.md
│   ├── projectStructure.md
│   ├── riskManagement.md
│   ├── session_integration_plan.md
│   ├── session_testing_results.md
│   └── status/
│       └── YYYY-MM-DD.md
├── sprint_docs/
│   └── sprint_XX_brief_description.md
├── public/
├── tests/
├── .env
├── .gitignore
├── drizzle.config.ts
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Key Directories and Files

- `.ai/`: Contains AI-related files and configurations
- `src/`: Main source code directory
  - `app/`: Next.js 14 app directory
  - `components/`: React components
  - `lib/`: Utility functions and shared code
  - `actions/`: Server actions
- `db/`: Database-related files (Supabase and Drizzle ORM)
- `claudeDev_docs/`: Project documentation and AI development files
- `sprint_docs/`: Sprint-related documentation
- `public/`: Static assets
- `tests/`: Test files

## Recent Changes

- Added `flux/` directory for Flux integration
- Created `OllamaAssistant.tsx` component
- Added `replicate.ts` and `replicate-actions.ts` for Replicate integration
- Created `db/` directory for Supabase and Drizzle ORM setup

## Planned Changes

- Implement more API routes in `src/app/api/`
- Expand test coverage in `tests/` directory
- Add more components to `src/components/`
- Create additional server actions in `src/actions/`

This structure is subject to change as the project evolves. Please refer to the latest commit of this file for the most up-to-date project structure.