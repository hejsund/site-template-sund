export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          address: string
          airtable_success: boolean | null
          capi_error: string | null
          capi_success: boolean | null
          created_at: string | null
          email: string
          fbc: string | null
          fbp: string | null
          house_size: string
          id: string
          installation_time: string
          ip_address: unknown | null
          is_homeowner: string
          name: string
          notes: string | null
          phone: string
          project_plan: string
          source: string | null
          stage: string | null
          updated_at: string | null
          user_agent: string | null
        }
        Insert: {
          address: string
          airtable_success?: boolean | null
          capi_error?: string | null
          capi_success?: boolean | null
          created_at?: string | null
          email: string
          fbc?: string | null
          fbp?: string | null
          house_size: string
          id?: string
          installation_time: string
          ip_address?: unknown | null
          is_homeowner: string
          name: string
          notes?: string | null
          phone: string
          project_plan: string
          source?: string | null
          stage?: string | null
          updated_at?: string | null
          user_agent?: string | null
        }
        Update: {
          address?: string
          airtable_success?: boolean | null
          capi_error?: string | null
          capi_success?: boolean | null
          created_at?: string | null
          email?: string
          fbc?: string | null
          fbp?: string | null
          house_size?: string
          id?: string
          installation_time?: string
          ip_address?: unknown | null
          is_homeowner?: string
          name?: string
          notes?: string | null
          phone?: string
          project_plan?: string
          source?: string | null
          stage?: string | null
          updated_at?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      sb_content_sub_pages: {
        Row: {
          category: string
          color: string
          content: string | null
          created_at: string
          cta_primary_button_text: string | null
          cta_secondary_button_text: string | null
          cta_title: string | null
          custom_sections: Json | null
          email_signup_button_text: string | null
          email_signup_description: string | null
          email_signup_title: string | null
          excerpt: string | null
          has_custom_layout: boolean | null
          hero_image_alt: string | null
          icon: string
          id: string
          image_url: string
          lead_text: string | null
          read_time: string
          secondary_color: string | null
          slug: string
          theme_color: string | null
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          color: string
          content?: string | null
          created_at?: string
          cta_primary_button_text?: string | null
          cta_secondary_button_text?: string | null
          cta_title?: string | null
          custom_sections?: Json | null
          email_signup_button_text?: string | null
          email_signup_description?: string | null
          email_signup_title?: string | null
          excerpt?: string | null
          has_custom_layout?: boolean | null
          hero_image_alt?: string | null
          icon: string
          id?: string
          image_url: string
          lead_text?: string | null
          read_time: string
          secondary_color?: string | null
          slug: string
          theme_color?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          color?: string
          content?: string | null
          created_at?: string
          cta_primary_button_text?: string | null
          cta_secondary_button_text?: string | null
          cta_title?: string | null
          custom_sections?: Json | null
          email_signup_button_text?: string | null
          email_signup_description?: string | null
          email_signup_title?: string | null
          excerpt?: string | null
          has_custom_layout?: boolean | null
          hero_image_alt?: string | null
          icon?: string
          id?: string
          image_url?: string
          lead_text?: string | null
          read_time?: string
          secondary_color?: string | null
          slug?: string
          theme_color?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      sb_home_page_leads: {
        Row: {
          created_at: string
          email: string
          id: string
          ip_address: unknown | null
          source: string | null
          synced_at: string | null
          updated_at: string
          user_agent: string | null
          year: number
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          ip_address?: unknown | null
          source?: string | null
          synced_at?: string | null
          updated_at?: string
          user_agent?: string | null
          year?: number
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          ip_address?: unknown | null
          source?: string | null
          synced_at?: string | null
          updated_at?: string
          user_agent?: string | null
          year?: number
        }
        Relationships: []
      }
      sb_images: {
        Row: {
          alt: string
          category: string | null
          created_at: string
          description: string
          display_order: number | null
          id: string
          is_active: boolean | null
          src: string
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          alt: string
          category?: string | null
          created_at?: string
          description: string
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          src: string
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          alt?: string
          category?: string | null
          created_at?: string
          description?: string
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          src?: string
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      sb_leads_home_page_new: {
        Row: {
          created_at: string
          email: string
          id: string
          ip_address: unknown | null
          source: string | null
          synced_at: string | null
          updated_at: string
          user_agent: string | null
          year: number
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          ip_address?: unknown | null
          source?: string | null
          synced_at?: string | null
          updated_at?: string
          user_agent?: string | null
          year?: number
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          ip_address?: unknown | null
          source?: string | null
          synced_at?: string | null
          updated_at?: string
          user_agent?: string | null
          year?: number
        }
        Relationships: []
      }
      sb_leads_quiz_new: {
        Row: {
          age: string | null
          created_at: string
          email: string
          gender: string | null
          id: string
          ip_address: unknown | null
          quiz_answers: Json | null
          quiz_score: number | null
          recommendation_type: string | null
          source: string | null
          synced_at: string | null
          updated_at: string
          user_agent: string | null
          year: number
        }
        Insert: {
          age?: string | null
          created_at?: string
          email: string
          gender?: string | null
          id?: string
          ip_address?: unknown | null
          quiz_answers?: Json | null
          quiz_score?: number | null
          recommendation_type?: string | null
          source?: string | null
          synced_at?: string | null
          updated_at?: string
          user_agent?: string | null
          year?: number
        }
        Update: {
          age?: string | null
          created_at?: string
          email?: string
          gender?: string | null
          id?: string
          ip_address?: unknown | null
          quiz_answers?: Json | null
          quiz_score?: number | null
          recommendation_type?: string | null
          source?: string | null
          synced_at?: string | null
          updated_at?: string
          user_agent?: string | null
          year?: number
        }
        Relationships: []
      }
      sb_meta_event_log: {
        Row: {
          email_hash: string | null
          event_data: Json | null
          event_type: string
          id: string
          status: string | null
          timestamp: string | null
        }
        Insert: {
          email_hash?: string | null
          event_data?: Json | null
          event_type: string
          id?: string
          status?: string | null
          timestamp?: string | null
        }
        Update: {
          email_hash?: string | null
          event_data?: Json | null
          event_type?: string
          id?: string
          status?: string | null
          timestamp?: string | null
        }
        Relationships: []
      }
      sb_quiz_leads: {
        Row: {
          age: string | null
          created_at: string
          email: string
          gender: string | null
          id: string
          ip_address: unknown | null
          quiz_answers: Json | null
          quiz_score: number | null
          recommendation_type: string | null
          source: string | null
          synced_at: string | null
          updated_at: string
          user_agent: string | null
          year: number
        }
        Insert: {
          age?: string | null
          created_at?: string
          email: string
          gender?: string | null
          id?: string
          ip_address?: unknown | null
          quiz_answers?: Json | null
          quiz_score?: number | null
          recommendation_type?: string | null
          source?: string | null
          synced_at?: string | null
          updated_at?: string
          user_agent?: string | null
          year?: number
        }
        Update: {
          age?: string | null
          created_at?: string
          email?: string
          gender?: string | null
          id?: string
          ip_address?: unknown | null
          quiz_answers?: Json | null
          quiz_score?: number | null
          recommendation_type?: string | null
          source?: string | null
          synced_at?: string | null
          updated_at?: string
          user_agent?: string | null
          year?: number
        }
        Relationships: []
      }
      "tona-articles": {
        Row: {
          author: string | null
          category: string
          content: string
          created_at: string | null
          excerpt: string
          featured: boolean | null
          featured_image_url: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          published: boolean | null
          read_time: string
          slug: string
          title: string
          updated_at: string | null
        }
        Insert: {
          author?: string | null
          category: string
          content: string
          created_at?: string | null
          excerpt: string
          featured?: boolean | null
          featured_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published?: boolean | null
          read_time: string
          slug: string
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string | null
          category?: string
          content?: string
          created_at?: string | null
          excerpt?: string
          featured?: boolean | null
          featured_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published?: boolean | null
          read_time?: string
          slug?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      "tona-contact-submissions": {
        Row: {
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
          responded: boolean | null
          source_page: string | null
          subject: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
          responded?: boolean | null
          source_page?: string | null
          subject?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          responded?: boolean | null
          source_page?: string | null
          subject?: string | null
        }
        Relationships: []
      }
      "tona-newsletter-subscribers": {
        Row: {
          active: boolean | null
          email: string
          id: string
          name: string | null
          preferences: Json | null
          source: string | null
          subscribed_at: string | null
        }
        Insert: {
          active?: boolean | null
          email: string
          id?: string
          name?: string | null
          preferences?: Json | null
          source?: string | null
          subscribed_at?: string | null
        }
        Update: {
          active?: boolean | null
          email?: string
          id?: string
          name?: string | null
          preferences?: Json | null
          source?: string | null
          subscribed_at?: string | null
        }
        Relationships: []
      }
      "tona-quiz-responses": {
        Row: {
          answers: Json
          created_at: string | null
          email: string | null
          follow_up_consent: boolean | null
          id: string
          result_profile: string
          session_id: string | null
        }
        Insert: {
          answers: Json
          created_at?: string | null
          email?: string | null
          follow_up_consent?: boolean | null
          id?: string
          result_profile: string
          session_id?: string | null
        }
        Update: {
          answers?: Json
          created_at?: string | null
          email?: string | null
          follow_up_consent?: boolean | null
          id?: string
          result_profile?: string
          session_id?: string | null
        }
        Relationships: []
      }
      "tona-testimonials": {
        Row: {
          approved: boolean | null
          author_context: string | null
          author_name: string
          created_at: string | null
          featured: boolean | null
          id: string
          program: string | null
          quote: string
        }
        Insert: {
          approved?: boolean | null
          author_context?: string | null
          author_name: string
          created_at?: string | null
          featured?: boolean | null
          id?: string
          program?: string | null
          quote: string
        }
        Update: {
          approved?: boolean | null
          author_context?: string | null
          author_name?: string
          created_at?: string | null
          featured?: boolean | null
          id?: string
          program?: string | null
          quote?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      sync_airtable_nightly: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
