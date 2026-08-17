export type Database = {
  public: {
    Tables: {
      ads: {
        Row: {
          id: string;
          user_id: string;
          category_id: string;
          title: string;
          description: string;
          postal_code: string;
          location: string;
          price: number | null;
          status: 'draft' | 'published' | 'closed';
          contact_method: 'message' | 'phone' | 'both';
          created_at: string;
          updated_at: string;
        };

        Insert: {
          id?: string;
          user_id: string;
          category_id: string;
          title: string;
          description: string;
          postal_code: string;
          location: string;
          price?: number | null;
          status?: 'draft' | 'published' | 'closed';
          contact_method?: 'message' | 'phone' | 'both';
          created_at?: string;
          updated_at?: string;
        };

        Update: {
          id?: string;
          user_id?: string;
          category_id?: string;
          title?: string;
          description?: string;
          postal_code?: string;
          location?: string;
          price?: number | null;
          status?: 'draft' | 'published' | 'closed';
          contact_method?: 'message' | 'phone' | 'both';
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};
