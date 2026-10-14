# Week 06 — MongoDB Notes App

REST API using Express, Mongoose, and MongoDB. All five CRUD endpoints are implemented.

## Setup

1. Open this folder in VS Code and run `npm install`.
2. Start a local MongoDB server, **or** set the `DB_URL` environment variable to your MongoDB Atlas connection string. Never commit passwords or connection strings.
3. Run `npm start` (or `node server.js`).
4. Visit `http://localhost:8081`.

If port 8081 is already used by Docker/mongo-express, run in PowerShell:

```powershell
$env:PORT=3000
npm start
```

Use port 3000 in the URLs below if you changed it.

## Postman tests

| Method | URL | Body |
| --- | --- | --- |
| POST | http://localhost:8081/notes | JSON below |
| GET | http://localhost:8081/notes | None |
| GET | http://localhost:8081/notes/NOTE_ID | None |
| PUT | http://localhost:8081/notes/NOTE_ID | JSON below |
| DELETE | http://localhost:8081/notes/NOTE_ID | None |

For POST and PUT, select Body → raw → JSON and send:

```json
{
  "content": {
    "noteTitle": "Sample Note Title",
    "noteDescription": "Sample Note Description",
    "priority": "HIGH",
    "dateAdded": "06/Oct/2025",
    "dateUpdated": "06/Oct/2025"
  }
}
```

Copy `_id` from the POST response and replace `NOTE_ID` in the other URLs.

Capture screenshots of all five successful Postman requests for your exercise.

**Note:** The application requires a running MongoDB database. Database connectivity and end-to-end Postman requests have not been tested in this archive.
