
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface LifestyleImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  display_order: number;
  tags: string[] | null;
}

export const useLifestyleImages = () => {
  return useQuery({
    queryKey: ['lifestyle-images'],
    queryFn: async () => {
      console.log('Fetching lifestyle images from Supabase...');
      
      const { data, error } = await supabase
        .from('sb_images')
        .select('id, src, alt, title, description, display_order, tags')
        .eq('is_active', true)
        .eq('category', 'lifestyle')
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Error fetching lifestyle images:', error);
        throw error;
      }

      console.log('Successfully fetched lifestyle images:', data);
      return data as LifestyleImage[];
    },
  });
};
