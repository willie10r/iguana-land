import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hlqyebhnxpsgdqsmhuar.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhscXllYmhueHBzZ2Rxc21odWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0OTA2MjksImV4cCI6MjAyMDA2NjYyOX0.8pMPC_ftKzSPFInoBl0MdZePg9fKGh4n3y-WGVbYEGQ';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;