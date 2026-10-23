# Poliquiz

Poliquiz is a lightweight browser-based political quiz that helps users reflect on their ideological positioning through a set of structured statements. The app asks 40 questions across four major axes: economy, authority, culture, and nation. Based on the answers, it calculates a political profile, identifies the closest ideological label, and builds a fictional parliament of 100 seats to visualize how the user's views compare to different political blocs.

## What it does

- Presents a short quiz with 40 statements
- Scores responses across 4 ideological dimensions
- Maps the result to a nearby political ideology
- Displays the user's position on a political chart
- Simulates a parliament using fictional parties and proportional seat allocation
- Works entirely in the browser with no backend or server-side data processing

## Project structure

- `public/index.html` — app entry point
- `public/scripts/index.js` — quiz logic, scoring, and result generation
- `public/styles/style.css` — visual styling and layout

## Running locally

Because this is a static frontend project, you can either open the HTML file directly in a browser or serve the folder locally:

```bash
cd "C:\Users\bobbi\Downloads\Prog\JavaScript\poliquiz"
python -m http.server 8000
```

Then open: http://localhost:8000

## Notes

This is designed as an entertaining and educational tool, not a scientific measurement of political beliefs. The parties and ideological labels are simplified and intended for reflection and discussion.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

