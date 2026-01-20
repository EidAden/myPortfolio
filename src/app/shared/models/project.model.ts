export type Project = {
  name: string;
  duration?: string;
  about: string;
  sections: { title: string; text: string }[];
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};
