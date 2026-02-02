# Modelo de Dados — PainelGPT

> Nota: este documento descreve os **conceitos** e as **regras de uso** no dashboard.
> Os nomes exatos de colunas/tabelas devem refletir o que está no Supabase.

## Entidades principais

### 1) Restaurantes (`restaurantes`)
**Responsabilidade:** âncora de navegação e links rápidos.
Campos esperados:
- `id`
- `nome`
- `geraldo_id` (se existir)
- `ifood_uuid` (se existir)
- Links:
  - `geraldo_link` (menu)
  - `vitrine_link`
  - (recomendado) `geraldo_restaurante_link`
  - (recomendado) `ifood_link` (URL completa)

**Regras de UI:**
- Todo card de restaurante deve exibir:
  - avatar/foto (se houver)
  - nome + id
  - badge “Tem iFood?” (sim/não)
  - menu de links (geraldo/cardápio/vitrine/ifood)

---

### 2) Categorias (`categorias`)
**Responsabilidade:** agrupar itens e alimentar o monitor por categoria.
Campos esperados:
- `id`
- `restaurante_id` (FK)
- `nome`
- `origem` (ex: 'geraldo' | 'ifood')
- `origem_id` (id do item na origem, quando existir)

**Regras de UI:**
- Sempre mostrar contadores por categoria:
  - total itens
  - itens sem foto / sem desc / sem preço

---

### 3) Itens (`itens`)
**Responsabilidade:** unidade auditável (foto/descrição/preço).
Campos esperados:
- `id`
- `categoria_id` (FK)
- `origem` (ex: 'geraldo' | 'ifood')
- `origem_id` (id na origem)
- `nome`
- `descricao` (Geraldo) / `details` (iFood) — pode estar no mesmo campo `descricao`
- `imagem_url`

**Regras de UI:**
- Toda linha de item deve mostrar **contexto**:
  - Restaurante + Categoria + Item
- Item sempre mostra thumbnail:
  - se `imagem_url` ausente => placeholder “Sem imagem”
- Botões rápidos:
  - abrir imagem
  - copiar nome / descrição / preço
  - copiar ids

---

### 4) Preços (`precos`) e/ou tamanhos (`tamanhos`)
**Responsabilidade:** suportar o caso “tamanho/variação vira subitem”.

Você pode ter:
- `precos`: (item_id, valor, tamanho_nome)
- `tamanhos`: (categoria_id, nome, ordem)

**Regra de auditoria (sem preço):**
- Se **nenhuma variação** tem valor válido => item sem preço
- Se **alguma variação** está `null`/ausente e deveria existir => marcar como pendência por variação

**Como apresentar na UI:**
- Na lista principal, mostrar:
  - “Faixa de preço” (min–max) ou “a partir de X”
  - Badge “Preço faltando em variações” quando aplicável
- Ao expandir:
  - mostrar sublinhas por tamanho/variação

---

### 5) Matches (`item_matches`)
**Responsabilidade:** governar comparação/sugestões Geraldo ↔ iFood (acessório).
Campos:
- `id`
- `restaurante_id`
- `item_geraldo_id`
- `item_ifood_id` (nullable)
- `confianca` (0–100)
- `status`: 'auto' | 'confirmado' | 'rejeitado' | 'sem_match'
- `match_por`: 'nome' | 'nome+cat' | 'nome+cat+preco' | 'manual'
- `updated_at`

**Regras de UI:**
- Auto aparece sempre (com badge de %)
- Confirmado aparece sempre (sem chamar atenção)
- Rejeitado/sem_match aparecem como histórico/decisão
- Ações por linha:
  - Confirmar / Rejeitar / Sem match / Trocar (manual)

---

## Regras de “flags” (pendências)
### Geraldo (foco principal)
- `sem_foto`: `imagem_url` vazio/nulo
- `sem_desc`: `descricao` vazia
- `sem_preco`: sem preço válido em nenhuma variação, ou variações com preço faltando

### iFood (acessório)
- `sem_foto`: `image_url` nulo
- `sem_desc`: `details` vazio
- `sem_preco`: `price` nulo/0

> O dashboard deve permitir filtrar por flags em qualquer visão.
