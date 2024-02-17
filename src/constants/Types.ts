type Photos = {
  small: string;
  medium: string;
  large: string;
  full: string;
};

export interface OrganizationData {
    name: string;
    photos: {
      small: string;
      medium: string;
      large: string;
      full: string;
    }[];
    age: string;
    id: number;
    description?: string;
  }

  export interface PetDetail {
    name: string;
    photos: {
      small: string;
      medium: string;
      large: string;
      full: string;
    }[];
    age: string;
    id: number;
    gender: string;
    description: string;
    contact: {
      email: string;
      phone: number;
      address: {
        address: string;
        city: string;
        country: string;
        postcode: number;
        status: string;
      };
    };
    status: string;
    species: string;
    size: string;
    type: string;
    colors: {
      primary: string | null;
      secondary: string | null;
      tertiary: string | null;
    };
    coat: string;
    breeds: {
      mixed: boolean;
      primary: string;
      secondary: string;
      unknown: boolean;
    };
    organization_id: string;
    url: string;
  }

  export interface response {
    name: string;
    photos: Photos[] | [];
    age: string;
    id: number;
  }

  
  export interface resp {
    name: string;
    photos: Photos[] | [];
    age: string;
    id: number;
    description?:string;
  }
  