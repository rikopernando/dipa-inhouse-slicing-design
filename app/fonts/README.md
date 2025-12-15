# Fonts Directory

This directory contains the custom font files for the project.

## Required Fonts

### Roobert (Primary Font)

Place Roobert font files here with the following naming convention:

- `Roobert-Regular.woff2`
- `Roobert-Medium.woff2`
- `Roobert-SemiBold.woff2`
- `Roobert-Bold.woff2`

### Neue Montreal (Secondary Font)

Place Neue Montreal font files here with the following naming convention:

- `NeueMontreal-Regular.woff2`
- `NeueMontreal-Medium.woff2`
- `NeueMontreal-Bold.woff2`

## Font Formats

- Preferred format: `.woff2` (best compression and browser support)
- Alternative formats: `.woff`, `.ttf`, `.otf`

## Notes

- The fonts are loaded in `app/layout.tsx` using Next.js `localFont`
- CSS variables are defined as `--font-roobert` and `--font-neue-montreal`
