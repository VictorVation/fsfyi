export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      airports: {
        Row: {
          faa: string | null
          icao: string | null
          id: number
          name: string | null
        }
        Insert: {
          faa?: string | null
          icao?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          faa?: string | null
          icao?: string | null
          id?: number
          name?: string | null
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
      }
      reviews: {
        Row: {
          created_at: string | null
          id: number
          rating: number | null
          school: number | null
          updated_at: string | null
          user: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          rating?: number | null
          school?: number | null
          updated_at?: string | null
          user?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          rating?: number | null
          school?: number | null
          updated_at?: string | null
          user?: string | null
        }
      }
      schools: {
        Row: {
          address: string | null
          airport: number | null
          id: number
          name: string | null
        }
        Insert: {
          address?: string | null
          airport?: number | null
          id?: number
          name?: string | null
        }
        Update: {
          address?: string | null
          airport?: number | null
          id?: number
          name?: string | null
        }
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
