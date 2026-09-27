import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vtlerfvjsqcchokdsfkh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0bGVyZnZqc3FjY2hva2RzZmtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwODUyODIsImV4cCI6MjEwNDY2MTI4Mn0.1VuwuJeqNKBpeic-Mexj9h6XlMJCSLcVyNXSyBasDkQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
