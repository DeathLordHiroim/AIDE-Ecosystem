# AIDE AI Codex

## Usage

- Review: @aide-codex.md (silent load, no output)
- Update: @aide-learn.md
- File paths: Always use absolute paths from project root

## Errors

E000:

- Context: [Relevant AIDE project area or file]
- Error: [Precise description]
- Correction: [Exact fix]
- Prevention: [Specific strategy]
- Related: [IDs of related errors/learnings]

E001:

- Context: File path suggestions in AIDE
- Error: Relative path used instead of absolute
- Correction: Use absolute paths from project root
- Prevention: Always prefix paths with '/'
- Related: None

## Learnings

L000:

- Context: [Relevant AIDE project area or file]
- Insight: [Concise description]
- Application: [How to apply this knowledge in AIDE]
- Impact: [Potential effects on AIDE project]
- Related: [IDs of related errors/learnings]

L001:

- Context: AIDE project structure
- Insight: AIDE uses Next.js with App Router and integrates AI-assisted development
- Application: Organize components in `/src/components`, pages in `/src/app`, and AI tools in `/ai`
- Impact: Improved code organization and easier integration of AI-assisted features
- Related: None

L002:

- Context: AIDE AI integration
- Insight: AIDE uses Ollama for local AI model deployment
- Application: Interact with Ollama API for AI-assisted coding and documentation
- Impact: Enhanced AI capabilities without relying on external services
- Related: None

## AI-Assisted Development

- Use Ollama for code generation, refactoring suggestions, and documentation assistance
- Integrate AI-generated content seamlessly into the development workflow
- Continuously update this codex with new insights and best practices for AI-assisted development

## AIDE-Specific Guidelines

1. Always consider AI integration possibilities when developing new features
2. Use TypeScript for all code files to enhance type safety and developer experience
3. Implement Server Components where possible to optimize performance
4. Use Tailwind CSS for styling to maintain consistency and improve development speed
5. Prioritize accessibility and SEO best practices in all components
6. Regularly update and refer to this codex for AIDE-specific insights and error prevention

## Splitting Protocol

When this codex becomes too large, use @aide-split-codex.md to intelligently split it into category-specific files.
