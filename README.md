# Avoxels Wiki

Source of the official wiki of **Avoxels**, the Marvel Cinematic Universe and multiverse mod for Minecraft, published at **https://quendodev.github.io/avoxels-wiki/**. Built with [Starlight](https://starlight.astro.build/), in English and Spanish.

## Where things live

| Path | Written by | Contents |
|---|---|---|
| `src/content/docs/` | People | English pages (guides, explanations) |
| `src/content/docs/es/` | People | Spanish pages; untranslated pages fall back to English |
| `src/content/docs/reference/` and `src/content/docs/es/reference/` | **Automation only** | Reference pages generated from the mod's data. Any manual change here is overwritten |
| `src/content/notes/<lang>/` | People | Notes shown inside a generated page with the same path, for example `notes/en/reference/requirements.md` |

To add information to a generated page, write it in `src/content/notes/` instead of editing the page.

## Working locally

Requires Node.js 22.12 or newer.

```powershell
npm install
npm run dev      # local preview at http://localhost:4321/avoxels-wiki/
npm run build    # production build in dist/
```

Every push to `main` publishes the site through GitHub Actions.

## Licence

The wiki text is licensed under [CC BY-NC-SA 4.0](LICENSE). Textures, models, sounds and other assets of the mod remain all rights reserved. Avoxels is an unofficial fan project, not affiliated with Marvel, The Walt Disney Company or Mojang Studios.
