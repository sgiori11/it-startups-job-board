import { supabase } from '../lib/supabaseClient';
import { createContext, useContext, useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'

export default function AuthUI() {
  return (
    <Auth 
      supabaseClient={supabase} 
      appearance={{ theme: ThemeSupa }}
      providers={null}
    />

)}; 