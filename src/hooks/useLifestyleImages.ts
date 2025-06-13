
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { warmupListenerService } from '@/utils/listenerWarmup';

interface LifestyleImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const useLifestyleImages = () => {
  return useQuery({
    queryKey: ['lifestyle-images'],
    queryFn: async (): Promise<LifestyleImage[]> => {
      console.log('Fetching lifestyle images...');
      
      // Warm up listener service on any database activity
      warmupListenerService();
      
      const { data, error } = await supabase
        .from('sb_images')
        .select('id, src, alt, title, description')
        .eq('category', 'lifestyle')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Error fetching lifestyle images:', error);
        throw error;
      }

      console.log('Fetched lifestyle images:', data?.length || 0);
      return data || [];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
