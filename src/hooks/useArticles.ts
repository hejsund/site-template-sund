
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  read_time: string;
  image_url: string;
  icon: string;
  color: string;
  content?: string;
  slug: string;
  created_at?: string;
  updated_at?: string;
}

export const useArticles = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      console.log('Fetching articles from Supabase...');
      
      const { data, error } = await supabase
        .from('sb_content_sub_pages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching articles:', error);
        throw error;
      }

      console.log('Articles fetched successfully:', data);
      return data as Article[];
    },
  });
};

export const useArticleBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: async () => {
      console.log('Fetching article by slug:', slug);
      
      const { data, error } = await supabase
        .from('sb_content_sub_pages')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        console.error('Error fetching article:', error);
        throw error;
      }

      console.log('Article fetched successfully:', data);
      return data as Article;
    },
    enabled: !!slug,
  });
};
