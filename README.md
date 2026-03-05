# Jeopardy Board App

This app generates a **Jeopardy-style game board** from a JSON configuration file.  
By editing the JSON file you can easily customize the categories, questions, teams, and visual appearance of the board.

The configuration file is located at:

`src/assets/data.json`

The app reads this file at startup and automatically builds the Jeopardy board.

---

# Configuration

The entire game is configured through a JSON file.

Example structure:

```json
{
  "background-image": "assets/background-image.png",
  "title": {...},
  "card": {...},
  "rest": {...},
  "categories": [...],
  "teams": [...]
}
```

---

# Appearance Settings

## Background

```json
"background-image": "assets/background-image.png"
```

Relative path to the background image used behind the board.

---

## Title

Controls the appearance of the title displayed at the top of the board.

```json
"title": {
  "title": "Jeopardy",
  "text-color": "#ffffff",
  "font": "San sarif",
  "glow-color": "#ffffff",
  "glow-strength": 0
}
```

Fields:

| Field | Description |
|------|-------------|
| `title` | Text displayed as the main title |
| `text-color` | Color of the title text |
| `font` | Font used for the title |
| `glow-color` | Color of the glow effect |
| `glow-strength` | Strength of the glow effect |

---

## Card

Controls how the question cards look on the board.

```json
"card": {
  "text-color": "#ffffff",
  "card-color": "#ffffff",
  "font": "San sarif"
}
```

Fields:

| Field | Description |
|------|-------------|
| `text-color` | Color of the text inside cards |
| `card-color` | Background color of cards |
| `font` | Font used for card text |

---

## Rest

Controls styling for other UI elements such as labels or general text.

```json
"rest": {
  "text-color": "#ffffff",
  "font": "San sarif"
}
```

Fields:

| Field | Description |
|------|-------------|
| `text-color` | Default text color |
| `font` | Default font |

---

# Categories

Categories define the **columns of the Jeopardy board**.

```json
"categories": [
  {
    "name": "Kategori 1",
    "questions": [...]
  }
]
```

Fields:

| Field | Description |
|------|-------------|
| `name` | Name of the category |
| `questions` | List of questions in that category |

---

# Questions

Each category contains multiple questions.

Example:

```json
{
  "value": 100,
  "field1": "Spørsmål 1",
  "field2": "Svar 1",
  "type": "Text"
}
```

Fields:

| Field | Description |
|------|-------------|
| `value` | Point value for the question |
| `type` | Determines how the question is interpreted |
| `field1` | First content field (depends on type) |
| `field2` | Second content field (depends on type) |

---

# Question Types

Each question can have one of three types.

## Text

Standard question/answer format.

```json
{
  "type": "Text",
  "field1": "Question",
  "field2": "Answer"
}
```

| Field | Meaning |
|------|--------|
| `field1` | Question |
| `field2` | Answer |

---

## Link

Displays a clickable link.

```json
{
  "type": "Link",
  "field1": "https://example.com",
  "field2": "Open resource"
}
```

| Field | Meaning |
|------|--------|
| `field1` | URL |
| `field2` | Label shown on the board |

---

## Image

Displays an image.

```json
{
  "type": "Image",
  "field1": "assets/image.png",
  "field2": "Image title"
}
```

| Field | Meaning |
|------|--------|
| `field1` | Relative path to the image |
| `field2` | Caption or title |

---

# Teams

Defines the teams participating in the game.

```json
"teams": [
  "Team 1",
  "Team 2",
  "Team 3",
  "Team 4"
]
```

Each entry is the name of a team shown on the scoreboard.

---

# Creating Your Own Board

1. Open the configuration file:

```
src/assets/data.json
```

2. Edit the categories and questions.
3. Adjust colors, fonts, or background if desired.
4. Add or rename teams.
5. Launch the app — the board will be generated automatically.

---

# Notes

- All file paths (images, links, etc.) should be **relative to the project**.
- Colors use **standard hex color format** (`#ffffff`).
- Fonts must be available on the system or supported by the app.
- Changing the JSON file is enough to completely customize the board.
