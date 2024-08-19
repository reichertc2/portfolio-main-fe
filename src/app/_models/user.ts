export interface IUserData {
  profile: IProfile;
  aboutMe: IAboutMe;
  jobs: IJobInfo[];
  projects: IProjectInfo[];
  subprojects: IProjectInfo[];
  contactInfo: IContactInfo;
}

export interface IProfile {
  name: string;
  headline: string;
  profileURL: string;
  logo: IImageData;
}

export interface IAboutMe {
  elevator: string[];
  languages: string[];
  tools: string[];
  profileImage: any;
}

export interface IJobInfo {
  id: string;
  CompanyName: string;
  Position: string;
  CompanyURL: string;
  Tenure: string;
  BulletPoints: string[];
}

export interface IProjectInfo {
  id: string;
  title: string;
  description: string;
  toolList: string[];
  urlList: IUrl[];
  images: IImageData[];
}

export interface IContactInfo {
  email: string;
  contactBrief: string;
  socials: ISocialInfo[];
}

export interface ISocialInfo {
  id: string;
  url: string;
  icon?: any;
}

export interface IUrl {
  name: string;
  url: string;
  icon?: any;
}

export interface IImageData {
  image: any;
  alt: string;
}
