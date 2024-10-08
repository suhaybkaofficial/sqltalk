'use client'

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generateSqlQuery } from "@/utils/gemini-api";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function SqltalkApp() {
  const sampleSchema = `create table
  public.lessons (
    id serial not null,
    lesson_title character varying(255) not null,
    explanation_about_lesson_title text not null,
    two_short_examples text[] null,
    course_id integer not null,
    constraint lessons_pkey primary key (id),
    constraint lessons_course_id_fkey foreign key (course_id) references courses (id) on update cascade on delete cascade
  ) tablespace pg_default`
  const [schema, setSchema] = useState(sampleSchema);
  const [query, setQuery] = useState("");
  const [dbType, setDbType] = useState("mysql");
  const [generatedSql, setGeneratedSql] = useState("");

  const handleSchemaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSchema(e.target.value);
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };

  const handleDbTypeChange = (value: string) => {
    setDbType(value);
  };

  const handleGenerateQuery = async () => {
    try {
      const sql = await generateSqlQuery(schema, query, dbType);
      setGeneratedSql(sql);
    } catch (error) {
      console.error("Error generating SQL query:", error);
      setGeneratedSql("Error generating SQL query. Please try again.");
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Schema Input</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Paste your table schema here..."
              value={schema}
              onChange={handleSchemaChange}
              className="min-h-[200px]"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Natural Language Query</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Enter your query in plain English..."
              value={query}
              onChange={handleQueryChange}
              className="min-h-[200px]"
            />
            <div className="mt-4 flex items-center space-x-4">
              <Select value={dbType} onValueChange={handleDbTypeChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select DB Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mysql">MySQL</SelectItem>
                  <SelectItem value="postgresql">PostgreSQL</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleGenerateQuery} className='bg-[#433878] text-white hover:bg-[#7E60BF]'>Generate SQL</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      {generatedSql && (
        <Card>
          <CardHeader>
            <CardTitle>Generated SQL Query</CardTitle>
          </CardHeader>
          <CardContent>
            <SyntaxHighlighter language="sql" style={vscDarkPlus} customStyle={{
              borderRadius: '0.375rem',
              padding: '1rem',
            }}>
              {generatedSql}
            </SyntaxHighlighter>
          </CardContent>
        </Card>
      )}
    </div>
  );
}