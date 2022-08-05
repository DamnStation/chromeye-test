type People = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  company: {
    id: number;
    name: string;
    department: string;
    startDate: string;
  };
  avatar: {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    created_at: string;
    updated_at: string;
  };
};
export default People;
