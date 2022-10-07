# K-blog-react

A mini CRUD blog using React for the front end and json-server as the backend


## frontend

In the project directory, you can run:

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

For production you can run:

```
npm run build
```

```
npm install -g serve
```

```
serve -s build
```

## backend

In the project directory, you can run:

```
npx json-server --watch data/db.json --port 8000
```

Open [http://localhost:8000/blogs](http://localhost:8000/blogs) to view it in your browser.

