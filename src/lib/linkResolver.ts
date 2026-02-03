export type RestaurantLinks = {
  geraldoMenu?: string | null;
  geraldoRestaurant?: string | null;
  vitrine?: string | null;
  ifood?: string | null;
};

export type ItemLinks = {
  image?: string | null;
  contextLink: string;
};

export type RestaurantLinkInput = {
  id: string | number;
  geraldo_link?: string | null;
  geraldo_restaurante_link?: string | null;
  vitrine_link?: string | null;
  ifood_link?: string | null;
};

export type ItemLinkInput = {
  origem_id?: string | null;
  imagem_url?: string | null;
};

export const getRestaurantLinks = (restaurante: RestaurantLinkInput): RestaurantLinks => ({
  geraldoMenu: restaurante.geraldo_link ?? null,
  geraldoRestaurant: restaurante.geraldo_restaurante_link ?? null,
  vitrine: restaurante.vitrine_link ?? null,
  ifood: restaurante.ifood_link ?? null,
});

export const getItemLinks = (item: ItemLinkInput, restauranteId: string | number): ItemLinks => ({
  image: item.imagem_url ?? null,
  contextLink: `/restaurantes/${restauranteId}?highlight=${item.origem_id ?? ""}`,
});
