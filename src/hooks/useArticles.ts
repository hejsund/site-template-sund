
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
