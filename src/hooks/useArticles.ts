
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { warmupListenerService } from '@/utils/listenerWarmup';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  image_url: string;
  read_time: string;
  color: string;
  icon: string;
  created_at: string;
  theme_color?: string;
  secondary_color?: string;
  hero_image_alt?: string;
  lead_text?: string;
  content?: string;
  email_signup_title?: string;
  email_signup_description?: string;
  email_signup_button_text?: string;
  cta_title?: string;
  cta_primary_button_text?: string;
  cta_secondary_button_text?: string;
}

export const useArticles = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: async (): Promise<Article[]> => {
      console.log('Fetching articles...');
      
      // Warm up listener service on any database activity
      warmupListenerService();
      
      const { data, error } = await supabase
        .from('sb_content_sub_pages')
        .select(`
          id,
          title,
          excerpt,
          slug,
          category,
          image_url,
          read_time,
          color,
          icon,
          created_at
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching articles:', error);
        throw error;
      }

      return data || [];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useArticleBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: async (): Promise<Article | null> => {
      if (!slug) return null;
      
      console.log('Fetching article by slug:', slug);
      
      // Warm up listener service on any database activity
      warmupListenerService();
      
      const { data, error } = await supabase
        .from('sb_content_sub_pages')
        .select(`
          id,
          title,
          excerpt,
          slug,
          category,
          image_url,
          read_time,
          color,
          icon,
          created_at,
          theme_color,
          secondary_color,
          hero_image_alt,
          lead_text,
          content,
          email_signup_title,
          email_signup_description,
          email_signup_button_text,
          cta_title,
          cta_primary_button_text,
          cta_secondary_button_text
        `)
        .eq('slug', slug)
        .maybeSingle();

      if (error) {
        console.error('Error fetching article by slug:', error);
        throw error;
      }

      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    enabled: !!slug, // Only run query if slug is provided
  });
};
