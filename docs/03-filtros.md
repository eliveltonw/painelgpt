# Filtros — PainelGPT

## Objetivo
Evitar criar filtros “1 por 1” em cada tela. Criar um **schema único** e renderizar automaticamente.

## Tipos de filtro usados
- `text` (busca com debounce)
- `select` (dropdown)
- `multiSelect` (checkbox + busca)
- `boolean` (toggle)
- `triState` (todos/sim/não)
- `numberRange` (min/max)
- `dateRange` (from/to)

## Convenções de nomenclatura
- `q`: busca global
- `restaurante_id` / `restaurante_ids`
- `categoria_id` / `categoria_ids`
- flags:
  - `sem_foto`, `sem_desc`, `sem_preco` (triState)
- iFood:
  - `sem_ifood` (boolean)
- match:
  - `match_status` (multiSelect)
  - `confianca_min` (number)
  - `match_por` (multiSelect)

## Exemplo de schema (Home / Restaurantes)
```ts
export const restaurantFilters = [
  { key: "q", label: "Busca", type: "text", debounceMs: 350, placeholder: "Nome ou ID" },
  { key: "sem_ifood", label: "Sem iFood", type: "boolean" },
  { key: "so_com_problema", label: "Só com problema", type: "boolean" },
  { key: "order", label: "Ordenar", type: "select",
    options: [
      { label: "Mais problemas", value: "problems_desc" },
      { label: "Mais itens", value: "items_desc" },
      { label: "Nome", value: "name_asc" },
      { label: "Atualização", value: "updated_desc" },
    ]
  },
];
```

## Exemplo de schema (Itens Global / Monitor Geraldo)
```ts
export const itemFilters = [
  { key: "q", label: "Busca", type: "text", debounceMs: 350, placeholder: "Nome/Descrição/Origem ID" },
  { key: "restaurante_ids", label: "Restaurantes", type: "multiSelect",
    optionsFrom: { table: "restaurantes", value: "id", label: "nome" }
  },
  { key: "categoria_ids", label: "Categorias", type: "multiSelect",
    dependsOn: ["restaurante_ids"],
    optionsFrom: { table: "categorias", value: "id", label: "nome" }
  },
  { key: "sem_foto", label: "Sem foto", type: "triState" },
  { key: "sem_desc", label: "Sem descrição", type: "triState" },
  { key: "sem_preco", label: "Sem preço", type: "triState" },
];
```

## Persistência no URL
- Toda página deve conseguir:
  - `parseFiltersFromUrl()`
  - `writeFiltersToUrl()`
Assim você compartilha links com filtros ativos.

## Chips de filtros ativos
- Mostrar sempre no topo:
  - exemplo: `Sem foto: Sim`, `Restaurante: X`, `Busca: shawarma`
- Botão: “Limpar tudo”
