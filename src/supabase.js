import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ropgbamdofmixbkflfoy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvcGdiYW1kb2ZtaXhia2ZsZm95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1ODgyMTIsImV4cCI6MjAyMTE2NDIxMn0.glBQAcct1-wnQfiAhHvY3tsG3ICVOlNp_QESyJGq3v0";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
