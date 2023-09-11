# React Book Finder with Google Books API using Next.js and Mobx

---

## Stack:

- **Next.js 13**
- **Mobx 6**
- **React 18**
- **TypeScript 5.2**
- **sanitize-html**: A library to sanitize and parse HTML input to avoid XSS attacks.

---

## API Key Configuration:

Please note that you will need to provide your Google Books API key for the application to work. Follow the Google Books API documentation link provided in the task for more information on obtaining the key.

Once you have it, copy `.env.local.example` to `.env.local` and set key.

---

## How to run the application using Docker:

1. Build the Docker image:

```
docker build -t bookshelf-react-ts .
```

2. Run the Docker container:

```
docker run -p 3000:3000 bookshelf-react-ts
```

3. Open http://localhost:3000 with your browser to see the result.

---

## How to run development server:

1. Install dependencies

```
npm ci
```

2. Run server.

```
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open http://localhost:3000 with your browser to see the result.

### License:

This project is open-source and available under the MIT License.
