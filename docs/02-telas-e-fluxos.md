# Telas & Fluxos — PainelGPT

## 1) Home (Restaurantes) — PRINCIPAL
### Objetivo
Triagem rápida: saber **quais restaurantes têm pendência** e entrar no detalhe com 1 clique.

### Componentes
- Topbar: busca, export, limpar filtros, refresh
- KPIs clicáveis:
  - Total restaurantes
  - Sem iFood
  - Itens s/ foto (Geraldo)
  - Itens s/ descrição (Geraldo)
  - Itens s/ preço (Geraldo)
  - (opcional) Auto matches pendentes (conf < X)
- Lista de restaurantes (cards em lista), cada card mostra:
  - Avatar, nome, ID
  - Badge “tem iFood?”
  - Contadores: categorias, itens, s/ foto, s/ desc, s/ preço
  - Menu Links: Geraldo / Cardápio / iFood (se existir)
  - Ações: “Resumo” (modal) e “Abrir” (página)

### Interações
- Clique em KPI => aplica filtro e mostra restaurantes afetados
- Clique no card => abre modal resumo
- “Abrir” => `/restaurantes/:id`

---

## 2) Modal do restaurante (Resumo rápido)
### Objetivo
Resolver 80% da triagem sem sair da Home.

### Conteúdo
- Header: avatar + nome + ID + links
- KPIs do restaurante
- Top categorias com problemas (com contagens)
- Botões:
  - Ver Monitor Geraldo (abre na tab principal)
  - Itens com problema
  - iFood (Preencher)
  - Abrir página completa

---

## 3) Página do restaurante — `/restaurantes/:id`
### Tabs
1) Monitor Geraldo ⭐ (default)
2) Itens
3) Categorias
4) iFood (Preencher) — acessório
5) Matches — governança

---

### 3.1) Tab Monitor Geraldo ⭐
#### Objetivo
Achar e priorizar pendências no Geraldo:
- sem foto
- sem descrição
- sem preço (incluindo por variação/tamanho)

#### Layout
- Esquerda: lista de categorias com badge de problemas
- Direita: lista/tabela de itens da categoria selecionada

#### Funcionalidades
- Filtros: busca, sem foto, sem descrição, sem preço, categoria
- ItemCard:
  - Thumb (placeholder se faltar)
  - Nome + trecho da descrição
  - Preços (resumo) + expand “tamanhos/variações”
  - Badges: s/ foto, s/ desc, s/ preço
  - Ações: abrir imagem, copiar texto, copiar IDs

#### Endereço/Contexto
- Link “contextual” do item: mantém restaurante/categoria e destaca item na UI via querystring
  - Ex: `?highlight=<origem_id>`

---

### 3.2) Tab iFood (Preencher) — acessório
#### Objetivo
Usar iFood como base pra preencher lacunas do Geraldo.

#### Regras
- Mostrar apenas itens do Geraldo com lacunas
- Se houver match (auto/confirmado), exibir card iFood ao lado
- Botões:
  - Copiar imagem
  - Copiar descrição
  - Copiar preço
- Se não houver match: CTA “Revisar Matches”

---

### 3.3) Tab Matches
#### Objetivo
Confirmar/ajustar `item_matches` (auto aparece sempre).

#### Filtros
- status: auto / confirmado / rejeitado / sem_match
- confiança: range (>= X)
- match_por

#### Ações
- Confirmar (status=confirmado)
- Rejeitar (status=rejeitado)
- Sem match (status=sem_match, item_ifood_id = null)
- Trocar match (manual): escolher item iFood e salvar (match_por=manual)

---

## 4) Itens Global — `/itens`
### Objetivo
Auditoria geral do sistema (principalmente Geraldo).

### Funcionalidades
- Filtros: restaurante, categoria, flags (s/ foto, s/ desc, s/ preço), busca
- Tabela paginada
- Sempre exibir restaurante + categoria (sem perder contexto)
- Export CSV da visão atual
