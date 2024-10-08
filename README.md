# SQLTalk: AI-Powered SQL Query Generator

SQLTalk is an innovative web application that transforms natural language queries into SQL statements. It's designed to bridge the gap between non-technical users and database interactions, making data querying more accessible and efficient.

## About the Project

SQLTalk leverages advanced natural language processing to interpret user queries and generate accurate SQL statements. Whether you're a data analyst, business user, or developer, SQLTalk simplifies the process of interacting with databases, saving time and reducing the need for extensive SQL knowledge.

### Key Features

- Natural language to SQL conversion
- Support for multiple SQL dialects (MySQL, PostgreSQL)
- Interactive web interface
- Real-time query generation
- Syntax highlighting for generated SQL

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **UI Components**: Tailwind CSS, shadcn/ui
- **Syntax Highlighting**: react-syntax-highlighter
- **AI Integration**: Google's Generative AI (Gemini API)
- **API**: Next.js API Routes
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A Google Cloud account with the Generative AI API enabled

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sqltalk.git
   cd sqltalk
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Google API key:
   ```
   NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Navigate to the SQLTalk interface.
2. Input your database schema in the "Schema Input" section.
3. Enter your query in plain English in the "Natural Language Query" section.
4. Select your database type (MySQL or PostgreSQL).
5. Click "Generate SQL" to receive your SQL query.

## Configuration

### Customizing UI

The project uses Tailwind CSS for styling. You can customize the appearance by modifying the `tailwind.config.js` file and the component files in the `components` directory.

### Adding New Database Dialects

To add support for new SQL dialects:

1. Modify the `generateSqlQuery` function in `utils/gemini-api.ts`.
2. Update the database type options in `components/sqltalk-app.tsx`.

## Deployment

The easiest way to deploy your SQLTalk app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- shadcn for the beautiful UI components
- Google for the Generative AI API
