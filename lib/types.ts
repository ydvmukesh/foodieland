export interface BaseButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonAsButtonProps extends BaseButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

export interface ButtonAsLinkProps extends BaseButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;
export interface Recipe {
  id?: number;
  title?: string | undefined;
  time?: string;
  category?: string;
  image?: string;
  status?: boolean;
}

export type RecipeWithStatus = Recipe & {
  status: boolean;
} 

export interface RecipeCardProps {
    id: number;
    title: string;
    image: string;
    time: string;
    category: string;
    status?: boolean;
    transparent?: boolean;
    heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    onFavoriteToggle?: (id: number) => void;
    isFavorite?: boolean;
    className?:string
}
  
export interface Footer {
    label: string;
    links?: {
        text: string;
        url: string;
    }[];
    copyright?: string;
    socialLinks?: {
        platform: string;
        url: string;
        icon?: string;
    }[];
}

export interface InstagramPost {
  id: number;
  images?: string[];
  image?: string;
  likes: number;
  comments: number;
  caption: string;
  date: string;
  author: {
    name: string;
    location: string;
    avatar: string;
    verified: boolean;
  };
}