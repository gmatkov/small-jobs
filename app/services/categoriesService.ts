type Category = {
  id: string;
  name: string;
  slug: string;
};

type CategoriesResponse = {
  categories: Category[];
};

export const categoriesService = {
  async getCategories(): Promise<CategoriesResponse> {
    return await $fetch('/api/categories', {
      method: 'GET',
    });
  },
};
