# Queries & API — PainelGPT

## Objetivo
Padronizar como o front consulta o Supabase (REST/JS client), com foco em:
- performance
- paginação
- selects mínimos
- evitar subselect pesado na listagem

## Padrões obrigatórios
1) **Sempre paginar** (range/page+pageSize)
2) **Select explícito** (não usar `*` em listagens grandes)
3) **Trazer relação só quando necessário** (no detalhe, não na home)
4) **Cache por filtro e página** (React Query)

---

## Home (Restaurantes)
### Fonte recomendada
- View/RPC: `v_restaurant_stats`

### Campos mínimos sugeridos
- `id, nome, avatar_url, ifood_uuid, ifood_link, geraldo_link, vitrine_link`
- contadores:
  - `total_categorias, total_itens_geraldo`
  - `itens_sem_foto_geraldo, itens_sem_desc_geraldo, itens_sem_preco_geraldo`
  - `matches_confirmados, matches_auto, matches_sem_match`

### Filtros
- busca (`q`) em nome/id (ilike)
- `sem_ifood` (ifood_uuid/link vazio)
- `so_com_problema` (qualquer contador > 0)

---

## Restaurante — Monitor Geraldo
### Endpoints sugeridos (views)
- `v_restaurant_categories_health` (lista categorias + contadores)
- `v_restaurant_items_health` (itens com flags + dados)

### Paginação
- itens sempre paginado (page/pageSize)

### Filtros
- `categoria_id`
- `q` (nome/descricao/origem_id)
- flags (sem foto/desc/preço)

---

## Restaurante — iFood (Preencher)
### Fonte
- itens do Geraldo com lacunas (do monitor)
- join via `item_matches` (por restaurante_id, item_geraldo_id)

### Regras
- mostrar apenas itens Geraldo com lacunas
- se existir match (auto/confirmado): render card iFood com botões “copiar”

---

## Restaurante — Matches
### Fonte
- `item_matches` filtrado por `restaurante_id`

### Filtros
- status (auto/confirmado/rejeitado/sem_match)
- confianca >= X
- match_por

### Mutations
- confirmar: status=confirmado
- rejeitar: status=rejeitado
- sem_match: status=sem_match, item_ifood_id=null
- manual: item_ifood_id set, status=confirmado, match_por=manual, confianca=100

---

## Itens Global
### Fonte
- view `v_items_health` (recomendado) ou `itens` + computed flags via view

### Campos mínimos
- item: id, nome, descricao, imagem_url, origem, origem_id, updated_at
- categoria: id, nome
- restaurante: id, nome

> Em listagem global, prefira view “flat” para não fazer vários subselects.
