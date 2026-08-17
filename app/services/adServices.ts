interface CreateAdData {
  title: string;
  description: string;
  category: string;
  postalCode: string;
  city: string;
  contactMethod: string;
}

export const adService = {
  async createAd(data: CreateAdData) {
    return await $fetch('/api/ads', {
      method: 'POST',
      body: {
        title: data.title,
        description: data.description,
        category_id: data.category,
        postal_code: data.postalCode,
        location: data.city,
        price: null,
        contact_method: data.contactMethod,
      },
    });
  },
};
