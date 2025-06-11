
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
      
      try {
        // Direct query using PostgreSQL REST API since TypeScript types aren't updated yet
        const response = await fetch(`https://ttidnpncifqtetnhcdhq.supabase.co/rest/v1/sb_content_sub_pages?order=created_at.desc`, {
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0aWRucG5jaWZxdGV0bmhjZGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MDk1OTksImV4cCI6MjA2NDA4NTU5OX0.G4K878G5nU__YxCobhIhivH5JQimGTLOzFvm12BQ7_g',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0aWRucG5jaWZxdGV0bmhjZGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MDk1OTksImV4cCI6MjA2NDA4NTU5OX0.G4K878G5nU__YxCobhIhivH5JQimGTLOzFvm12BQ7_g`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Articles fetched successfully:', data);
        return data as Article[];
      } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
      }
    },
  });
};

export const useArticleBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: async () => {
      console.log('Fetching article by slug:', slug);
      
      try {
        const response = await fetch(`https://ttidnpncifqtetnhcdhq.supabase.co/rest/v1/sb_content_sub_pages?slug=eq.${slug}&limit=1`, {
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0aWRucG5jaWZxdGV0bmhjZGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MDk1OTksImV4cCI6MjA2NDA4NTU5OX0.G4K878G5nU__YxCobhIhivH5JQimGTLOzFvm12BQ7_g',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0aWRucG5jaWZxdGV0bmhjZGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MDk1OTksImV4cCI6MjA2NDA4NTU5OX0.G4K878G5nU__YxCobhIhivH5JQimGTLOzFvm12BQ7_g`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Article fetched successfully:', data[0] || null);
        return (data[0] as Article) || null;
      } catch (error) {
        console.error('Error fetching article:', error);
        throw error;
      }
    },
    enabled: !!slug,
  });
};
