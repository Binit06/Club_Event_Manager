export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clubs: {
        Row: {
          club_description: string | null
          club_id: string
          Club_Image_Path: string | null
          club_name: string
          instagram_url: string | null
          LinkedIn_url: string | null
        }
        Insert: {
          club_description?: string | null
          club_id?: string
          Club_Image_Path?: string | null
          club_name: string
          instagram_url?: string | null
          LinkedIn_url?: string | null
        }
        Update: {
          club_description?: string | null
          club_id?: string
          Club_Image_Path?: string | null
          club_name?: string
          instagram_url?: string | null
          LinkedIn_url?: string | null
        }
        Relationships: []
      }
      events: {
        Row: {
          club_id: string | null
          created_at: string | null
          Event_End_Data: string | null
          event_id: string
          event_image_path: string | null
          Event_Name: string
          Event_Start_Data: string | null
          Number_Of_Registration: number | null
          prize_pool: number | null
          Registration_URL: string | null
        }
        Insert: {
          club_id?: string | null
          created_at?: string | null
          Event_End_Data?: string | null
          event_id?: string
          event_image_path?: string | null
          Event_Name: string
          Event_Start_Data?: string | null
          Number_Of_Registration?: number | null
          prize_pool?: number | null
          Registration_URL?: string | null
        }
        Update: {
          club_id?: string | null
          created_at?: string | null
          Event_End_Data?: string | null
          event_id?: string
          event_image_path?: string | null
          Event_Name?: string
          Event_Start_Data?: string | null
          Number_Of_Registration?: number | null
          prize_pool?: number | null
          Registration_URL?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["club_id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          full_name: string
          id: string
          club_id_access: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name: string
          id?: string
          club_id_access: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string
          id?: string
          club_id_access: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
