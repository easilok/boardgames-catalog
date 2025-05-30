# How to add your boardgame to the catalog

Adding a new boardgame is as simply as creating a markdown file at `content/games`.

To help bootstrap your new game, copy the `boardgame-bootsrap.en.md` file (or the Portuguese version `boardgame-bootstrap.pt.md`) from the root of this repository to the
`content/games`, naming it with the name of your game.

> [!NOTE]
> Use dashes to replace spaces on the name.

Although there are bootstrap files for both English and Portuguese, **only one language is supported** so use only the language you prefer.

The bootstrap file is composed of three sections, that should be properly filled.

## Boardgame page properties

On the top of the page there is a section surrounded by dashes that is not part of the boardgame page content but
is used to specific features of the website:

- The **title** property sets what names the game on the list pages. It also sets the title of the boardgame own page.
- The **featured_image** sets the image that will be present on the list pages, identifying the game, and when viewing the game page. This image should be added to the `static/games` folder, following the same name convention as the boardgame file.
- The **mode** property defines if it is a *cooperative* or *competitive* game. It is used for tagging the game in list pages.
- The **difficulty** property defines if it is a *low*, *medium* or *high* difficulty game. It is used for tagging the game in list pages (refer to the game [bgg](https://boardgamegeek.com) page find an appropriate value).
- The **duration** property defines the average duration of the gameplay. It is used for tagging the game in list pages .
- The **featured** property defines if the game should appear on the home page as a featured boardgame.

```yaml
title: 'Boardgame Name'
featured_image: '/games/boardgame-name.jpg'
mode: 'competetive | cooperative'
difficulty: 'low | medium | high'
duration: 40
featured: true
```

## Boardgame page content

The boardgame page content structure is well defined in the bootstrap files. It has:

- A **brief presentation** that will be present on the list pages.
- A **detailed description** that feeds visitors with information that describes the game.
- A **brief conclusion** that dictates the target players and best use cases to play the game.

To ensure that the brief presentation paragraph is the only text present on the pages with boardgames list, ensure
that the following text is present and splitting that presentation from the detailed information of the game.

```html
<!--more-->
```

## Boardgame characteristics

Still part of the page content, there is a section that presents the game characteristics presented by the creators and players:


- **Duration**, with the interval of time that the gameplay takes.
- **Players**, the different number of players supported, alongside what is considered the number providing the best experience (normally found at the game's BGG page).
- **Age**, the advised minimum age to play.
- **Complexity**, representing the complexity evaluation of the game (normally found at the game's BGG page).
- **Resources**, with links for any extra resource describing the game (for example BGG).
- **Owner**, who has the game in order to request it.

## Adding a game to the catalog

Adding a game requires the creation of a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) following the presented instructions.

The PR will be reviewed by the boardgames club organizers and, upon approval and merged, automatic deployment will kick in and make it public available.
