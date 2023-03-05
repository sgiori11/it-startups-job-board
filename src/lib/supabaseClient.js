import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://hewqsbwtsubfefrjhlol.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhld3FzYnd0c3ViZmVmcmpobG9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc5NjE3NDQsImV4cCI6MTk5MzUzNzc0NH0.VNbA9D2HjQFimTZaQR2-LsQ1gj4FWyp0deGjYpTBul0')