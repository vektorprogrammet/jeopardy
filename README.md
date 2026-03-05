# Jeopardy Board App

This app generates a **Jeopardy-style game board** from a JSON configuration file.

By editing the JSON file you can customize:

- Categories
- Questions
- Teams
- Visual appearance (colors, fonts, background)

The configuration file is located at:

```
src/assets/data.json
```

The file already contains a **template configuration** that you can modify.

---

# Editing the Configuration

Open:

```
src/assets/data.json
```

and edit the fields to match your game.

The app reads this file at startup and automatically generates the board.

---

# Appearance Settings

## Background

The background image is not configured in the JSON file.

The app always loads the background image from:

src/assets/background-image.png

The file must be named exactly:

background-image.png

---

## Title

Controls how the title at the top of the board looks.

Example fields:

```
"title": {
  "title": "Jeopardy",
  "text-color": "#ffffff",
  "font": "San sarif",
  "glow-color": "#ffffff",
  "glow-strength": 0
}
```

| Field | Description |
|------|-------------|
| `title` | The text shown as the main title |
| `text-color` | Color of the title text |
| `font` | Font used for the title |
| `glow-color` | Color of the glow effect |
| `glow-strength` | Strength of the glow effect |

---

## Card

Controls the appearance of the question cards.

```
"card": {
  "text-color": "#ffffff",
  "card-color": "#ffffff",
  "font": "San sarif"
}
```

| Field | Description |
|------|-------------|
| `text-color` | Color of the text inside cards |
| `card-color` | Background color of the cards |
| `font` | Font used for the card text |

---

## Rest

Controls the styling of other UI text elements.

```
"rest": {
  "text-color": "#ffffff",
  "font": "San sarif"
}
```

| Field | Description |
|------|-------------|
| `text-color` | Default text color |
| `font` | Default font |

---

# Categories

Categories represent the **columns on the Jeopardy board**.

Each category contains a name and a list of questions.

Example:

```
{
  "name": "Kategori 1",
  "questions": [...]
}
```

| Field | Description |
|------|-------------|
| `name` | Name of the category |
| `questions` | List of questions belonging to that category |

---

# Questions

Each category contains multiple questions.

Example:

```
{
  "value": 100,
  "field1": "Spørsmål 1",
  "field2": "Svar 1",
  "type": "Text"
}
```

| Field | Description |
|------|-------------|
| `value` | Point value shown on the board |
| `type` | Determines how the content is interpreted |
| `field1` | First content field |
| `field2` | Second content field |

---

# Question Types

Each question must specify a `type`.  
The meaning of `field1` and `field2` depends on this value.

---

## Text

Standard question and answer.

```
"type": "Text"
```

| Field | Meaning |
|------|--------|
| `field1` | Question |
| `field2` | Answer |

---

## Link

Shows a clickable link.

```
"type": "Link"
```

| Field | Meaning |
|------|--------|
| `field1` | URL |
| `field2` | Text label shown for the link |

---

## Image

Displays an image.

```
"type": "Image"
```

| Field | Meaning |
|------|--------|
| `field1` | Relative path to the image |
| `field2` | Title or caption |

---

# Teams

Defines the teams participating in the game.

```
"teams": [
  "Team 1",
  "Team 2",
  "Team 3",
  "Team 4"
]
```

Each entry is the name of a team shown in the scoreboard.

---

# Notes

- All file paths should be **relative paths**.
- Colors use **hex color format** (for example `#ffffff`).
- Fonts must exist on the system or be supported by the app.
- Editing the JSON file is enough to fully customize the game board.
