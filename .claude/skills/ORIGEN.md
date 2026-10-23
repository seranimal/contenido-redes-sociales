# De dónde sale cada skill

| Skills | Origen | Licencia |
|---|---|---|
| `ser-animal-posts`, `instagram-strategist`, `instagram-story-skill` | Escritas para Ser Animal | — |
| `instagram-post-writer` | Adaptada de [ur-grue/autopunk-media-skills](https://github.com/ur-grue/autopunk-media-skills), con las reglas de Ser Animal arriba | MIT (`instagram-post-writer/LICENSE`) |
| `brand-guidelines` | Adaptada de [anthropics/skills](https://github.com/anthropics/skills): aplica la marca Ser Animal en lugar de la de Anthropic | Apache 2.0 |
| `academy-guide`, `algorithmic-art`, `discernment-nudge`, `doc-coauthoring`, `frontend-design`, `internal-comms`, `mcp-builder`, `slack-gif-creator`, `theme-factory`, `web-artifacts-builder`, `webapp-testing` | [anthropics/skills](https://github.com/anthropics/skills), commit dbd4588, sin cambios | Apache 2.0 (en cada carpeta) |
| Las 52 de marketing (`social`, `copywriting`, `content-strategy`, `ads`, `image`, `video`…) | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills), commit e85f3cb, sin cambios. Leen primero `.agents/product-marketing.md` | MIT (`LICENSE-marketingskills`) |
| `higgsfield-*` | Higgsfield | — |

## Cómo actualizar las de afuera

Volver a clonar el repositorio de origen y copiar sus carpetas acá. **No pisar** las adaptadas (`brand-guidelines`, `instagram-post-writer`) ni las escritas para Ser Animal.

Si una skill de afuera choca con las reglas de `CLAUDE.md`, mandan `CLAUDE.md` y los `lineamientos/`.
