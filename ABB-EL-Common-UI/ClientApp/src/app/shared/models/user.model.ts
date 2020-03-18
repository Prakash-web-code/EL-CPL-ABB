import { IUserRole } from './userRole.model';

export interface IUser {
    id: number;
    email: string;
    displayName: string;
    name: string;
    surname: string;
    preferredLanguage: string;
    activeTranslation: boolean;
  isAdmin: boolean;
  isInternal: boolean;
  roles: IUserRole[];
}

